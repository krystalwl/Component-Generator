export const config = {
  title: '下拉框',
  type: 'Select',
  code: 'el-select',
  labelWidth: 100,
  showLabel: true,
  required: true,
  layout: 'colFormItem',
  isForm: true,
  size: 'defalut', // 大小 默认中等
  bordered: true, // 是否需要边框
  clearable: true, // 是否展示清空按钮
  disabled: false, // 是否禁用
  placeholder: '请输入单行文本', // 占位提示
  defaultValue: 'select', // 默认值
  open: false, // 是否展开下拉菜单
  mode: 'defalut', // multiple 多选 tags  defalut
  options: [
    { key: '0', value: '选项一' },
    { key: '1', value: '选项二' },
  ],
};
