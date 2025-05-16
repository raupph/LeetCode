/*Given an integer x, return true if x is a
palindrome
, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 */

bool isPalindrome(int x)
{
    // gona return the number o caracters that would be aloccated. +1 is to the /0
    int size = snprintf(NULL, 0, "%d", x) + 1;
    char *str = malloc(size * sizeof(char));
    int length;

    snprintf(str, size, "%d", x);
    length = strlen(str);

    for (int i = 0; i <= length - 1; i++)
    {
        //-1 to not access the /0 in the inverse string
        // the normal string dont need this because the for goes to lenght -1
        if (str[length - i - 1] != str[i])
        {
            return false;
        }
    }
    return true;
}