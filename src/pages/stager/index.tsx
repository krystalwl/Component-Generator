import React, { useEffect, useState, useCallback, CSSProperties } from 'react';
import { DropTargetMonitor, useDrop } from 'react-dnd';
import { Input, Form, Select } from 'antd';
import { connect } from 'react-redux';
import { saveList } from '@/store/actions/action-bar';

const borderStyle: CSSProperties = {
  border: '1px dashed #cdd2d9',
};

const config = {
  Input,
  Select,
};

const Stager = (props) => {
  const { CmpList, saveListData } = props;

  const [collectProps, droper] = useDrop({
    accept: ['Input', 'Select'],
    drop: (item) => {
      CmpList.push(item);
      saveListData(CmpList);
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
      {CmpList.length ? (
        CmpList.map((ret, index) => {
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
    Input: state.dragrReducer.input,
    Select: state.dragrReducer.select,
    CmpList: state.actionBarReducer?.list || [],
  };
};

const mapStateToProps = (dispatch) => {
  return {
    saveListData: (list: []) => dispatch(saveList(list)),
  };
};

export default connect(mapStateDispatch, mapStateToProps)(Stager);
