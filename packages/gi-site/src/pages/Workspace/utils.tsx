/**
 *
 * @param
 * @returns ( ) => uuid: string
 */
export const getUid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const getMockData = () => {
  return {
    nodes: [],
    edges: [],
  };
};

/**
 *
 * 时间戳转时间
 *
 */

export const time = time => {
  if (!time) {
    return 'Invalid Date';
  }
  const date = new Date(new Date(time).valueOf() + 8 * 3600 * 1000);

  return date.toJSON().substr(0, 16).replace('T', ' ').replace(/-/g, '.');
};

/**
 *
 * 默认config
 *
 */
const baseNodeConfig = {
  id: 'GraphinNode',
  props: {},
};
const baseNodesConfig = [
  {
    id: 'SimpleNode',
    props: {},
  },
];
const baseEdgeConfig = {
  id: 'GraphinEdge',
  props: {},
};
const baseEdgesConfig = [
  {
    id: 'SimpleEdge',
    props: {},
  },
];
const baseComponentsConfig = [
  {
    id: 'NodeLegend',
    props: {
      sortKey: 'type',
      textColor: '#ddd',
      placement: 'LB',
      offset: [100, 20],
    },
    enable: true,
  },
];
const baseLayoutConfig = {
  id: 'GraphinForce',
  props: {
    type: 'graphin-force',
    preset: {
      type: 'concentric',
    },
  },
};

export const baseConfig = {
  // node: baseNodeConfig,
  // edge: baseEdgeConfig,
  nodes: baseNodesConfig,
  edges: baseEdgesConfig,
  layout: baseLayoutConfig,
  components: baseComponentsConfig,
};

export const activeAssetsKeys = {
  elements: [baseNodesConfig.map(n => n.id), baseEdgesConfig.map(e => e.id)],
  components: [...baseComponentsConfig.map(c => c.id)],
  layouts: ['GraphinForce', 'Concentric', 'Dagre'],
};

export const serviceConfig = [
  {
    id: 'GI_SERVICE_INTIAL_GRAPH',
    content: `export default (localData)=>{
      return new Promise((resolve)=>{
        resolve(localData)
      })
    }`,
    mode: 'MOCK',
    name: '初始化接口',
  },
];
