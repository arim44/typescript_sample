// 제네릭
// 타입지정
function getNumber(value) {
    return value;
}
function getString(value) {
    return value;
}
// 제네릭으로 일반화 시킴 아무타입이나 받고 반환할 수 있음
function getSimple(value) {
    return value;
}
// 호출(호출시 타입을 적지 않으면 형추론에 의해 자동으로 변환)
const result = getSimple(1);
console.log(result);
const result1 = getSimple('손흥민');
console.log(result1);
const result2 = getSimple(true);
console.log(result2);
// 제네릭 2_모든타입 가능
function getBoolean(bool) {
    return bool;
}
function getArray(arr) {
    return arr;
}
function getObject(obj) {
    return obj;
}
function getValue(value) {
    return value;
}
console.log(getValue(true));
console.log(getValue(['3', '5']));
console.log(getValue(['1']));
console.log(getValue({ name: '박지성' }));
const numberBox = {
    value: 10,
    width: '오',
};
const stringBox = {
    value: 'hello',
    width: 10,
};
const p2 = {
    value: true,
    width: 'OK',
};
console.log(numberBox);
console.log(stringBox);
const res = {
    data: 'success',
    status: 200,
};
//제네릭-Type제한
// 이{length:number} 객체를 상속받은 T
function printLength(value) {
    console.log(value.length);
}
printLength('hello');
printLength([1, 2, 3]);
printLength({ length: 3, name: '손흥민' });
//printLength(123);   //에러
// 유니온으로도 할 수 있음
//특정 타입만 허용
function logValue(value) {
    console.log(value);
}
logValue('hi');
logValue(10);
//logValue(true); //에러
// 객체 속성 제한
// age 는 
// interface Person<T> {
//     name : string;
//     age : string|number;
// }
// function printName<T extends Person>(obj: T) {
// console.log(obj.name);
// }
// printName({ name: '손흥민' });
// printName({ name: '손흥민', age: 30 });
// printName({ age: 30 });//에러발생
// 키 제한
function getProperty(obj, key) {
    return obj[key];
}
const user = { name: '김연사', age: 25 };
getProperty(user, "name");
getProperty(user, "age");
export {};
//getProperty(user, "job");   // 에러발생
