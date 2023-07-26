const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//자신이 생성한 string을 반복적으로 사용할 경우 대문자 변수로 저장해 놓는 것이 좋음

function onLoginSubmit(event) {
   event.preventDefault();
   //preventDefault() 어떤 event의 기본 행동이든지 발생되지 않도록 막음
   //form의 submit기능이 브라우저에서 자동으로 발생하는 event등등
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY, username);
   //localStorage에 입력한 username을 저장
   paintGreetings(username);
}

function paintGreetings(username) {
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

// loginForm.addEventListener("submit", onLoginSubmit);
// 로그인 버튼을 누를때 자동으로 submit되면서
// 웹브라우저가 새로고침 되는 현상을 막기위해 submit 이벤트 감지
// 이는 웹브라우저의 기본 동작
// 이벤트 감지시 실행하게되는 함수의 argument는 빈 공간이 아니다.
// argument로는 발생한 일에 대해 필요로 할만한 정보들을 줌
// 함수의 정의(선언) 부분에서는 argument의 공간만 제공하면 됨

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit);
   //username에 값이 없으므로 다시 입력받기 위해 form 표시
} else {
   paintGreetings(savedUsername);
   //username에 값이 있으므로 greeting 출력
}
