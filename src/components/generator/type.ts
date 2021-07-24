import React from 'react';

export interface commonProps {
  id: number;
  code: string;
  readonly: boolean;
  disabled: boolean;
  isForm: boolean;
  layout: string;
  label: string;
  labelWidth: number;
  showLabel: boolean;
  required: boolean;
}

export interface InputProps extends commonProps {
  regList: {}[];
  clearable: boolean;
  'prefix-icon'?: React.ReactNode;
  'suffix-icon'?: React.ReactNode;
  maxlength: number;
  'show-word-limit': boolean;
  placeholder: string;
  defaultvalue: string;
  size: string;
  bordered: boolean;
}

export interface MulInputProps extends commonProps {
  clearable: true; // 是否展示清空按钮
  maxlength: 11; // 最多输入字符
  autosize?: {
    minRows: 4; //最小长度
    maxRows: 4; //最大长度
  };
  'show-word-limit': true; // 字数限制
  placehoder: '请输入单行文本'; // 占位提示
  defaultvalue: ''; // 默认值
}

export type _simpleConfigType = { __config__: InputProps | MulInputProps }[];
