// TODOAPP - 타입스크립트로 바꾸기
//  todo 객체 {id : 1, text:'할일', completed:false}
class TodoApp {
    // todo 배열 캡슐화
    todos = [];
    nextId = 1; //초기값
    // 생성자 정의 없음 기본 생성자
    constructor() { }
    ;
    // 할일 추가
    addTodo(text) {
        const todo = {
            id: this.nextId++, // 추가 시 1부터 증가하게
            text, // 할일 텍스트  text: text 속성명이랑 같으면 생략가능
            completed: false, //완료 여부 불형
        };
        this.todos.push(todo); // 푸쉬로 todos 배열에 저장
    }
    // 할일 목록 출력함수
    showListtodo() {
        console.log('📌 Todo List');
        // foreach 로 전체 순회 출력 todo를 전달 받음
        this.todos.forEach((todo) => {
            console.log(`[${todo.completed ? '✅' : ''}] (${todo.id}) ${todo.text}`);
            // 성공이면 [체크] (아이디(순서))) 할일 텍스트
        });
    }
    // 완료 처리 토글투두(아이디 찾아서 전환)
    togleTodo(id) {
        // todos배열에서 find 로 받은 아이디를 찾아서 id의 todo.i가 id와 같은지 
        const todo = this.todos.find((todo) => todo.id === id);
        // 없을수도 있으니 체크 있는거만 전환하게
        if (todo) {
            // completed가 true 면 false 로 false면 true로
            todo.completed = !todo.completed;
        }
    }
    removeTodo(id) {
        // todos 배열에 필터로 아이디 검색해서 아이디와 같지 않으면 거름(같은 아이디만 들어감)
        this.todos = this.todos.filter((t) => t.id !== id);
    }
}
// 실행
// TodoApp 만듬
const app = new TodoApp();
// 추가
app.addTodo('typescript 공부하기');
app.addTodo('정리하기');
app.showListtodo();
// 체크 후 다시 목록 보기
app.togleTodo(1);
app.showListtodo();
// 삭제 후 목록 보기
app.removeTodo(1);
app.showListtodo();
export {};
