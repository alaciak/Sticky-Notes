export const notesBoardReducer = (state = {
  notesList: [],
  loading: true
}, action) => {
  switch (action.type) {
    case "GET_NOTES_FULFILLED":
      state = {
        ...state,
        notesList: action.payload,
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
        loading: false
      };
      break;
  }
  return state;
};
