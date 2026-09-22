function solution(s){
    let pCount = 0;
    let yCount = 0;
    
    Array.from(s).forEach((v) => {
        if(v.toLowerCase() === 'p') pCount++
        if(v.toLowerCase() === 'y') yCount++
    })

    return pCount === yCount ? true : false;
}