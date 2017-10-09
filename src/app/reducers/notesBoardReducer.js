export const notesBoardReducer = (state = {
  notesList: []
}, action) => {
  switch (action.type) {
    case "ADD_NEW":
      state = {
        ...state,
        notesList: [...state.notesList, { id: action.payload }]
      };
      break;
    case "REMOVE_NOTE":
      const newList = state.notesList.filter((note) => {
        return note.id !== action.payload;
      })
      state = {
        ...state,
        notesList: newList
      };
      break;
  }
  return state;
};
