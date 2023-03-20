export class quiz
{
    id : number;
    name : string;
    correctAnswer : number;
    inCorrectAnswer : number;
    currentQuestion : number;
    points : number;


    constructor(id, name, correctAnswer, currentQuestion, points)
    {
        this.id = id;
        this.name = name ;
        this.correctAnswer = correctAnswer;
        this.inCorrectAnswer = currentQuestion;
        this.currentQuestion = currentQuestion;
        this.points = points;
    }

}
