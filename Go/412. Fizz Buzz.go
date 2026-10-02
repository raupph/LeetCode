/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

*/

func fizzBuzz(n int) []string {
	//answer := []string
	answer := make([]string, n)
	cont := 1

	for i := 0; i < n; i++ {

		if i != 0 {
			if (cont%3 == 0) && (cont%5 == 0) {
				answer[i] = "FizzBuzz"
			} else if cont%3 == 0 {
				answer[i] = "Fizz"
			} else if cont%5 == 0 {
				answer[i] = "Buzz"
			} else {
				answer[i] = strconv.Itoa(cont)
			}
		} else {
			answer[i] = strconv.Itoa(cont)
		}
		cont++
	}
	return answer
}