import * as types from '../actions/actionTypes'
import initialState from '../store/initialState'

export default function reducer(state = initialState, action) {
  debugger
  switch(action.type) {
    case types.UPDATE_RANDOM_GUID :
      return {...state, guid: action.guid}
    case types.UPDATE_FORM_FIELD:
      return {...state, [action.name]: action.value}
    default:
      return {...state};
  }
}
