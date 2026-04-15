function sayHello(name) {
    return `Hello ${name}`;
}
// 타입지정
const uname = '손흥민';
console.log(sayHello(uname));
let num = 10;
const greet = 'Hello TypeScript';
const isOn = true;
const person = { name: '손흥민', age: 10 };
//함수의 매개변수와 반환값
function add(num1, num2) {
    return num1 + num2;
}
const result = add(5, 4);
//const result1 = add('1','2');   //2 매개변수 타입 불일치
// // 3 add 함수는 number 반환하는데 string 라 반환타입과 상스타입이 불일치
// const result2: string = add(4,5);
//const result3: number = add(4);     // add함수는 2개를 보내야 함
console.log(result);
function sayHello1(name) {
    return `Hello ${name}`;
}
let greeting = sayHello1('RM');
function sayHi(name) {
    console.log(`Hi ${name}`);
}
const hi = sayHi('손흥민');
console.log(hi);
// string매개변수 하나, 콜백 매개변수 => 반환형 타입
function sayHello2(name) {
    return `Hello ${name}`;
}
function greeting1(name, callback) {
    return callback(name);
}
const result1 = greeting1('손흥민', sayHello2);
const result2 = greeting1('이강인', (name) => `Hello ${name}`);
console.log(result1, result2);
//형 추론
let name = '손흥민';
let age = 30;
let isOn1 = true;
const person1 = { name: '손흥민', age: 10 };
const bts = ['진', '슈가', '제이홉'];
console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof isOn1); //boolean
console.log(typeof person1); //object
console.log(typeof bts); //object
//name = 1    //타입에러
//age = '1'   //타입에러
//person1 = {name:'RM'};    // 에러(배열에 객체)
//함수에서의 형 추론
function sayHello3(name) {
    return `Hello ${name}`;
}
let greeting3 = sayHello3('RM');
function sayHello4(name) {
    return `Hello ${name}`; // string 으로 형 추론
}
function sayHello5(name) {
    console.log(`Hello ${name}`);
    return; // void 로 형추론
}
function sayHello6(name) {
    console.log(`Hello ${name}`); // void 으로 형 추론
}
// union type
let num1 = 10;
num1 = 10;
console.log(typeof num1); //num의 타입은 number
function getAge(age) {
    return '저의 나이는' + age;
}
console.log(getAge(20));
console.log(getAge('20'));
// function getGrade(grade: number | string):string{
//     return '나의 등급은' + grade;
// }
// 실습 _ 구구단의단을 매개변수로 전달받아 출력하는 함수를 정의하고 호출
// 매개변수 타입과 반환형
function getDan(dan) {
    return dan;
}
// 출력
function showMultiple(dan) {
    let result;
    console.log(`====== ${dan}단 ======`);
    for (let i = 1; i < 10; i++) {
        result = `${dan} * ${i} = ${dan * i}`;
        console.log(result);
    }
}
showMultiple(5);
//실습2 점수(score)를 매개변수로 전달 받아 학점(A,B~F)을 반환하는 함수를 전의하고 여러번 호출
function getScore(score) {
    let grade;
    switch (score) {
        case 1:
            break;
            case2: break;
    }
    return;
}
export {};
