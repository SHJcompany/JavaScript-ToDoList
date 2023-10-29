const quotes = [
    {
        quote : "큰 꿈을 꾸고 감히 실패하라.",
        author : "노먼 본",
    },
    {
        quote : "자신에게 하기 싫은 일을 남에게도 하지 말라.",
        author : "공자",
    },
    {
        quote : "행복은 우리 자신에게 달려 있다.",
        author : "아리스토텔레스",
    },
    {
        quote : "더 많이 판단할수록 덜 사랑하게 된다.",
        author : "오너 드 발자크",
    },
    {
        quote : "사랑할 수 있는 능력이 있다면 먼저 자신을 사랑하라.",
        author : "찰스 부코스키",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


// const quote = document.querySelector("quote span:first-child");
// const author = document.querySelector("quote span:nth-child(2)");



// const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// quote.innerText = todaysQuote.quote;
// author.innerText = todaysQuote.author;

// Math.round() 반올림
// Math.ceil() 올림
// Math.floor() 내림