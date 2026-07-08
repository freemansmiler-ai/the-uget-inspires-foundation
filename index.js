/*====================================================
  HOPE FOUNDATION WEBSITE
  script.js
=====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*====================================
        LOADER
    ====================================*/

    window.addEventListener("load", () => {

        const loader = document.getElementById("loader");

        if(loader){

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            },500);

        }

    });


    /*====================================
        MOBILE MENU
    ====================================*/

    const menuBtn = document.querySelector(".menu-btn");

    const navLinks = document.querySelector(".nav-links");

    if(menuBtn){

        menuBtn.addEventListener("click",()=>{

            navLinks.classList.toggle("show");

        });

    }


    /* Close menu after clicking a link */

    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.classList.remove("show");

        });

    });



    /*====================================
        STICKY HEADER
    ====================================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 50){

            header.classList.add("scrolled");

        }

        else{

            header.classList.remove("scrolled");

        }

    });



    /*====================================
        ACTIVE NAVIGATION
    ====================================*/

    const sections = document.querySelectorAll("section");

    const navItems = document.querySelectorAll(".nav-links a");

    function activeMenu(){

        let current = "";

        sections.forEach(section=>{

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.clientHeight;

            if(pageYOffset >= sectionTop){

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href") === "#" + current){

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll",activeMenu);



    /*====================================
        SCROLL REVEAL
    ====================================*/

    const revealElements = document.querySelectorAll("section");

    function reveal(){

        revealElements.forEach(section=>{

            const top = section.getBoundingClientRect().top;

            const visible = window.innerHeight - 120;

            if(top < visible){

                section.classList.add("active");

                section.classList.add("reveal");

            }

        });

    }

    reveal();

    window.addEventListener("scroll",reveal);



    /*====================================
        COUNTER
    ====================================*/

    const counters = document.querySelectorAll(".counter");

    let counterStarted = false;

    function startCounter(){

        const stats = document.querySelector(".stats");

        if(!stats) return;

        const trigger = stats.getBoundingClientRect().top;

        if(trigger < window.innerHeight && !counterStarted){

            counterStarted = true;

            counters.forEach(counter=>{

                const target = Number(counter.dataset.target);

                let count = 0;

                const increment = target / 120;

                function update(){

                    count += increment;

                    if(count < target){

                        counter.innerText = Math.ceil(count);

                        requestAnimationFrame(update);

                    }

                    else{

                        counter.innerText = target;

                    }

                }

                update();

            });

        }

    }

    startCounter();

    window.addEventListener("scroll",startCounter);



    /*====================================
        TESTIMONIAL SLIDER
    ====================================*/

    const testimonials = document.querySelectorAll(".testimonial");

    if(testimonials.length > 0){

        let index = 0;

        testimonials[index].classList.add("active");

        setInterval(()=>{

            testimonials[index].classList.remove("active");

            index++;

            if(index >= testimonials.length){

                index = 0;

            }

            testimonials[index].classList.add("active");

        },5000);

    }



    /*====================================
        DARK MODE
    ====================================*/

    const themeBtn = document.getElementById("themeBtn");

    if(localStorage.getItem("theme") === "dark"){

        document.body.classList.add("dark");

        if(themeBtn){

            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

        }

    }

    if(themeBtn){

        themeBtn.addEventListener("click",()=>{

            document.body.classList.toggle("dark");

            if(document.body.classList.contains("dark")){

                localStorage.setItem("theme","dark");

                themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

            }

            else{

                localStorage.setItem("theme","light");

                themeBtn.innerHTML = '<i class="fas fa-moon"></i>';

            }

        });

    }



    /*====================================
        BACK TO TOP BUTTON
    ====================================*/

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 400){

            topBtn.style.display = "block";

        }

        else{

            topBtn.style.display = "none";

        }

    });

    if(topBtn){

        topBtn.addEventListener("click",()=>{

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }



    /*====================================
        CONTACT FORM
    ====================================*/

    const contactForm = document.getElementById("contactForm");

    if(contactForm){

        contactForm.addEventListener("submit",(e)=>{

            e.preventDefault();

            const name = document.getElementById("name").value.trim();

            const email = document.getElementById("email").value.trim();

            const message = document.getElementById("message").value.trim();

            if(name === "" || email === "" || message === ""){

                alert("Please complete all fields.");

                return;

            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(!emailPattern.test(email)){

                alert("Please enter a valid email address.");

                return;

            }

            alert("Thank you! Your message has been sent successfully.");

            contactForm.reset();

        });

    }



    /*====================================
        NEWSLETTER
    ====================================*/

    const newsletterForm = document.querySelector(".newsletter form");

    if(newsletterForm){

        newsletterForm.addEventListener("submit",(e)=>{

            e.preventDefault();

            const email = newsletterForm.querySelector("input").value.trim();

            if(email === ""){

                alert("Please enter your email.");

                return;

            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(!emailPattern.test(email)){

                alert("Please enter a valid email.");

                return;

            }

            alert("Thank you for subscribing!");

            newsletterForm.reset();

        });

    }



    /*====================================
        CURRENT YEAR
    ====================================*/

    const year = document.getElementById("year");

    if(year){

        year.textContent = new Date().getFullYear();

    }

});