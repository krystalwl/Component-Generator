import React, { useState, useEffect } from 'react';
import { Input, Menu, Form, InputNumber, Switch } from 'antd';
import '@/styles/home.less';
import { useSelector, useDispatch } from 'react-redux';
import {
  SELECT_DRAG_KEY,
  selectDrag,
  modifyDrag,
} from '@/store/select-drag.slice';
import { ACTION_BAR_KEY } from '@/store/actionBar.slice';
import { stateTypes } from '@/store/index.type';

const { Item } = Form;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const Settings = (props) => {
  const [form] = Form.useForm();

  const selectItem = useSelector((state: stateTypes) => state[SELECT_DRAG_KEY]);
  const CmpList = useSelector((state: stateTypes) => state[ACTION_BAR_KEY]);
  const dispatch = useDispatch();

  const [selectKey, setSelectKey] = useState<string[]>(['0']);

  const hanldelSelect = (e: { key: string }) => {
    setSelectKey([e.key]);
  };

  const setForm = () => {
    form.setFieldsValue({ ...selectItem });
  };

  const handleChangeSwitch = () => {
    // switch
  };

  const handleOnFieldsChange = (changedFields: any[], allFields: any[]) => {
    console.log(`obchangedFieldsject`, changedFields, allFields);
    const name = changedFields[0].name[0];
    const value = changedFields[0].value;
    console.log(`setting-selectItem`, { [name]: value });

    dispatch(modifyDrag({ [name]: value }));

    // formRef.current!.setFieldsValue({ ...selectItem, name: value });
  };

  useEffect(() => {
    selectItem && setForm();
  }, [selectItem, CmpList.length]);
  useEffect(() => {
    dispatch(selectDrag(selectItem));
  });

  useEffect(() => {
    if (!CmpList.length) {
      form.resetFields();
    }
  }, [CmpList]);

  console.log(`setting-select`, CmpList);
  return (
    <>
      <Menu
        selectedKeys={selectKey}
        mode="horizontal"
        onClick={hanldelSelect}
        className="right_menu"
      >
        <Menu.Item key="0">属性</Menu.Item>
        <Menu.Item key="1">高级</Menu.Item>
      </Menu>
      {selectKey[0] === '0' && CmpList.length ? (
        <div>
          <Form
            {...formItemLayout}
            form={form}
            // ref={formRef}
            onFieldsChange={handleOnFieldsChange}
          >
            <Item
              label="字段名"
              name="code"
              // rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input placeholder="请输入字段名" />
            </Item>
            <Item
              label="标题"
              name="title"
              // rules={[{ required: true, message: 'Please input your title!' }]}
            >
              <Input placeholder="请输入标题" />
            </Item>
            <Item
              label="占位提示"
              name="placeholder"
              // rules={[{ required: true, message: 'Please input your tip!' }]}
            >
              <Input placeholder="请输入占位提示" />
            </Item>
            <Item
              label="标签宽度"
              name="labelWidth"
              // rules={[
              //   { required: true, message: 'Please input your lable—width!' },
              // ]}
            >
              <InputNumber />
            </Item>
            <Item
              label="组件宽度"
              name="cptWidth"
              // rules={[
              //   { required: true, message: 'Please input your cmp—width!' },
              // ]}
            >
              <InputNumber />
            </Item>
            <Item
              label="默认值"
              name="defaultvalue"
              // rules={[
              //   { required: true, message: 'Please input your defalut-value!' },
              // ]}
            >
              <Input placeholder="请输入默认值" />
            </Item>
            <Item
              label="字符限制"
              name="maxlength"
              // rules={[
              //   { required: true, message: 'Please input your character-limit!' },
              // ]}
            >
              <InputNumber />
            </Item>
            <Item
              label="能否清空"
              name="clearable"
              valuePropName={selectItem?.clearable}
            >
              <Switch defaultChecked={true} />
            </Item>
            <Item
              label="显示标签"
              name="showLabel"
              valuePropName={selectItem?.showLabel}
            >
              <Switch onChange={handleChangeSwitch} defaultChecked={true} />
            </Item>
            <Item
              label="是否只读"
              name="readonly"
              valuePropName={selectItem?.readonly}
            >
              <Switch onChange={handleChangeSwitch} />
            </Item>
            <Item
              label="是否禁用"
              name="disabled"
              valuePropName={selectItem?.disabled}
            >
              <Switch onChange={handleChangeSwitch} />
            </Item>
          </Form>
        </div>
      ) : undefined}
      {selectKey[0] === '1' && CmpList.length ? '表单属性' : undefined}
    </>
  );
};
export default Settings;
