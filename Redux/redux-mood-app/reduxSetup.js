const INITIAL_STATE = { mood: "🫥" }
const moodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'HAPPY':
      return { ...state, mood: action.payload }
    case 'SAD':
      return { ...state, mood: action.payload }
    case 'MINDBLOWN':
      return { ...state, mood: action.payload }
    case 'LOVE':
      return { ...state, mood: action.payload }
    default:
      return state
  }
}

const store = Redux.createStore(moodReducer);
