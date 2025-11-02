document.addEventListener("DOMContentLoaded", function(){

let button_start = document.querySelector(".button_start")
let quiz_container = document.querySelector(".quiz")
let question = document.querySelector(".question")
let answers = document.querySelectorAll(".answer")

let questions = {
    1: {
        question: "111111111 111111111 1111111?",
        right_ans: "111111",
        wrong_ans1: "110",
        wrong_ans2: "1111111",
        wrong_ans3: "1111112",
    },
    2: {
        question: "222222222222 22222222 22222222?",
        right_ans: "222222",
        wrong_ans1: "222220",
        wrong_ans2: "22222221",
        wrong_ans3: "22222223",
    },
    3: {
        question: "33333333 3333333333 333333?",
        right_ans: "3333333",
        wrong_ans1: "333333330",
        wrong_ans2: "33333331",
        wrong_ans3: "33333333",
    },
}

button_start.addEventListener("click", function(){
    button_start.style.display = "none"
    quiz_container.style.display = "flex"
})

class Question{
    constructor(number){
        this.question = questions[`${number}`]["question"]
        this.right_answer = questions[`${number}`]["right_ans"]
        this.answers = [this.right_answer, questions[`${number}`]["wrong_ans1"], questions[`${number}`]["wrong_ans2"], questions[`${number}`]["wrong_ans3"]]
    }
    display(){
        question.innerHTML = this.question
        for (let i = 0; i < answers.length; i += 1){
            answers[i].innerHTML = this.answers[i]
        }
    }
} 
let number_question = 1
let question_list = []
question_list.push(new Question(number_question))
question_list[0].display()
console.log(question_list[0].question)
for (let i = 0; i < answers.length; i += 1){
    answers[i].addEventListener("click", function(){
        number_question += 1
        question_list.push(new Question(number_question))
        question_list[number_question -1].display()
    })
}
})