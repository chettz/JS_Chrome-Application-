const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
   event.preventDefault();
   //preventDefault() 어떤 event의 기본 행동이든지 발생되지 않도록 막음
   //form의 submit기능이 브라우저에서 자동으로 발생하는 event등등
   console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
// 로그인 버튼을 누를때 자동으로 submit되면서
// 웹브라우저가 새로고침 되는 현상을 막기위해 submit 이벤트 감지
// 이는 웹브라우저의 기본 동작
// 이벤트 감지시 실행하게되는 함수의 argument는 빈 공간이 아니다.
// argument로는 발생한 일에 대해 필요로 할만한 정보들을 줌
// 함수의 정의(선언) 부분에서는 argument의 공간만 제공하면 됨
