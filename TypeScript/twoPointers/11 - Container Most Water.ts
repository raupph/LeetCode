//https://leetcode.com/problems/container-with-most-water/
/**You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1 */

function maxArea(height: number[]): number {
    let r: number = height.length - 1;
    let l: number = 0;
    let area: number = -1;

    while(l < r){
        let width: number = r - l;
        let currArea = 0;
        if(height[l] <= height[r]){
            currArea = height[l] * width;
            l++;
        }
        else{
            currArea = height[r] * width;
            r--;
        }

        if(currArea > area){
            area = currArea;
        }
    }

    return area;
};