const imagePaths1 = [
  "注音卡 (1).png", "注音卡 (2).png", "注音卡 (3).png", "注音卡 (4).png", "注音卡 (5).png",
  "注音卡 (6).png", "注音卡 (7).png", "注音卡 (8).png", "注音卡 (9).png", "注音卡 (10).png",
  "注音卡 (11).png", "注音卡 (12).png", "注音卡 (13).png", "注音卡 (14).png", "注音卡 (15).png",
  "注音卡 (16).png", "注音卡 (17).png", "注音卡 (18).png", "注音卡 (19).png", "注音卡 (20).png",
  "注音卡 (21).png", "注音卡 (22).png", "注音卡 (23).png", "注音卡 (24).png", "注音卡 (25).png",
  "注音卡 (26).png", "注音卡 (27).png", "注音卡 (28).png", "注音卡 (29).png", "注音卡 (30).png",
  "注音卡 (31).png", "注音卡 (32).png", "注音卡 (33).png", "注音卡 (34).png", "注音卡 (35).png",
  "注音卡 (36).png", "注音卡 (37).png", "注音卡 (38).png", "注音卡 (39).png", "注音卡 (40).png",
  "注音卡 (41).png", "注音卡 (42).png", "注音卡 (43).png", "注音卡 (44).png", "注音卡 (45).png",
  "注音卡 (46).png", "注音卡 (47).png", "注音卡 (48).png", "注音卡 (49).png", "注音卡 (50).png",
  "注音卡 (51).png", "注音卡 (52).png", "注音卡 (53).png", "注音卡 (54).png", "注音卡 (55).png",
  "注音卡 (56).png", "注音卡 (57).png", "注音卡 (58).png", "注音卡 (59).png", "注音卡 (60).png",
  "注音卡 (61).png", "注音卡 (62).png", "注音卡 (63).png", "注音卡 (64).png", "注音卡 (65).png",
  "注音卡 (66).png", "注音卡 (67).png", "注音卡 (68).png", "注音卡 (69).png", "注音卡 (70).png",
  "注音卡 (71).png", "注音卡 (72).png", "注音卡 (73).png", "注音卡 (74).png", "注音卡 (75).png",
  "注音卡 (76).png", "注音卡 (77).png", "注音卡 (78).png", "注音卡 (79).png", "注音卡 (80).png",
  "注音卡 (81).png", "注音卡 (82).png", "注音卡 (83).png", "注音卡 (84).png", "注音卡 (85).png",
  "注音卡 (86).png", "注音卡 (87).png", "注音卡 (88).png", "注音卡 (89).png", "注音卡 (90).png",
  "注音卡 (91).png", "注音卡 (92).png", "注音卡 (93).png", "注音卡 (94).png", "注音卡 (95).png",
  "注音卡 (96).png", "注音卡 (97).png", "注音卡 (98).png", "注音卡 (99).png", "注音卡 (100).png",
  "注音卡 (101).png", "注音卡 (102).png", "注音卡 (103).png", "注音卡 (104).png", "注音卡 (105).png",
  "注音卡 (106).png", "注音卡 (107).png", "注音卡 (108).png", "注音卡 (109).png"
];

