let averageGrade = 61;

switch (Math.floor(averageGrade / 10)) {
    case 10:
    case 9:
        console.log("Відмінно");
        break;
    case 8:
        console.log("Дуже добре");
        break;
    case 7:
        if (averageGrade >= 71) {
            console.log("Добре");
        } else {
            console.log("Задовільно");
        }
        break;
    case 6:
        console.log("Задовільно");
        break;
    default:
        console.log("Незадовільно");
}
