function solution(sides) {
    const maxsides = sides.sort((a,b) => b-a);
    const sumsides = sides.reduce((acc, cur) => acc+cur) - maxsides[0];
    return maxsides[0] < sumsides ? 1 : 2;
}