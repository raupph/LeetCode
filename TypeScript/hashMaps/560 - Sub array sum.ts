//https://leetcode.com/problems/subarray-sum-equals-k/
/**Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
 

Constraints:

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107 */

/**
    1 - 3


    1 - 1
    2 - 1
    3 - 1
 */

function subarraySum(nums: number[], k: number): number {
    const hashTable: Map<number, number> = new Map();
    let subArrayCount: number = 0;

    for(let i: number = 0; i < nums.length; i++){
        let currNumber: number = nums[i];
        if(hashTable.has(currNumber)){  //say that im shure that will be !undefined
            hashTable.set(currNumber, (hashTable.get(currNumber)! + 1));
        }else{
            hashTable.set(currNumber, 1);
        }
    }

    console.log(hashTable)

    for(let i: number = 0; i < nums.length; i++){
        let currNumber: number = nums[i];
        let complement: number = k - currNumber;

        if(hashTable.has(complement)){
            subArrayCount += hashTable.get(complement)! - 1;
            if(hashTable.get(complement)! > 1){
                hashTable.set(currNumber, 0)
            }
        }

    }

    return subArrayCount; // Temporary return - implementação incompleta
};


let arr: number[] = [1,2,3];
console.log(subarraySum(arr, 3));