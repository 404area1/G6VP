export const GI_SERVICES_OPTIONS = [
  {
    id: 'GI_SERVICE_INTIAL_GRAPH',
    content:
      'export default (localData)=>{\n      return new Promise((resolve)=>{\n        resolve(localData)\n      })\n    }',
    mode: 'MOCK',
    name: '初始化接口',
  },
  {
    id: 'Mock/NeighborsQuery',
    mode: 'MOCK',
    name: 'Mock/NeighborsQuery',
    content:
      'export default function service(params, localData) {\n      var id = params.id;\n      var data = {\n        nodes: [{\n          id: id\n        }, {\n          id: "".concat(id, "-1")\n        }, {\n          id: "".concat(id, "-2")\n        }, {\n          id: "".concat(id, "-3")\n        }, {\n          id: "".concat(id, "-4")\n        }],\n        edges: [{\n          source: id,\n          target: "".concat(id, "-1")\n        }, {\n          source: id,\n          target: "".concat(id, "-2")\n        }, {\n          source: id,\n          target: "".concat(id, "-3")\n        }]\n      };\n      return new Promise(function (resolve) {\n        return resolve(data);\n      });\n    }',
  },
];
export const GI_PROJECT_CONFIG = {
  nodes: [
    {
      id: 'SimpleNode',
      props: {
        size: 26,
        color: '#ddd',
        label: ['id'],
      },
      groupName: '默认样式',
      expressions: [null],
      logic: true,
    },
    {
      id: 'SimpleNode',
      props: {
        size: 46,
        color: '#3056E3',
        label: ['id'],
        advanced: {
          icon: {
            type: 'font',
            value: 'bank',
            fill: 'rgba(255,255,255,1)',
            visible: true,
          },
          keyshape: {
            fillOpacity: 1,
          },
          label: {
            visible: true,
            fill: '#000',
            fontSize: 12,
            position: 'bottom',
          },
          badge: {
            visible: false,
          },
        },
      },
      groupName: 'ACCOUNT_BALANCE TYPE',
      expressions: [
        {
          name: 'icon',
          operator: 'eql',
          value: 'account_balance',
        },
      ],
      logic: true,
    },
    {
      id: 'SimpleNode',
      props: {
        size: 26,
        color: '#ff9d05',
        label: ['id'],
        advanced: {
          icon: {
            type: 'font',
            value: 'user',
            fill: '#FF6A00',
            visible: true,
          },
          keyshape: {
            fillOpacity: 0.1,
          },
          label: {
            visible: true,
            fill: '#000',
            fontSize: 12,
            position: 'bottom',
          },
          badge: {
            visible: false,
          },
        },
      },
      groupName: 'ACCOUNT_BOX TYPE',
      expressions: [
        {
          name: 'icon',
          operator: 'eql',
          value: 'account_box',
        },
      ],
      logic: true,
    },
    {
      id: 'SimpleNode',
      props: {
        size: 26,
        color: '#82E6C7',
        label: ['id'],
      },
      groupName: '- TYPE',
      expressions: [
        {
          name: 'icon',
          operator: 'eql',
          value: '-',
        },
      ],
      logic: true,
    },
    {
      id: 'SimpleNode',
      props: {
        color: 'rgba(253,0,0,1)',
        size: 26,
        label: ['id'],
        advanced: {
          icon: {
            type: 'font',
            value: 'plus',
            fill: 'rgba(255,255,255,1)',
            visible: true,
          },
          keyshape: {
            fillOpacity: 1,
          },
          label: {
            visible: true,
            fill: '#000',
            fontSize: 12,
            position: 'bottom',
          },
          badge: {
            visible: true,
            type: 'text',
            value: '10',
          },
        },
      },
      groupId: 'jw21088h',
      groupName: '自定义样式 5',
      expressions: [
        {
          name: 'id',
          operator: 'eql',
          value: 'customer_7',
        },
      ],
      logic: true,
    },
  ],
  edges: [
    {
      id: 'SimpleEdge',
      props: {
        size: 1,
        color: '#ddd',
        label: [],
      },
      groupName: '默认样式',
      expressions: [null],
      logic: true,
    },
    {
      id: 'SimpleEdge',
      props: {
        size: 1,
        color: '#3056E3',
        label: ['amount'],
        advanced: {
          keyshape: {
            customPoly: false,
            lineDash: [],
            opacity: 1,
          },
          label: {
            visible: true,
            fontSize: 12,
            offset: [0, 0],
            fill: '#3056E3',
            backgroundEnable: true,
            backgroundFill: 'rgba(255,255,255,1)',
            backgroundStroke: '#fff',
          },
          animate: {
            visible: true,
            type: 'circle-running',
            dotColor: '#3056E3',
            repeat: true,
            duration: 3000,
          },
        },
      },
      groupName: 'IB_TXN TYPE',
      expressions: [
        {
          name: 'category',
          operator: 'eql',
          value: 'ib_txn',
        },
      ],
      logic: true,
    },
    {
      id: 'SimpleEdge',
      props: {
        size: 1,
        color: '#ff9d05',
        label: [],
        advanced: {
          keyshape: {
            customPoly: false,
            lineDash: [],
            opacity: 1,
          },
          label: {
            visible: true,
            fontSize: 12,
            offset: [0, 0],
            fill: '#ddd',
            backgroundEnable: false,
            backgroundFill: '#ddd',
            backgroundStroke: '#fff',
          },
          animate: {
            visible: true,
            type: 'circle-running',
            dotColor: '#ff9d05',
            repeat: true,
            duration: 3000,
          },
        },
      },
      groupName: 'OWNERSHIP TYPE',
      expressions: [
        {
          name: 'category',
          operator: 'eql',
          value: 'ownership',
        },
      ],
      logic: true,
    },
  ],
  layout: {
    id: 'Dagre',
    name: '有向分层布局',
    category: 'basic',
    props: {
      rankdir: 'TB',
      align: null,
      nodesep: 42,
      ranksep: 61,
      type: 'dagre',
    },
  },
  components: [
    {
      id: 'NodeLegend',
      props: {
        sortKey: 'icon',
        textColor: '#ddd',
        placement: 'LB',
        offset: [100, 20],
      },
    },
    {
      id: 'OperatorBar',
      props: {
        GI_CONTAINER: [],
        placement: 'LT',
        offset: [0, 0],
        height: '60px',
        width: '100%',
      },
    },
    {
      id: 'Toolbar',
      props: {
        GI_CONTAINER: ['ZoomIn', 'ZoomOut', 'FitView', 'FitCenter'],
        direction: 'vertical',
        placement: 'LT',
        offset: [20, 100],
      },
    },
    {
      id: 'ContextMenu',
      props: {
        GI_CONTAINER: ['NeighborsQuery'],
      },
    },
    {
      id: 'ZoomIn',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '收缩',
          isShowIcon: true,
          icon: 'icon-zoomin',
          isShowTooltip: true,
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: false,
        },
      },
    },
    {
      id: 'FitView',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '1:1',
          isShowIcon: true,
          icon: 'icon-fit-view',
          isShowTooltip: true,
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: false,
        },
      },
    },
    {
      id: 'FitCenter',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '居中',
          isShowIcon: true,
          icon: 'icon-fit-center',
          isShowTooltip: true,
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: false,
        },
      },
    },
    {
      id: 'ZoomOut',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '缩小',
          isShowIcon: true,
          icon: 'icon-zoomout',
          isShowTooltip: true,
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: false,
        },
      },
    },
    {
      id: 'NeighborsQuery',
      props: {
        serviceId: 'Mock/NeighborsQuery',
        degree: [1, 2, 3],
      },
    },
  ],
};
export const GI_LOCAL_DATA = {
  nodes: [
    {
      id: 'account_7',
      nodeType: 'account_balance',
      nodeTypeKeyFromProperties: 'icon',
      data: {
        create_date: '2019-01-03T00:00:00',
        icon: 'account_balance',
        id: 'account_7',
        is_different_bank: 0,
        data: {},
        defaultStyle: {},
      },
    },
    {
      id: 'account_20',
      nodeType: 'account_balance',
      nodeTypeKeyFromProperties: 'icon',
      data: {
        create_date: '2019-01-05T00:00:00',
        icon: 'account_balance',
        id: 'account_20',
        is_different_bank: 0,
        data: {},
        defaultStyle: {},
      },
    },
    {
      id: 'account_55',
      nodeType: 'account_balance',
      nodeTypeKeyFromProperties: 'icon',
      data: {
        create_date: '2019-01-07T00:00:00',
        icon: 'account_balance',
        id: 'account_55',
        is_different_bank: 0,
        data: {},
        defaultStyle: {},
      },
    },
    {
      id: 'account_81',
      nodeType: 'account_balance',
      nodeTypeKeyFromProperties: 'icon',
      data: {
        create_date: '2019-01-15T00:00:00',
        icon: 'account_balance',
        id: 'account_81',
        is_different_bank: 0,
        data: {},
        defaultStyle: {},
      },
    },
    {
      id: 'account_103',
      nodeType: 'account_balance',
      nodeTypeKeyFromProperties: 'icon',
      data: {
        create_date: '2019-01-15T00:00:00',
        icon: 'account_balance',
        id: 'account_103',
        is_different_bank: 0,
        data: {},
        defaultStyle: {},
      },
    },
    {
      id: 'account_901',
      nodeType: 'account_balance',
      nodeTypeKeyFromProperties: 'icon',
      data: {
        create_date: '2019-01-03T00:00:00',
        icon: 'account_balance',
        id: 'account_901',
        is_different_bank: 0,
        data: {},
        defaultStyle: {},
      },
    },
    {
      id: 'account_902',
      nodeType: 'account_balance',
      nodeTypeKeyFromProperties: 'icon',
      data: {
        create_date: '2019-01-10T00:00:00',
        icon: 'account_balance',
        id: 'account_902',
        is_different_bank: 0,
        data: {},
        defaultStyle: {},
      },
    },
    {
      id: 'account_903',
      nodeType: 'account_balance',
      nodeTypeKeyFromProperties: 'icon',
      data: {
        create_date: '2019-01-09T00:00:00',
        icon: 'account_balance',
        id: 'account_903',
        is_different_bank: 1,
        data: {},
        defaultStyle: {},
      },
    },
    {
      id: 'account_904',
      nodeType: 'account_balance',
      nodeTypeKeyFromProperties: 'icon',
      data: {
        create_date: '2019-01-08T00:00:00',
        icon: 'account_balance',
        id: 'account_904',
        is_different_bank: 1,
        data: {},
        defaultStyle: {},
      },
    },
    {
      id: 'customer_7',
      nodeType: 'account_box',
      nodeTypeKeyFromProperties: 'icon',
      data: {
        icon: 'account_box',
        id: 'customer_7',
        data: {},
        defaultStyle: {},
        address: '-',
        customer_type: 'retail',
        first_name: '-',
        last_name: '-',
        phone: '-',
        remarks: "high-value IB txn into customer 103's account",
        risk_category: 'medium',
        risk_score: 50,
      },
    },
    {
      id: 'customer_20',
      nodeType: 'account_box',
      nodeTypeKeyFromProperties: 'icon',
      data: {
        icon: 'account_box',
        id: 'customer_20',
        data: {},
        defaultStyle: {},
        address: '-',
        customer_type: 'retail',
        first_name: '-',
        last_name: '-',
        phone: '-',
        remarks: "high-value IB txn into customer 103's account",
        risk_category: 'medium',
        risk_score: 50,
      },
    },
    {
      id: 'customer_55',
      nodeType: 'account_box',
      nodeTypeKeyFromProperties: 'icon',
      data: {
        icon: 'account_box',
        id: 'customer_55',
        data: {},
        defaultStyle: {},
        address: '-',
        customer_type: 'retail',
        first_name: '-',
        last_name: '-',
        phone: '-',
        remarks: "high-value IB txn into customer 103's account",
        risk_category: 'medium',
        risk_score: 50,
      },
    },
    {
      id: 'customer_81',
      nodeType: 'account_box',
      nodeTypeKeyFromProperties: 'icon',
      data: {
        icon: 'account_box',
        id: 'customer_81',
        data: {},
        defaultStyle: {},
        address: '-',
        customer_type: 'retail',
        first_name: '-',
        last_name: '-',
        phone: '-',
        remarks: "high-value IB txn into customer 103's account",
        risk_category: 'medium',
        risk_score: 50,
      },
    },
    {
      id: 'customer_103',
      nodeType: 'account_box',
      nodeTypeKeyFromProperties: 'icon',
      data: {
        icon: 'account_box',
        id: 'customer_103',
        data: {},
        defaultStyle: {},
        address: '103 RD',
        customer_type: 'retail',
        first_name: 'john',
        last_name: 'doe',
        phone: '+65 0000 0103',
        remarks: 'high-value purchases from luxury retailer. source of funds from 4 related accounts',
        risk_category: 'high',
        risk_score: 99,
      },
    },
    {
      id: 'customer_901',
      nodeType: 'account_box',
      nodeTypeKeyFromProperties: 'icon',
      data: {
        icon: 'account_box',
        id: 'customer_901',
        data: {},
        defaultStyle: {},
        address: '901 RD',
        customer_type: 'retail',
        first_name: 'jane',
        last_name: 'doe',
        phone: '+65 0000 0103',
        remarks:
          "source of funds for customer 103's purchase of luxury items. customer has same phone number as customer 103.",
        risk_category: 'medium',
        risk_score: 74,
      },
    },
    {
      id: 'customer_902',
      nodeType: 'account_box',
      nodeTypeKeyFromProperties: 'icon',
      data: {
        icon: 'account_box',
        id: 'customer_902',
        data: {},
        defaultStyle: {},
        address: '103 RD',
        customer_type: 'retail',
        first_name: 'jim',
        last_name: 'smith',
        phone: '+65 0000 0902',
        remarks:
          "source of funds for customer 103's purchase of luxury items. customer has same address as customer 103.",
        risk_category: 'medium',
        risk_score: 74,
      },
    },
    {
      id: 'other_banks',
      nodeType: '-',
      nodeTypeKeyFromProperties: 'icon',
      data: {
        icon: '-',
        id: 'other_banks',
        data: {},
        defaultStyle: {},
        address: '-',
        customer_type: '-',
        first_name: '-',
        last_name: '-',
        phone: '-',
        remarks: 'other banks',
        risk_category: '-',
        risk_score: '-',
      },
    },
  ],
  edges: [
    {
      source: 'account_103',
      target: 'account_904',
      edgeType: 'ib_txn',
      edgeTypeKeyFromProperties: 'category',
      data: {
        amount: 1000000,
        balance: 200000,
        category: 'ib_txn',
        date: '2020-01-01T00:00:00',
        id: 'ib_txn_1',
        is_foreign_source: 0,
        is_foreign_target: 1,
        is_high_risk_source_target_location: 0,
        relation: 'ib_transfer',
        source: 'account_103',
        source_owner: 'customer_103',
        target: 'account_904',
        target_owner: 'other_banks',
        time: '00:00:00',
        data: {},
        defaultStyle: {},
      },
    },
    {
      source: 'account_903',
      target: 'account_103',
      edgeType: 'ib_txn',
      edgeTypeKeyFromProperties: 'category',
      data: {
        amount: 100000,
        balance: null,
        category: 'ib_txn',
        date: '2020-01-02T01:00:00',
        id: 'ib_txn_2',
        is_foreign_source: 1,
        is_foreign_target: 0,
        is_high_risk_source_target_location: 0,
        relation: 'ib_transfer',
        source: 'account_903',
        source_owner: 'other_banks',
        target: 'account_103',
        target_owner: 'customer_103',
        time: '01:00:00',
        data: {},
        defaultStyle: {},
      },
    },
    {
      source: 'account_103',
      target: 'account_904',
      edgeType: 'ib_txn',
      edgeTypeKeyFromProperties: 'category',
      data: {
        amount: 50000,
        balance: 250000,
        category: 'ib_txn',
        date: '2020-01-02T02:00:00',
        id: 'ib_txn_3',
        is_foreign_source: 0,
        is_foreign_target: 1,
        is_high_risk_source_target_location: 0,
        relation: 'ib_transfer',
        source: 'account_103',
        source_owner: 'customer_103',
        target: 'account_904',
        target_owner: 'other_banks',
        time: '02:00:00',
        data: {},
        defaultStyle: {},
      },
    },
    {
      source: 'account_904',
      target: 'account_103',
      edgeType: 'ib_txn',
      edgeTypeKeyFromProperties: 'category',
      data: {
        amount: 2000000,
        balance: null,
        category: 'ib_txn',
        date: '2020-01-01T03:00:00',
        id: 'ib_txn_4',
        is_foreign_source: 1,
        is_foreign_target: 0,
        is_high_risk_source_target_location: 0,
        relation: 'ib_transfer',
        source: 'account_904',
        source_owner: 'other_banks',
        target: 'account_103',
        target_owner: 'customer_103',
        time: '03:00:00',
        data: {},
        defaultStyle: {},
      },
    },
    {
      source: 'account_103',
      target: 'account_903',
      edgeType: 'ib_txn',
      edgeTypeKeyFromProperties: 'category',
      data: {
        amount: 1000000,
        balance: 1250000,
        category: 'ib_txn',
        date: '2020-01-02T04:00:00',
        id: 'ib_txn_5',
        is_foreign_source: 0,
        is_foreign_target: 1,
        is_high_risk_source_target_location: 0,
        relation: 'ib_transfer',
        source: 'account_103',
        source_owner: 'customer_103',
        target: 'account_903',
        target_owner: 'other_banks',
        time: '04:00:00',
        data: {},
        defaultStyle: {},
      },
    },
    {
      source: 'account_103',
      target: 'account_903',
      edgeType: 'ib_txn',
      edgeTypeKeyFromProperties: 'category',
      data: {
        amount: 1000000,
        balance: 250000,
        category: 'ib_txn',
        date: '2020-01-02T05:00:00',
        id: 'ib_txn_6',
        is_foreign_source: 0,
        is_foreign_target: 1,
        is_high_risk_source_target_location: 0,
        relation: 'ib_transfer',
        source: 'account_103',
        source_owner: 'customer_103',
        target: 'account_903',
        target_owner: 'other_banks',
        time: '05:00:00',
        data: {},
        defaultStyle: {},
      },
    },
    {
      source: 'account_901',
      target: 'account_103',
      edgeType: 'ib_txn',
      edgeTypeKeyFromProperties: 'category',
      data: {
        amount: 250000,
        balance: 10000,
        category: 'ib_txn',
        date: '2020-01-01T06:00:00',
        id: 'ib_txn_7',
        is_foreign_source: 0,
        is_foreign_target: 0,
        is_high_risk_source_target_location: 0,
        relation: 'ib_transfer',
        source: 'account_901',
        source_owner: 'customer_901',
        target: 'account_103',
        target_owner: 'customer_103',
        time: '06:00:00',
        data: {},
        defaultStyle: {},
      },
    },
    {
      source: 'account_902',
      target: 'account_103',
      edgeType: 'ib_txn',
      edgeTypeKeyFromProperties: 'category',
      data: {
        amount: 250000,
        balance: 300000,
        category: 'ib_txn',
        date: '2020-01-01T06:30:00',
        id: 'ib_txn_8',
        is_foreign_source: 0,
        is_foreign_target: 0,
        is_high_risk_source_target_location: 0,
        relation: 'ib_transfer',
        source: 'account_902',
        source_owner: 'customer_902',
        target: 'account_103',
        target_owner: 'customer_103',
        time: '06:30:00',
        data: {},
        defaultStyle: {},
      },
    },
    {
      source: 'account_903',
      target: 'account_103',
      edgeType: 'ib_txn',
      edgeTypeKeyFromProperties: 'category',
      data: {
        amount: 250000,
        balance: null,
        category: 'ib_txn',
        date: '2020-01-02T06:00:00',
        id: 'ib_txn_9',
        is_foreign_source: 1,
        is_foreign_target: 0,
        is_high_risk_source_target_location: 0,
        relation: 'ib_transfer',
        source: 'account_903',
        source_owner: 'other_banks',
        target: 'account_103',
        target_owner: 'customer_103',
        time: '06:00:00',
        data: {},
        defaultStyle: {},
      },
    },
    {
      source: 'account_904',
      target: 'account_103',
      edgeType: 'ib_txn',
      edgeTypeKeyFromProperties: 'category',
      data: {
        amount: 250000,
        balance: null,
        category: 'ib_txn',
        date: '2020-01-01T00:00:00',
        id: 'ib_txn_10',
        is_foreign_source: 1,
        is_foreign_target: 0,
        is_high_risk_source_target_location: 0,
        relation: 'ib_transfer',
        source: 'account_904',
        source_owner: 'other_banks',
        target: 'account_103',
        target_owner: 'customer_103',
        time: '00:00:00',
        data: {},
        defaultStyle: {},
      },
    },
    {
      source: 'account_7',
      target: 'account_103',
      edgeType: 'ib_txn',
      edgeTypeKeyFromProperties: 'category',
      data: {
        amount: 125000,
        balance: 225000,
        category: 'ib_txn',
        date: '2020-01-03T22:00:00',
        id: 'ib_txn_72',
        is_foreign_source: 0,
        is_foreign_target: 0,
        is_high_risk_source_target_location: 0,
        relation: 'ib_transfer',
        source: 'account_7',
        source_owner: 'customer_7',
        target: 'account_103',
        target_owner: 'customer_103',
        time: '22:00:00',
        data: {},
        defaultStyle: {},
      },
    },
    {
      source: 'account_55',
      target: 'account_103',
      edgeType: 'ib_txn',
      edgeTypeKeyFromProperties: 'category',
      data: {
        amount: 250000,
        balance: 475000,
        category: 'ib_txn',
        date: '2020-01-03T22:00:00',
        id: 'ib_txn_73',
        is_foreign_source: 0,
        is_foreign_target: 0,
        is_high_risk_source_target_location: 0,
        relation: 'ib_transfer',
        source: 'account_55',
        source_owner: 'customer_55',
        target: 'account_103',
        target_owner: 'customer_103',
        time: '22:00:00',
        data: {},
        defaultStyle: {},
      },
    },
    {
      source: 'account_20',
      target: 'account_103',
      edgeType: 'ib_txn',
      edgeTypeKeyFromProperties: 'category',
      data: {
        amount: 150000,
        balance: 625000,
        category: 'ib_txn',
        date: '2020-01-04T18:00:00',
        id: 'ib_txn_74',
        is_foreign_source: 0,
        is_foreign_target: 0,
        is_high_risk_source_target_location: 0,
        relation: 'ib_transfer',
        source: 'account_20',
        source_owner: 'customer_20',
        target: 'account_103',
        target_owner: 'customer_103',
        time: '18:00:00',
        data: {},
        defaultStyle: {},
      },
    },
    {
      source: 'account_81',
      target: 'account_103',
      edgeType: 'ib_txn',
      edgeTypeKeyFromProperties: 'category',
      data: {
        amount: 300000,
        balance: 925000,
        category: 'ib_txn',
        date: '2020-01-04T18:00:00',
        id: 'ib_txn_75',
        is_foreign_source: 0,
        is_foreign_target: 0,
        is_high_risk_source_target_location: 0,
        relation: 'ib_transfer',
        source: 'account_81',
        source_owner: 'customer_81',
        target: 'account_103',
        target_owner: 'customer_103',
        time: '18:00:00',
        data: {},
        defaultStyle: {},
      },
    },
    {
      source: 'customer_7',
      target: 'account_7',
      edgeType: 'ownership',
      edgeTypeKeyFromProperties: 'category',
      data: {
        category: 'ownership',
        id: 'ownership_210',
        relation: 'owns',
        source: 'customer_7',
        target: 'account_7',
        data: {},
        defaultStyle: {},
      },
    },
    {
      source: 'customer_20',
      target: 'account_20',
      edgeType: 'ownership',
      edgeTypeKeyFromProperties: 'category',
      data: {
        category: 'ownership',
        id: 'ownership_223',
        relation: 'owns',
        source: 'customer_20',
        target: 'account_20',
        data: {},
        defaultStyle: {},
      },
    },
    {
      source: 'customer_55',
      target: 'account_55',
      edgeType: 'ownership',
      edgeTypeKeyFromProperties: 'category',
      data: {
        category: 'ownership',
        id: 'ownership_258',
        relation: 'owns',
        source: 'customer_55',
        target: 'account_55',
        data: {},
        defaultStyle: {},
      },
    },
    {
      source: 'customer_81',
      target: 'account_81',
      edgeType: 'ownership',
      edgeTypeKeyFromProperties: 'category',
      data: {
        category: 'ownership',
        id: 'ownership_284',
        relation: 'owns',
        source: 'customer_81',
        target: 'account_81',
        data: {},
        defaultStyle: {},
      },
    },
    {
      source: 'customer_103',
      target: 'account_103',
      edgeType: 'ownership',
      edgeTypeKeyFromProperties: 'category',
      data: {
        category: 'ownership',
        id: 'ownership_306',
        relation: 'owns',
        source: 'customer_103',
        target: 'account_103',
        data: {},
        defaultStyle: {},
      },
    },
    {
      source: 'customer_901',
      target: 'account_901',
      edgeType: 'ownership',
      edgeTypeKeyFromProperties: 'category',
      data: {
        category: 'ownership',
        id: 'ownership_307',
        relation: 'owns',
        source: 'customer_901',
        target: 'account_901',
        data: {},
        defaultStyle: {},
      },
    },
    {
      source: 'customer_902',
      target: 'account_902',
      edgeType: 'ownership',
      edgeTypeKeyFromProperties: 'category',
      data: {
        category: 'ownership',
        id: 'ownership_308',
        relation: 'owns',
        source: 'customer_902',
        target: 'account_902',
        data: {},
        defaultStyle: {},
      },
    },
    {
      source: 'other_banks',
      target: 'account_903',
      edgeType: 'ownership',
      edgeTypeKeyFromProperties: 'category',
      data: {
        category: 'ownership',
        id: 'ownership_310',
        relation: 'owns',
        source: 'other_banks',
        target: 'account_903',
        data: {},
        defaultStyle: {},
      },
    },
    {
      source: 'other_banks',
      target: 'account_904',
      edgeType: 'ownership',
      edgeTypeKeyFromProperties: 'category',
      data: {
        category: 'ownership',
        id: 'ownership_311',
        relation: 'owns',
        source: 'other_banks',
        target: 'account_904',
        data: {},
        defaultStyle: {},
      },
    },
  ],
};
