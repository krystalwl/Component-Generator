import React from 'react';
import { Button, message, Popconfirm } from 'antd';
import {
  RightCircleTwoTone,
  SaveTwoTone,
  DeleteTwoTone,
} from '@ant-design/icons';
import { deleteAll } from '@/store/actions/action-bar';
import { connect } from 'react-redux';

const ActionBar = (props) => {
  return (
    <div className="action_bar">
      <Button
        icon={
          <RightCircleTwoTone
            twoToneColor="#409EFF"
            style={{ fontSize: '16px' }}
          />
        }
        type="link"
      >
        预览
      </Button>
      <Button
        className="copy-btn-main"
        icon={
          <SaveTwoTone twoToneColor="#409EFF" style={{ fontSize: '16px' }} />
        }
        type="link"
      >
        保存
      </Button>
      <Popconfirm
        title="确定要清空所有组件吗?"
        onConfirm={props.hanldeDeleteAll}
        okText="确定"
        cancelText="取消"
      >
        <Button
          className="delete-btn"
          icon={
            <DeleteTwoTone
              twoToneColor="#f56c6c"
              style={{ fontSize: '16px' }}
            />
          }
          type="text"
          danger
        >
          清空
        </Button>
      </Popconfirm>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.actionBarReducer.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hanldeDeleteAll: () => dispatch(deleteAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);
