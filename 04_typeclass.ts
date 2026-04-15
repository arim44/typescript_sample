class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    add(n1: number, n2: number): number {
        return n1 + n2;
    }
}
let p: Person = new Person('손흥민', 30)

// 접근 제한자
class Student {
    public name: string;
    private grade: number;
    constructor(name: string, grade: number) {
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
    public get Grade():number {
        return this.grade;
    }
    public set Grade(value:number){
        if(value < 1|| value > 4){
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
class Student1{
    name:string;
    protected grade:number;

    constructor(name:string, grade:number){
        this.name = name;
        this.grade = grade;
    }

    getGrade(): number{
        return this.grade;
    }
}

class HighSchoolStudent extends Student1{
    constructor(name: string, grade : number){
        super(name, grade);
    }
    public printGrade() {
        // 자식 클랙스라서 접근가능
        console.log(`학년: ${this.grade}`);
    }
    public printGrade2(){
        console.log(`학년: ${this.getGrade()}`);
    }
}
const s = new HighSchoolStudent('손흥민', 1)
//s.grade = 2 //error
