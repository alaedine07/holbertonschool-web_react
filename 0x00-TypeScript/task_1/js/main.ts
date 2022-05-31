interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReporters: number;
}

function printTeacher (firstName: string, lastName: string): void {
    const firstLetter = firstName.charAt(0).toUpperCase();
    console.log(`${firstLetter}. ${lastName}`);
}

interface printTeacherFunction {
    (firstName: string, lastName: string): void;
}

printTeacher('john', 'Doe');