// Mobile menu toggle functionality
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("navMenu")

// Toggle mobile menu when hamburger is clicked
if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    hamburger.classList.toggle("active")
  })
}

// Close mobile menu when a nav link is clicked
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    hamburger.classList.remove("active")
  })
})

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  const isClickInsideNav = event.target.closest("nav")
  if (!isClickInsideNav && navMenu && navMenu.classList.contains("active")) {
    navMenu.classList.remove("active")
    hamburger.classList.remove("active")
  }
})

// Set active nav link based on current page
window.addEventListener("load", () => {
  const currentPage = window.location.pathname.split("/").pop() || "home.html"
  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active")
    }
  })
})

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})
