// 1. 재귀함수를 이용한 더하기 연산
let total = 0;

function repeat(i) {
  if (i == 0) {
    console.log(total); //6반환
    return false; //함수종료
  }
  total += i;
  i--;
  repeat(i);
}

repeat(3);

// repeat(3) 0+3 repeat(2) 3+2 repeat(1) 5+1 repeat(0) 6반환 함수종료

// 2. 재귀함수를 이용한 곱하기 연산

function repeat2(i) {
  if (i > 0) {
    return i * repeat2(i - 1);
  } else {
    return 1;
  }
}

console.log(repeat2(4));

/*
4 * repeat(3)

4 * 3 * repeat(3-1)

4 * 3 * 2 * repeat(2-1)

4 * 3 * 2 * 1 * repeat(1 - 1) == 0

repeat(0)이 호출되면서 eles 조건문으로 가서 1로 간다.

4 * 3 * 2 * 1 * 1
*/
