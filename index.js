const answer = [
    {
        question: "Who is current PM of India ?",
        a: "Narendra modi",
        b: 'Mamta Banerjee',
        c: 'Donald Trump',
        d: 'Arvind Kejriwal',
        correct: 'a'

    },
    {
        question: "When did India got independence ?",
        a: "15 september 1947",
        b: '26 Decenber 1943 ',
        c: '15 august 1947',
        d: '19 august 1947',
        correct: 'c'

    },
    {
        question: "which of the following is a reptile ?",
        a: "Dogs",
        b: 'Cats ',
        c: 'Birds',
        d: 'Snake',
        correct: 'd'

    },
    {
        question: "who invented Alternating current?",
        a: "Albert Einstein",
        b: 'Isac Newton',
        c: 'Michael Farady',
        d: 'Nikola Tesla',
        correct: 'd'

    },
    {
        question: "SI unit of temparature?",
        a: "Celcius",
        b: 'Fahrenheit',
        c: 'Kelvin',
        d: 'Joules',
        correct: 'c'

    },
    {
        question: "Who was the prime minister in office after J.Nehru?",
        a: "Lal Bahadur Shastri",
        b: 'indira Gandhi',
        c: 'Rajiv Gandhi',
        d: 'P.V. Narashima Rao',
        correct: 'a'

    },
    {
        question: "Where sodium chloride is found ?",
        a: "Common Salt",
        b: 'Sugar',
        c: 'Distilled water',
        d: 'Egg shell',
        correct: 'a'

    }
]

                /* Dom queries */
const container = document.querySelector(".container");
const questionEl = document.querySelector('#question_text');
const ansEl = document.querySelectorAll("input");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const btn = document.querySelector("#btn");
const startBtn = document.querySelector("#start");
const caption = document.querySelector(".caption");
const counter = document.querySelector("#counter");

let percent;
let quizNo = 0;
let score = 0;
let timeoutSec = answer.length *10; 
let timeoutMs = timeoutSec *1000;
function deselect() {
    ansEl.forEach((ansEl) => {
        ansEl.checked = false;
        ansEl.parentElement.classList.remove('active');
    }
    );
}

function backgroundSetter() {
    ansEl.forEach(ansEl => {
        if (ansEl.checked == true) {
            ansEl.parentElement.classList.add('active');
        }
        else {

            ansEl.parentElement.classList.remove('active');
        }
    });
}
function getasnwer() {
    let getans;
    ansEl.forEach(ansEl => {
        if (ansEl.checked) getans = ansEl.id;
    })
    return getans;
}
function onlyone() {
    let check = 0;
    ansEl.forEach(ansEl => {
        if (ansEl.checked) check++;

        if (check > 1) {
            deselect();
        }

    })
}
ansEl.forEach(ansEl => {
    ansEl.addEventListener('change', () => {
        if (ansEl.checked == true) {
            const selected = ansEl;
            onlyone();
            selected.checked = true;
            backgroundSetter();



        }
    })
});

function loadQuestion() {

    deselect();


    questionEl.innerText = answer[quizNo]['question'];
    a_text.innerText = answer[quizNo]['a'];
    b_text.innerText = answer[quizNo]['b'];
    c_text.innerText = answer[quizNo]['c'];
    d_text.innerText = answer[quizNo]['d'];


}
function timer() {

    percent = ((score / answer.length) * 100).toFixed(2);
    container.innerHTML = `<h2 id>You score is ${percent}% ,you got ${score}/${answer.length} right</h2>
                            <button  id="reload" onclick="location.reload()">Reload</button>`;
}
let myVAR = setInterval(countdown, 1000);
let sec = timeoutSec;

function countdown() {
    let displayTimeMin = Math.floor(sec/60).toFixed(0);
    let displayTimeSec =sec%60;
    if (sec == -1) {
        clearInterval(myVAR);

    } else {
        counter.innerText = `${displayTimeMin}:${displayTimeSec}`;
        sec--;
    }

}
function start() {
    container.classList.add('visible');
    startBtn.classList.add('hide');
    setTimeout(timer, timeoutMs);
    countdown();


    caption.classList.add('hide');
    loadQuestion();
}
btn.addEventListener('click', () => {

    const ans = getasnwer();

    if (ans) {
        if (ans === answer[quizNo]['correct']) {
            score++;
            console.log(score);


        }
        quizNo++;

    }
    if (quizNo < answer.length) {


        loadQuestion();

    } else {

        /* console.log('s->',score); */
        percent = ((score / answer.length) * 100).toFixed(2);
        container.innerHTML = `<h2 id>You score is ${percent}% ,you got ${score}/${answer.length} right</h2>
                               <button  id="reload" onclick="location.reload()">Reload</button>`;
    }

});





