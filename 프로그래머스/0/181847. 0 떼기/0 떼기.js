function solution(n_str) {
    var answer = '';
    let arr = n_str.split("")
    for(let i of n_str) {
        if(i !== "0") {
            break
        } else {
            arr.shift()
        }
    }
    answer = arr.join("");
    return answer;
}