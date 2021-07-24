import React, { FC, useState } from 'react';
import { Menu } from 'antd';
import './index.less';

const { Item } = Menu;

const Right: FC<any> = (props) => {
  const [selectKey, setSelectKey] = useState<string[]>(['0']);

  const hanldelSelect = (e: { key: string }) => {
    setSelectKey([e.key]);
  };
  return (
    <Menu
      selectedKeys={selectKey}
      mode="horizontal"
      onClick={hanldelSelect}
      className="right_menu"
    >
      <Item key="0">属性</Item>
      <Item key="1">高级</Item>
    </Menu>
  );
};

export default Right;
