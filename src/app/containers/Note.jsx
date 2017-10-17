import React from 'react';
import { findDOMNode } from 'react-dom';
import { removeNote, updateNote, moveNote, updateNotesPositions } from '../actions/notesBoardActions';
import { connect } from 'react-redux';
import { DragSource } from 'react-dnd';
import { DropTarget } from 'react-dnd';
import AlertContainer from 'react-alert';

const types = {
  note: 'note'
};

const noteSource = {
  beginDrag(props) {
		return {
			id: props.id,
			index: props.index,
		}
  },
  endDrag(props, monitor, component) {
    props.updateNotesPositions(props.note.id, monitor.getItem().index)
  }
};

const noteTarget = {
	hover(props, monitor, component) {
		const dragIndex = monitor.getItem().index;
		const hoverIndex = props.index;

		if (dragIndex === hoverIndex) {
			return;
		}
		const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
		const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
		const hoverMiddleY = (hoverBoundingRect.top - hoverBoundingRect.bottom) / 2;
		const clientOffset = monitor.getClientOffset();
		const hoverClientX = clientOffset.x - hoverBoundingRect.left;
		const hoverClientY = clientOffset.y - hoverBoundingRect.bottom;

		if ((dragIndex < hoverIndex && hoverClientX < hoverMiddleX) && (dragIndex < hoverIndex && hoverClientY < hoverMiddleY)) {
			return;
		}
		if ((dragIndex > hoverIndex && hoverClientX > hoverMiddleX) && (dragIndex > hoverIndex && hoverClientY > hoverMiddleY)) {
			return;
		}
		props.moveNote(dragIndex, hoverIndex);
		monitor.getItem().index = hoverIndex
	},
};

function collectTarget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
}

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

export class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        id: this.props.noteId,
        text: this.props.note.text,
        background: this.props.note.background,
        index: this.props.index
      },
      isDirty: false
    }
  }

  handleOnClickRemove = event => {
    this.props.removeNote(this.props.noteId);
    this.props.showAlert();
  }

  handleOnChangeText = event => {
    this.setState({
      note: {
        ...this.state.note,
        text: event.target.value
      },
      isDirty: true
    });
  }

  handleOnBlurUpdate = event => {
    if(this.state.isDirty) {
      this.props.updateNote(this.state.note);
      this.props.showAlert();
      this.setState({
        isDirty: false
      })
    }
  }

  render() {
    const {	id, text, isDragging, connectDragSource, connectDropTarget } = this.props;
    return (
      connectDragSource(connectDropTarget(<div className='col-md-3 note_text'>
        <div className='note_text--textarea' style={{ backgroundColor: this.props.note.background, opacity: isDragging ? 0.5 : 1 }}>
          <textarea name='textarea' style={{ }} value={ this.state.note.text } onChange={ this.handleOnChangeText } onBlur={ this.handleOnBlurUpdate }></textarea>
          <span style={{ position: 'absolute' }} onClick={ this.handleOnClickRemove }>&times;</span>
          </div>
        </div>
      ))
    );
  }
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeNote: (noteId) => {
      dispatch(removeNote(noteId));
    },
    updateNote: (note) => {
      dispatch(updateNote(note))
    },
    moveNote: (dragIndex, hoverIndex) =>{
      dispatch(moveNote(dragIndex, hoverIndex))
    },
    updateNotesPositions: (noteId, noteIndex) =>{
      dispatch(updateNotesPositions(noteId, noteIndex))
    }
  };
};

Note = DropTarget(types.note, noteTarget, collectTarget)(DragSource(types.note, noteSource, collectSource)(Note));

export default connect(mapStateToProps, mapDispatchToProps)(Note);
