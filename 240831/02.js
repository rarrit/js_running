// 1. 출력값과 출력되는 값의 이유를 설명해주세요
// 함수 a()가 실행 되었을 때, a()에서 찾고 있는 name은 상위 스코프에서 yuno2로 선언되어 있어서, yuno2 가 출력됩니다.
// 만약 myName() 함수 내에서 name이 재선언되지 않는다면 최상위 스코프의 yuno가 출력됩니다.
var name = "yuno";

function myName() {
  var name = "yuno2";
  function a() {
    console.log(name);
  }
  return a(); // yuno2
}

myName();


// 2. 출력값과 출력되는 값의 이유를 설명해주세요
// test()함수가 실행되며, x의 값이 1로 할당되어 있지만, if문을 통해 x는 2로 재선언,재할당이 되어 x는 2가 출력됩니다.
// 만약 if문에서 false가 되면 if문이 실행되지 않아서 재할당,재선언이 불가능하여 x는 1이 출력됩니다.
function test() {
  var x = 1;

  if (true) {
    var x = 2;
  }

  console.log(x);
}

test();


// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.
const nameObj = {
  name: "yuno",
  method: function () {
    const arrow = () => {
      console.log(`화살표 함수 : ${this.name}`);
      // 화살표 함수의 this는 객체 안에서 상위 스코프를 가르킵니다..?
    };
    function normal() {
      console.log(`일반 함수 : ${this.name}`);
      // normal() 함수가 실행되는 것은 메서드로 실행이 되어, this는 상위 스코프의 nameObj의 name을 가르킵니다.
      // 만약 메서드로 실행이 안된다면 global을 가르킵니다..?
    }
    arrow();
    normal();
  }
};

nameObj.method();