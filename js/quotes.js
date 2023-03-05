const quotes = [
  {
    quotes: "항상 기뻐하라 쉬지 말고 기도하라 범사에 감사하라 이는 그리스도 예수 안에서 너희를 향하신 하나님의 뜻이니라" ,
    author: "데살로니가전서 5:16 ~ 18"
  },
  {
    quotes: "아무 것도 염려하지 말고 오직 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라" ,
    author: "빌립보서 4:6"
  },
  {
    quotes: "내가 여호와를 항상 송축함이여 그를 송축함이 내 입에 계속하리로다" ,
    author: "시편 34:1"
  },
  {
    quotes: "여호와께 감사하라 그는 선하시며 그 인자하심이 영원함이로다" ,
    author: "역대상 16:34"
  },
  {
    quotes: "피곤한 자에게는 능력을 주시며 무능한 자에게는 힘을 더하시나니" ,
    author: "이사야 40:29"
  },
  {
    quotes: "여호와는 나의 목자시니 내게 부족함이 없으리로다" ,
    author: "시편 23:1"
  },
  {
    quotes: "누구든지 주의 이름을 부르는 자는 구원을 얻으리라" ,
    author: "로마서 10장 13절"
  },
  {
    quotes: "구하라 그러면 너희에게 주실 것이요 찾으라 그러면 찾을 것이요 문을 두드리라 그러면 너희에게 열릴 것이니" ,
    author: "마태복음 7:7-8"
  },
  {
    quotes: "예수께서 이르시되 할 수 있거든이 무슨 말이냐 믿는 자에게는 능치 못할 일이 없느니라 하시니" ,
    author: "마가복음 9:23"
  },
  {
    quotes: "수고하고 무거운 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라" ,
    author: "마태복음 11장 28절"
  },
];
// 명언, 저자 Array에 저장하기

const quote = document.querySelector("#quote span:first-child");  // 첫번째 span(명언)
const author = document.querySelector("#quote span:last-child");  // 두번째(마지막) span(저자)
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];  // 랜덤뽑기

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
