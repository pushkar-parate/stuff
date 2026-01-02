document.addEventListener("DOMContentLoaded", () => {
  const navList = document.getElementById("nav-list");
  const headings = document.querySelectorAll(
    "main h2, main h3, main h4, main h5, main h6"
  );

  // Convert heading text to URL-friendly ID
  function slugify(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");
  }

  let currentH2Ul = null;
  let currentH3Li = null;
  let currentH4Li = null;
  let currentH5Li = null;

  headings.forEach((h) => {
    if (!h.id) h.id = slugify(h.textContent);

    const level = parseInt(h.tagName.substring(1), 10);
    const li = document.createElement("li");
    li.classList.add(`toc-h${level}`);

    const a = document.createElement("a");
    a.href = `#${h.id}`;
    a.textContent = level === 2 ? h.textContent.toUpperCase() : h.textContent;

    // Smooth scroll
    a.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .getElementById(h.id)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    });

    li.appendChild(a);

    const childUl = document.createElement("ul");
    childUl.classList.add("child-list");
    li.appendChild(childUl);

    if (level === 2) {
      navList.appendChild(li);
      currentH2Ul = childUl;
      currentH3Li = null;
      currentH4Li = null;
      currentH5Li = null;
    } else if (level === 3) {
      (currentH2Ul || navList).appendChild(li);
      currentH3Li = li;
      currentH4Li = null;
      currentH5Li = null;
    } else if (level >= 4) {
      let parentUl;
      if (level === 4)
        parentUl =
          currentH3Li?.querySelector("ul.child-list") || currentH2Ul || navList;
      if (level === 5)
        parentUl =
          currentH4Li?.querySelector("ul.child-list") ||
          currentH3Li?.querySelector("ul.child-list") ||
          currentH2Ul ||
          navList;
      if (level === 6)
        parentUl =
          currentH5Li?.querySelector("ul.child-list") ||
          currentH4Li?.querySelector("ul.child-list") ||
          currentH3Li?.querySelector("ul.child-list") ||
          currentH2Ul ||
          navList;
      parentUl.appendChild(li);
    }

    if (level === 4) currentH4Li = li;
    if (level === 5) currentH5Li = li;
  });

  // ------------- MENU BAR LOGIC -------------
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("#sidebar");
  const mainMax = document.querySelector(".max");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    mainMax.classList.toggle("max");
  });

  // Close menu on link click
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });

  // ----------------- END OF SCRIPT ------------------ //
});
