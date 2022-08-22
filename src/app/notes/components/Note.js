import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Note = styled.div`
  ${(props) => `background: ${props.theme.noteBackgroundColor};`}
  ${(props) => `border: ${props.theme.noteBorder};`}
  ${(props) => `color: ${props.theme.pageText};`}
  ${(props) => `padding: ${props.theme.space[3]}px 0;`}
  ${(props) => `font-size: ${props.theme.fontSizes.gamma}px;`}
  ${(props) => `border-bottom: ${props.theme.noteBorderStyle};`}
  &:hover {
    ${(props) => `background: ${props.theme.noteHoverBackground};`}
  }
  p {
    margin: 0;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.noteTextColor};
    }
  }
  input {
    display: block;
    font-size: 15px;
    background: ${(props) => props.theme.textFieldBackground};
    border: ${(props) => props.theme.textFieldBorderStyle};
    padding: 8px;
    margin: 0;
  }
  .delete-button {
    padding: 8px 16px;
    border: 0;
    background-color: ${(props) => props.theme.buttonDeleteBackground};
    color: ${(props) => props.theme.buttonText};
    cursor: pointer;
  }
  .hidden {
    display: none;
  }
`;

const StyledNote = ({ note, updateNote, deleteNote }) => {
  const inputRef = useRef(null);
  const [editing, setEditing] = useState(false); // State to trigger inline editing field

  const onTextChange = (event) => {
    updateNote({
      id: note.id,
      text: event.target.value,
    });
  };

  // Close the editing of note text on enter or escape key
  const onKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      setEditing(false);
    }
  };

  const onDeleteClick = () => {
    deleteNote(note.id);
  };

  // Add focus on input field after click on note text
  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  return (
    <Note>
      <div>
        {editing ? (
          <input ref={inputRef} type="text" value={note.text} onChange={onTextChange} onKeyDown={onKeyDown} />
        ) : (
          <p onClick={() => setEditing(true)}>{note.text}</p>
        )}
      </div>
      <button
        type="button"
        title="Delete note"
        aria-label="Delete note"
        className="delete-button"
        onClick={onDeleteClick}
      >
        Delete
      </button>
    </Note>
  );
};

export default StyledNote;
