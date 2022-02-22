import { extra } from '@alipay/graphinsight';
import { IGIAC } from '@alipay/graphinsight/lib/components/const';
import * as React from 'react';
import useRedoUndo from './useRedoUndo';
const { GIAComponent } = extra;
export interface Redo {
  GIAC: IGIAC;
}

const Redo: React.FunctionComponent<Redo> = props => {
  const { GIAC } = props;
  const { handleRedo } = useRedoUndo();
  return <GIAComponent GIAC={GIAC} onClick={handleRedo} />;
};

export default Redo;
