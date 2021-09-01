import React, { useState, useEffect } from 'react';
import { Input, Menu, Form, InputNumber, Switch, Space, Button } from 'antd';
import '@/styles/home.less';
import { useSelector, useDispatch } from 'react-redux';
import {
  SELECT_DRAG_KEY,
  selectDrag,
  modifyDrag,
} from '@/store/select-drag.slice';
import { ACTION_BAR_KEY } from '@/store/actionBar.slice';
import { stateTypes } from '@/store/index.type';
import {
  MinusCircleOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';

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

  const handleOnFieldsChange = (changedFields: any[], allFields: any[]) => {
    console.log(`obchangedFieldsject`, changedFields, allFields);
    const name = changedFields[0].name[0];
    const value = changedFields[0].value;

    dispatch(modifyDrag({ [name]: value }));
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

  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

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
            onFieldsChange={handleOnFieldsChange}
          >
            <Item label="字段名" name="code">
              <Input placeholder="请输入字段名" />
            </Item>
            <Item label="标题" name="title">
              <Input placeholder="请输入标题" />
            </Item>
            <Item label="占位提示" name="placeholder">
              <Input placeholder="请输入占位提示" />
            </Item>
            <Item label="标签宽度" name="labelWidth">
              <InputNumber />
            </Item>
            <Item label="组件宽度" name="cptWidth">
              <InputNumber />
            </Item>
            <Item label="默认值" name="defaultvalue">
              <Input placeholder="请输入默认值" />
            </Item>
            <Item label="字符限制" name="maxlength">
              <InputNumber />
            </Item>
            <Item label="提示语" name="message">
              <Input />
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
              <Switch defaultChecked={true} />
            </Item>
            <Item
              label="是否只读"
              name="readonly"
              valuePropName={selectItem?.readonly}
            >
              <Switch />
            </Item>
            <Item
              label="是否禁用"
              name="disabled"
              valuePropName={selectItem?.disabled}
            >
              <Switch />
            </Item>
            <Item
              label="是否必填"
              name="required"
              valuePropName={selectItem?.required}
            >
              <Switch defaultChecked={true} />
            </Item>

            {/* <Item className="item_rules">
              <div className="tit">校验规则</div>
            </Item>
            {selectItem?.regList?.length &&
              selectItem.regList.map(
                (reg: { pattern: string; message: string }) => (
                  <>
                    <Item label="表达式" name="regList-pattern">
                      <Input value={reg.pattern} />
                    </Item>
                    <Item label="错误提示" name="regList-message">
                      <Input value={reg.message} />
                    </Item>
                  </>
                ),
              )} */}
          </Form>
          <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            onFieldsChange={handleOnFieldsChange}
          >
            <Form.List name="regList">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, fieldKey, ...restField }) => (
                    <>
                      <Form.Item
                        {...restField}
                        name={[name, 'pattern']}
                        fieldKey={[fieldKey, 'pattern']}
                        rules={[{ required: true, message: '请输入正则' }]}
                      >
                        <Input placeholder="请输入正则" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'message']}
                        fieldKey={[fieldKey, 'message']}
                        rules={[{ required: true, message: '请输入错误提示' }]}
                      >
                        <Input placeholder="请输入错误提示" />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      添加规则
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form>
        </div>
      ) : undefined}
      {selectKey[0] === '1' && CmpList.length ? '表单属性' : undefined}
    </>
  );
};
export default Settings;
