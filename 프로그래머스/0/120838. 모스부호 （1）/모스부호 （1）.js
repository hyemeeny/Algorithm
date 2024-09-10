function solution(letter) {
    let answer = '';
    const letterArr = letter.split(' ');
    
    morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    
    letterArr.forEach((i) => answer += morse[i]);
    return answer;
    
    // return letterArr.map((v) => morse[v]).join('');
    // return letter.split(' ').reduce((prev, curr) => prev + morse[curr], '');
}