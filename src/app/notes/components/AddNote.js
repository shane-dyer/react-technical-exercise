import React, { useState } from 'react';
import styled from 'styled-components';

const AddNote = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.addNoteBackground};
  padding: 8px 16px;
  border-radius: 5px;
  label {
    color: ${(props) => props.theme.label};
  }
  input {
    background: ${(props) => props.theme.textFieldBackground};
    border: ${(props) => props.theme.textFieldBorderStyle};
    padding: 8px;
    margin: 0 16px;
    &:focus {
      background: ${(props) => props.theme.textFieldFocusBackground};
    }
  }
  button {
    padding: 8px 16px;
    border: 0;
    background-color: ${(props) => props.theme.buttonBackground};
    color: ${(props) => props.theme.buttonText};
    cursor: pointer;
  }
`;

const StyledAddNote = ({ addNote }) => {
  const [text, setText] = useState('');

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onButtonClick = () => {
    if (text) {
      addNote(text);
      setText('');
    }
  };

  return (
    <AddNote id="addNoteWrapper">
      <label htmlFor="addNote">Add another:</label>
      <input type="text" id="addNote" value={text} placeholder="Text for new note" onChange={onTextChange} />
      <button type="button" title="Add note" aria-label="Add note" onClick={onButtonClick}>
        Add
      </button>
    </AddNote>
  );
};

export default StyledAddNote;
