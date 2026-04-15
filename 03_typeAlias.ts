// 타입 별칭
type PersonName = string;
// person 타입을 만듬 예
type Person = {
    uname: string;
    email:string;
}

let name: string = '신호탄';
let name2: PersonName = '국기봉';

function printAge(num: string| number){
    console.log(num);
}

type Age = string | number;
function printAge1(num:Age){
    console.log(num);
}
printAge('손흥민');
printAge1(20);
