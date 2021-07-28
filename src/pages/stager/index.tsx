import React, { useEffect, useState, useCallback, CSSProperties } from 'react';
import { DropTargetMonitor, useDrop } from 'react-dnd';
import { Input, Form } from 'antd';
import { connect } from 'react-redux';

const borderStyle: CSSProperties = {
  border: '1px dashed #cdd2d9',
};

const config = {
  Input,
};

const Stager = (props) => {
  const [list, setList] = useState([]);

  const [collectProps, droper] = useDrop({
    accept: ['Input', 'Select'],
    drop: (item) => {
      list.push(item);
      setList(list);
    },
    collect: (minoter: DropTargetMonitor) => ({
      isOver: minoter.isOver(),
      canDrop: minoter.canDrop(),
    }),
    hover: (item) => {},
  });

  const bg = collectProps.isOver ? '#f0f0f0' : '#fff';
  const content = collectProps.isOver ? '' : '拖拽组件到这里';

  return (
    <div ref={droper} style={{ height: '100vh', backgroundColor: bg }}>
      {list.length ? (
        list.map((ret, index) => {
          const Com = config[ret.type];
          const title = props[ret.type] ? props[ret.type].title : ret.title;

          return (
            <Form.Item label={title} key={index}>
              <Com key={ret.type} />
            </Form.Item>
          );
        })
      ) : (
        <span className="drager_canvas" style={borderStyle}>
          {content}
        </span>
      )}
    </div>
  );
};

const mapStateDispatch = (state) => {
  return {
    Input: state.input,
  };
};

export default connect(mapStateDispatch, {})(Stager);
