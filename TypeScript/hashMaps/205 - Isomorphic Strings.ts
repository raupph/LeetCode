/**Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"

Output: true

Explanation:

The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.
Example 2:

Input: s = "foo", t = "bar"

Output: false

Explanation:

The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3:

Input: s = "paper", t = "title"

Output: true

 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character. */

/**
 foo - egg

 mapa1
 f - e
 o - g
 o - g

mapa2
e - f
o - g
o 0 g

food - baab
map1
f - b
o - a
d - b

mapa 2
b - f
a - o
b - d
 */

function isIsomorphic(s: string, t: string): boolean {
    const mapStoT: Map<string, string> = new Map();
    const mapTtoS: Map<string, string> = new Map();


    for(let i = 0; i < s.length; i++){
        let charS = s[i];
        let charT = t[i];

        if(mapStoT.has(charS)){
            if(mapStoT.get(charS) !== charT){
                return false;
            }
        }else{
            mapStoT.set(charS, charT);
        }
        
        if(mapTtoS.has(charT)){
            if(mapTtoS.get(charT) !== charS){
                return false;
            }
        }else{
            mapTtoS.set(charT, charS);
        }
    }

    return true;
};  