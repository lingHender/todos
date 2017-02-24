
import { handleActions } from 'redux-actions'

const initialState = 'ALL' || 'DONE' || 'UNDO';

export default handleActions({
  'CHANGE_FILTER' (state, action) {
    return action.payload.filter
  },
}, initialState)
