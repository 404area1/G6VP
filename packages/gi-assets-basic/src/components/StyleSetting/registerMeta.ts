import { extra } from '@alipay/graphinsight';
import { defaultConfig } from '../../elements/SimpleNode/registerTransform';

const { GIAC_CONTENT_METAS, deepClone } = extra;
const metas = deepClone(GIAC_CONTENT_METAS);
metas.GIAC_CONTENT.name = '样式设置';

export const schema = {
  type: 'object',
  properties: {
    size: {
      title: '大小',
      type: 'number',
      widget: 'slider',
      default: defaultConfig.size,
    },
    color: {
      title: '颜色',
      type: 'string',
      format: 'color',
      default: defaultConfig.color,
    },
    label: {
      title: '文本',
      type: 'array',
      //todo: 显示文本属性根据 data 生成
      enum: ['id'],
      enumNames: ['节点ID'],
      items: {
        type: 'string',
      },
      default: ['id'],
      widget: 'multiSelect',
    },
    icon: {
      type: 'string',
      title: '图标（选填）',
      widget: 'iconSelector',
      default: defaultConfig.icon,
    },
    advanced: {
      title: '高级配置',
      type: 'object',
      properties: {
        keyShape: {
          type: 'object',
          title: '主节点',
          properties: {
            opacity: {
              title: '透明度',
              type: 'number',
              min: 0,
              max: 1,
              default: 0.3,
            },
          },
        },
        label: {
          type: 'object',
          title: '文本',
          properties: {
            visible: {
              title: '是否显示文本',
              type: 'boolean',
              default: defaultConfig.advanced.label.visible,
            },
            fill: {
              title: '文本颜色',
              type: 'string',
              format: 'color',
              hidden: '{{!rootValue.visible}}',
              default: defaultConfig.advanced.label.fill,
            },
            fontSize: {
              title: '文本大小',
              type: 'number',
              hidden: '{{!rootValue.visible}}',
              default: defaultConfig.advanced.label.fontSize,
            },
            position: {
              title: '展示位置',
              type: 'string',
              enum: ['top', 'bottom', 'left', 'right', 'center'],
              enumNames: ['顶部', '底部', '左侧', '右侧', '中间'],
              widget: 'select',
              hidden: '{{!rootValue.visible}}',
              default: defaultConfig.advanced.label.position,
            },
          },
        },
        icon: {
          type: 'object',
          title: '图标',
          properties: {
            fill: {
              title: '颜色',
              type: 'string',
              format: 'color',
              default: defaultConfig.advanced.icon.fill,
            },
            size: {
              title: '大小',
              type: 'number',
              default: defaultConfig.advanced.icon.size,
            },
          },
        },
        badge: {
          type: 'object',
          title: '徽标',
          properties: {
            visible: {
              title: '是否显示徽标',
              type: 'boolean',
              default: defaultConfig.advanced.badge.visible,
            },
            type: {
              title: '类型',
              type: 'string',
              enum: ['text', 'font'],
              enumNames: ['文本', '字体图标'],
              widget: 'select',
              hidden: '{{!rootValue.visible}}',
              default: defaultConfig.advanced.badge.type,
            },
            value: {
              title: '值',
              type: 'string',
              hidden: '{{!rootValue.visible}}',
              default: defaultConfig.advanced.badge.value,
            },
          },
        },
      },
    },
  },
};

const registerMeta = context => {
  return {
    ...metas,
  };
};

/** 默认的配置值 */
export default registerMeta;
