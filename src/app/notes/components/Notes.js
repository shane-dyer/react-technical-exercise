import React, { useEffect } from 'react';
import styled from 'styled-components';
import NoteContainer from './NoteContainer';
import AddNoteContainer from './AddNoteContainer';
import ThemeToggle from './ThemeToggle';
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
`;

const StyledNotes = ({ loadNotes, notes, theme, toggleTheme }) => {
  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  return (
    <Notes>
      <header>
        <Title>Notes</Title>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </header>
      <AddNoteContainer />
      {Object.values(notes).map((note) => {
        return <NoteContainer key={note.id} note={note} />;
      })}
    </Notes>
  );
};

export default StyledNotes;
