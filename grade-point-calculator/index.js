
const grades = ["A","B","C","D","E","F"];

class Course {
    constructor (name, units) {
        this.name = name;
        this.units = units;
        this.gradeUnit = 5;
    }
}

var courses = [
    new Course("MTH101", 4),
    new Course("PHY101", 4),
    new Course("CHM101", 4),
    new Course("BIO101", 3),
    new Course("GST101", 2),
    new Course("FRN101", 1),
    new Course("GST103", 1),
    new Course("ENG101", 1),
    new Course("ENG103", 1),
];

function calcGpa (courses) {
    let totalGradePoints = 0;
    let totalNoUnits = 0;
    for (let course of courses) {
        totalGradePoints += course.units * course.gradeUnit;
        totalNoUnits += course.units
    }
    let result = totalGradePoints / totalNoUnits;
    return result.toFixed(2)
}

function setgrade (grade, course){
    switch (grade) {
        case "A":
            course.gradeUnit = 5;
            break;
        case "B":
            course.gradeUnit = 4;
            break;
        case "C":
            course.gradeUnit = 3;
            break;
        case "D":
            course.gradeUnit = 2;
            break;
        case "E":
            course.gradeUnit = 1;
            break;
        case "F":
            course.gradeUnit = 0;
            break;
    }
}

//DOM traversal
let selectedMth = document.querySelector("#mth101");
selectedMth.onchange = () => {
   setgrade(selectedMth.value, courses[0]);
   document.getElementById("gpa").innerHTML = calcGpa(courses);
}
let selectedPhy = document.querySelector("#phy101");
selectedPhy.onchange = () => {
   setgrade(selectedPhy.value, courses[1]);
   document.getElementById("gpa").innerHTML = calcGpa(courses);
}
let selectedChm = document.querySelector("#chm101");
selectedChm.onchange = () => {
   setgrade(selectedChm.value, courses[2]);
   document.getElementById("gpa").innerHTML = calcGpa(courses);
}
let selectedBio = document.querySelector("#bio101");
selectedBio.onchange = () => {
   setgrade(selectedBio.value, courses[3]);
   document.getElementById("gpa").innerHTML = calcGpa(courses);
}
let selectedGst = document.querySelector("#gst101");
selectedGst.onchange = () => {
   setgrade(selectedGst.value, courses[4]);
   document.getElementById("gpa").innerHTML = calcGpa(courses);
}
let selectedFrn = document.querySelector("#frn101");
selectedFrn.onchange = () => {
   setgrade(selectedFrn.value, courses[5]);
   document.getElementById("gpa").innerHTML = calcGpa(courses);
}
let selectedGst103 = document.querySelector("#gst103");
selectedGst103.onchange = () => {
   setgrade(selectedGst103.value, courses[6]);
   document.getElementById("gpa").innerHTML = calcGpa(courses);
}
let selectedEng101 = document.querySelector("#eng101");
selectedEng101 .onchange = () => {
   setgrade(selectedEng101 .value, courses[7]);
   document.getElementById("gpa").innerHTML = calcGpa(courses);
}
let selectedEng103 = document.querySelector("#eng103");
selectedEng103.onchange = () => {
   setgrade(selectedEng103.value, courses[8]);
   document.getElementById("gpa").innerHTML = calcGpa(courses);
}