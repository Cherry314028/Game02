const imagePaths1 = Array.from({ length: 114 }, (_, i) => `注音卡 (${i + 11}).jpg`);
const imagePaths2 = Array.from({ length: 114 }, (_, i) => `圖片卡 (${i + 11}).jpg`);


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
  card.dataset.image = 'images/'+cardData.image;
  card.dataset.pairId = cardData.pairId;
  card.dataset.index = index;
  card.style.backgroundImage = "url('images/back.jpg')";

  card.addEventListener('click', () => {
    if (lock || card.classList.contains('matched') || !card.classList.contains('covered')) return;

    card.classList.remove('covered');
    card.style.backgroundImage = `url('images/${cardData.image}')`;

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
          firstCard.style.backgroundImage = "url('images/back.jpg')";
          secondCard.style.backgroundImage = "url('images/back.jpg')";
          resetTurn();
        }, 1500);
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
