/* =========================
   OFFERS
========================= */

const offers = [
  {
    tag: "FLIGHT",
    title: "ათენი",
    route: "ქუთაისი → ათენი",
    price: "400₾-დან",
    text:
      "პირდაპირი ფრენის შეთავაზება საბერძნეთის მიმართულებით."
  },
  {
    tag: "VISA",
    title: "სავიზო მომსახურეობა",
    route: "",
    price: "დაგვიკავშირდით",
    text:
      "დაგეხმარებით სავიზო პროცესის დაგეგმვასა და საჭირო სერვისების მოძიებაში."
  },
  {
    tag: "FLIGHTS",
    title: "ევროპა",
    route: "საერთაშორისო ფრენები",
    price: "250₾-დან",
    text:
      "სპეციალური შეთავაზებები შერჩეულ მიმართულებებსა და თარიღებზე."
  },
  {
    tag: "PACKAGE",
    title: "სრული პაკეტი",
    route: "ფრენა + სასტუმრო + დაზღვევა",
    price: "ფასი შეთანხმებით",
    text:
      "მოგზაურობისთვის საჭირო სერვისები ერთიან პაკეტში."
  },
  {
    tag: "CUSTOM",
    title: "თქვენი მოგზაურობა",
    route: "ინდივიდუალური შეთავაზება",
    price: "ფასი შეთანხმებით",
    text:
      "მოგვაწოდეთ მიმართულება და თარიღები და მიიღეთ შესაბამისი ვარიანტები."
  }
];


const offerGrid =
  document.querySelector("#offerGrid");


if (offerGrid) {

  offers.forEach((offer, index) => {

    const card =
      document.createElement("article");

    card.className = "offer-card reveal";

    card.style.transitionDelay =
      `${index * 100}ms`;

    card.innerHTML = `
      <div>

        <div class="offer-top">

          <span class="offer-tag">
            ${offer.tag}
          </span>

          <span aria-hidden="true">
            ✈
          </span>

        </div>

        <h3>
          ${offer.title}
        </h3>

        <p>
          <strong>
            ${offer.route}
          </strong>
        </p>

        <p>
          ${offer.text}
        </p>

        <div class="offer-price">
          ${offer.price}
        </div>

      </div>

      <a
        class="btn btn-primary"
        href="tel:+995511248180"
      >
        დეტალების გაგება
      </a>
    `;

    offerGrid.appendChild(card);

  });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
  document.querySelectorAll(
    `
      .reveal,
      .service-card,
      .destination-card,
      .step,
      .founder-card,
      .social-box,
      .contact-card,
      .about-image
    `
  );


const revealObserver =
  new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add(
          "visible"
        );

        observer.unobserve(
          entry.target
        );

      });

    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -50px 0px"
    }
  );


revealElements.forEach((element) => {

  revealObserver.observe(element);

});


/* =========================
   STAGGER ANIMATIONS
========================= */

const staggerGroups = [
  ".service-card",
  ".destination-card",
  ".step",
  ".founder-card"
];


staggerGroups.forEach((selector) => {

  document
    .querySelectorAll(selector)
    .forEach((element, index) => {

      element.style.transitionDelay =
        `${index * 100}ms`;

    });

});


/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle =
  document.querySelector(".menu-toggle");

const navLinks =
  document.querySelector(".nav-links");


if (menuToggle && navLinks) {

  const closeMenu = () => {

    navLinks.classList.remove(
      "active"
    );

    menuToggle.classList.remove(
      "active"
    );

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    menuToggle.setAttribute(
      "aria-label",
      "მენიუს გახსნა"
    );

  };


  const openMenu = () => {

    navLinks.classList.add(
      "active"
    );

    menuToggle.classList.add(
      "active"
    );

    menuToggle.setAttribute(
      "aria-expanded",
      "true"
    );

    menuToggle.setAttribute(
      "aria-label",
      "მენიუს დახურვა"
    );

  };


  menuToggle.addEventListener(
    "click",
    (event) => {

      event.stopPropagation();

      const isOpen =
        navLinks.classList.contains(
          "active"
        );

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }

    }
  );


  /* Close after clicking a link */

  navLinks
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        () => {
          closeMenu();
        }
      );

    });


  /* Close when clicking outside */

  document.addEventListener(
    "click",
    (event) => {

      if (
        !event.target.closest(".nav")
      ) {

        closeMenu();

      }

    }
  );


  /* Close with Escape */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape"
      ) {

        closeMenu();

      }

    }
  );

}


/* =========================
   HERO PARALLAX
========================= */

const hero =
  document.querySelector(".hero");

const heroImage =
  document.querySelector(".hero-image img");


if (
  hero &&
  heroImage &&
  window.matchMedia(
    "(prefers-reduced-motion: no-preference)"
  ).matches
) {

  let ticking = false;


  const updateParallax = () => {

    const rect =
      hero.getBoundingClientRect();

    const viewportHeight =
      window.innerHeight;

    if (
      rect.bottom < 0 ||
      rect.top > viewportHeight
    ) {

      ticking = false;
      return;

    }


    const progress =
      -rect.top / viewportHeight;

    const movement =
      Math.max(
        -35,
        Math.min(35, progress * 35)
      );


    heroImage.style.transform =
      `translateY(${movement}px) scale(1.04)`;


    ticking = false;

  };


  window.addEventListener(
    "scroll",
    () => {

      if (!ticking) {

        window.requestAnimationFrame(
          updateParallax
        );

        ticking = true;

      }

    },
    { passive: true }
  );

}


/* =========================
   ACTIVE NAV ON SCROLL
========================= */

const sections =
  document.querySelectorAll(
    "main section[id]"
  );

const navAnchors =
  document.querySelectorAll(
    '.nav-links a[href^="#"]'
  );


if (
  sections.length &&
  navAnchors.length
) {

  const sectionObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }


          const id =
            entry.target.getAttribute(
              "id"
            );


          navAnchors.forEach((link) => {

            link.classList.remove(
              "current"
            );

            if (
              link.getAttribute(
                "href"
              ) === `#${id}`
            ) {

              link.classList.add(
                "current"
              );

            }

          });

        });

      },
      {
        threshold: 0.25,
        rootMargin:
          "-20% 0px -60% 0px"
      }
    );


  sections.forEach((section) => {

    sectionObserver.observe(section);

  });

}


/* =========================
   BUTTON RIPPLE
========================= */

document
  .querySelectorAll(".btn")
  .forEach((button) => {

    button.addEventListener(
      "click",
      function (event) {

        const ripple =
          document.createElement(
            "span"
          );

        const rect =
          this.getBoundingClientRect();

        const size =
          Math.max(
            rect.width,
            rect.height
          );

        ripple.style.width =
          `${size}px`;

        ripple.style.height =
          `${size}px`;

        ripple.style.position =
          "absolute";

        ripple.style.left =
          `${event.clientX - rect.left - size / 2}px`;

        ripple.style.top =
          `${event.clientY - rect.top - size / 2}px`;

        ripple.style.borderRadius =
          "50%";

        ripple.style.background =
          "rgba(255,255,255,0.25)";

        ripple.style.transform =
          "scale(0)";

        ripple.style.pointerEvents =
          "none";

        ripple.style.animation =
          "buttonRipple 0.6s ease-out";

        this.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 600);

      }
    );

  });