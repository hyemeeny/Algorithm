function solution(nums) {
    const setNums = new Set(nums);
    const maxPick = nums.length/2;
    const unique = [...setNums];
    
    return Math.min(maxPick, unique.length);
}