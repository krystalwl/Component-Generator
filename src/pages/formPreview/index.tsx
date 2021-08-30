import { DragSource, DragPreviewImage } from 'react-dnd';
import connect from 'react-redux';

function FormPreview({ connectDragSource: any, connectDragPreview: any }) {
  return (
    <>
      <DragPreviewImage src="house_dragged.png" connect={connectDragPreview} />
      <div ref={connectDragSource}>🏠</div>
    </>
  );
}
export default DragSource((connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
}));
