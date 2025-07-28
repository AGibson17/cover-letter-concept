function openModal() {
  const modal = document.getElementById("coverLetterModal");
  if (modal) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent background scroll
  }
}

function closeModal() {
  const modal = document.getElementById("coverLetterModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = ""; // Re-enable scroll
  }
}

function showIntro() {
  document.getElementById("introView").style.display = "block";
  document.getElementById("metricsView").style.display = "none";
}

function showMetrics() {
  document.getElementById("introView").style.display = "none";
  document.getElementById("metricsView").style.display = "block";
}
