import React, { useEffect, useState, useCallback, CSSProperties } from 'react';
import { DropTargetMonitor, useDrop } from 'react-dnd';
import { Input, Form, Select } from 'antd';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import {
  saveList,
  ACTION_BAR_KEY,
  deleteOne,
  copyOne,
} from '@/store/actionBar.slice';
import { SELECT_DRAG_KEY, selectDrag } from '@/store/select-drag.slice';
import { stateTypes } from '@/store/index.type';
import { CopyTwoTone, DeleteTwoTone } from '@ant-design/icons';

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
      dispatch(selectDrag(item));
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

  const handleChange = useCallback(
    (e: any, ret, index: number) => {
      let listClone = _.cloneDeep(CmpList);
      let itemClone = _.cloneDeep(selectItem);
      let val;
      val =
        ret?.type === 'Input'
          ? e.target.value
          : ret.type === 'Select'
          ? e
          : undefined;
      listClone[index]['defaultvalue'] = val;
      itemClone.defaultvalue = val;
      dispatch(saveList(listClone));
      dispatch(selectDrag(itemClone));
    },
    [selectItem],
  );

  useEffect(() => {
    if (!CmpList.length) dispatch(selectDrag({}));
  }, [CmpList.length]);

  useEffect(() => {
    if (!CmpList.length) return;
    let data = _.cloneDeep(CmpList);
    const index = CmpList.find((i, index) => {
      if (i.type === selectItem.type) {
        return index;
      }
    });
    data.splice(index, 1, selectItem);
    dispatch(saveList(data));
  }, [selectItem]);

  console.log(`CmpList`, CmpList);
  console.log(`selectItem`, selectItem);

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
              <Form.Item label={selectItem.showLabel && title} key={index}>
                <div onClick={() => handleClick(ret.code)}>
                  {ret.type === 'Input' && (
                    <Com
                      key={index}
                      onChange={(e, item, idx: number) =>
                        handleChange(e, ret, index)
                      }
                      placeholder={ret.placeholder}
                      allowClear={ret.allowClear}
                      disabled={ret.disabled}
                      showLabel={ret.showLabel}
                    />
                  )}
                  {ret.type === 'Select' && (
                    <Com
                      key={index}
                      onChange={(e, item, idx: number) =>
                        handleChange(e, ret, index)
                      }
                      placeholder={ret.placeholder}
                      disabled={ret.disabled}
                      allowClear={ret.allowClear}
                      showLabel={ret.showLabel}
                    >
                      {ret.options.map(
                        (opts: { key: string; value: any }, index: number) => {
                          return <Option value={opts.key}>{opts.value}</Option>;
                        },
                      )}
                    </Com>
                  )}
                  <DeleteTwoTone
                    twoToneColor="ff4d4f"
                    onClick={() => {
                      dispatch(deleteOne());
                    }}
                  />
                  <CopyTwoTone onClick={() => dispatch(copyOne(ret))} />
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
