function solution(strings, n) {
    let answer = ''
    const wordArr = []
    
    strings.sort((word1, word2) => {
        if (word1[n] < word2[n]) return -1;
        if (word1[n] > word2[n]) return 1;
        if(word1[n] === word2[n]) {
            if (word1 < word2) return -1;
            if (word1 > word2) return 1;
        }
        return 0;
    })
    // console.log(strings)
    
    return strings;
}