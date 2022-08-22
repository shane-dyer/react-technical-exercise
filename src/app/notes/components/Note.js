import React from 'react';
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
  }
  button {
    padding: 8px 16px;
    border: 0;
    background-color: ${(props) => props.theme.buttonDeleteBackground};
    color: ${(props) => props.theme.buttonText};
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
      <button type="button" title="Delete note" aria-label="Delete note" onClick={onDeleteClick}>
        Delete
      </button>
    </Note>
  );
};

export default StyledNote;
