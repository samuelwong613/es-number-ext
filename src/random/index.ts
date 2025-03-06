import extendProperty from '../_helper';
import random from './random';

declare global {
  interface NumberConstructor {

    /**
     * Generates a random integer within a specified range.
     * 
     * @param {number} size
     * - The size of the range (0 to size-1).
     * 
     * @return {number} 
     * A random integer in the range from 0 to size - 1.
     * 
     * @example
     * Number.random(3)  // might return 2 (0 ~ 2)
     * Number.random(-3)  // might return -2 (-3 ~ -1)
     */
    random(size: number): number;

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
     * Number.random(1, 5)  // might return 4 (1 ~ 4) 
     * Number.random(-5, -1)  // might return -2 (-5 ~ -2)
     */
    random(min: number, max: number): number;
  }
}

extendProperty(random);