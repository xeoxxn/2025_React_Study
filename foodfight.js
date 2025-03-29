function solution(food) {
  var answer = "";
  let left = "",
    right = "";
  for (i = 1; i < food.length; i++) {
    left += i.toString().repeat(Math.floor(food[i] / 2));
  }
  for (i = food.length - 1; i > 0; i--) {
    right += i.toString().repeat(Math.floor(food[i] / 2));
  }
  answer = left + "0" + right;
  return answer;
}
