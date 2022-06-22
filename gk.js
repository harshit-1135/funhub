// Questions will be asked
const Questions = [{
    id: 0,
    q: "What is capital of India?",
    a: [{ text: "gandhinagar", isCorrect: false },
        { text: "Surat", isCorrect: false },
        { text: "Delhi", isCorrect: true },
        { text: "mumbai", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is the capital of Thailand?",
    a: [{ text: "Lampang", isCorrect: false},
        { text: "phuket", isCorrect: false },
        { text: "Ayutthaya", isCorrect: false },
        { text: "Bangkok", isCorrect: true }
    ]

},
{
    id: 2,
    q: "What is the capital of Gujarat?",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]

},
{   id: 3,
    q: "What is India's national animal?",
    a: [{text: "Royal Bengal Tiger", isCorrect:true},
        {text: "Lion",isCorrect:false},
        {text: "Elephant", isCorrect:false},
        {text: "dinasour",isCorrect:false}

    ]
},
{   id: 4,
    q: "India's first metro railway service in kolkata was started in year : ",
    a: [{text: "1990", isCorrect:false},
        {text: "1984",isCorrect:true},
        {text: "1992", isCorrect:false},
        {text: "1845",isCorrect:false}

    ]
},
{   id: 5,
    q: "India's first all woman post office is located at ?",
    a: [{text: "Mumbai", isCorrect:false},
        {text: "Chennai",isCorrect:false},
        {text: "Delhi", isCorrect:true},
        {text: "Khanna",isCorrect:false}

    ]
},
{   id: 6,
    q: "Mother Teresa recieved nobelprize in the year : ",
    a: [{text: "1980", isCorrect:false},
        {text: "2022",isCorrect:false},
        {text: "1979", isCorrect:true},
        {text: "1947",isCorrect:false}

    ]
},
{   id: 7,
    q: "In which country was mother teresa born?",
    a: [{text: "Macedonia", isCorrect:true},
        {text: "Germany",isCorrect:false},
        {text: "Hungary", isCorrect:false},
        {text: "America",isCorrect:false}

    ]
},
{   id: 8,
    q: "Which one is the biggest slum area in asia ?",
    a: [{text: "Dharavi,Mumbai", isCorrect:true},
        {text: "Orangi,Karachi",isCorrect:false},
        {text: "East Cipinang,Jakarta", isCorrect:false},
        {text: "None of the above",isCorrect:false}

    ]
},
{   id: 9,
    q: "The population census of India is conducted after every ",
    a: [{text: "5 Years", isCorrect:false},
        {text: "15 Years",isCorrect:false},
        {text: "7 Years", isCorrect:false},
        {text: "10 Years",isCorrect:true}

    ]
}
]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } 
   
    else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 9) {
    id++;
    iterate(id);
    console.log(id);
}
else {
    alert("Congratulations you won!!")
    iterate(0);
}

})
