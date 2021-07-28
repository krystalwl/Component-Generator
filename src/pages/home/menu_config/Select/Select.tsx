import { config } from './config';
import { useDrag } from 'react-dnd';
import { Select as SelectImg } from '@/assets/imgs/index';
import '../index.less';
const Select = ({ item }) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: 'Select',
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
        <img src={SelectImg} />
      </div>
      <div className="drag_tip">{config.title}</div>
    </div>
  );
};

export { Select };
