function openModal() {
  const modal = document.getElementById("coverLetterModal");
  if (modal) {
    console.log("Opening modal..."); // Debug log
    
    // Show cover letter view by default first
    showCoverLetterView();
    
    // Show modal 
    modal.style.display = "flex";
    modal.style.opacity = "1"; // Make sure it's visible immediately
    document.body.style.overflow = "hidden"; // Prevent background scroll
    
    // Add show class for any additional animations
    modal.classList.add("show");
    console.log("Modal should be visible now"); // Debug log
  } else {
    console.error("Modal element not found!"); // Debug log
  }
}

function closeModal() {
  const modal = document.getElementById("coverLetterModal");
  if (modal) {
    // Start exit animation
    modal.classList.remove("show");
    modal.style.opacity = "0";
    
    // Hide modal after animation completes
    setTimeout(() => {
      modal.style.display = "none";
      document.body.style.overflow = ""; // Re-enable scroll
    }, 300); // Match transition duration
  }
}

function showCoverLetterView() {
  const coverView = document.getElementById("coverLetterView");
  const metricsView = document.getElementById("metricsView");
  
  console.log("Switching to cover letter view", { coverView, metricsView }); // Debug log
  
  if (coverView) {
    coverView.style.display = "block";
  }
  if (metricsView) {
    metricsView.style.display = "none";
  }
}

function showMetricsView() {
  const coverView = document.getElementById("coverLetterView");
  const metricsView = document.getElementById("metricsView");
  
  if (coverView && metricsView) {
    coverView.style.display = "none";
    metricsView.style.display = "block";
    
    // Animate progress bars when metrics view is shown
    animateProgressBars();
  }
}

function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress .fill');
  progressBars.forEach((bar, index) => {
    setTimeout(() => {
      const targetWidth = bar.getAttribute('data-width');
      bar.style.width = targetWidth + '%';
    }, index * 200); // Stagger animations
  });
}

function showIntro() {
  document.getElementById("introView").style.display = "block";
  document.getElementById("metricsView").style.display = "none";
}

function showMetrics() {
  document.getElementById("introView").style.display = "none";
  document.getElementById("metricsView").style.display = "block";
}
