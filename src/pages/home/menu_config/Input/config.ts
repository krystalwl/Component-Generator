export const config = {
  title: '单行文本', // label 名称
  type: 'Input',
  code: 'el-simple-input',
  labelWidth: 70, // label 宽度 默认100
  cptWidth: 220,
  showLabel: true, // 是否展示 label
  required: true, // 是否必填
  layout: 'colFormItem', // 横向还是纵向
  regList: [
    // 校验规则
    {
      pattern: '/^1(3|4|5|7|8|9)\\d{9}$/',
      message: '手机号格式错误',
    },
  ],
  isForm: true, // 是否是 form 按钮

  // 下面为可直接写在组件标签上的属性
  size: 'defalut', // 大小 默认中等
  bordered: true, // 是否需要边框
  clearable: true, // 是否展示清空按钮
  'prefix-icon': 'el-icon-mobile', // 前图标
  'suffix-icon': '', // 后图标
  maxlength: 11, // 最大长度
  'show-word-limit': true, // 字数限制
  readonly: false, // 是否只读
  disabled: false, // 是否禁用
  showCount: false, // 是否展示字数
  placeholder: '请输入单行文本', // 占位提示
  defaultvalue: 'input', // 默认值
};
