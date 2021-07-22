import React, { FC, CSSProperties, useState } from 'react';
import '@/styles/home.less';
import { SmileOutlined } from '@ant-design/icons';
import { Components, borderStyle } from './home.type';
import { useDrag } from 'react-dnd';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import { Input } from 'antd';
import { InputProps, _simpleConfigType } from '@/components/generator/type';
import { _simpleConfigs } from '@/components/generator/config';
import simpleInput from '@/assets/imgs/simple-input.png';

const Home: FC<any> = () => {
  const [dragList, setDragList] = useState([] as _simpleConfigType);
  // 拖拽组件
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: 'Home',
    item: _simpleConfigs[0].__config__,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  // 拖拽区域
  const [collectProps, droper] = useDrop({
    accept: 'Home',
    drop: (item: InputProps) => {
      console.log(`item,monitor`, item, '落下来了');

      dragList.push(item);
      setDragList((data) => {
        return [...data];
      });
    },
    collect: (minoter: DropTargetMonitor) => ({
      isOver: minoter.isOver(),
      canDrop: minoter.canDrop(),
    }),
    hover: (item) => {
      console.log('有东西上来了', item);
    },
  });
  const bg = collectProps.isOver ? '#f0f0f0' : '#fff';
  const content = collectProps.isOver ? null : '拖拽组件或模版到这里';
  console.log(`Components[]`, Components);
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
                {item.list.length &&
                  item.list.map((units) => (
                    <div ref={drag} className="drag_config" style={borderStyle}>
                      <img src={simpleInput} />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="center_config"
        style={{ backgroundColor: bg }}
        ref={droper}
      >
        <span
          // className={collectProps.isOver ? 'hasItem' : 'drager_canvas'}
          className="drager_canvas"
          style={borderStyle}
        >
          {content}
        </span>
        {dragList.map((ret: InputProps) => (
          <Input key={ret.id} placeholder={ret.placeholder} />
        ))}
      </div>

      <div className="right_config">33</div>
    </div>
  );
};
export default Home;
