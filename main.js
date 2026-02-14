const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const BOT_IMG = "bot.png";
const PERSON_IMG = "user.png";
const BOT_NAME = "CoachBot";
const PERSON_NAME = "Player";
const STORAGE_KEY = "coachbot.history";
const prompts = [
  ["hockey dekes", "moves","hockey moves","fakes","dekes"],
  ["hockey"],
  ["wayne gretzky","gretzky"],
  ["international falls","int'l falls"],
  ["what is your favorite number", "your favorite number","what number do you like"],
  ["do you play hockey","you play hockey","what do you do","what do you like to do"],
  ["how to zoro", "how to do the zoro","zoro","i want to zoro","zoro"],
  ["how to do the michigan","michigan","i want to do the michigan","i want to learn the michigan","how to michigan"],
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
  ["how do i become a good passer","good passing","i want to be a good passer","i want to improve my passing","passing"],
  ["how do i become a good stick handler","how to improve stick handling", "how do improve my stick handling","stick handling","good hands","silky hands"],
  ["how do i skate good","i wanna skate good", "i want to be a good skater"," how to be good","how do i get faster", "how to get fast", "how to skate fast"],
  ["do you know wayne glensky","wayne glensky"],
  ["where you from", "where do you live","where is your home"],
  ["how do i skate","how do i start skating","i want to learn how to skate"],
  ["how do i do crossovers","crossovers"],
  ["how do i skate backwards","skating backwards","i want to skate backwards good"],
  ["do you know ddstats","who is ddstats"],
  ["how do i shoot harder","shoot harder","hard shot","i want a harder shot","how to get a harder shot"],
  ["how do i improve my wrist shot","wrist shot","wrist shot tips","better wrist shot"],
  ["how do i improve my slapshot","slapshot","slap shot","slapshot tips","harder slapshot"],
  ["how do i take a snapshot","snapshot","snap shot","snapshot tips"],
  ["how do i improve my backhand","backhand","backhand shot","backhand tips"],
  ["how do i win faceoffs","faceoffs","faceoff tips","win draws","win a faceoff"],
  ["how do i get better at defense","play defense","defense tips","defensive skills"],
  ["how do i improve my goalie skills","goalie tips","goalie","i play goalie"],
  ["how do i stick lift","stick lift","stick lifting","lifting the stick"],
  ["how do i poke check","poke check","pokechecking","poke check tips"],
  ["how do i improve my endurance","stamina","conditioning","get in shape","off ice training"],
  ["how do i practice alone","practice by myself","solo practice","train alone"],
  ["how often should i practice","practice schedule","how much should i practice"],
  ["what position should i play","best position","which position","i want to play wing","i want to play center","i want to play defense"],
  ["what stick should i buy","best hockey stick","stick flex","what flex should i use","curve"],
  ["how do i tape my stick","tape my stick","taping my stick","how to tape a hockey stick"],
  ["what should i do before a game","pregame routine","warm up","how to warm up"],
  ["i am nervous","nervous before game","game nerves","confidence"],
  ["how do i improve my passing accuracy","passing accuracy","crisp passes","saucer pass"],
  ["how do i improve edgework","edgework","edges","edge control"],
  ["how do i stop","hockey stop","stopping","how to hockey stop"],
  ["how do i turn","tight turns","turning","quick turns"],
  ["how do i accelerate","explosive starts","quick starts","first steps"],
  ["how do i read the play","hockey iq","awareness","vision"],
  ["how do i improve my balance","balance","stability"],
  ["can you give me a drill","practice drill","drill ideas","training drill"],
  ["can you give me a challenge","skill challenge","challenge me"],
  ["what should i work on today","training plan","what to practice"],
  ["nutrition","what should i eat","hydration","diet"],
  ["injury prevention","stretching","mobility","warmup stretches"],
  ["how do i recover","recovery","rest day","soreness"],
  ["who is your favorite goalie","favorite goalie"],
  ["what is offsides","offside","what is icing","icing"],
  ["what is the best way to learn","learning tips","how to learn faster"],
  ["can you motivate me","motivation","pep talk"],
  ["tips for tryouts","tryouts","make the team"],
  ["tips for younger players","kids hockey","youth hockey"],
  ["tips for older beginners","adult learn to play","beginner adult"],
  ["how do i improve my shooting accuracy","shooting accuracy","hit the corners","aim"],
  ["edge and flow","edge & flow","edge and flow hockey","edgeandflow","edge and flow skills","edge and flow training"],
  ["contact darren dunbar","contact darren","contact edge and flow","contact edge & flow","edge and flow contact","edge & flow contact","contact coach","contact form"],
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
var link11 = str.link("https://www.youtube.com/watch?v=N7EBvc-PUII");
var link12 = str.link("https://www.instagram.com/edgeandflowhockey");
var link13 = str.link("https://form.123formbuilder.com/6180076/contact-form");
const replies = [
  [link11],
  ["yep"],
  ["the great one"],
  ["lets go broncos"],
  ["i like 88"],
  ["i just coach online"],
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
  ["Focus on weight transfer, a strong bottom hand, and shooting in stride. Build power from your legs and core."],
  ["Snap the puck off the blade with quick hands and a strong follow-through. Practice changing release points."],
  ["Load your weight, keep your head down, and drive through the puck. Timing and flex matter."],
  ["A snapshot is a hybrid—load slightly and release fast. Practice shooting off quick passes."],
  ["Use soft hands and follow through to the target. Backhands get better with reps and wrist strength."],
  ["Win faceoffs with timing, body position, and hand speed. Practice different grips and counters."],
  ["Keep good gaps, angle attackers wide, and use active stick positioning."],
  ["Work on stance, tracking, and recoveries. Reps on basics beat fancy saves."],
  ["Approach from the side, lift the stick, and take the puck on your next stride."],
  ["Keep your stick on the ice and poke when the puck is extended—then close the gap."],
  ["Mix on-ice work with off-ice cardio and strength. Consistency beats big one-off sessions."],
  ["Set a small space, use a ball or puck, and time your drills. Short, focused reps work best."],
  ["Aim for 3–5 focused sessions per week. Shorter, higher-quality reps are best."],
  ["Pick a position based on what you enjoy: speed for wing, vision for center, patience for defense."],
  ["Choose a stick that feels balanced. Flex should match your height/strength—try before you buy."],
  ["Start at the heel and keep it smooth. A clean tape job helps feel and control."],
  ["Do a light sweat, dynamic stretches, and puck touches. Keep it simple and consistent."],
  ["Nerves are normal. Focus on your first shift and simple plays to build confidence."],
  ["Use targets and practice passing in motion. Soft hands and crisp follow-through matter."],
  ["Edgework improves with slow, controlled drills—one-foot glides and C-cuts help a lot."],
  ["Bend knees, rotate hips, and use both edges. Start slow and build speed."],
  ["Lower your stance, use inside edges, and lean into the turn. Stay balanced."],
  ["Explosive starts come from strong leg drive and short, quick strides."],
  ["Keep your head up and scan early. Anticipate, don’t react late."],
  ["Balance comes from core strength and knee bend. Practice one-leg glides."],
  ["Try 5–10 minutes of edgework, then shooting, then puck control. Keep it timed."],
  ["Challenge: 25 quick-release shots in 5 minutes. Track your score."],
  ["Pick one skill and do 3 short drills today. Quality over quantity."],
  ["Hydrate well and eat balanced meals with protein and carbs for energy."],
  ["Warm up dynamically and stretch after. Mobility keeps you healthy."],
  ["Sleep and light recovery skating help. Don’t skip rest days."],
  ["Marc-Andre Fleury—fun and fearless."],
  ["Offsides is when a player enters the zone before the puck. Icing is shooting it past the far red line without being touched."],
  ["Break skills into small steps and practice consistently."],
  ["You’ve got this. Focus on effort and one small win each session."],
  ["Be early, work hard, and keep shifts short. Coaches notice effort."],
  ["Keep it fun and focus on skating and confidence."],
  ["Start with basic skating and puck control. Consistent practice is key."],
  ["Pick small targets and shoot with intent. Accuracy improves with repetition."],
  ["Edge & Flow focuses on edge control and skill flow. Learn more here: " + link12],
  ["You can contact Darren Dunbar / Edge & Flow here: " + link13],
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

restoreHistory();
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
  const text = normalize(input);

  product = bestReply(text);

  if (!product && text.match(/thank/gi)) {
    product = "You're welcome!";
  } else if (!product && text.match(/(robot|bot|robo)/gi)) {
    product = robot[Math.floor(Math.random() * robot.length)];
  } else if (!product) {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  const delay = input.split(" ").length * 100;
  setTimeout(() => {
    addChat(BOT_NAME, BOT_IMG, "left", product);
  }, delay);
}

function normalize(input) {
  return input
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/[\d]/gi, "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/r u/g, "are you");
}

function bestReply(text) {
  let bestScore = 0;
  let bestIndex = -1;

  for (let i = 0; i < prompts.length; i++) {
    let groupScore = 0;
    for (let j = 0; j < prompts[i].length; j++) {
      const promptText = prompts[i][j];
      const score = keywordScore(text, promptText);
      if (score > groupScore) groupScore = score;
    }
    if (groupScore > bestScore) {
      bestScore = groupScore;
      bestIndex = i;
    }
  }

  if (bestScore < 0.4 || bestIndex === -1) return "";
  const replyList = replies[bestIndex];
  return replyList[Math.floor(Math.random() * replyList.length)];
}

function keywordScore(input, prompt) {
  const inputTokens = new Set(input.split(" "));
  const promptTokens = new Set(prompt.split(" "));
  let hits = 0;
  for (const t of promptTokens) {
    if (inputTokens.has(t)) hits++;
  }
  return promptTokens.size ? hits / promptTokens.size : 0;
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
  saveHistory();
}
function get(selector, root = document) {
  return root.querySelector(selector);
}
function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();
  return `${h.slice(-2)}:${m.slice(-2)}`;
}
function restoreHistory() {
  const html = localStorage.getItem(STORAGE_KEY);
  if (html) {
    msgerChat.innerHTML = html;
    msgerChat.scrollTop = msgerChat.scrollHeight;
  }
}

function saveHistory() {
  localStorage.setItem(STORAGE_KEY, msgerChat.innerHTML);
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
