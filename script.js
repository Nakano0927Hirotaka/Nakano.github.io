document.addEventListener("DOMContentLoaded", () => {
  // ===== ナビスクロール（既存） =====
  const buttons = document.querySelectorAll(".nav-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // ===== 画像・動画 拡大処理 =====
  const modal = document.getElementById("media-modal");
  const modalContent = document.getElementById("modal-content");
  const closeBtn = document.getElementById("modal-close");

  document.querySelectorAll(".zoom-item").forEach(item => {
    item.addEventListener("click", () => {
      modal.style.display = "flex";
      modalContent.innerHTML = "";

      if (item.tagName === "IMG") {
        const img = document.createElement("img");
        img.src = item.src;
        modalContent.appendChild(img);
      }

      if (item.tagName === "VIDEO") {
        const video = document.createElement("video");
        video.src = item.querySelector("source").src;
        video.controls = true;
        video.autoplay = true;
        modalContent.appendChild(video);
      }
    });
  });

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", e => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.style.display = "none";
    modalContent.innerHTML = "";
  }
});
