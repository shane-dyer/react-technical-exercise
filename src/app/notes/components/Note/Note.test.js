import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import NoteContainer from './NoteContainer';
import { deleteNote } from '../../state';
import store from '../../../store';
import { lightTheme } from '../../../theme';

const note = {
  id: 1,
  text: 'Test note 1',
};

describe('Note component', () => {
  let component;

  beforeEach(() => {
    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <NoteContainer note={note} />
        </ThemeProvider>
      </Provider>
    );
  });

  it('should render with given state from redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render with passed props', () => {
    expect(component.root.findByType(NoteContainer).props.note.text).toBe(note.text);
  });

  it('should dispatch an action on delete button click', () => {
    renderer.act(() => {
      component.root.findByType('button').props.onClick();
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(deleteNote(note.id));
  });
});
