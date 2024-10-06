function solution(numbers) {
    const numberStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    numberStr.forEach((str, i) => {
        // replaceAll로 numberStr 모든 문자열을 index로 치환 
        numbers = numbers.replaceAll(str, i);
    })
    
    return Number(numbers) // 숫자만 추출
}