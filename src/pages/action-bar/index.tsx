import React from 'react';
import { Button, message, Popconfirm } from 'antd';
import {
  RightCircleTwoTone,
  SaveTwoTone,
  DeleteTwoTone,
} from '@ant-design/icons';
// import { deleteAll } from '@/store/actions/action-bar';
// import { connect } from 'react-redux';
import { history } from 'umi';
import { useSelector, useDispatch } from 'react-redux';
import action_bar_reducer, {
  ACTION_BAR_KEY,
  deleteAll,
} from '@/store/actionBar.slice';
import { stateTypes } from '@/store/index.type';

const ActionBar = () => {
  const list = useSelector((state: stateTypes) => state[ACTION_BAR_KEY]);
  const dispatch = useDispatch();
  const formPreview = () => {
    history.push('/formPreview');
  };

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
        onClick={formPreview}
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
        onConfirm={() => dispatch(deleteAll())}
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

// const mapStateToProps = (state) => {
//   return {
//     list: state.actionBarReducer.list,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     hanldeDeleteAll: () => dispatch(deleteAll()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);
export default ActionBar;
