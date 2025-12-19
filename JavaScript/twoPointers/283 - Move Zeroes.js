/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.


Example 1:

Input: nums = [1,3,0,0,12]
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
    let pointer2 = 0;

    for(let i = 0; i < nums.length; i++){

        if(nums[pointer1] == 0 && nums[pointer2] !== 0){
            nums[pointer1] = nums[pointer2];
            nums[pointer2] = 0; 
        }
        else if(nums[pointer1] == 0 && nums[pointer2] == 0){
            nums[pointer2] = nums[pointer2 + 1];
            nums[pointer2 + 1] = 0;
        }

        pointer1++;
        pointer2++;
    }

};


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    let pointer1 = 0;
    let pointer2 = 0;

    for(let i = 0; i < nums.length; i++){

        if(nums[pointer1] == 0 && nums[pointer2] == 0){
            pointer2++;
        }

        else if(nums[pointer1] == 0 && nums[pointer2] !== 0){
            nums[pointer1] = nums[pointer2];
            nums[pointer2] = 0; 
        }
        pointer1++;
        pointer2++;
    }

};