/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true
*/

func isValid(s string) bool {
	corresponding := map[rune]rune{
		')': '(',
		'}': '{',
		']': '[',
	}
	var stack []rune

	for _, char := range s {
		if (char == '{') || (char == '(') || (char == '[') {
			stack = append(stack, char)
		} else {
			if len(stack) != 0 {
				top := stack[len(stack)-1]
				if corresponding[char] == top {
					stack = stack[:len(stack)-1]
				} else {
					return false
				}
			} else {
				return false
			}
		}
	}

	return len(stack) == 0
}