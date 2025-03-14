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
 * A random number base on normal distribution
 * 
 * @example	
 * randomND(3, 1)  // might return 3.5
 * randomND(3.2, 0)  // might return 3.2
 */
export default function randomND(mean: number, sd: number): number;


export default function randomND(mean: number, sd: number): number {
  if (typeof mean !== 'number')
    throw new TypeError('Number.randomND parameter 1 must be a number');
  
  if (typeof sd !== 'number' || sd < 0)
		throw new TypeError('Number.randomND parameter 2 must be a positive number');

  return ((
    Math.floor(Math.random()*1000)+
    Math.floor(Math.random()*1000)+
    Math.floor(Math.random()*1000)
  ) / 500 - 3) * sd + mean;
}