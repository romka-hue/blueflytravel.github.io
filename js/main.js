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
    price: "ფასი მოთხოვნით",
    text:
      "მოგზაურობისთვის საჭირო სერვისები ერთიან პაკეტში."
  },

  {
    tag: "CUSTOM",
    title: "თქვენი მოგზაურობა",
    route: "ინდივიდუალური შეთავაზება",
    price: "ფასი მოთხოვნით",
    text:
      "მოგვაწოდეთ მიმართულება და თარიღები და მიიღეთ შესაბამისი ვარიანტები."
  }
];


const offerGrid =
  document.querySelector("#offerGrid");


if (offerGrid) {

  offers.forEach((offer) => {

    const card =
      document.createElement("article");

    card.className = "offer-card";

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
   MOBILE NAVIGATION
========================= */

const menuToggle =
  document.querySelector(".menu-toggle");

const navLinks =
  document.querySelector(".nav-links");


if (menuToggle && navLinks) {

  menuToggle.addEventListener(
    "click",
    () => {

      const isOpen =
        navLinks.classList.toggle("active");

      menuToggle.classList.toggle(
        "active",
        isOpen
      );

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? "მენიუს დახურვა"
          : "მენიუს გახსნა"
      );

    }
  );


  /* Close after clicking a link */

  navLinks
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        () => {

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

      }

    }
  );

}