import update from 'immutability-helper';

export const notesBoardReducer = (state = {
  notesList: [],
  loading: true
}, action) => {
  switch (action.type) {
    case "GET_NOTES_FULFILLED":
      state = {
        ...state,
        notesList: action.payload.sort((a, b) => a.index - b.index),
        loading: false
      };
      break;
    case "ADD_NOTE_FULFILLED":
      state = {
        ...state,
        loading: false
      };
      break;
    case "UPDATE_NOTE_FULFILLED":
      state = {
        ...state,
        loading: false
      };
      break;
    case "REMOVE_NOTE_FULFILLED":
      state = {
        ...state,
        notesList: state.notesList.filter(el => el.id !== action.payload),
        loading: false
      };
      break;
    case "MOVE_NOTE":
      state =
        update(state, {
          notesList: {
            $splice: [[action.payload.dragIndex, 1], [action.payload.hoverIndex, 0, state.notesList[action.payload.dragIndex]]],
          },
        });
      break;
    case "UPDATE_NOTE_POSITION_FULFILLED":
      const arrayIndex = state.notesList.map(note => note.id).indexOf(action.payload.noteId);
      state =
        update(state, {
          notesList: {
            [arrayIndex]: {
              index: { $set: action.payload.noteIndex }
            }
          },
        });
      break;
  }
  return state;
};
