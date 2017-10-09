import React from 'react';
import { removeNote } from '../actions/notesBoardActions';
import { connect } from 'react-redux';

export class Note extends React.Component {

  handleOnClickRemove = event => {
    this.props.removeNote(this.props.noteId)
  }

  render() {
    return (
      <div className='col-md-3' style={{ width:'200px', height:'200px', backgroundColor:'yellow', position: 'relative' }}>
        <textarea style={{ width: '100%', height: '80%', backgroundColor:'transparent', border: 'none', marginTop:'20%'}}></textarea>
        <span style={{ position: 'absolute' }} onClick={ this.handleOnClickRemove }>X</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeNote: (note) => {
      dispatch(removeNote(note));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
