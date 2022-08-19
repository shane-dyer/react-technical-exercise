import React, { useEffect } from 'react';
import styled from 'styled-components';
import NoteContainer from './NoteContainer';
import AddNoteContainer from './AddNoteContainer';
import Title from './Title';

const Notes = styled.div`
  ${(props) => `background: ${props.theme.pageBackground};`}
  min-height: 100%;
  padding: 20px;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #themeToggle {
    border: 0;
    padding: 8px 16px;
    font-size: 12px;
    cursor: pointer;
  }
`;

const StyledNotes = ({ loadNotes, notes }) => {
  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  return (
    <Notes>
      <header>
        <Title>Notes</Title>
        <button type="button" id="themeToggle">
          Toggle theme
        </button>
      </header>
      <AddNoteContainer />
      {Object.values(notes).map((note) => {
        return <NoteContainer key={note.id} note={note} />;
      })}
    </Notes>
  );
};

export default StyledNotes;
