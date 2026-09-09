function solution(x) {
    const numX = x.toString().split("");
    let num = 0;
    
    num = numX.reduce((acc, cur) => {
        console.log(parseInt(acc)+parseInt(cur))
        return parseInt(acc)+parseInt(cur)
    }, 0)
    
    
    console.log('배열 값', num)
    console.log(typeof x, typeof num)
    console.log(x + '%' + num + '=' + x%num)
    
    return x % num === 0 ? true : false;
}

// 18 > 1+8=9 > 18/9=2...0 > 하샤드 수 true 
// 10 > 1+0=1 > 10/1=10...0 > 하샤드 수 true
// 11 > 1+1=2 > 11/2=5...1 > 하샤드 수 false