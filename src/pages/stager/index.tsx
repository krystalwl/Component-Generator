import React, { useEffect, useState, useCallback, CSSProperties } from 'react';
import { DropTargetMonitor, useDrop } from 'react-dnd';
import { Input, Form, Select } from 'antd';
import { connect } from 'react-redux';
// import { saveList } from '@/store/actions/action-bar';
// import { handleSelectItem } from '@/store/actions/select-drag';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { saveList, ACTION_BAR_KEY } from '@/store/actionBar.slice';
import { SELECT_DRAG_KEY, selectDrag } from '@/store/select-drag.slice';
import { stateTypes } from '@/store/index.type';

const borderStyle: CSSProperties = {
  border: '1px dashed #cdd2d9',
};

const config = {
  Input,
  Select,
};

const Stager = (props: any) => {
  const CmpList = useSelector((state: stateTypes) => state[ACTION_BAR_KEY]);
  const selectItem = useSelector((state: stateTypes) => state[SELECT_DRAG_KEY]);
  const dispatch = useDispatch();

  const [collectProps, droper] = useDrop({
    accept: ['Input', 'Select'],
    drop: (item) => {
      let list = _.cloneDeep(CmpList);
      list.push(item);
      dispatch(saveList(list));
    },
    collect: (minoter: DropTargetMonitor) => ({
      isOver: minoter.isOver(),
      canDrop: minoter.canDrop(),
    }),
    hover: (item) => {},
  });

  const handleClick = (code: string) => {
    const item = CmpList?.find((i: any) => i.code === code);
    dispatch(selectDrag(item));
  };

  const handleChange = (e: any, ret, index: number) => {
    let listClone = _.cloneDeep(CmpList);
    let itemClone = _.cloneDeep(selectItem);
    let val;
    val =
      ret.type === 'Input'
        ? e.target.value
        : ret.type === 'Select'
        ? e
        : undefined;
    listClone[index]['defaultvalue'] = val;
    itemClone.defaultvalue = val;
    console.log(`val`, val);
    dispatch(saveList(listClone));
    dispatch(selectDrag(itemClone));
  };
  useEffect(() => {
    if (!CmpList.length) dispatch(selectDrag({}));
  }, [CmpList.length]);

  const bg = collectProps.isOver ? '#f0f0f0' : '#fff';
  const content = collectProps.isOver ? '' : '拖拽组件到这里';
  return (
    <div ref={droper} style={{ height: '100vh', backgroundColor: bg }}>
      {CmpList.length ? (
        CmpList.map((ret, index) => {
          const Com = config[ret.type];
          const title = props[ret.type] ? props[ret.type].title : ret.title;
          return (
            <Form>
              <Form.Item label={title} key={index}>
                <div onClick={() => handleClick(ret.code)}>
                  <Com
                    key={index}
                    onChange={(e, item, idx) => handleChange(e, ret, index)}
                    allowClear
                  />
                </div>
              </Form.Item>
            </Form>
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

export default Stager;
