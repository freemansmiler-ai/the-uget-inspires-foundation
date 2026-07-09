/*====================================================
  UGET FOUNDATION WEBSITE
  script.js
=====================================================*/

document.addEventListener("DOMContentLoaded", () => {


    /*=========================
        LOADER
    =========================*/

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        if (loader) {

            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);

        }

    });



    /*=========================
        MOBILE MENU
    =========================*/

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("show");

        });


        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("show");

            });

        });

    }



    /*=========================
        STICKY HEADER
    =========================*/

    const header = document.querySelector("header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });

    }



    /*=========================
        ACTIVE NAVIGATION
    =========================*/

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");


    function activeMenu() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {

                current = section.id;

            }

        });


        navItems.forEach(link => {

            link.classList.remove("active");


            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener("scroll", activeMenu);



    /*=========================
        SCROLL REVEAL
    =========================*/

    const revealElements = document.querySelectorAll("section");


    function reveal() {

        revealElements.forEach(section => {

            const position = section.getBoundingClientRect().top;

            if (position < window.innerHeight - 120) {

                section.classList.add("active");
                section.classList.add("reveal");

            }

        });

    }


    reveal();

    window.addEventListener("scroll", reveal);



    /*=========================
        COUNTER
    =========================*/

    const counters = document.querySelectorAll(".counter");
    const stats = document.querySelector(".stats");

    let counterStarted = false;


    function startCounter() {

        if (!stats || counterStarted) return;


        const position = stats.getBoundingClientRect().top;


        if (position < window.innerHeight) {

            counterStarted = true;


            counters.forEach(counter => {

                const target = Number(counter.dataset.target);

                let count = 0;

                const speed = target / 120;


                function update() {

                    count += speed;


                    if (count < target) {

                        counter.textContent = Math.ceil(count);

                        requestAnimationFrame(update);

                    } else {

                        counter.textContent = target;

                    }

                }


                update();

            });

        }

    }


    startCounter();

    window.addEventListener("scroll", startCounter);



    /*=========================
        TESTIMONIAL SLIDER
    =========================*/

    const testimonials = document.querySelectorAll(".testimonial");


    if (testimonials.length > 0) {

        let index = 0;


        testimonials[index].classList.add("active");


        setInterval(() => {

            testimonials[index].classList.remove("active");


            index++;


            if (index >= testimonials.length) {

                index = 0;

            }


            testimonials[index].classList.add("active");


        }, 5000);

    }



    /*=========================
        DARK MODE
    =========================*/

    const themeBtn = document.getElementById("themeBtn");


    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");

        if (themeBtn) {

            themeBtn.innerHTML =
            '<i class="fas fa-sun"></i>';

        }

    }


    if (themeBtn) {

        themeBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark");


            if (document.body.classList.contains("dark")) {

                localStorage.setItem("theme", "dark");

                themeBtn.innerHTML =
                '<i class="fas fa-sun"></i>';

            } else {

                localStorage.setItem("theme", "light");

                themeBtn.innerHTML =
                '<i class="fas fa-moon"></i>';

            }

        });

    }



    /*=========================
        BACK TO TOP
    =========================*/

    const topBtn = document.getElementById("topBtn");


    if (topBtn) {

        window.addEventListener("scroll", () => {

            topBtn.style.display =
            window.scrollY > 400 ? "block" : "none";

        });


        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }



    /*=========================
        FORM VALIDATION
    =========================*/

    function validateEmail(email) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    }



    /*=========================
        CONTACT FORM
    =========================*/

    const contactForm =
    document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener("submit", e => {

            e.preventDefault();


            const name =
            document.getElementById("name")?.value.trim();


            const email =
            document.getElementById("email")?.value.trim();


            const message =
            document.getElementById("message")?.value.trim();



            if (!name || !email || !message) {

                alert("Please complete all fields.");

                return;

            }


            if (!validateEmail(email)) {

                alert("Please enter a valid email address.");

                return;

            }


            alert(
            "Thank you! Your message has been sent successfully."
            );


            contactForm.reset();


        });

    }



    /*=========================
        NEWSLETTER
    =========================*/

    const newsletterForm =
    document.querySelector(".newsletter form");


    if (newsletterForm) {

        newsletterForm.addEventListener("submit", e => {

            e.preventDefault();


            const email =
            newsletterForm.querySelector("input")?.value.trim();


            if (!email) {

                alert("Please enter your email.");

                return;

            }


            if (!validateEmail(email)) {

                alert("Please enter a valid email.");

                return;

            }


            alert("Thank you for subscribing!");


            newsletterForm.reset();


        });

    }



    /*=========================
        CURRENT YEAR
    =========================*/

    const year =
    document.getElementById("year");


    if (year) {

        year.textContent =
        new Date().getFullYear();

    }


});