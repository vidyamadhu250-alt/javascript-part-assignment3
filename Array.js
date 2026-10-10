const students = [
    {name: "John", marks: 85, grade:"A"},
    {name: "David", marks:72, grade: "B"},
    {name: "Peter", marks:90, grade:"A+"},
    {name: "Sarah", marks:65, grade: "C"}
];
console.log("All Students:");
students.forEach((student) => {
    console.log(
        student.name + " - " +
        student.marks + "-" +
        student.grade
    );
});
const stuentNAmes =students.map((student) => {
    return student.name;
});
console.log("\n Student Names:");
console.log(stuentNAmes);
const topstudents = students.filter((student) => {
    return student.marks >=80;

});
console.log("\n Students who scored 80 or above:");
console.log(topstudents);