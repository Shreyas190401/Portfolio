function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed",
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locoScroll();

//smooth scrolling
// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true,
// });

//hero page animation
function heroPageAnimation() {
    var tl = gsap.timeline();
    tl.from("#loader h3", {
        x: 100,
        delay: 1,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: Expo.ease,
    });
    tl.to("#loader h3", {
        x: -100,
        opacity: 0,
        delay: 0.5,
        duration: 1,
        ease: Expo.ease,
        // stagger:0.1,
    });
    tl.to("#loader", {
        opacity: 0,
    });
    tl.to("#loader", {
        display: "none",
        delay: -1,
        ease: Expo.ease,
    });
    tl.from("nav", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        delay: -0.5,
        ease: Expo.ease,
    })
        .to(".bounding-elem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: 0.2,
        })

        .from("#hero-footer", {
            y: "-10",
            opacity: 0,
            duration: 1.1,
            delay: -1,
            ease: Expo.easeInOut,
        });
}
heroPageAnimation();

//project animation
function projectPageAnimation() {
    var pp = gsap.timeline();
    pp.from("#project-header", {
        y: 150,
        x: -150,
        // stagger:0.5,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#project",
            scroller: "#main",
            start: "top 80%",
            end: "top 50%",
            scrub: 3,
        },
    });
    pp.from("#project-item", {
        y: 150,
        x: -150,
        stagger: 0.5,
        duration: 1,
        // delay:-1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#project-header",
            scroller: "#main",
            start: "top 80%",
            scrub: 3,
        },
    });
}
projectPageAnimation();

//skills page animation
function skillsPageAnimation() {
    var sp = gsap.timeline();
    sp.from("#skills-header", {
        y: 150,
        x: -150,
        // stagger:0.5,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#skills",
            scroller: "#main",
            start: "top 90%",
            end: "top 50%",
            scrub: 3,
        },
    });
    sp.from("#skill-icons-img", {
        y: 150,
        // x: -150,
        stagger: 0.2,
        duration: 1,
        // delay:-1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#skills-header",
            scroller: "#main",
            start: "top 80%",
            end: "top 40%",
            scrub: 3,
        },
    });
}
skillsPageAnimation();

//about page animation
function aboutPageAnimation() {
    var ap = gsap.timeline();
    ap.from("#about-content img", {
        // y: 150,
        x: -350,
        // stagger:0.5,
        duration: 0.1,
        opacity: 0,
        // scale: 0,
        ease: Expo.easeInOut,
        scrollTrigger: {
            trigger: "#about",
            scroller: "#main",
            start: "top 90%",
            end: "top 60%",
            scrub: 3,
        },
    });
    ap.from("#about-text", {
        y: 150,
        x: 150,
        stagger: 0.5,
        duration: 1,
        // delay:-1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#about",
            scroller: "#main",
            start: "top 90%",
            end: "top 50%",
            scrub: 3,
        },
    });
    ap.from("#subscribe", {
        y: 150,
        x: -150,
        // stagger: 0.5,
        duration: 1,
        // delay:-1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#subscribe",
            scroller: "#main",
            start: "top 100%",
            end: "top 50%",
            scrub: 3,
        },
    });
}
aboutPageAnimation();

//contact page animation
function contactPageAnimation() {
    var cp = gsap.timeline();
    cp.from("#contact-header", {
        y: 150,
        x: -150,
        // stagger:0.5,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#contact",
            scroller: "#main",
            start: "top 80%",
            end: "top 50%",
            scrub: 3,
        },
    });
    cp.from("#user-name", {
        y: 150,
        x: 150,
        // stagger:0.2,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#contact-header",
            scroller: "#main",
            start: "top 90%",
            end: "top 70%",
            scrub: 3,
        },
    });
    cp.from("#user-email", {
        y: 150,
        x: -150,
        // stagger:0.2,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#user-name",
            scroller: "#main",
            start: "top 90%",
            end: "top 70%",
            scrub: 3,
        },
    });
    cp.from("#user-message", {
        y: 150,
        x: 150,
        // stagger:0.2,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#user-email",
            scroller: "#main",
            start: "top 90%",
            end: "top 70%",
            scrub: 3,
        },
    });
    cp.from("#send-message-btn", {
        y: 30,
        // x: -100,
        // stagger:0.2,
        duration: 1,
        opacity: 0,
        ease: Expo.easeInOut,
        scrollTrigger: {
            trigger: "#user-message",
            scroller: "#main",
            start: "top 100%",
            end: "top 100%",
            scrub: 3,
        },
    });
}
contactPageAnimation();

