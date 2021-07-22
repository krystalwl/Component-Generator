import Home from './Home';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
export default function IndexPage() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Home />
    </DndProvider>
  );
}
