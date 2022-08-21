const global = {
  space: [0, 4, 8, 16, 32],
  fontSizes: {
    alpha: 48,
    beta: 32,
    gamma: 24,
    epsilon: 16,
  },
};

const lightTheme = {
  ...global,
  pageBackground: 'papayawhip',
  pageTitle: 'blueViolet',
  pageText: 'slategrey',
  noteBackground: '#f8f8f8',
  noteHoverBackground: '#fbe2e2',
  noteBorderStyle: '1px solid rgba(0,0,0,0.1)',
  label: 'slateGrey',
  textFieldBackground: '#f8f8f8',
  textFieldFocusBackground: 'lightsteelblue',
  textFieldBorderStyle: '0',
  buttonText: 'white',
  buttonBackground: 'blueViolet',
  buttonDeleteBackground: 'red',
  buttonThemeBackground: 'rgba(0,0,0, 0.06)',
  addNoteBackground: 'rgba(0,0,0, 0.05)',
};

const darkTheme = {
  ...global,
  pageBackground: '#222',
  pageTitle: 'blueViolet',
  pageText: '#ddd',
  noteBackground: '#333',
  noteHoverBackground: 'rgba(255,255,255, 0.08)',
  noteBorderStyle: '1px solid rgba(255,255,255,0.1)',
  label: '#ddd',
  textFieldBackground: '#f8f8f8',
  textFieldFocusBackground: 'lightsteelblue',
  textFieldBorderStyle: '0',
  buttonText: 'white',
  buttonBackground: 'blueViolet',
  buttonDeleteBackground: 'red',
  buttonThemeBackground: 'rgba(255,255,255, 0.15)',
  addNoteBackground: 'rgba(255,255,255, 0.08)',
};

export { lightTheme, darkTheme };
