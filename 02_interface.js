// 인터페이스
const person = { name: '손흥민', age: 30 };
const person1 = { name: '손흥민', age: 30 };
// const movie1:Movie = {title:'알라딘', rank:1};
// console.log(movie1);
//옵션 속성
console.log('=== 옵션속성 ===');
function studentInfo(s) {
    console.log(s.name);
    console.log(s.grade);
    //console.log(s.major);
}
studentInfo({ name: '김연아', grade: 1, major: '컴공' });
const s1 = { name: '손흥민', grade: 2 };
studentInfo(s1);
const s2 = { name: '홍길동', grade: 3, major: '컴공' };
studentInfo(s2);
// interface 상속
console.log('=== interface 상속 ===');
const s = { name: '박지성', age: 1, major1: '컴공' };
//const s3:Student1 = {name: '손흥민', age : 2,};
console.log(s);
// interface-union type
console.log('=== interface-union type ===');
const p1 = { name: '손흥민', age: 30, major: '컴공' };
const p2 = { name: '박지성', age: 20, skill: '타격' };
function description(p) {
    if ('major' in p) { // major 속성이 p 에 있으면
        const info = `${p.name}, ${p.age}, ${p.major}`;
        console.log(info);
        return;
    }
    if ('skill' in p) { //skill 속성이 p에 있으면
        const info = `${p.name}, ${p.age}, ${p.skill}`;
        console.log(info);
    }
}
description(p1);
description(p2);
// DB 는 User 인터페이스의 배열
const DB = [];
// 프라미스 반환 형추론(user매개변수는 User타입이고, Promise<User> 제네릭 반환)
function saveDB(user) {
    const oldDBLength = DB.length;
    DB.push(user);
    console.log(`${user.uname} 저장 완료되었습니다.`);
    return new Promise((resolve, reject) => {
        if (DB.length > oldDBLength) {
            resolve(user);
        }
        else {
            reject(new Error('저장에 실패했습니다!'));
        }
    });
}
function sendEmail(user) {
    console.log(`${user.email}으로 이메일을 발송했습니다.`);
    return new Promise((resolve) => {
        resolve(user);
    });
}
function getResult(user) {
    return new Promise((resolve) => {
        resolve(`${user.uname}님 등록 성공했습니다.`);
    });
}
function registerByPromise(user) {
    const result = saveDB(user)
        .then(sendEmail)
        .then(getResult)
        .catch((error) => new Error(error));
    //.catch((error:Error)=>{throw error});
    return result;
}
// 유저 데이타
const myUser = { uname: '손흥민', email: 'son@naver.com' };
// 결과를 프로미스로 반환 = registerByPromise 함수에 유저데이타 넣어서 호출 후 결과에 대입
// 프로미스는 string 와 Error로 반환가능
const result = registerByPromise(myUser);
result.then(console.log);
export {};
