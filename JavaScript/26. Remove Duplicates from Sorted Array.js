/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let p1 = 0;
    let p2 = 1;
    let k = 1;
    let result = [];

    for(let i = 0; i < nums.length; i++){
        let pointer1Value = nums[p1];
        let pointer2Value = nums[p2];
        console.log(i)

        if (pointer1Value === pointer2Value){
            p2 ++;
            console.log("Iguais")
        }
        else{
            console.log("else")
            p1 = p2;
            p2++;
            k++;

            nums[k] = pointer1Value;

            result.push(pointer1Value);
            console.log(result)
        }



        if((p1 >= nums.length) || (p2 >= nums.length + 1)){
            //nums = result.slice();
            console.log("Entrou no pare: " + nums, k)
            return k;
        }
    }
    return k;
};