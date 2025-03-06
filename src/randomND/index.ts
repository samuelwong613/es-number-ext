import extendProperty from '../_helper';
import randomND from './randomND';

declare global {
  interface NumberConstructor {
    /**  
     * Generates a random number based on mean and sd (normal distribution)
     *
     * @param {number} mean 		- mean for normal distribution
     * @param {number} sd 	    - standard deviation for normal distribution
     * @return {number} 				- a random number base on normal distribution
     * 
     * @example	
     * Number.randomND(3, 1)  // might return 3.5
     * @example	
     * Number.randomND(3.2, 0)  // might return 3.2
     */
    randomND(mean: number, sd: number): number;
  }
}

extendProperty(randomND);