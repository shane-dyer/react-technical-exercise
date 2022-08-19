import { connect } from 'react-redux';
import { loadNotes } from '../state';
import Notes from './Notes';

function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadNotes: () => {
      dispatch(loadNotes());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
