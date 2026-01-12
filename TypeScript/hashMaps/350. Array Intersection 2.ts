/**Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted. */

function intersect(nums1: number[], nums2: number[]): number[] {

    const hashMap: Map<number, number> = new Map();
    const comumArr: number[] = [];

    for(let i = 0; i < nums1.length; i++){
        if(hashMap.has(nums1[i])){
            hashMap.set(nums1[i], hashMap.get(nums1[i])! + 1)
        }else{
            hashMap.set(nums1[i], 1);
        }
    }

    for(let i = 0; i < nums2.length; i++){
        let currNumber: number = nums2[i];
        if(hashMap.get(currNumber)! > 0 && hashMap.get(currNumber) !== undefined){
            comumArr.push(currNumber)
            hashMap.set(currNumber, hashMap.get(currNumber)! - 1);
        }else{
            continue;
        }
    }
    
    return comumArr
    
};