const imagePaths2 = [
  "圖片卡 (1).png", "圖片卡 (2).png", "圖片卡 (3).png", "圖片卡 (4).png", "圖片卡 (5).png",
  "圖片卡 (6).png", "圖片卡 (7).png", "圖片卡 (8).png", "圖片卡 (9).png", "圖片卡 (10).png",
  "圖片卡 (11).png", "圖片卡 (12).png", "圖片卡 (13).png", "圖片卡 (14).png", "圖片卡 (15).png",
  "圖片卡 (16).png", "圖片卡 (17).png", "圖片卡 (18).png", "圖片卡 (19).png", "圖片卡 (20).png",
  "圖片卡 (21).png", "圖片卡 (22).png", "圖片卡 (23).png", "圖片卡 (24).png", "圖片卡 (25).png",
  "圖片卡 (26).png", "圖片卡 (27).png", "圖片卡 (28).png", "圖片卡 (29).png", "圖片卡 (30).png",
  "圖片卡 (31).png", "圖片卡 (32).png", "圖片卡 (33).png", "圖片卡 (34).png", "圖片卡 (35).png",
  "圖片卡 (36).png", "圖片卡 (37).png", "圖片卡 (38).png", "圖片卡 (39).png", "圖片卡 (40).png",
  "圖片卡 (41).png", "圖片卡 (42).png", "圖片卡 (43).png", "圖片卡 (44).png", "圖片卡 (45).png",
  "圖片卡 (46).png", "圖片卡 (47).png", "圖片卡 (48).png", "圖片卡 (49).png", "圖片卡 (50).png",
  "圖片卡 (51).png", "圖片卡 (52).png", "圖片卡 (53).png", "圖片卡 (54).png", "圖片卡 (55).png",
  "圖片卡 (56).png", "圖片卡 (57).png", "圖片卡 (58).png", "圖片卡 (59).png", "圖片卡 (60).png",
  "圖片卡 (61).png", "圖片卡 (62).png", "圖片卡 (63).png", "圖片卡 (64).png", "圖片卡 (65).png",
  "圖片卡 (66).png", "圖片卡 (67).png", "圖片卡 (68).png", "圖片卡 (69).png", "圖片卡 (70).png",
  "圖片卡 (71).png", "圖片卡 (72).png", "圖片卡 (73).png", "圖片卡 (74).png", "圖片卡 (75).png",
  "圖片卡 (76).png", "圖片卡 (77).png", "圖片卡 (78).png", "圖片卡 (79).png", "圖片卡 (80).png",
  "圖片卡 (81).png", "圖片卡 (82).png", "圖片卡 (83).png", "圖片卡 (84).png", "圖片卡 (85).png",
  "圖片卡 (86).png", "圖片卡 (87).png", "圖片卡 (88).png", "圖片卡 (89).png", "圖片卡 (90).png",
  "圖片卡 (91).png", "圖片卡 (92).png", "圖片卡 (93).png", "圖片卡 (94).png", "圖片卡 (95).png",
  "圖片卡 (96).png", "圖片卡 (97).png", "圖片卡 (98).png", "圖片卡 (99).png", "圖片卡 (100).png",
  "圖片卡 (101).png", "圖片卡 (102).png", "圖片卡 (103).png", "圖片卡 (104).png", "圖片卡 (105).png",
  "圖片卡 (106).png", "圖片卡 (107).png", "圖片卡 (108).png", "圖片卡 (109).png"
];

// 建立配對資料陣列
let cards = [];
for (let i = 0; i < imagePaths1.length; i++) {
  cards.push({ image: imagePaths1[i], pairId: i });
  cards.push({ image: imagePaths2[i], pairId: i });
}

// 隨機排序
cards.sort(() => 0.5 - Math.random());

const board = document.getElementById('game-board');
let firstCard = null;
let secondCard = null;
let lock = false;
let matchedPairs = 0;

let startTime;
let timerInterval = null;
const timerDisplay = document.getElementById('timer');

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    timerDisplay.innerText = elapsed;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function createCard(cardData, index) {
  const card = document.createElement('div');
  card.classList.add('card', 'covered');
  card.dataset.image = cardData.image;
  card.dataset.pairId = cardData.pairId;
  card.dataset.index = index;
  card.style.backgroundImage = "url('images/back.png')";

  card.addEventListener('click', () => {
    if (lock || card.classList.contains('matched') || !card.classList.contains('covered')) return;

    card.classList.remove('covered');
    card.style.backgroundImage = `url('${cardData.image}')`;

    if (!firstCard) {
      firstCard = card;
      if (!startTime) startTimer();
    } else {
      secondCard = card;
      lock = true;

      if (firstCard.dataset.pairId === secondCard.dataset.pairId) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        matchedPairs++;
        resetTurn();

        if (matchedPairs === imagePaths1.length) {
          stopTimer();
          const timeTaken = Math.floor((Date.now() - startTime) / 1000);
          document.getElementById('message').innerText = `你贏了！花了 ${timeTaken} 秒。`;
        }
      } else {
        setTimeout(() => {
          firstCard.classList.add('covered');
          secondCard.classList.add('covered');
          firstCard.style.backgroundImage = "url('images/back.png')";
          secondCard.style.backgroundImage = "url('images/back.png')";
          resetTurn();
        }, 1000);
      }
    }
  });

  return card;
}

function resetTurn() {
  [firstCard, secondCard] = [null, null];
  lock = false;
}

// 建立遊戲卡片
cards.forEach((cardData, index) => {
  const card = createCard(cardData, index);
  board.appendChild(card);
});
