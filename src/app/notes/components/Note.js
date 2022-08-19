import React from 'react';
import styled from 'styled-components';

const Note = styled.div`
  ${(props) => `background: ${props.theme.noteBackgroundColor};`}
  ${(props) => `border: ${props.theme.noteBorder};`}
  ${(props) => `color: ${props.theme.pageText};`}
  ${(props) => `margin-bottom: ${props.theme.space[3]}px;`}
  ${(props) => `padding: ${props.theme.space[3]}px 0;`}
  ${(props) => `font-size: ${props.theme.fontSizes.gamma}px;`}
  ${(props) => `border-bottom: ${props.theme.noteBorderStyle};`}
  p {
    margin: 0;
  }
  button {
    cursor: pointer;
  }
`;

const StyledNote = ({ note, deleteNote }) => {
  const onDeleteClick = () => {
    deleteNote(note.id);
  };

  return (
    <Note>
      <p>{note.text}</p>
      <button type="button" onClick={onDeleteClick}>
        Delete
      </button>
    </Note>
  );
};

export default StyledNote;
