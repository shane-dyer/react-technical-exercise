import { loadNotesRequest, addNoteRequest, deleteNoteRequest } from './service';

const ns = 'notes/';

export const LOAD_NOTES = `${ns}LOAD_NOTES`;
export const LOAD_NOTES_SUCCESS = `${ns}LOAD_NOTES_SUCCESS`;

export const ADD_NOTE = `${ns}ADD_NOTE`;
export const ADD_NOTE_SUCCESS = `${ns}ADD_NOTE_SUCCESS`;

export const DELETE_NOTE = `${ns}DELETE_NOTE`;
export const DELETE_NOTE_SUCCESS = `${ns}DELETE_NOTE_SUCCESS`;

export function loadNotes() {
  return {
    type: LOAD_NOTES,
    noteOperation: {
      request: loadNotesRequest(),
      success: loadNotesSuccess,
    },
  };
}

function loadNotesSuccess(notes) {
  return {
    type: LOAD_NOTES_SUCCESS,
    notes,
  };
}

export function addNote(text) {
  return {
    type: ADD_NOTE,
    noteOperation: {
      request: addNoteRequest(text),
      success: addNoteSuccess,
    },
  };
}

function addNoteSuccess(note) {
  return {
    type: ADD_NOTE_SUCCESS,
    note,
  };
}

export function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    noteOperation: {
      request: deleteNoteRequest(id),
      success: deleteNoteSuccess,
    },
  };
}

function deleteNoteSuccess(id) {
  return {
    type: DELETE_NOTE_SUCCESS,
    id,
  };
}
