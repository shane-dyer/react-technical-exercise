import { connect } from 'react-redux';
import { deleteNote } from '../state';
import Note from './Note';

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteNote: (id) => {
      dispatch(deleteNote(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);
