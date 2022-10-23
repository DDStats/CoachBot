const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const BOT_IMG = "bot.png";
const PERSON_IMG = "user.png";
const BOT_NAME = "CoachBot";
const PERSON_NAME = "Player";
const prompts = [
  ["what is your favorite song"],
  ["what is your favorite nhl team", "what is your favorite team", "which nhl team do you like","which team do you like"],
  ["who is your favorite player","which player do you like"],
  ["how do i become a good passer","good passing","i want to be a good passer","i want to improve my passing"],
  ["how do i become a good stick handler","how to improve stick handling", "how do improve my stick handling","stick handling"],
  ["how do i skate good","i wanna skate good", "i want to be a good skater"," how to be good","how do i get faster", "how to get fast", "how to skate fast"],
  ["do you know wayne glensky"],
  ["where you from", "where do you live","where is your home"],
  ["how do i skate","how do i start skating","i want to learn how to skate"],
  ["how do i do crossovers","crossovers"],
  ["how do i skate backwards","skating backwards","i want to skate backwards good"],
  ["do you know ddstats"],
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no", "not sure", "maybe", "no thanks"],
  [""],
  ["haha", "ha", "lol", "hehe", "funny", "joke"]
]
const replies = [
  ["mr. roboto by styxx"],
  ["the wild of course"],
  ["currently Cale Makar but all time probably Jagr or Gretzky"],
  ["you can do it: <a href='www.minnesotahockey.org/news_article/show/315085-becoming-a-better-passer'>https://www.minnesotahockey.org/news_article/show/315085-becoming-a-better-passer</a>"],
  ["practice...practice and check this out: <a href='www.prodigy-hockey.com/stick-handling/keys-to-improving-stick-handling/'>https://www.prodigy-hockey.com/stick-handling/keys-to-improving-stick-handling/</a>"],
  ["this might help: <a href='www.hockeyhow.com/how-to-skate-faster/'>https://hockeyhow.com/how-to-skate-faster/</a>"],
  ["yes he is my main bro"],
  ["my home is inside a github repository"],
 ["Hi! Please view this link: <a href='www.skatingmagic.com/how-to-ice-skate-for-beginners/'>https://skatingmagic.com/how-to-ice-skate-for-beginners/</a>"],
  ["Hi! Please view this link: <a href='www.hockeytutorial.com/skating-tips/crossovers-hockey-in-detail-crossover/'>http://www.hockeytutorial.com/skating-tips/crossovers-hockey-in-detail-crossover//</a>"],
    ["Hi! Check this out: <a href='www.youtube.com/watch?v=yRSqqWyM74Y'>https://www.youtube.com/watch?v=yRSqqWyM74Y</a>"],
  ["yes he is a good coach and my creator"],
  ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["ddstats created me with html, css & javascript"],
  ["I am CoachBot", "Coach..short for CoachBot"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Practice stick handling or shooting"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Good healthy food without the sugar"],
  ["Bro!"],
  ["Great question"],
  ["That's ok", "I understand", "What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!", "Good one!"]
];
const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]
const robot = ["How do you do, fellow human", "I am not a bot"];
msgerForm.addEventListener("submit", event => {
  event.preventDefault();
  const msgText = msgerInput.value;
  if (!msgText) return;
  msgerInput.value = "";
  addChat(PERSON_NAME, PERSON_IMG, "right", msgText);
  output(msgText);
});
function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")  
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");
  if (compare(prompts, replies, text)) {
    product = compare(prompts, replies, text);
  } else if (text.match(/thank/gi)) {
    product = "You're welcome!"
  } else if (text.match(/(robot|bot|robo)/gi)) {
    product = robot[Math.floor(Math.random() * robot.length)];
  } else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }
  const delay = input.split(" ").length * 100;
  setTimeout(() => {
    addChat(BOT_NAME, BOT_IMG, "left", product);
  }, delay);
}
function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}
function addChat(name, img, side, text) {
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>
      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>
        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;
  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}
function get(selector, root = document) {
  return root.querySelector(selector);
}
function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();
  return `${h.slice(-2)}:${m.slice(-2)}`;
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
