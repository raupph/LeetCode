/*Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty. */

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {

    let prefix = strs[0];

    if(strs.length === 0){
        return "";
    }

    //iterates the strinsg inside the array
    for(let i = 1; i < strs.length; i++){
        //while the prefix exist in the string . returns -1 if do not exist
        while(strs[i].indexOf(prefix) !== 0){
          //removes the last letter of the current string 
          prefix = prefix.substring(0, prefix.length - 1);
          if(prefix === ""){
            return "";
          }
        }
    }
    return prefix;
};