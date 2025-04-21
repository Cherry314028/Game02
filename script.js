const imagePaths1 = [
  "注音卡 (1).png", "注音卡 (2).png", "注音卡 (3).png", "注音卡 (4).png", "注音卡 (5).png",
  "注音卡 (6).png", "注音卡 (7).png", "注音卡 (8).png", "注音卡 (9).png", "注音卡 (10).png",
  "注音卡 (11).png", "注音卡 (12).png", "注音卡 (13).png", "注音卡 (14).png", "注音卡 (15).png"
];

const imagePaths2 = [
  "圖片卡 (1).png", "圖片卡 (2).png", "圖片卡 (3).png", "圖片卡 (4).png", "圖片卡 (5).png",
  "圖片卡 (6).png", "圖片卡 (7).png", "圖片卡 (8).png", "圖片卡 (9).png", "圖片卡 (10).png",
  "圖片卡 (11).png", "圖片卡 (12).png", "圖片卡 (13).png", "圖片卡 (14).png", "圖片卡 (15).png"
];

// 選出 6 對隨機卡牌
let cards = [];
const selectedIndices = [];
while (selectedIndices.length < 6) {
  const index = Math.floor(Math.random() * imagePaths1.length);
  if (!selectedIndices.includes(index)) {
    selectedIndices.push(index);
  }
}

selectedIndices.forEach(i => {
  cards.push({ image: imagePaths1[i], pairId: i });
  cards.push({ image: imagePaths2[i], pairId: i });
});

// 打亂卡牌順序
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
  card.style.backgroundImage = "url('back.png')";

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

        if (matchedPairs === 6) {
          stopTimer();
          const timeTaken = Math.floor((Date.now() - startTime) / 1000);
          document.getElementById('message').innerText = `你贏了！花了 ${timeTaken} 秒。`;
        }
      } else {
        setTimeout(() => {
          firstCard.classList.add('covered');
          secondCard.classList.add('covered');
          firstCard.style.backgroundImage = "url('back.png')";
          secondCard.style.backgroundImage = "url('back.png')";
          resetTurn();
        }, 3000);
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
