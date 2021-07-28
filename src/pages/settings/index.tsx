import { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '@/store/actions/drag-action';
import { Input, Menu } from 'antd';
import '@/styles/home.less';
import ProForm, {
  ProFormText,
  ProFormRadio,
  ProFormDigit,
} from '@ant-design/pro-form';

type LayoutType = Parameters<typeof ProForm>[0]['layout'];

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const { Item } = Menu;
const Settings = (props) => {
  const [selectKey, setSelectKey] = useState<string[]>(['0']);

  const hanldelSelect = (e: { key: string }) => {
    setSelectKey([e.key]);
  };

  return (
    <>
      <Menu
        selectedKeys={selectKey}
        mode="horizontal"
        onClick={hanldelSelect}
        className="right_menu"
      >
        <Item key="0">属性</Item>
        <Item key="1">高级</Item>
      </Menu>
      {selectKey[0] === '0' && (
        // <Form>
        //   单行文本：
        //   <Input
        //     onChange={(e) => {
        //       props.updateInput(e.target.value);
        //     }}
        //   />
        // </Form>
        <ProForm<{
          name: string;
          company?: string;
          useMode?: string;
        }>
          {...formItemLayout}
          layout="horizontal"
          onFinish={async (values) => {
            await waitTime(2000);
            console.log(values);
          }}
          params={{}}
          request={async () => {
            await waitTime(100);
            return {
              // name: '蚂蚁设计有限公司',
              // useMode: 'chapter',
            };
          }}
          style={{ margin: '20px' }}
        >
          <ProFormText
            width="md"
            name="name"
            label="字段名"
            placeholder="请输入字段名"
          />
          <ProFormText
            width="md"
            name="title"
            label="标题"
            placeholder="请输入标题"
          />
          <ProFormText
            width="md"
            name="tip"
            label="占位提示"
            placeholder="请输入占位提示"
          />
          <ProFormDigit
            label="标签宽度"
            name="lable—width"
            width="sm"
            min={1}
            max={300}
          />
          <ProFormDigit
            label="组件宽度"
            name="cmp—width"
            width="sm"
            min={1}
            max={300}
          />
          <ProFormText
            width="md"
            name="defalut-value"
            label="默认值"
            placeholder="请输入默认值"
          />
          <ProFormDigit label="字符限制" width="sm" name="character-limit" />
        </ProForm>
      )}
      {selectKey[0] === '1' && '表单属性'}
    </>
  );
};

export default Settings;
