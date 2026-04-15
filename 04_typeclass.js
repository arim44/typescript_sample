class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    add(n1, n2) {
        return n1 + n2;
    }
}
let p = new Person('손흥민', 30);
// 접근 제한자
class Student {
    name;
    grade;
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    // // public Grade(): number {
    // //     return this.grade;
    // // }
    // public Grade(value: number) {
    //     if (value < 1 || value > 4) {
    //         throw new Error('학년은 1~4 사이여야 합니다.');
    //     }
    //     this.grade = value;
    // }
    get Grade() {
        return this.grade;
    }
    set Grade(value) {
        if (value < 1 || value > 4) {
            throw new Error('학년은 1~4 사이여야 합니다.');
        }
        this.grade = value;
    }
}
const person = new Student('손흥민', 30);
const grade = person.Grade;
console.log(grade);
person.Grade = 20;
console.log(person.Grade);
// 접근제한자 protected
class Student1 {
    name;
    grade;
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    getGrade() {
        return this.grade;
    }
}
class HighSchoolStudent extends Student1 {
    constructor(name, grade) {
        super(name, grade);
    }
    printGrade() {
        // 자식 클랙스라서 접근가능
        console.log(`학년: ${this.grade}`);
    }
    printGrade2() {
        console.log(`학년: ${this.getGrade()}`);
    }
}
const s = new HighSchoolStudent('손흥민', 1);
export {};
//s.grade = 2 //error
