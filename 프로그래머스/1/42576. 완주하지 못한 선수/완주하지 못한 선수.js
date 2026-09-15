function solution(participant, completion) {
    const emptyMap = new Map();
    
    const mapFunction = (arr, delta) => {
        arr.forEach((v) => {
            const current = emptyMap.get(v) || 0;
            emptyMap.set(v, current+delta);
        })
    }
    
    mapFunction(participant, 1)
    mapFunction(completion, -1)
    
    for(const item of emptyMap) {
        if(item[1] > 0) return item[0]
    }
}