const quesans = [
    {
        question: "Мое имя?",
        a: "Dima",
        b: "Senya",
        c: "Kolya",
        d: "Joff",
        correct: 'a'
    }, {
        question: "Столица России?",
        a: "Kiev",
        b: "Minsk",
        c: "Moscow",
        d: "Bangladesh",
        correct: 'c'
    }, {
        question: "How much is the fish?",
        a: "Rammstein",
        b: "Scorpion",
        c: "Nana",
        d: "Scooter",
        correct: 'd'
    }, {
        question: "Car?",
        a: "Auto",
        b: "Bus",
        c: "Metro",
        d: "Bike",
        correct: 'a'
    }, {
        question: "Какой век технологий?",
        a: "20",
        b: "18",
        c: "21",
        d: "19",
        correct: 'a'
    }, {
        question: "жидкость?",
        a: "Титан",
        b: "Ртуть",
        c: "Олово",
        d: "Курица",
        correct: 'b'
    }, {
        question: "кто такой Джон Голд?",
        a: "Titan",
        b: "Varan",
        c: "Golem",
        d: "Atlant",
        correct: 'd'
    }
];


const ques = document.getElementById("ques");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const submitBtn = document.getElementById('submit');

let currentQues = 0;
let score = 0;
lQues();

function lQues() {
    deselectAnswers();

    const currentQuesData = quesans[currentQues];

    questionEl.innerText = currentQuesData.question;
    a_text.innerText = currentQuesData.a;
    b_text.innerText = currentQuesData.b;
    c_text.innerText = currentQuesData.c;
    d_text.innerText = currentQuesData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;

        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    
    });
}

submitBtn.addEventListener('click', () => {
    
    const answer = getSelected();

    if (answer){
        if(answer === quesans[currentQues].correct){
            score++;
        }
        
        currentQues++;
        
        if (currentQues < quesans.length) {
            lQues();
        } else {
            // пора проверить результаты
            ques.innerHTML = `
                <h2> Вы правильно ответили ${score}/${quesans.length} вопросов</h2>
                
                <button onclick="location.reload()">Пройти заного</button>
            `;
        }
    }

    // 
    
})