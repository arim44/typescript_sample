// 인터페이스
const person = { name: '손흥민', age: 30 };

interface Person {
    name: string;
    age: number;
}
const person1: Person = { name: '손흥민', age: 30 };
// const person2:Person = {name:'손흥민'};
// const person3:Person = {name:'손흥민', age:30, team:'LA'};

// 영화정보 타이틀, 랭크
interface Movie {
    title: string;
    rank: number | string;
}

// const movie1:Movie = {title:'알라딘', rank:1};
// console.log(movie1);

//옵션 속성
console.log('=== 옵션속성 ===')
interface Student {
    name: string;
    grade: number;
    major?: string;  // ? 있어도 되고 없어도 됨
}

function studentInfo(s: Student) {
    console.log(s.name);
    console.log(s.grade);
    //console.log(s.major);
}

studentInfo({ name: '김연아', grade: 1, major: '컴공' });

const s1: Student = { name: '손흥민', grade: 2 };
studentInfo(s1);

const s2 = { name: '홍길동', grade: 3, major: '컴공' };
studentInfo(s2);

// interface 상속
console.log('=== interface 상속 ===');
interface Person {
    name: string;
    age: number;
}

interface Student1 extends Person {
    major1: string;
}
const s: Student1 = { name: '박지성', age: 1, major1: '컴공' };
//const s3:Student1 = {name: '손흥민', age : 2,};
console.log(s);

// interface-union type
console.log('=== interface-union type ===');

interface Student2 {
    name: string;
    age: number;
    major: string;
}

interface Player {
    name: string;
    age: number;
    skill: string;
}
const p1 = { name: '손흥민', age: 30, major: '컴공' };
const p2 = { name: '박지성', age: 20, skill: '타격' };

function description(p: Student2 | Player) {
    if ('major' in p) {   // major 속성이 p 에 있으면
        const info = `${p.name}, ${p.age}, ${p.major}`;
        console.log(info);
        return;
    }
    if ('skill' in p) {   //skill 속성이 p에 있으면
        const info = `${p.name}, ${p.age}, ${p.skill}`;
        console.log(info);
    }
}
description(p1);
description(p2);


//interface-intersection
// function info(p:Student2 | Player){
//     const result = `${p.name}, ${p.major}, ${p.skill}`;
//     console.log(p.name);
// }
// info({ name: '손흥민', age: 30, major: '컴공', skill: '축구' });

// extends 확장 하는 방법
// interface-선언병합 => 같은이름을 인터페이스를 정의

// Interface - 객체 모델링
interface Maker {
    name: string;
    country: string;
}
interface Car {
    madel: string;
    maker: Maker;
}

// 퀴즈_모델링 실습
//무비인포 타입 하나 만듬 Movie, 전체 타입 하나 만듬 MovieInfos
// 아티클 리스트의 각각 무비들
interface Movie {
    title: string;
    url: string;
    image: string;
    authorName: string;
    authorUrl: string;
    authorImage: string;
    createTime: string;
}
// 전체 타입
interface MoveInfos {
    articleList: Movie[];    // 타입 : Movie 어레이(배열))
    lastPublishTime: number;
    kmoreList: boolean;
}

// 퀴즈_회원가입
// 프라미스 사용버전을 타입스크립트로 변환하라 유저의 타입만, 함수 매개변수 반환형 타입 
// 타입 정의
interface User {
    uname: string;
    email: string;
}
// DB 는 User 인터페이스의 배열
const DB: User[] = [];
// 프라미스 반환 형추론(user매개변수는 User타입이고, Promise<User> 제네릭 반환)
function saveDB(user: User): Promise<User> {
    const oldDBLength = DB.length;
    DB.push(user);
    console.log(`${user.uname} 저장 완료되었습니다.`);
    return new Promise((resolve, reject) => {
        if (DB.length > oldDBLength) {
            resolve(user);
        } else {
            reject(new Error('저장에 실패했습니다!'));
        }
    });
}

function sendEmail(user: User): Promise<User> {
    console.log(`${user.email}으로 이메일을 발송했습니다.`);
    return new Promise((resolve) => {
        resolve(user);
    });
}
function getResult(user: User): Promise<string> {
    return new Promise((resolve) => {
        resolve(`${user.uname}님 등록 성공했습니다.`);
    });
}

function registerByPromise(user: User): Promise<string | Error> {
    const result = saveDB(user)
        .then(sendEmail)
        .then(getResult)
        .catch((error) => new Error(error));
    //.catch((error:Error)=>{throw error});
    return result;
}
// 유저 데이타
const myUser: User = { uname: '손흥민', email: 'son@naver.com' };
// 결과를 프로미스로 반환 = registerByPromise 함수에 유저데이타 넣어서 호출 후 결과에 대입
// 프로미스는 string 와 Error로 반환가능
const result: Promise<string | Error> = registerByPromise(myUser);
result.then(console.log);

