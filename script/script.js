import { db } from "./firebase-config.js";

import {
    collection,
    getDocs
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


document.addEventListener("DOMContentLoaded", async () => {

    try {

        /* =========================
           KEGIATAN
        ========================= */

        const activityGrid =
        document.getElementById("activityGrid");

        if (activityGrid) {

            activityGrid.innerHTML = "";

            const snapshot =
            await getDocs(
                collection(db, "activities")
            );

            snapshot.forEach(doc => {

                const item = doc.data();

                activityGrid.innerHTML += `

                <div class="activity-card">

                    <img src="${item.image}" alt="">

                    <div class="activity-content">

                        <div class="activity-date">
                            ${item.date}
                        </div>

                        <h3>
                            ${item.title}
                        </h3>

                        <p>
                            ${item.desc}
                        </p>

                    </div>

                </div>

                `;

            });

        }


        /* =========================
           BERITA
        ========================= */

        const newsGrid =
        document.getElementById("newsGrid");

        if (newsGrid) {

            newsGrid.innerHTML = "";

            const newsSnapshot =
            await getDocs(
                collection(db, "news")
            );

            newsSnapshot.forEach(doc => {

                const item = doc.data();

                newsGrid.innerHTML += `

                <div class="news-card">

                    <img src="${item.image}" alt="">

                    <div class="news-content">

                        <div class="news-date">
                            ${item.date}
                        </div>

                        <h3>
                            ${item.title}
                        </h3>

                        <p>
                            ${item.desc}
                        </p>

                    </div>

                </div>

                `;

            });

        }

    }

    catch(error) {

        console.error(
            "Firebase Error:",
            error
        );

    }

});

  // HEADER SCROLL

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    header.classList.toggle(
        "active",
        window.scrollY > 50
    );

});


// MOBILE MENU

const menuToggle =
document.querySelector(".menu-toggle");

const navMenu =
document.querySelector(".nav-menu");

menuToggle.onclick = ()=>{

    navMenu.classList.toggle("active");

}

// SHARE BERITA

document.querySelectorAll(".share-btn")
.forEach(button=>{

    button.addEventListener("click",()=>{

        if(navigator.share){

            navigator.share({

                title:document.title,

                text:"Berita terbaru Remaja Cibenoang Berkarya",

                url:window.location.href

            });

        }else{

            navigator.clipboard.writeText(window.location.href);

            alert("Link berhasil disalin");

        }

    });

});
