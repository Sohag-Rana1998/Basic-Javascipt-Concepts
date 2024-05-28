function calcGrading(score){
    let gradingScore
    switch (true) {
        case (score <= 100 && score >= 90):
            gradingScore = 'A'
            break;
        case (score <= 89 && score >= 80):
            gradingScore = 'B'
            break;
        case (score <= 79 && score >= 70):
            gradingScore = 'C'
            break;
        case (score <= 69 && score >= 60):
            gradingScore = 'D'
            break;
        case (score <= 50 && score >=0):
            gradingScore = 'F'
            break;
    
        case (score < 0 && score >100):
            gradingScore = 'Invalid score'
            break;
    
        default:
            return 'Invalid score'
    }
    return `You got ${ gradingScore } grade`
}

const firstPerson = calcGrading(95); // A grade
const secondPerson = calcGrading(85); // B grade
const thirdPerson = calcGrading(75); // C grade

console.log(thirdPerson);