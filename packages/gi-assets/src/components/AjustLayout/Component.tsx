import { CaretRightOutlined, DeleteOutlined, EditOutlined, LockOutlined, SubnodeOutlined } from '@ant-design/icons';
import { GraphinContext } from '@antv/graphin';
import { CircularLayout, DagreLayout, GridLayout } from '@antv/layout';
import { Button, Collapse, Select } from 'antd';
import React from 'react';
import { useImmer } from 'use-immer';
import WrapContainer from '../WrapContainer';
import './index.less';

const { Panel } = Collapse;

export interface IGremlinQueryProps {
  visible: boolean;
  onClose: () => void;
  initValue?: string;
  theme?: 'dark' | 'light';
  height?: number;
  showGutter?: boolean;
  serviceId: string;
  style?: React.CSSProperties;
}

const LAYOUTS = [
  {
    value: 'grid',
    label: '网格布局',
  },
  {
    value: 'circular',
    label: '同心圆布局',
  },
  {
    value: 'dagre',
    label: '层次布局',
  },
];

/** 数组去重 */
export const uniqueElementsBy = (arr: any[], fn: (arg0: any, arg1: any) => any) =>
  arr.reduce((acc, v) => {
    if (!acc.some((x: any) => fn(v, x))) acc.push(v);
    return acc;
  }, []);

const handleExpand = (data, responseData) => {
  const { nodes, edges } = responseData;
  return {
    nodes: uniqueElementsBy([...data.nodes, ...nodes], (a, b) => {
      return a.id === b.id;
    }),
    edges: uniqueElementsBy([...data.edges, ...edges], (a, b) => {
      return a.source === b.source && a.target === b.target;
    }),
  };
};

const cropGraphByNodes = (graphData, targetNodes) => {
  const { edges, nodes } = graphData;
  const ids = targetNodes.map(node => node.id);
  const newEdges = edges.filter(edge => {
    const { source, target } = edge;
    if (ids.indexOf(source) !== -1 && ids.indexOf(target) !== -1) {
      return true;
    }
    return false;
  });
  const newNodes = nodes.filter(node => {
    return ids.indexOf(node.id) !== -1;
  });
  return {
    nodes: newNodes,
    edges: newEdges,
  };
};

const LayoutMap = {
  grid: GridLayout,
  circular: CircularLayout,
  dagre: DagreLayout,
};
const getLayoutsByOptions = (layouts, graph) => {
  const count = layouts.length;
  const source = graph.save();

  const width = graph.get('width') / count;
  const height = graph.get('height') / count;

  const datas = layouts.map((layout, index) => {
    const { type, options, nodes } = layout;
    const layoutOptions = {
      width,
      height,
      center: [width / 2 + index * width, 0, height / 2],
      ...options,
    };

    const instance = new LayoutMap[type](layoutOptions);
    const newGraphData = cropGraphByNodes(source, nodes);
    const newModel = instance.layout(newGraphData);
    return newModel;
  });
  const newDatas = datas.reduce(
    (acc, curr) => {
      return {
        nodes: [...acc.nodes, ...curr.nodes],
        edges: [...acc.edges, ...curr.edges],
      };
    },
    {
      nodes: [],
      edges: [],
    },
  );
  const filteredDatas = {
    nodes: uniqueElementsBy(newDatas.nodes, (a, b) => {
      return a.id === b.id;
    }),
    edges: uniqueElementsBy(newDatas.edges, (a, b) => {
      return a.source === b.source && a.target === b.target;
    }),
  };
  console.log('datas', datas, filteredDatas);

  // graph.refreshPositions();
  graph.positionsAnimate();
  return filteredDatas;
};
const AjustLayout: React.FC<IGremlinQueryProps> = ({ visible, onClose, serviceId, style }) => {
  const [state, updateState] = useImmer({
    selected: [],
    layouts: [
      {
        type: 'grid',
        nodes: [{ id: 'node-1' }, { id: 'node-2' }],
        active: true,
        locked: true,
        options: {
          type: 'grid',
          center: [0, 0],
          rows: 4,
          cols: 4,
        },
      },
    ],
  });

  const { services, dispatch, GiState, setGiState } = GraphinContext as any;
  const { graph } = React.useContext(GraphinContext);

  React.useEffect(() => {
    const onNodeSelectChange = e => {
      const nodes = e.selectedItems.nodes.map(node => {
        return node.get('model');
      });

      updateState(draft => {
        const option = draft.layouts.find(option => !option.locked);
        if (option) {
          option.nodes = nodes.map(node => {
            return { id: node.id };
          });
        }
      });
    };
    graph.on('nodeselectchange', onNodeSelectChange);
    return () => {
      graph.off('nodeselectchange', onNodeSelectChange);
    };
  }, [graph, updateState]);

  const handleClick = async () => {
    console.log('graph', graph);
    getLayoutsByOptions(state.layouts, graph);

    // setGiState(preState => {
    //   return {
    //     ...preState,
    //     data,
    //     layout: {
    //       type: 'preset',
    //     },
    //   };
    // });
  };
  const { layouts, selected } = state;
  console.log('state', state);
  const handlePlus = () => {
    updateState(draft => {
      draft.layouts.push({
        type: 'circular',
        nodes: [],
        active: true,
        locked: false,
        //@ts-ignore
        options: {
          type: 'circular',
        },
      });
    });
  };
  if (visible) {
    return (
      <div
        style={{
          position: 'absolute',
          background: '#fff',
          width: '400px',
          ...style,
        }}
      >
        <h3>布局调整面板</h3>
        <Collapse
          bordered={false}
          // defaultActiveKey={['1']}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          className="site-collapse-custom-collapse"
        >
          {layouts.map((item, index) => {
            return (
              <Panel header={`布局${index}`} key={index} className="site-collapse-custom-panel">
                <div>
                  <div>
                    选择节点：
                    <Select
                      mode="multiple"
                      allowClear
                      style={{ width: '320px' }}
                      placeholder="请选择节点"
                      // defaultValue={[]}
                      value={item.nodes.map(node => node.id)}
                      disabled={item.locked}
                      // onChange={handleChange}
                    >
                      {item.nodes.map(node => {
                        return (
                          <Select.Option key={node.id} value={node.id}>
                            {node.id}
                          </Select.Option>
                        );
                      })}
                    </Select>
                    <Button
                      type="text"
                      onClick={() => {
                        updateState(draft => {
                          draft.layouts[index].locked = !item.locked;
                        });
                      }}
                    >
                      {item.locked ? <LockOutlined /> : <EditOutlined />}
                    </Button>
                    <Button
                      type="text"
                      onClick={() => {
                        updateState(draft => {
                          draft.layouts[index].locked = !item.locked;
                        });
                      }}
                    >
                      <DeleteOutlined />
                    </Button>
                  </div>
                  <div>
                    选择布局
                    <Select
                      allowClear
                      style={{ width: '320px' }}
                      placeholder="请选择布局"
                      defaultValue={item.type}
                      // onChange={handleChange}
                    >
                      {LAYOUTS.map(layout => {
                        return (
                          <Select.Option key={layout.value} value={layout.value}>
                            {layout.label}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </div>
                </div>
              </Panel>
            );
          })}
        </Collapse>

        <Button type="dashed" style={{ width: '100%' }} onClick={handlePlus}>
          添加布局
        </Button>
        <Button type="primary" onClick={handleClick}>
          开始调整
        </Button>
      </div>
    );
  }
  return null;
};

export default WrapContainer(AjustLayout, {
  icon: <SubnodeOutlined />,
  title: '布局调整面板',
  showText: true,
});
