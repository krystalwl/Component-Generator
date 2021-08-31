import { config } from './config';
import { useDrag } from 'react-dnd';
import { SimpleInput } from '@/assets/imgs/index';
import { modifyDrag, SELECT_DRAG_KEY } from '@/store/select-drag.slice';
import { useSelector, useDispatch } from 'react-redux';
import { stateTypes } from '@/store/index.type';

import '../index.less';

const Input = ({ item }) => {
  const selectItem = useSelector((state: stateTypes) => state[SELECT_DRAG_KEY]);
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: 'Input',
    item: {
      ...config,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className="common_drag_wrapper">
      <div className="drag_img">
        <img src={SimpleInput} />
      </div>
      <div className="drag_tip">{config.title}</div>
    </div>
  );
};

export { Input };
