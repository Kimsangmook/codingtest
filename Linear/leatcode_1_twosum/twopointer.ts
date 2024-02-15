function twoSumTwo(nums: number[], target: number): number[] {
    const sortedArr = nums.slice().sort((a, b) => a - b);

    let left = 0;
    let right = sortedArr.length - 1;

    while (left < right) {
        const sum = sortedArr[left] + sortedArr[right];
        if (sum === target) {
            if(sortedArr[left]===sortedArr[right]){
                return [nums.indexOf(sortedArr[left]),nums.indexOf(sortedArr[right],nums.indexOf(sortedArr[left])+1)]
            }
            return [nums.indexOf(sortedArr[left]),nums.indexOf(sortedArr[right])]
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];

};

export default twoSumTwo