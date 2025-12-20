//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
/*Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

/**
        sadbutsad  sad
        
 */

function strStr(haystack: string, needle: string): number {
    let l: number = 0;

    for(let r: number = 0; r < haystack.length; r++){

        if(haystack[r] === needle[l]){
            l++;
        }else{
            r = r - l; // Retrocede para verificar novamente
            l = 0;
        }
        
        if(l >= needle.length){
            return r - l + 1;
        }
    }   

    return -1
};