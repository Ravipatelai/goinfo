const slider = function() {
    let t = document.querySelector(".slider"), e = document.querySelectorAll(".slide"), o = document.querySelector(".slider__btn--left"), n = document.querySelector(".slider__btn--right"), c = document.querySelector(".dots"), s = 0, r = 0, a, i = e.length, l = function(t) {
        document.querySelectorAll(".dots__dot").forEach(t => t.classList.remove("dots__dot--active")),
        document.querySelector(`.dots__dot[data-slide="${t}"]`).classList.add("dots__dot--active")
    }, d = function(t) {
        e.forEach( (e, o) => e.style.transform = `translateX(${100 * (o - t)}%)`)
    }, u = function() {
        s === i - 1 ? s = 0 : s++,
        d(s),
        l(s)
    }, f = function() {
        0 === s ? s = i - 1 : s--,
        d(s),
        l(s)
    };
    d(0),
    e.forEach(function(t, e) {
        c.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${e}"></button>`)
    }),
    l(0),
    n.addEventListener("click", function() {
        r++,
        u()
    }),
    o.addEventListener("click", function() {
        r++,
        f()
    }),
    0 === r && (a = setInterval( () => {
        u()
    }
    , 5e3)),
    t.addEventListener("mouseover", function() {
        clearInterval(a)
    }),
    t.addEventListener("mouseout", function() {
        r = 0,
        a = setInterval( () => {
            u()
        }
        , 5e3)
    }),
    c.addEventListener("click", function(t) {
        if (t.target.classList.contains("dots__dot")) {
            let {slide: e} = t.target.dataset;
            d(e),
            l(e)
        }
    })
};
slider();
const backToTopBtn = document.querySelector(".back-to-top");
function scrollFunction() {
    window.pageYOffset > 100 ? (backToTopBtn.classList.add("back-to-top-show"),
    backToTopBtn.classList.remove("back-to-top-hide")) : (backToTopBtn.classList.remove("back-to-top-show"),
    backToTopBtn.classList.add("back-to-top-hide"))
}
window.addEventListener("scroll", scrollFunction),
backToTopBtn.addEventListener("click", function() {
    window.scrollTo(0, 0)
});
const currentYear = document.querySelector(".current-year");
currentYear.textContent = new Date().getFullYear();
