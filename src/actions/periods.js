import uuid from 'uuid/v4'
import models from './models'

export const CREATE_PERIOD = 'CREATE_PERIOD'
export const SET_PERIOD_VARIABLE = 'SET_PERIOD_VARIABLE'

export const createPeriod = letterId => {
  return {
    type: CREATE_PERIOD,
    payload: {
      ...models.periods,
      periodId: uuid(),
      letterId
    }
  }
}

export const setPeriodVariable = (periodId, variableName, variableValue) => {
  return {
    type: SET_PERIOD_VARIABLE,
    payload: {
      periodId,
      variableName,
      variableValue
    }
  }
}
