/**Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

  */

function removeDuplicates(nums: number[]): number {
    
    let r:number = 0;
    let l:number = 0;
    let k:number = 0;
    let shoudCut: boolean = false;
    let numberCut: number = 0;

    while(r < nums.length){
        let mem: number;

        if(nums[l] === nums[r]){
            shoudCut = true;
            numberCut++;
            l++;
        }
        else{
            if(true === shoudCut){
                mem = nums[l + numberCut];
                nums[l + numberCut] = nums[l + 1];
                nums[l + 1] = mem; 
                numberCut = 0;
                shoudCut = false;
            }
            l = r;
            k++;
        };
        r++;
    }

};

function removeDuplicates(nums: number[]): number {
    
    let r:number = 1;
    let l:number = 0;
    let k:number = 0;

    while(r < nums.length){
        if(nums[l] !== nums[r]){
            nums[l] = nums[r];
            l++
        }
        r++
    }

    return l;
};


