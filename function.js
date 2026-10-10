function calculateResult(marks){
    if(marks >= 50)
    {
        return "Pass";
    }
    else{
        return "Fail";
        
    }
}
const displayResult = (name, result) => {
    console.log(name + " - " + result);

};
const learners = [{name: "Anu", marks:75},
    {name: "Rahul", marks: 42},
    {name: "Meena", marks:68},
    {name: "Arun", marks:35}
];
for(const learner of learners){
    const result = calculateResult(learner.marks);
    displayResult(learner.name, result);
}