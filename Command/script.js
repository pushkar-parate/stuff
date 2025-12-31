document.addEventListener("DOMContentLoaded", () => {
  ("use strict");

  const container = document.querySelector("#sidebar");
  if (!container) return;

  // Use existing ul if present (avoid duplicate IDs)
  let list = container.querySelector("#nav-list");
  if (!list) {
    list = document.createElement("ul");
    list.id = "nav-list";
    container.appendChild(list);
  } else {
    // clear any existing items safely
    list.innerHTML = "";
  }

  // Collect headings inside main
  const headings = document.querySelectorAll(
    "main h2, main h3, main h4, main h5"
  );
  if (!headings.length) return;

  headings.forEach((h) => {
    // generate stable id
    const id = h.textContent.trim().replace(/\s+/g, "-").toLowerCase();
    if (!h.id) h.id = id;

    const li = document.createElement("li");
    li.classList.add(`toc-${h.tagName.toLowerCase()}`);

    const link = document.createElement("a");
    link.textContent = h.textContent;
    link.href = `#${h.id}`;
    li.appendChild(link);

    list.appendChild(li);
  });

  // --- Nest headings correctly by tag level ---
  const h2Items = [...list.querySelectorAll("li.toc-h2")];
  const h3Items = [...list.querySelectorAll("li.toc-h3")];
  const h4Items = [...list.querySelectorAll("li.toc-h4")];
  const h5Items = [...list.querySelectorAll("li.toc-h5")];

  function nestChildren(childItems, parentItems) {
    childItems.forEach((child) => {
      // find the nearest previous parent item
      const parent = [...parentItems].reverse().find((p) => {
        return (
          p.compareDocumentPosition(child) & Node.DOCUMENT_POSITION_FOLLOWING
        );
      });
      if (parent) {
        let sub = parent.querySelector("ul.child-list");
        if (!sub) {
          sub = document.createElement("ul");
          sub.classList.add("child-list");
          parent.appendChild(sub);
        }
        sub.appendChild(child);
      }
    });
  }

  nestChildren(h3Items, h2Items);
  nestChildren(h4Items, h3Items);
  nestChildren(h5Items, h4Items);

  // --- Smooth scroll ---
  list.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // --- Hover expand classes (keep but non-destructive) ---
  container
    .querySelectorAll("li.toc-h2, li.toc-h3, li.toc-h4")
    .forEach((item) => {
      item.addEventListener("mouseenter", () => item.classList.add("expanded"));
      item.addEventListener("mouseleave", () =>
        item.classList.remove("expanded")
      );
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

  // ===================== END OF SCRIPT ====================== //
});
