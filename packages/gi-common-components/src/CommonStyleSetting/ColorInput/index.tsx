import { Input, Popover } from 'antd';
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import './index.less';
import $i18n from '../../i18n';

export interface IColorInputProps {
  value?: string;
  colorType?: 'rgba' | 'hex';
  onChange?: (color: string) => void;
}

const ColorInput: React.FC<IColorInputProps> = props => {
  let container;
  const [color, setColor] = useState(props.value as string);

  return (
    <div className="color-input-container">
      <Input
        value={props.value}
        onChange={e => {
          setColor(e.target.value);
          props.onChange?.(e.target.value);
        }}
        placeholder={$i18n.get({
          id: 'common-components.CommonStyleSetting.ColorInput.PleaseSelectAColor',
          dm: '请选择颜色',
        })}
        prefix={
          <Popover
            placement="topLeft"
            trigger="click"
            overlayInnerStyle={{ padding: 0 }}
            getPopupContainer={() => container}
            content={
              <SketchPicker
                color={color}
                onChange={({ rgb, hex }) => {
                  const color = props.colorType === 'hex' ? hex : `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;
                  setColor(color);
                  props.onChange?.(color);
                }}
              />
            }
          >
            <div
              ref={node => {
                container = node;
              }}
              className="color-input-container-color-tips"
              style={{
                backgroundColor: color,
                border: `1px solid ${color}`,
              }}
            ></div>
          </Popover>
        }
      />
    </div>
  );
};

export default ColorInput;
