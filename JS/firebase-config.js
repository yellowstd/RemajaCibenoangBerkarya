<script type="module" src="js/script.js">
/* =========================
   FIREBASE
========================= */

import { db } from "./firebase-config.js";

import {
    collection,
    getDocs
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


/* =========================
   RENDER ACTIVITY
========================= */

async function renderActivities(filter = "all") {

    const grid = document.getElementById("activityGrid");

    if (!grid) return;

    grid.innerHTML = "";

    const snapshot = await getDocs(
        collection(db, "activities")
    );

    snapshot.forEach(doc => {

        const item = doc.data();

        if (
            filter !== "all" &&
            item.category !== filter
        ) return;

        grid.innerHTML += `

        <div class="activity-card">

            <img src="${item.image}" alt="${item.title}">

            <div class="activity-info">

                <span>${item.date}</span>

                <h3>${item.title}</h3>

                <p>${item.desc}</p>

                <button
                    class="detail-btn"
                    data-title="${item.title}"
                    data-date="${item.date}"
                    data-desc="${item.desc}">

                    Selengkapnya

                </button>

            </div>

        </div>

        `;
    });

}


/* =========================
   NEWS SLIDER
========================= */

function initNewsSlider() {

    document.querySelectorAll(".news-slider").forEach(slider => {

        const track = slider.querySelector(".news-track");
        const images = slider.querySelectorAll("img");

        let index = 0;

        if (images.length <= 1) return;

        setInterval(() => {

            index++;

            if (index >= images.length) {
                index = 0;
            }

            track.style.transform =
                `translateX(-${index * 100}%)`;

        }, 3000);

    });

}


/* =========================
   MODAL
========================= */

const modal = document.querySelector(".modal");
const modalTitle = document.getElementById("modal-title");
const modalDate = document.getElementById("modal-date");
const modalDesc = document.getElementById("modal-desc");

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("detail-btn")) {

        modalTitle.textContent =
            e.target.dataset.title;

        modalDate.textContent =
            e.target.dataset.date;

        modalDesc.textContent =
            e.target.dataset.desc;

        modal.classList.add("active");
    }

    if (e.target.classList.contains("close-modal")) {

        modal.classList.remove("active");

    }

});


/* =========================
   LIGHTBOX
========================= */

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.addEventListener("click", (e) => {

    if (e.target.matches(".gallery-item img")) {

        lightbox.classList.add("active");

        lightboxImg.src = e.target.src;

    }

    if (e.target.classList.contains("view-btn")) {

        const img =
            e.target.parentElement.querySelector("img");

        lightbox.classList.add("active");

        lightboxImg.src = img.src;

    }

    if (e.target.classList.contains("close-lightbox")) {

        lightbox.classList.remove("active");

    }

});


/* =========================
   MOBILE MENU
========================= */

const hamburger =
document.querySelector(".hamburger");

const navMenu =
document.querySelector(".nav-menu");

if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
document.querySelectorAll("section[id]");

const navLinks =
document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let scrollY = window.pageYOffset;

    sections.forEach(section => {

        const top =
            section.offsetTop - 120;

        const height =
            section.offsetHeight;

        if (
            scrollY >= top &&
            scrollY < top + height
        ) {

            navLinks.forEach(link =>
                link.classList.remove("active")
            );

            const active =
                document.querySelector(
                    `.nav-menu a[href="#${section.id}"]`
                );

            if (active) {

                active.classList.add("active");

            }

        }

    });

});


/* =========================
   FILTER PROGRAM
========================= */

document.querySelectorAll(".program-card")
.forEach(btn => {

    btn.addEventListener("click", () => {

        document
        .querySelectorAll(".program-card")
        .forEach(card =>
            card.classList.remove("active")
        );

        btn.classList.add("active");

        renderActivities(
            btn.dataset.category
        );

    });

});


/* =========================
   GALLERY BUTTON
========================= */

const gallery =
document.querySelector("#gallery");

const openBtn =
document.querySelector(".open-gallery-btn");

const closeBtn =
document.querySelector(".close-gallery-btn");

if (openBtn) {

    openBtn.addEventListener("click", () => {

        gallery.classList.add("active");

    });

}

if (closeBtn) {

    closeBtn.addEventListener("click", () => {

        gallery.classList.remove("active");

    });

}


/* =========================
   HERO SLIDER
========================= */

const heroSlides =
document.querySelectorAll(".hero-slide");

let heroIndex = 0;

function heroSlider() {

    heroSlides.forEach(slide => {

        slide.classList.remove("active");

    });

    heroSlides[heroIndex]
    .classList.add("active");

    heroIndex++;

    if (heroIndex >= heroSlides.length) {

        heroIndex = 0;

    }

}

if (heroSlides.length) {

    heroSlider();

    setInterval(heroSlider, 4000);

}


/* =========================
   INIT
========================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderActivities();

        initNewsSlider();

    }
);
</script>
