import { getNotes, addNote, updateNote, removeNote  } from '../../app/actions/notesBoardActions';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

describe('notesBoardActions', () => {

  const middlewares = [promise(), thunk];
  const mockStore = configureMockStore(middlewares);

  it('should dispatch GET_NOTES_PENDING and GET_NOTES_FULFILLED when fetching data', () => {
    nock('http://localhost:3000/')
      .get('/notes')
      .reply(200, { body: []});

    const expectedActions = ['GET_NOTES_PENDING', 'GET_NOTES_FULFILLED'];
    const store = mockStore({notesList: []});

    store.dispatch(getNotes()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions.map(action => action.type)).toEqual(expectedActions);
    });

  });

  it('should dispatch ADD_NOTE_PENDING, ADD_NOTE_FULFILLED, GET_NOTES_PENDING and GET_NOTES_FULFILLED when fetching data', () => {
    nock('http://localhost:3000/')
      .post('/notes')
      .reply(200, { body: []});
    nock('http://localhost:3000/')
      .get('/notes')
      .reply(200, { body: []});

    const expectedActions = ['ADD_NOTE_PENDING', 'ADD_NOTE_FULFILLED', 'GET_NOTES_PENDING', 'GET_NOTES_FULFILLED'];
    const store = mockStore({});

    store.dispatch(addNote()).then().then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions.map(action => action.type)).toEqual(expectedActions);
    });

  });

  it('should dispatch UPDATE_NOTE_PENDING and UPDATE_NOTE_FULFILLED when fetching data', () => {
    nock('http://localhost:3000/')
      .put('/notes/1')
      .reply(200, { body: []});

    const testNote = {id: 1, text: 'test'};
    const expectedActions = ['UPDATE_NOTE_PENDING', 'UPDATE_NOTE_FULFILLED'];
    const store = mockStore({});

    store.dispatch(updateNote(testNote)).then().then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions.map(action => action.type)).toEqual(expectedActions);
    });

  });

  it('should dispatch REMOVE_NOTE_PENDING and REMOVE_NOTE_FULFILLED when fetching data', () => {
    nock('http://localhost:3000/')
      .delete('/notes/1')
      .reply(200, { body: []});
    nock('http://localhost:3000/')
      .get('/notes')
      .reply(200, { body: []});

    const expectedActions = ['REMOVE_NOTE_PENDING', 'REMOVE_NOTE_FULFILLED'];
    const store = mockStore({});

    store.dispatch(removeNote('1')).then().then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions.map(action => action.type)).toEqual(expectedActions);
    });

  });

});
