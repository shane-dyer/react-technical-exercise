import { connect } from 'react-redux';
import { addNote } from '../state';
import AddNote from './AddNote';

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addNote: (text) => {
      dispatch(addNote(text));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);
