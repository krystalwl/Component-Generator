import React, { useEffect, useState, useCallback, CSSProperties } from 'react';
import { DropTargetMonitor, useDrop } from 'react-dnd';
import { Input, Form, Select } from 'antd';
import { connect } from 'react-redux';
import { saveList } from '@/store/actions/action-bar';
import { handleSelectItem } from '@/store/actions/select-drag';
import _ from 'lodash';

const borderStyle: CSSProperties = {
  border: '1px dashed #cdd2d9',
};

const config = {
  Input,
  Select,
};

const Stager = (props) => {
  const { CmpList, saveListData, selectItem, selectItemClick } = props;
  console.log(`jijjij`, selectItem);

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

  const handleClick = (code: string) => {
    const item = CmpList?.find((i: any) => i.code === code);
    selectItemClick(item);
  };

  const handleChange = (e, ret, index: number) => {
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
    saveListData(listClone);
    selectItemClick(itemClone);
  };
  useEffect(() => {
    if (!CmpList.length) selectItemClick({});
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
                    key={ret.type}
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

const mapStateDispatch = (state) => {
  return {
    Input: state.dragrReducer.input,
    Select: state.dragrReducer.select,
    CmpList: state.actionBarReducer?.list || [],
    selectItem: state.selectDragReducer?.state,
  };
};

const mapStateToProps = (dispatch) => {
  return {
    saveListData: (list: []) => dispatch(saveList(list)),
    selectItemClick: (selectItem: {}) => dispatch(handleSelectItem(selectItem)),
  };
};

export default connect(mapStateDispatch, mapStateToProps)(Stager);
