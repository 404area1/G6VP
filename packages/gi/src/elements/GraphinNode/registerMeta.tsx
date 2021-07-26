const registerMeta = context => {
  const { data, keys = ['id', 'type'] } = context;
  const options = keys.map(c => {
    return {
      value: c,
      label: c,
    };
  });

  return {
    size: {
      name: '大小',
      type: 'group',
      enableHide: false,
      fold: false,
      children: {
        sizeMapping: {
          name: '半径',
          type: 'sizeMapping',
          min: 0,
          max: 100,
          step: 1,
          suffix: 'px',
          valuePath: 'size',
          default: {
            mapping: false,
            fixed: 5,
            scale: {
              custom: false, // 是否采取自定义映射
              range: [3, 30], // 值域
              domain: [0, 1000], // 定义域
              abnormal: 1,
            },
          },
        },
        keyMapping: {
          name: '映射字段',
          type: 'select',
          useFont: true,
          default: 'amount',
          options,
          showInPanel: {
            conditions: [['size.mapping', '$eq', true]],
          },
          valuePath: 'size.key',
        },
      },
    },
    color: {
      name: '颜色',
      type: 'group',
      enableHide: false,
      fold: false,
      children: {
        colorMapping: {
          name: '填充颜色',
          type: 'colorMapping',
          fixedComponents: ['flat'],
          valuePath: 'color',
          default: {
            mapping: false,
            fixed: 'skyblue',
            scale: {
              type: 'ordinal',
              scheme: 'cat-1',
              custom: true,
              range: ['#00FF95', '#588ee9'],
              domain: [],
              excepted: '#666',
              abnormal: '#f31200',
              pin: [false, true],
            },
          },
        },
        keyMapping: {
          name: '映射字段',
          type: 'select',
          useFont: true,
          default: 'type',
          showInPanel: {
            conditions: [
              ['color.scale.custom', '$eq', true],
              ['color.mapping', '$eq', true],
            ],
            logicalType: '$and',
          },
          valuePath: 'color.key',
          options,
        },
      },
    },
    label: {
      name: '标签',
      type: 'group',
      enableHide: false,
      fold: false,
      children: {
        showlabel: {
          name: '开关',
          type: 'switch',
          default: true,
          statusText: true,
        },
        keyLabel: {
          name: '映射字段',
          type: 'select',
          useFont: true,
          default: 'type',
          valuePath: 'label.key',
          showInPanel: {
            conditions: [['label.showlabel', '$eq', true]],
          },
          options,
        },
      },
    },
  };
};

export default registerMeta;
