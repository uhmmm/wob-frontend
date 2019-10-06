import uuid from 'uuid/v4'
import models from './models'

export const CREATE_PERIOD = 'CREATE_PERIOD'

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
