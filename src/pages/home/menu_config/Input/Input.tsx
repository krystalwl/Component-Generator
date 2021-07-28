import { config } from './config';
import { useDrag } from 'react-dnd';
import { SimpleInput } from '@/assets/imgs/index';
import '../index.less';

const Input = ({ item }) => {
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
