// JavaScript to handle navbar visibility on scroll
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("#navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

//Js to include OpenMap
document.addEventListener("DOMContentLoaded", function () {
  const map = new ol.Map({
    target: "map",
    layers: [
      new ol.layer.Tile({
        source: new ol.source.XYZ({
          url: "https://{1-4}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
          attributions: "© OpenStreetMap contributors & CARTO",
        }),
      }),
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-0.09, 51.505]),
      zoom: 13,
    }),
  });
});

//JS to control grid view and sorting
document.addEventListener("DOMContentLoaded", () => {
  const toggleViewButton = document.getElementById("toggleView");
  const sortButton = document.getElementById("sortButton");
  const cardContainer = document.querySelector(".object-container");

  let isGridView = false;
  let isAscending = true;

  // SVG icons
  const gridIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  `;

  const listIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
      <circle cx="5" cy="6" r="2" />
      <rect x="9" y="5" width="12" height="2" rx="1" />
      <circle cx="5" cy="12" r="2" />
      <rect x="9" y="11" width="12" height="2" rx="1" />
      <circle cx="5" cy="18" r="2" />
      <rect x="9" y="17" width="12" height="2" rx="1" />
    </svg>
  `;

  const ascendingIcon = `
    <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon"
              >
                <!-- Up arrow -->
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4l-5 5h10l-5-5z"
                />
                <!-- Down arrow -->
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 20l5-5H7l5 5z"
                />
              </svg>
  `;

  const descendingIcon = `
    <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon"
              >
                <!-- Up arrow -->
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4l-5 5h10l-5-5z"
                />
                <!-- Down arrow -->
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 20l5-5H7l5 5z"
                />
              </svg>
  `;

  // Initialize buttons with default icons
  toggleViewButton.innerHTML = listIcon;
  sortButton.innerHTML = ascendingIcon;

  // Toggle between Grid and List views
  toggleViewButton.addEventListener("click", () => {
    isGridView = !isGridView;

    if (isGridView) {
      cardContainer.style.display = "grid";
      cardContainer.style.gridTemplateColumns =
        "repeat(auto-fit, minmax(200px, 1fr))";
      cardContainer.style.gap = "1rem";
      toggleViewButton.innerHTML = gridIcon;
    } else {
      cardContainer.style.display = "flex";
      cardContainer.style.flexDirection = "column";
      cardContainer.style.gap = "1rem";
      toggleViewButton.innerHTML = listIcon;
    }
  });

  // Sort cards and toggle sort icons
  sortButton.addEventListener("click", () => {
    const cards = Array.from(cardContainer.children);

    cards.sort((a, b) => {
      const titleA = a.querySelector(".card-title").textContent;
      const titleB = b.querySelector(".card-title").textContent;

      return isAscending
        ? titleA.localeCompare(titleB)
        : titleB.localeCompare(titleA);
    });

    // Toggle sorting order
    isAscending = !isAscending;
    sortButton.innerHTML = isAscending ? ascendingIcon : descendingIcon;

    // Append sorted cards back to the container
    cards.forEach((card) => cardContainer.appendChild(card));
  });
});
