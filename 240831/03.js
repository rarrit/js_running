//1. 빈칸 을 작성해주세요
const obj1 = {
  value: 20,
  getValue() {
    return this.value;
  }

}
console.log(obj1.getValue());
// console.log(  빈칸  ) ; //  출력값 20


// 2. 웹 브라우저에서 setTimeout 함수 내에서 this가 가리키는 출력값이 왜 그런지 설명해주세요
const obj2 = {
  method: function () {
    console.log('첫번째 this : ', this); // 함수 표현식의 this는 상위 스코프의 객체를 가르킨다..?

    const innerMethod = () => { // 화살표 함수도 상위 스코프의 객체를 가르키지만 setTimeout()은 일반 함수여서 window를 가르킨다..?
      setTimeout(function () {
        console.log('두번째 this : ', this);
      });
    }
    innerMethod();
  }
}

obj2.method();