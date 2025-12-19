/** My notes
 * 
 * the pointer 2 will descover the zeros.
 * Once the pointer 2 find a zero, the pointer one will point to him
 * Then the pointer 2 will search for a number different to zero to trade posicion wit the zero pointed to pointer1
 * then will increment the pointer1 
 * repeat
 * 
 * 
 * pointer2 is incremented in every count
 * 
 * /


/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:                
                        
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let pointer1 = 0;
    
    for(let pointer2 = 0; pointer2 < nums.length; pointer2++){
        let mem = 0;
        if(nums[pointer2] !== 0){
            mem = nums[pointer2];
            nums[pointer2] = nums[pointer1];
            nums[pointer1] = mem;
            pointer1++;
        }
    }
    
};