/**
 * Generates a random integer within a specified range.
 * 
 * @param {number} size
 * - The size of the range.
 * 
 * @return {number}
 * A random integer in the range from 0.
 * 
 * @example
 * random(3)  // might return 2 (0 ~ 2)
 * random(-3)  // might return -2 (-3 ~ -1)
 */
export default function random(size: number): number;

 /**
  * Generates a random integer within a specified range.
  * 
  * @param {number} min
  * - The lower bound of the range.
  * 
  * @param {number} max
  * - The upper bound of the range.
  * 
  * @return {number}
  * A random integer in the range from min to max - 1.
  * 
  * @example
  * random(1, 5)  // might return 4 (1 ~ 4)
  * random(-5, -1)  // might return -2 (-5 ~ -2)
  */
export default function random(min: number, max: number): number;


export default function random(minOrSize: number, max?: number) {
  if (max === undefined && Number.isInteger(minOrSize) && minOrSize > 0)
    [minOrSize, max] = [0, minOrSize];
  else if (max === undefined && Number.isInteger(minOrSize) && minOrSize < 0)
    [minOrSize, max] = [minOrSize, 0];
    
  if (typeof minOrSize !== 'number' || !Number.isInteger(minOrSize))
    throw new TypeError('Number.random parameter 1 must be an integer');
  if (typeof max !== 'number' || !Number.isInteger(max))
    throw new TypeError('Number.random parameter 2 must be an integer');
  if (max < minOrSize)
    throw new TypeError('Number.random parameter 1 must be smaller than parameter 2');

  return Math.floor(Math.random() * (max-minOrSize)) + minOrSize;
}