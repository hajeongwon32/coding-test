function solution(num_list) {
    var answer = [];
    let a = 0;
    if(num_list[num_list.length-1] > num_list[num_list.length-2]) {
        a = num_list[num_list.length-1] - num_list[num_list.length-2]
    } else {
        a = num_list[num_list.length-1] * 2
    }
    answer = num_list
    answer.push(a)
    return answer;
}