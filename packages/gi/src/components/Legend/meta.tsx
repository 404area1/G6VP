const getMeta = context => {
  const { data, keys = ['id', 'type'] } = context;
  const options = keys.map(c => {
    return {
      value: c,
      label: c,
    };
  });
  return {
    type: 'group',
    name: '节点图例',
    fold: false,
    children: {
      sortkey: {
        name: '映射字段',
        type: 'select',
        default: 'type',
        options,
      },
    },
  };
};

export default getMeta;
