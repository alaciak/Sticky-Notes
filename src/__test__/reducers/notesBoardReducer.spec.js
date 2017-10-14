import { notesBoardReducer } from '../../app/reducers/notesBoardReducer';

describe('notesBoardReducer', () => {

  const testNotesList = [
    {id: 1, 'text': 'note-1'},
    {id: 2, 'text2': 'note-2'},
    {id: 3, 'text3': 'note-3'}
  ];

  const testState = {
    notesList: testNotesList
  };

  it('should return initial state', () => {
    expect(notesBoardReducer(undefined, {})).toEqual({
      notesList: [],
      loading: true
    });
  });

  it('should handle GET_NOTES_FULFILLED', () => {
    expect(notesBoardReducer(undefined, {
      type: 'GET_NOTES_FULFILLED',
      payload: testNotesList
    })).toEqual({
      notesList: testNotesList,
      loading: false
    });
  });

  it('should handle ADD_NOTE_FULFILLED', () => {
    expect(notesBoardReducer(undefined, {
      type: 'ADD_NOTE_FULFILLED',
    })).toEqual({
      notesList: [],
      loading: false
    });
  });

  it('should handle UPDATE_NOTE_FULFILLED', () => {
    expect(notesBoardReducer(undefined, {
      type: 'UPDATE_NOTE_FULFILLED',
    })).toEqual({
      notesList: [],
      loading: false
    });
  });

  it('should handle REMOVE_NOTE_FULFILLED', () => {
    const notesList = notesBoardReducer(testState, {
      type: 'REMOVE_NOTE_FULFILLED',
      payload: 2
    }).notesList;
    expect(notesList.length).toEqual(2);
    const noteIds = notesList.map(el => el.id);
    expect(noteIds).not.toContain(2);
  });

  it('should handle MOVE_NOTE', () => {
    const notesList = notesBoardReducer(testState, {
      type: 'MOVE_NOTE',
      payload: { dragIndex: 0, hoverIndex: 1 }
    }).notesList;
    expect(notesList.map(el => el.id)).toEqual([2, 1, 3]);
  });

  it('should handle UPDATE_NOTE_POSITION_FULFILLED', () => {
    const stateBroken = {
      notesList: [
        {index: 0, id: 0, 'text': 'note-1'},
        {index: 1, id: 1, 'text2': 'note-2'},
        {index: 4, id: 2, 'text3': 'note-3'}
      ]
    };

    const notesList = notesBoardReducer(stateBroken, {
      type: 'UPDATE_NOTE_POSITION_FULFILLED',
      payload: { noteId: 2, noteIndex: 2 }
    }).notesList;
    expect(notesList.find(el => el.id === 2).index).toEqual(2);
  });

});
