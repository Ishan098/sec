let mediaRecorder;
let recordedChunks = [];

/* ========== 🎥 START REACTION RECORDING ========== */
function startRecording() {
  const recorderScreen = document.getElementById('recorder');
  const pookieCheck = document.getElementById('pookie-check');

  navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = event => {
        if (event.data.size > 0) recordedChunks.push(event.data);
      };
      mediaRecorder.start();
      recorderScreen.classList.remove('active');
      pookieCheck.classList.add('visible');
    })
    .catch(err => {
      alert('Oops! Camera permissions are needed to proceed 💔');
    });
}

/* ========== 🚨 POOKIE CHECK TO GLITCH TRANSITION ========== */
function enterPookieRealm() {
  document.getElementById('pookie-check').classList.remove('visible');
  document.getElementById('glitch-screen').classList.add('visible');

  setTimeout(() => {
    document.getElementById('glitch-screen').classList.remove('visible');
    document.getElementById('page1').classList.add('visible');
    rebootSequence();
  }, 8000);
}

/* ========== 🧠 FAKE REBOOT ========== */
function rebootSequence() {
  const text = document.getElementById('reboot-text');
  let dots = 0;
  const interval = setInterval(() => {
    text.textContent = `Rebooting${'.'.repeat(dots)}`;
    dots = (dots + 1) % 4;
  }, 800);
  setTimeout(() => {
    clearInterval(interval);
    document.getElementById('page1').classList.remove('visible');
    document.getElementById('page2').classList.add('visible');
    runTerminal();
  }, 8000);
}

/* ========== 💻 TERMINAL ANIMATION ========== */
function runTerminal() {
  const terminalText = document.getElementById('terminal-text');
  const lines = [
    "Loading feelings.exe...",
    "Compiling memories...",
    "Running compatibility check...",
    "2 months of smiles detected.",
    "",
    "System alert: Potential",
    "girlfriend detected 💘",
    "",
    "Permission to upgrade",
    "relationship status?"
  ];

  let i = 0;
  function typeNextLine() {
    if (i < lines.length) {
      terminalText.innerHTML += lines[i] + "<br/>";
      i++;
      setTimeout(typeNextLine, 1000);
    }
  }
  typeNextLine();
}

/* ========== ➡️ PAGE NAVIGATION ========== */
function nextPage(pageId) {
  document.querySelectorAll('.screen.visible').forEach(s => s.classList.remove('visible'));
  document.getElementById(pageId).classList.add('visible');
}

/* ========== 💥 GLITCH BEFORE PROPOSAL ========== */
function runGlitch() {
  
  playGlitchSound();
  const page4 = document.getElementById('page4');
  page4.classList.remove('visible');

  const glitch = document.createElement('div');
  glitch.className = 'screen glitchy visible';
  glitch.innerHTML = `
    <p>💖 SYSTEM OVERHEATING</p>
    <p>✨ Butterflies Detected</p>
    <p>🫠 Melting from too much cuteness...</p>
    <p>💭 Wait... is this love or just really good weed?</p>
  `;
  document.body.appendChild(glitch);

  setTimeout(() => {
    glitch.remove();
    document.getElementById('page5').classList.add('visible');
  }, 8000);
}

/* ========== 🎉 FINAL CELEBRATION ========== */
function celebrate() {
  document.querySelectorAll('.screen.visible').forEach(s => s.classList.remove('visible'));
  document.getElementById('final-page').classList.add('visible');
  launchConfetti();

  // Stop recording and prepare video
  mediaRecorder.stop();
  mediaRecorder.onstop = () => {
    const blob = new Blob(recordedChunks, { type: 'video/webm' });
    const videoURL = URL.createObjectURL(blob);
    const video = document.getElementById('reaction-video');
    const link = document.getElementById('download-link');
    video.src = videoURL;
    link.href = videoURL;
  };
}

/* ========== 😳 WRONG BUTTON FUN ========== */
function oops() {
  alert("Oops. Wrong button? Try again, pookie 💞");
}

/* ========== 🎊 CONFETTI CANVAS ========== */
function launchConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 150,
    color: `hsl(${Math.random() * 360}, 100%, 80%)`,
    tilt: Math.random() * 20 - 10,
    tiltAngle: 0
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.lineWidth = c.r;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x + c.tilt + c.r / 2, c.y);
      ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 2);
      ctx.stroke();
    });
    update();
  }

  function update() {
    confetti.forEach(c => {
      c.y += Math.cos(c.d) + 1 + c.r / 2;
      c.tiltAngle += 0.1;
      c.tilt = Math.sin(c.tiltAngle) * 15;

      if (c.y > canvas.height) {
        c.y = -10;
        c.x = Math.random() * canvas.width;
      }
    });
  }

  function loop() {
    draw();
    requestAnimationFrame(loop);
  }

  loop();
}
/* ========== DRAMATIC PHOTO CLICK & FAKE PREDICTIONS ========== */
document.getElementById('click-photo-btn').addEventListener('click', function() {
    // Display the prediction container and flirty messages
    const predictionContainer = document.getElementById('prediction-container');
    predictionContainer.classList.remove('hidden');
    predictionContainer.classList.add('visible');
  
    // Trigger a cute animation (sparkles, glow effect)
    const button = document.getElementById('click-photo-btn');
    button.style.transform = 'scale(1.1)';
    button.style.transition = 'transform 0.3s ease-in-out';
  
    // Fake predictions (e.g., fortune telling)
    const predictions = [
      "You’re 99.9% perfect... but I can't wait to discover the other 0.1% 💘",
      "In the future, I see us together... a lot. Like, *way* more than we’ve planned 🥰",
      "I predict we'll make some pretty cute memories together 🍓✨",
      "Here's a flirty thought: How about we add a 'date' section to the timeline? 💕"
    ];
  
    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    document.querySelector('.prediction').textContent = randomPrediction;
  
    // After a second, let's display the second flirty prediction
    setTimeout(() => {
      document.querySelector('.flirty-prediction').style.display = 'block';
    },2000);
  });

  function playGlitchSound() {
    const audio = new Audio('https://assets.mixkit.co/sfx/download/mixkit-digital-glitch-1105.mp3');
    audio.play();
  }
  
