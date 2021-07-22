import { _simpleConfigs } from '@/components/generator/config';
import { CSSProperties } from 'react';
interface ComponentsProps {
  ComponentsType: { title: string; list: {}[] }[];
}
export const Components: ComponentsProps['ComponentsType'] = [
  { title: '普通控件', list: _simpleConfigs },
  { title: '高级控件', list: [] },
];

export const borderStyle: CSSProperties = {
  borderRadius: '1px dashed #cdd2d9',
};
