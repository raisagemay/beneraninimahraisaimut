document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const splash = document.getElementById("splash");
  const friendsSection = document.getElementById("friendsSection");
  const modal = document.getElementById("messageModal");
  const closeModal = document.getElementById("closeModal");
  const modalMessage = document.getElementById("modalMessage");

  modal.setAttribute("hidden", true);

  
  startBtn.addEventListener("click", () => {
    splash.style.display = "none";
    friendsSection.removeAttribute("hidden");
    createMathSymbols(25);
  });

  
  const friendButtons = document.querySelectorAll(".friendBtn");
  friendButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const message = btn.getAttribute("data-message") || "belum ada pesan";
      const sender = btn.textContent;

      modalMessage.innerHTML = `
        <div class="bubbleMessage">
          <h3>${sender}  💌</h3>
          <p>${message}</p>
        </div>
      `;
      modal.removeAttribute("hidden");
    });
  });

  
  closeModal.addEventListener("click", () => {
    modal.setAttribute("hidden", true);
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.setAttribute("hidden", true);
  });

  
  function createMathSymbols(count) {
    const symbols = ["➗", "✖️", "➕", "➖", "√", "π", "∞", "Σ", "∆", "≈"];
    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      el.classList.add("math-symbol");
      el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${100 + Math.random() * 20}vh`;
      el.style.fontSize = `${20 + Math.random() * 25}px`;
      el.style.animationDuration = `${6 + Math.random() * 6}s`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 12000);
    }
  }
});
