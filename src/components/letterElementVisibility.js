import { filter, isEqual, includes, every } from 'lodash'

const compareVisibilityConditions = ({ letter, letterEl }) => {
  let letterVars = filter(letter, prop => {
    return includes(letterEl.conditionIds, prop.variableId)
  })

  let letterVarValues = letterVars.map(variable => variable.defaultValue)

  // TODO - ANY: Every is not logically sufficient
  let comparison = letterEl.conditionValues
    ? isEqual(letterVarValues, letterEl.conditionValues)
    : every(letterVarValues, true)

  return comparison
}

export const computeElementVisibility = ({ letter, letterEl }) =>
  letterEl.conditionIds
    ? compareVisibilityConditions({ letter, letterEl })
    : true
