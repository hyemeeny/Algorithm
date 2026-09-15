function solution(participant, completion) {
    const map = new Map();
    
    const mapFunction = (arr, delta) => {
        arr.forEach((v) => {
            const current = map.get(v) || 0;
            map.set(v, current+delta);
        })
    }
    
    mapFunction(participant, 1)
    mapFunction(completion, -1)
    
    for(const [k, v] of map) {
        if(v > 0) return k
    }
}