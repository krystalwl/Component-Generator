import Container from './layouts';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Provider } from 'react-redux';
import store from '@/store';

export default function IndexPage() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <Container />
      </Provider>
    </DndProvider>
  );
}
