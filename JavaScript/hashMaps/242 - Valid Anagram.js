/*Given two strings s and t, return true if t is an 
anagram
 of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters. */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {   
    let hashMapS = {};
    let hashMapT = {};

    if(s.length !== t.length){ //can not have diff sizes
        return false;
    }

    for(let i = 0; i < s.length; i++){ //transformint in to a hash map
        if(hashMapS[s[i]] === undefined){ //checks if the caracter already exists
            hashMapS[s[i]] = 1;

        }
        else{
            hashMapS[s[i]] = hashMapS[s[i]] + 1;
        }

        if(hashMapT[t[i]] === undefined){
            hashMapT[t[i]] = 1;

        }
        else{
            hashMapT[t[i]] = hashMapT[t[i]] + 1;
        }     
    }

    for(let i = 0; i < s.length; i++){
        if(hashMapS[s[i]] !== hashMapT[s[i]]){
            return false;
        }
    }

    return true;
}