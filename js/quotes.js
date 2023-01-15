const quotes = [
{
    quote: "폼은 일시적이지만 클래스는 영원하다.",
    authour: "Bill Shankly"
},
{
    quote: "사람들이 왜 축구를 보러 가는지 아는가? 누가 이길지 모르기 때문이다.",
    authour: "Josef Herberger"
},
{
    quote: "강한 자가 이기는 것이 아니라, 이기는 자가 강한 것이다.",
    authour: "Franz Beckenbauer"
},
{
    quote: "나는 수많은 잘못을 했지만, 축구를 더럽히진 않았다.",
    authour: "Diego Maradona"
},
{
    quote: "뛰어난 킥은 하루만에 만들어지지 않는다. 수천 수만 번의 노력으로 탄생하는 것이다.",
    authour: "David Beckham"
},
{
    quote: "But, I'm still hungry",
    authour: "Guus Hiddink"
},
{
    quote: "축구란 간단하다. 22명이 공을 쫓아 90분 동안 달리다가, 항상 독일이 이기는 게임이다",
    authour: "Gary Lineker"
},
{
    quote: "베토벤이 음악을 위해 태어난 것처럼 나는 축구를 위해 태어났다",
    authour: "Pelé"
},
{
    quote: "쓰러질지언정 무릎은 꿇지 않는다.",
    authour: "Park Jisung"
},
{
    quote: "나는 이기고 싶은게 아니다. 이기지 않으면 안된다.",
    authour: "Luis Suárez"
}
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.authour;