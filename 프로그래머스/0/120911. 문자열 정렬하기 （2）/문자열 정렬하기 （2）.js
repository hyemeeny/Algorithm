function solution(my_string) {
    const lower = my_string.toLowerCase()
    return Array.from(lower).sort().join('');
}