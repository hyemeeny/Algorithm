function solution(angle) {
    if(0 < angle && angle < 90) return 1 
    if(90 === angle) return 2
    if(90 < angle && angle < 180) return 3
    if(180 === angle) return 4
    
    //return [1, 90, 91, 180].filter(x => x<=angle).length;
    //return angle < 90 ? 1 : 90 === angle ? 2 : angle < 180 ? 3 : 4 
}