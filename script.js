// 🖼️ Preload all ball images
const preloadImages = () => {
  const ballImageList = [
    "yellow.webp",
    "green.webp",
    "brown.webp",
    "blue.webp",
    "pink.webp",
    "black.webp",
    "lock.svg" // preload the lock icon too
  ];

  ballImageList.forEach(name => {
    const img = new Image();
    img.src = `assets/${name}`;
  });
};

// 🚀 Call it immediately
preloadImages();

const fullPool = ['yellow', 'green', 'brown', 'blue', 'pink', 'black'];
let playerCount = 0;
let ballsPerPlayer = 0;
let assignments = [];
let currentPlayer = 0;

function setStep(stepText) {
  document.getElementById('step-indicator').textContent = stepText;
}

function showSection(idToShow) {
  document.querySelectorAll(".step").forEach(step => {
    step.classList.remove("visible");
    step.classList.add("hidden");
  });
  const target = document.getElementById(idToShow);
  target.classList.remove("hidden");
  target.classList.add("visible");
}

function changeValue(id, delta) {
  const input = document.getElementById(id);
  const min = parseInt(input.min);
  const max = parseInt(input.max);
  let value = parseInt(input.value) + delta;
  if (value < min) value = min;
  if (value > max) value = max;
  input.value = value;
}

function startGame() {
  document.getElementById('error').textContent = '';
  playerCount = parseInt(document.getElementById('playerCountInput').value);
  ballsPerPlayer = parseInt(document.getElementById('ballsPerPlayerInput').value);
  const totalNeeded = playerCount * ballsPerPlayer;

  if (totalNeeded > fullPool.length) {
    const errorEl = document.getElementById('error');
    errorEl.textContent = `⚠️ Too many balls requested. Max possible is 6 total.`;
    errorEl.style.display = 'block';
    return;
  }

  const shuffled = [...fullPool].sort(() => 0.5 - Math.random());
  assignments = [];
  for (let i = 0; i < playerCount; i++) {
    assignments.push(shuffled.splice(0, ballsPerPlayer));
  }

  currentPlayer = 0;
  setStep('Step 2: Reveal Turns');
  showSection('game');
  updateTurn();
}

function updateTurn() {
  document.getElementById('turnTitle').textContent = `Player ${currentPlayer + 1}`;
  const box = document.getElementById('numberDisplay');
  box.classList.remove('revealed');
  box.classList.add('hidden');
  box.innerHTML = '';
  document.getElementById('showBtn').classList.remove('hidden');
  document.getElementById('nextBtn').classList.add('hidden');

  const percent = (currentPlayer / playerCount) * 100;
  document.getElementById('progressFill').style.width = `${percent}%`;
}

function showNumber() {
  const colors = assignments[currentPlayer];
  const box = document.getElementById('numberDisplay');
  box.innerHTML = colors.map(color =>
    `<img src="assets/${color}.webp" alt="${color} ball">`
  ).join('');
  box.classList.remove('hidden');
  setTimeout(() => box.classList.add('revealed'), 10);
  document.getElementById('showBtn').classList.add('hidden');
  document.getElementById('nextBtn').classList.remove('hidden');
}

function nextPlayer() {
  currentPlayer++;
  if (currentPlayer >= playerCount) {
    showSummary();
  } else {
    updateTurn();
  }
}

function showSummary() {
  setStep('Step 3: Summary');
  showSection('summary');
  document.getElementById('progressFill').style.width = `100%`;

  const container = document.getElementById('allPlayers');
  container.innerHTML = '';

  assignments.forEach((balls, index) => {
    const playerId = `player-${index}`;
    const div = document.createElement('div');
    div.classList.add('summary-card', 'locked');
    div.setAttribute('id', playerId);

    div.innerHTML = `
      <h3>Player ${index + 1}</h3>
      <button class="unlock-btn" onclick="unlockPlayer(this)">
        <img src="assets/lock.svg" alt="Unlock" class="icon" />
        Unlock
      </button>
      <div class="number-box hidden">
        ${balls.map(color => `<img src="assets/${color}.webp" alt="${color} ball">`).join('')}
      </div>
    `;

    container.appendChild(div);
  });
}

function unlockPlayer(button) {
  const card = button.closest('.summary-card');
  const box = card.querySelector('.number-box');

  // Remove locked state
  card.classList.remove('locked');

  // Replace unlock button with Show/Hide
  button.outerHTML = `
    <button onclick="toggleReveal(this)">👁️ Show/Hide</button>
  `;
}

function toggleReveal(button) {
  const box = button.nextElementSibling;
  box.classList.toggle('hidden');
  if (!box.classList.contains('hidden')) {
    setTimeout(() => box.classList.add('revealed'), 10);
  } else {
    box.classList.remove('revealed');
  }
}

function restartGame() {
  const modal = document.getElementById('restartModal');
  const confirmBtn = document.getElementById('confirmRestart');
  const cancelBtn = document.getElementById('cancelRestart');

  if (!modal || !confirmBtn || !cancelBtn) {
    console.error("Modal elements not found in DOM");
    return;
  }

  // Show the modal
  modal.classList.remove('hidden');

  // Remove any previous listeners to prevent stacking
  confirmBtn.replaceWith(confirmBtn.cloneNode(true));
  cancelBtn.replaceWith(cancelBtn.cloneNode(true));

  // Re-grab cloned elements
  const newConfirm = document.getElementById('confirmRestart');
  const newCancel = document.getElementById('cancelRestart');

  newConfirm.onclick = () => {
    modal.classList.add('hidden');

    setStep('Step 1: Setup');
    showSection('setup');
    document.getElementById('allPlayers').innerHTML = '';
    document.getElementById('progressFill').style.width = `0%`;
    assignments = [];
    currentPlayer = 0;

    const errorBox = document.getElementById('error');
    errorBox.textContent = '';
    errorBox.classList.remove('error-box');
    errorBox.style.display = 'none';
  };

  newCancel.onclick = () => {
    modal.classList.add('hidden');
  };
}



