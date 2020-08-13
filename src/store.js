// CONSTANTS
const TOGGLE_THEME = "TOGGLE_THEME";

// ACTIONS
export const toggleTheme = () => ({
  type: TOGGLE_THEME
});

// REDUSER
const HANDLERS = {
  [TOGGLE_THEME]: (state) => ({
    isDarkTheme: !state.isDarkTheme
  })
};
const initialState = {
  isDarkTheme: false
};
export const rootReducer = (state = initialState, action) => {
  const handler = HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
