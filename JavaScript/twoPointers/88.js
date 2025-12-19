/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = 0;
    let p2 = 0;
    let mem = 0;

    while(p1 < nums1.length && p2 < nums2.length){
        
        if(nums2[p2] >= nums1[p1] && nums2[p2] <= nums1[p1 + 2]){
            mem = nums1[p1 + 1];
            nums1[p1] = nums2[p2];
            nums1[p1 + 2] = mem;
            p1++;
        } else if(nums2[p2] >= nums1[p1] && nums1[p1 + 2] == 0){
            mem = nums1[p1 + 1];
            nums1[p1] = nums2[p2];
            nums1[p1 + 2] = mem;
            p1++;
        } else if(nums2[p2] >= nums1[p1] && nums2[p2] >= nums1[p1 + 2]){
            p1++;
        }
        p2++;
    }

};


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
        let p1 = m - 1;
    let p2 = n - 1;
    let mem = 0;

    while(p1 < nums1.length && p2 < nums2.length){
        

        p2++;
    }
};