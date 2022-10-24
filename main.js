const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const BOT_IMG = "bot.png";
const PERSON_IMG = "user.png";
const BOT_NAME = "CoachBot";
const PERSON_NAME = "Player";
const prompts = [
  ["how to zoro", "how to do the zoro","zoro","i want to zoro","zoro"],
  ["how to do the michigan","michigan","i want to do the michigan","i want to learn the michigan"],
  ["i want to be quick","i want to be quicker","i want to be a quick player","i want to be a quick hockey player","quick skating"],
  ["i want to skate fast", "i want to be the fastest skater","i want to be the fastest player","i want to have speed","skate fast"],
  ["do you love hockey","do you like hockey"],
  ["do you play hockey"],
  ["how do i improve my skills","how do i improve my hockey skills","how to improve my skills"],
  ["what kind of skates should i buy", "what are the best skates","which skates are the best", "which hockey skates should i get","hockey skates"],
  ["fart","poop","you suck","you stink", "your a looser","crap"],
  ["how do i become a powerful skater","how do I become the best skater"],
  ["what is your favorite song","do you like music"],
  ["what is your favorite nhl team", "what is your favorite team", "which nhl team do you like","which team do you like"],
  ["who is your favorite player","which player do you like", "who is the best player","whos your favorite player"],
  ["how do i become a good passer","good passing","i want to be a good passer","i want to improve my passing"],
  ["how do i become a good stick handler","how to improve stick handling", "how do improve my stick handling","stick handling","good hands","silky hands"],
  ["how do i skate good","i wanna skate good", "i want to be a good skater"," how to be good","how do i get faster", "how to get fast", "how to skate fast"],
  ["do you know wayne glensky"],
  ["where you from", "where do you live","where is your home"],
  ["how do i skate","how do i start skating","i want to learn how to skate"],
  ["how do i do crossovers","crossovers"],
  ["how do i skate backwards","skating backwards","i want to skate backwards good"],
  ["do you know ddstats","who is ddstats"],
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up", "whats up"],
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

var str = "This link may help";
var link = str.link("https://www.youtube.com/watch?v=6pr3ZyMmGDI");
var link2 = str.link("https://www.youtube.com/watch?v=gzELE2AzV3M");
var link3 = str.link("https://www.prodigy-hockey.com/stick-handling/keys-to-improving-stick-handling/");
var link4 = str.link("https://hockeyhow.com/how-to-skate-faster/");
var link5 = str.link("https://www.minnesotahockey.org/news_article/show/315085-becoming-a-better-passer");
var link6 = str.link("https://skatingmagic.com/how-to-ice-skate-for-beginners/");
var link7 = str.link("http://www.hockeytutorial.com/skating-tips/crossovers-hockey-in-detail-crossover//");
var link8 = str.link("https://www.youtube.com/watch?v=yRSqqWyM74Y");
var link9 = str.link("https://www.youtube.com/watch?v=SYPMctwC93c");
var link10 = str.link("https://www.youtube.com/watch?v=SDLofZuBEvc");
const replies = [
  [link10],
  [link9],
  [link],
  [link2],
  ["yes its the best game on the planet and in the universe"],
  ["unfortunately i cannot...i am just a bot :("],
  ["if you have some open or free skate time use that time to work on skills and challenge yourself by visualizing what you want to do or achieve"],
  ["good quality good fitting skates are essential in becoming a good hockey player..just make sure they fit comfortably snug with sharpened and well maintained steel"],
  ["thats not nice...good character is part of becoming a great hockey player"],
  ["you have to continually push yourself and challenge yourself everytime you skate...be creative in your skating"],
  ["mr. roboto by styxx"],
  ["the wild of course"],
  ["currently Cale Makar but all time probably Jagr or Gretzky"],
  [link5],
  [link3],
  [link4],
  ["yes he is my main bro"],
  ["my home is inside a github repository"],
 [link6],
 [link7],
 [link8],
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
