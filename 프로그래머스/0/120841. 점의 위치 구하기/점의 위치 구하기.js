function solution(dot) {
    // const idx0 = dot[0];
    // const idx1 = dot[1];
    if(dot[0] > 0 && dot[1] > 0) return 1;
    if(dot[0] < 0 && dot[1] > 0) return 2;
    if(dot[0] < 0 && dot[1] < 0) return 3;
    if(dot[0] > 0 && dot[1] < 0) return 4;
}