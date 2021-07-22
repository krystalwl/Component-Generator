import { _simpleConfigs } from '@/components/generator/config';
interface ComponentsProps {
  ComponentsType: { title: string; list: {}[] }[];
}
export const Components: ComponentsProps['ComponentsType'] = [
  { title: '普通控件', list: _simpleConfigs },
  { title: '高级控件', list: [] },
];
