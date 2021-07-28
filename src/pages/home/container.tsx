import * as menus from './menu_config';
import Stager from '../stager';
import Settings from '../settings';
import ActionBar from '../action-bar';
import { connect } from 'react-redux';
import * as actions from '@/store/actions/drag-action';
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
        <ActionBar />
        <Stager />
      </div>
      <div className="right_config">
        <Settings {...props} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(`state`, state);
  return {
    input: state.dragrReducer.input,
    select: state.dragrReducer.select,
  };
};

const mapDispatchToProps = (dispatch) => {
  return Object.keys(actions).reduce((prev, cur) => {
    prev[cur] = (payload) => dispatch(actions[cur](payload));

    return prev;
  }, {});
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
