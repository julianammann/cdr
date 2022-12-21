/**
 * validation to check select
 * @param value
 * @returns {boolean}
 */
export const valueNotZero = (value) => value !== "0";
/**
 * check if the zip is in range
 * @param value
 * @returns {boolean}
 */
export const checkIfInRange = (value) =>
  "88279".substring(0, 2) === value.substring(0, 2);
