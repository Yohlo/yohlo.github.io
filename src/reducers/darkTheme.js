function darkTheme (state=false, action) {
  switch(action.type) {
    case 'TOGGLE_DARK_THEME':
      return !state;
    default:
      return state;
  }
}

export default darkTheme;