//footer animation
function footerAnimation() {
    var fp = gsap.timeline();
    fp.from("#footer", {
        y: 10,
        // x: -350,
        // stagger:0.5,
        duration: 1,
        opacity: 0,
        // scale: 0,
        ease: Expo.easeInOut,
        scrollTrigger: {
            trigger: "#footer",
            scroller: "#main",
            start: "top 90%",
            end: "top 90%",
            scrub: 3,
        },
    });
}
footerAnimation();

//Cursor circle moving effect
// var timeout;

function circleSkewEffect() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        // clearTimeout(timeout);

        xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollow(xscale, yscale);
        // timeout = setTimeout(() => {
        //     document.querySelector(
        //         "#cursor-circle"
        //     ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        // }, 100);
    });
}
circleSkewEffect();

//Cursor circle move
function circleMouseFollow(xscale, yscale) {
    var cursor = document.getElementById("cursor-circle");
    var body = document.querySelector("body");
    body.addEventListener("mousemove", function (dets) {
        document.querySelector(
            "#cursor-circle"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
        // gsap.to(cursor, {
        //     x: dets.x,
        //     y: dets.y
        // })
    });
    body.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
            display: "block",
            delay: -1,
        });
    });
    body.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            display: "none",
            opacity: 0,
            delay: -1,
        });
    });
}
circleMouseFollow();

//project picture hover effect
function pictureEffect() {
    document.querySelectorAll(".elem").forEach(function (elem) {
        var rotate = 0;
        var diffrotate = 0;

        elem.addEventListener("mouseleave", function (dets) {
            gsap.to(elem.querySelector("img"), {
                opacity: 0,
                ease: Power3,
                duration: 0.5,
            });
        });

        elem.addEventListener("mousemove", function (dets) {
            var diff = dets.clientY - elem.getBoundingClientRect().top;
            diffrotate = dets.clientX - rotate;
            rotate = dets.clientX;

            gsap.to(elem.querySelector("img"), {
                opacity: 1,
                ease: Power3,
                top: diff,
                left: dets.clientX,
                rotate: gsap.utils.clamp(-20, 20, diffrotate * 0.5),
            });
        });
    });
}
pictureEffect();

// link hover effect
function linkHoverEffect() {
    document.querySelectorAll(".linkEffect").forEach(function (arrowIcon) {
        arrowIcon.addEventListener("mouseover", function () {
            document
                .querySelectorAll(".linkEffect i")
                .forEach(function (arrowIconChange) {
                    arrowIconChange.classList.remove("ri-arrow-right-up-line");
                    arrowIconChange.classList.add("ri-arrow-right-line");
                });
        });

        arrowIcon.addEventListener("mouseleave", function () {
            document
                .querySelectorAll(".linkEffect i")
                .forEach(function (arrowIconChange) {
                    arrowIconChange.classList.add("ri-arrow-right-up-line");
                    arrowIconChange.classList.remove("ri-arrow-right-line");
                });
        });
    });
}
linkHoverEffect();

//change theme
function themeMode() {
    var changeTheme = document.getElementById("icon-theme");
    var changeSkillIconTheme = document.getElementById("github-icon");

    if (localStorage.getItem("theme") == null) {
        localStorage.setItem("theme", "light");
    }

    let localData = localStorage.getItem("theme");

    if (localData == "light") {
        changeTheme.src = "/images/lighttheme.svg";
        changeSkillIconTheme.src = "/images/github.svg";
        document.body.classList.remove("dark-theme");
    } else if (localData == "dark") {
        changeTheme.src = "/images/darktheme.svg";
        changeSkillIconTheme.src = "/images/github-light.svg";
        document.body.classList.add("dark-theme");
    }

    changeTheme.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
            changeTheme.src = "./images/darktheme.svg";
            changeSkillIconTheme.src = "/images/github-light.svg";

            localStorage.setItem("theme", "dark");
        } else {
            changeTheme.src = "./images/lighttheme.svg";
            changeSkillIconTheme.src = "/images/github.svg";

            localStorage.setItem("theme", "light");
        }
    });
}
themeMode();

//clock
function clockTime() {
    let time = document.getElementById("time");

    setInterval(() => {
        let date = new Date();

        time.innerHTML = date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
        });
    }, 1000);
}
clockTime();
