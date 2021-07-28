import { Row, Col } from 'antd';
import * as menus from './menu_config';
import Stager from '../stager';
import Settings from '../settings';
import { connect } from 'react-redux';
import * as actions from '@/store/action';
import { SmileOutlined } from '@ant-design/icons';
import '@/styles/home.less';

const Container = (props) => {
  return (
    <div className="contanier">
      <div className="left_config">
        <div className="logo_wrapper">
          <span>component Generator</span>
          <SmileOutlined />
        </div>
        <div className="config_wrapper">
          <div className="config_type">
            <div className="conifg_title">普通控件</div>
            <div className="config_items">
              {Object.keys(menus).map((key, index) => {
                const Com = menus[key];
                return <Com key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="center_config">
        <Stager />
      </div>
      <div className="right_config">
        <Settings {...props} />
      </div>
    </div>
  );
};

const mapStateDispatch = (state) => {
  return {
    input: state.input,
  };
};

const mapDispatch = (dispatch) => {
  return Object.keys(actions).reduce((prev, cur) => {
    prev[cur] = (payload) => dispatch(actions[cur](payload));

    return prev;
  }, {});
};

export default connect(mapStateDispatch, mapDispatch)(Container);
