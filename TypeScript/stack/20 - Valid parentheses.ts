/**Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

function isValid(s: string): boolean {
    let stack: string[] = [];
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
            stack.push(s[i]);
        }else{
            let currChar = stack.pop();

            if(s[i] === ")" && currChar !== "("){
                return false;
            }else if(s[i] === "[" && currChar !== "]"){
                return false;
            }else if(s[i] === "{" && currChar !== "}"){
                return false;
            }
        }
    }

    return true;

};