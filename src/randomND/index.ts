import extendProperty from '../_helper';
import randomND from './randomND';

declare global {
  interface NumberConstructor {
    /**  
     * Generates a random number based on mean and sd (normal distribution)
     *
     * @param {number} mean
     * - Mean for normal distribution
     * 
     * @param {number} sd
     * - Standard deviation for normal distribution
     * 
     * @return {number} 				
     * - A random number base on normal distribution
     * 
     * @example	
     * Number.randomND(3, 1)  // might return 3.5 
     * Number.randomND(3.2, 0)  // might return 3.2
     */
    randomND(mean: number, sd: number): number;
  }
}

extendProperty(randomND);