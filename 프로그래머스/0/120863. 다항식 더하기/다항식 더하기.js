function solution(polynomial) {
    const array = polynomial.split(" + ");
    let xSum = 0;
    let numSum = 0;
    let result = "";
    
    for(let poly of array) {
        if(poly.includes("x")) {
            xSum += poly === "x" ? 1 : parseInt(poly)
        } else {
            numSum += parseInt(poly)
        }
    }
    
    if(xSum) result += xSum === 1 ? "x" : `${xSum}x`;
    if(xSum && numSum) result += " + "
    if(numSum) result += numSum;
    
    return result;
}