import React from 'react';

export interface commonProps {
  id: number;
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
  'prefix-icon': React.ReactNode;
  'suffix-icon': React.ReactNode;
  maxlength: number;
  'show-word-limit': boolean;
  placeholder: string;
  defaultvalue: string;
  size: string;
  bordered: boolean;
}

export type _simpleConfigType = { __config__: InputProps }[];
