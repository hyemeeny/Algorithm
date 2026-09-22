function solution(nums) {
    var answer = 0;
    const setNums = new Set(nums);
    const maxNums = nums.length/2;
    const unique = [...setNums]
    console.log('중복없앤포켓몬배열', [...setNums])
    console.log('받을수있는포켓몬최대', maxNums)
    
    console.log(Math.min(maxNums, unique.length))
    return Math.min(maxNums, unique.length);
}