function printTeacher(firstName, lastName) {
    var firstLetter = firstName.charAt(0).toUpperCase();
    console.log("".concat(firstLetter, ". ").concat(lastName));
}
printTeacher('john', 'Doe');
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass('lionel', 'messi');
console.log(student.workOnHomework());
console.log(student.displayName());
