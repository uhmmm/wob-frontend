import { combineReducers } from 'redux'

import { CREATE_PERIOD } from '../actions/periods'

export const periodsById = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PERIOD:
      return { ...state, [action.payload.periodId]: action.payload }
    default:
      return state
  }
}

function allPeriods(state = [], action) {
  switch (action.type) {
    case CREATE_PERIOD:
      return [...new Set([...state, action.payload.periodId])]
    default:
      return state
  }
}

export const periods = combineReducers({
  byId: periodsById,
  allIds: allPeriods
})

export const getPeriodById = (state, periodId) => {
  return state.periods.byId[periodId]
}
