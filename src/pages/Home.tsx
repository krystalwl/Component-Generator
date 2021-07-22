import React, { FC, CSSProperties, useState } from 'react';
import '@/styles/home.less';
import { SmileOutlined } from '@ant-design/icons';
import { Components } from './home.type';
import { useDrag } from 'react-dnd';
import { useDrop, DropTargetMonitor, DragSourceMonitor } from 'react-dnd';
import { Input } from 'antd';

const style: CSSProperties = {
  width: 100,
  height: 50,
  lineHeight: '50px',
  background: 'pink',
  margin: '30px auto',
};

const Home: FC<any> = () => {
  const [dragList, setDragList] = useState([]);
  // 拖拽组件
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    // "type" is required. It is used by the "accept" specification of drop targets.
    type: 'Home',
    item: 1,
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  // 拖拽区域
  const [collectProps, droper] = useDrop({
    // accept 是一个标识，需要和对应的 drag 元素中 item 的 type 值一致，否则不能感应
    accept: 'Home',
    // collect 函数，返回的对象会成为 useDrop 的第一个参数，可以在组件中直接进行使用
    drop: (item, monitor) => {
      if (monitor.isOver()) {
      }
      console.log(`item,monitor`, item, '落下来了');
    },
    collect: (minoter: DropTargetMonitor) => ({
      isOver: minoter.isOver(),
      canDrop: minoter.canDrop(),
    }),
    hover: (item) => {
      console.log('有东西上来了', item);
    },
  });
  const bg = collectProps.isOver ? 'deeppink' : 'white';
  return (
    <div className="contanier">
      <div className="left_config">
        <div className="logo_wrapper">
          component Generator
          <SmileOutlined />
        </div>
        <div className="config_wrapper">
          <div className="config_type">
            {Components.map((item) => (
              <div key={item.title}>
                <div>{item.title}</div>
                <div>
                  {item.list.length &&
                    item.list.map((units) => (
                      <div ref={drag}>
                        <Input size="small" />
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="center_config" style={{ background: bg }} ref={droper}>
        拖拽组件或模版到这里
      </div>

      <div className="right_config">33</div>
    </div>
  );
};
export default Home;
