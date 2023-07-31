let student1 = new Student ("Василиса", "женский", 19);
let student2 = new Student ("Артём", "мужской", 25);

function Student(name, gender, age) {
this.name = name;
this.gender = gender;
this.age = age;
this.marks = [];
};

Student.prototype.setSubject = function (subjectName) {
 this.subject =  subjectName;
};

Student.prototype.addMarks = function (...marks) {
if (this.marks !== undefined) {
this.marks.push(...marks);
}
};

Student.prototype.getAverage = function () {
if (this.marks === undefined){
return 0;
} else {
return this.marks.reduce((acc, a, index, arr) => acc + a/arr.length, 0)
}
};

Student.prototype.exclude = function (reason) {
delete this.subject;
delete this.marks;
this.excluded = reason;  
};
