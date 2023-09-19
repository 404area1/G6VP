/* eslint-disable no-undef */
import Graphin, { Components, Utils } from '@antv/graphin';
import { Card, Col, Row } from 'antd';
import React from 'react';

import { ExpandAltOutlined } from '@ant-design/icons';
const { ContextMenu } = Components;
// 引入Graphin CSS

const App = () => {
  const [state, setState] = React.useState({
    selected: [],
    data: Utils.mock(5).circle().graphin(),
  });

  const handleChange = (menuItem, menuData) => {
    console.log(menuItem, menuData);
    const count = 4;
    const expandData = Utils.mock(count).expand([menuData]).graphin();

    setState({
      ...state,
      data: {
        // 还需要对Node和Edge去重，这里暂不考虑
        nodes: [...state.data.nodes, ...expandData.nodes],
        edges: [...state.data.edges, ...expandData.edges],
      },
    });
  };
  const { data } = state;
  return (
    <div className="App">
      <Row gutter={16}>
        <Col span={12}>
          <Card title="同心圆布局：Concentric">
            <Graphin
              data={data}
              layout={{
                type: 'concentric',
              }}
            >
              <ContextMenu
                bindType="node"
                style={{ width: 100 }}
                bindType="node"
                options={[
                  {
                    key: 'expand',
                    icon: <ExpandAltOutlined />,
                    name: '一度扩散',
                  },
                ]}
                onChange={handleChange}
              ></ContextMenu>
            </Graphin>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="有向分层布局：Dagre">
            <Graphin
              data={data}
              layout={{
                type: 'dagre',
              }}
            >
              <ContextMenu
                bindType="node"
                style={{ width: 100 }}
                bindType="node"
                options={[
                  {
                    key: 'expand',
                    icon: <ExpandAltOutlined />,
                    name: '一度扩散',
                  },
                ]}
                onChange={handleChange}
              ></ContextMenu>
            </Graphin>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default App;
