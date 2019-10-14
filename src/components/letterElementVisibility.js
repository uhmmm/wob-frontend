import { filter, isEqual, includes, every } from 'lodash'

const compareVisibilityConditions = ({ entity, letterEl }) => {
  let entityVars = filter(entity, prop => {
    return includes(letterEl.conditionIds, prop.variableId)
  })

  let entityVarValues = entityVars.map(variable => variable.value)

  // TODO - ANY: Every is not logically sufficient
  let comparison = letterEl.conditionValues
    ? isEqual(entityVarValues, letterEl.conditionValues)
    : every(entityVarValues, item => item === 'true')

  return comparison
}

export const computeElementVisibility = ({ entity, letterEl }) =>
  letterEl.conditionIds
    ? compareVisibilityConditions({ entity, letterEl })
    : true
