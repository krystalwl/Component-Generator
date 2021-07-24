import { _simpleConfigType } from './type';

export const _simpleConfigs: _simpleConfigType = [
  {
    __config__: {
      id: 1,
      code: 'el-simple-input',
      label: '单行文本', // label 名称
      labelWidth: 100, // label 宽度 默认100
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
      placeholder: '请输入单行文本', // 占位提示
      defaultvalue: 'input', // 默认值
    },
  },
  {
    __config__: {
      id: 2,
      code: 'el-multiple-input',
      label: '多行文本', // label 名称
      labelWidth: 100, // label 宽度 默认100
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
      maxlength: 11, // 最大长度
      'show-word-limit': true, // 字数限制
      readonly: false, // 是否只读
      disabled: false, // 是否禁用
      placeholder: '请输入单行文本', // 占位提示
      defaultvalue: 'input', // 默认值
    },
  },
  {
    __config__: {
      id: 3,
      code: 'el-multiple-input',
      label: '按钮', // label 名称
      labelWidth: 100, // label 宽度 默认100
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
      maxlength: 11, // 最大长度
      'show-word-limit': true, // 字数限制
      readonly: false, // 是否只读
      disabled: false, // 是否禁用
      placeholder: '请输入单行文本', // 占位提示
      defaultvalue: 'input', // 默认值
    },
  },
];
