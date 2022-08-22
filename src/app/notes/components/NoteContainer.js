import { connect } from 'react-redux';
import { updateNote, deleteNote } from '../state';
import Note from './Note';

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    updateNote: (note) => {
      dispatch(updateNote(note));
    },
    deleteNote: (id) => {
      dispatch(deleteNote(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);
