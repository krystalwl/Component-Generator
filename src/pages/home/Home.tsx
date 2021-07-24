import React, { FC, CSSProperties, useState, Fragment } from 'react';
import '@/styles/home.less';
import { SmileOutlined } from '@ant-design/icons';
import { Components, borderStyle } from './home.type';
import { useDrag } from 'react-dnd';
import { _simpleConfigType } from '@/components/generator/type';
import { _simpleConfigs } from '@/components/generator/config';
import { SimpleInput, MultipleInput } from '@/assets/imgs/index';
import Right from './right_config';
import Center from './center_config';

const Home: FC<any> = () => {
  const iteminfo = _simpleConfigs.map((info) => {
    return {
      id: info.__config__,
      type: info.__config__.code,
    };
  });
  console.log(`iteminfo`, iteminfo);
  // 拖拽组件 isDragging：收藏属性  drag：绑定拖拽源  dragPreview：提供预览
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: 'Home',
    item: iteminfo,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  console.log(`iteminfo`, iteminfo);

  return (
    <div className="contanier">
      <div className="left_config">
        <div className="logo_wrapper">
          <span>component Generator</span>
          <SmileOutlined />
        </div>
        <div className="config_wrapper">
          <div className="config_type">
            {Components.map((item) => (
              <div key={item.title}>
                <div className="conifg_title">{item.title}</div>
                <div className="confit_items">
                  {item.list.length &&
                    item.list.map((units) => (
                      <div>
                        <div
                          ref={drag}
                          className="drag_config"
                          key={units.__config__.code}
                        >
                          {units.__config__.code === 'el-simple-input' && (
                            <img src={SimpleInput} />
                          )}
                          {units.__config__.code === 'el-multiple-input' && (
                            <img src={MultipleInput} />
                          )}
                        </div>
                        <div className="drag_tip">{units.__config__.label}</div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Center />
      <div className="right_config">
        <Right />
      </div>
    </div>
  );
};
export default Home;
