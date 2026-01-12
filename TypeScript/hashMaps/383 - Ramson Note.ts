/**Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true */

function canConstruct(ransomNote: string, magazine: string): boolean {
    let hashMap: Map<string, number> = new Map();

    if(magazine.length > ransomNote.length){
        return false;
    }

    for(let i = 0; i < ransomNote.length; i ++){
        hashMap.set(ransomNote[i], i);
    }

    for(let i = 0; i < magazine.length; i++){
        let currChar: string = magazine[i];
        if(!hashMap.has(currChar)){
            return false;
        }
    }

    return true;
};


function canConstruct(ransomNote: string, magazine: string): boolean {
    let hashMap: Map<string, number> = new Map();

    for(let i = 0; i < magazine.length; i++){
        if(!hashMap.has(magazine[i])){
            hashMap.set(magazine[i], 0)
        }else{
            hashMap.set(magazine[i], (hashMap.get(magazine[i])! + 1))
        }
    }

    for(let i = 0; i < ransomNote.length; i ++){
        let currChar: string = ransomNote[i];

        if(!hashMap.has(currChar) || hashMap.get(currChar) < 0){
            return false;
        }else if(hashMap.has(currChar) || hashMap.get(currChar) > 0){
            hashMap.set(currChar, (hashMap.get(currChar)! - 1))
        }
    }

    return true;
};