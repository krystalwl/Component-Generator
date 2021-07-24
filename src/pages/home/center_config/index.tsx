import React, { FC, useState } from 'react';
import { borderStyle } from '../home.type';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import { InputProps, _simpleConfigType } from '@/components/generator/type';
import { Input, Button, Form } from 'antd';

const Center: FC<any> = (props) => {
  const [dragList, setDragList] = useState([] as _simpleConfigType);

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
      // console.log('有东西上来了', item);
    },
  });
  console.log(`dragList`, dragList);

  const bg = collectProps.isOver ? '#f0f0f0' : '#fff';
  const content = collectProps.isOver ? '' : '拖拽组件或模版到这里';
  return (
    <div className="center_config" style={{ backgroundColor: bg }} ref={droper}>
      {!dragList.length && (
        <span
          // className={collectProps.isOver ? 'hasItem' : 'drager_canvas'}
          className="drager_canvas"
          style={borderStyle}
        >
          {content}
        </span>
      )}
      <Form>
        {dragList.map((ret: InputProps) => (
          <Form.Item label={ret.label}>
            <Input key={ret.id} placeholder={ret.placeholder} />
          </Form.Item>
        ))}
      </Form>
    </div>
  );
};

export default Center;
