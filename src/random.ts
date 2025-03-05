import extendProperty from './_helper';

/**
 * Generates a random integer within a specified range.
 * 
 * @param {number} size - The size of the range (0 to size-1).
 * @return {number} A random integer in the range from 0 to size - 1.
 * 
 * @example
 * Number.random(3)  // might return 2 (0 ~ 2)
 * @example
 * Number.random(-3)  // might return -2 (-3 ~ -1)
 */
function random(size: number): number;

/**
 * Generates a random integer within a specified range.
 * 
 * @param {number} min - The lower bound of the range.
 * @param {number} max - The upper bound of the range.
 * @return {number} A random integer in the range from min to max - 1.
 * 
 * @example
 * Number.random(1, 5)  // might return 4 (1 ~ 4)
 * @example
 * Number.random(-5, -1)  // might return -2 (-5 ~ -2)
 */
function random(min: number, max: number): number;

function random(minOrSize: number, max?: number) {
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

declare global {
  interface NumberConstructor {
      random(size: number): number;
      random(min: number, max: number): number;
  }
}

extendProperty(random);