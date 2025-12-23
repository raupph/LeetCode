/**A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome. */


function isPalindrome(s: string): boolean {

    let l: number = 0;
    let r:number = s.length - 1
    let arr: string[] = [];
    
    for(let i: number = 0; i < s.length; i++){
        let currChar: string = s[i];
        if(currChar.charCodeAt(0) >= 48 && currChar.charCodeAt(0) <= 57 ||
            currChar.charCodeAt(0) >= 65 && currChar.charCodeAt(0) <= 90 ||
            currChar.charCodeAt(0) >= 97 && currChar.charCodeAt(0) <= 122){
                    arr.push(currChar);
            } 
    }
    for(let i: number = 0; i < arr.length; i++){
        if(arr[i].toLocaleLowerCase() !== arr[arr.length - i - 1].toLocaleLowerCase()){
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("race a car"));