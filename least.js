function solution(arr) {
  var answer = 0;
  let cnt = 1;
  let a = true;
  answer = arr.at(-1);
  while (a) {
    if (arr.every((num) => (answer * cnt) % num === 0)) {
      a = false;
      answer *= cnt;
    } else {
      cnt += 1;
    }
  }

  return answer;
}
