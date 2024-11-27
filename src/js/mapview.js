// JavaScript to handle navbar visibility on scroll
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("#navbar");
  const listingsLink = document.querySelector("#listings-link");
  const hoveredLinks = document.querySelector("#hovered-links");
  const listingsWrapper = document.querySelector(".listings-wrapper");

  // Handle scrolling to add 'scrolled' class
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Show hovered links when "Listings" is hovered
  listingsWrapper.addEventListener("mouseenter", () => {
    hoveredLinks.style.display = "flex";
  });

  // Hide hovered links when the mouse leaves the "Listings" wrapper
  listingsWrapper.addEventListener("mouseleave", () => {
    hoveredLinks.style.display = "none";
  });
});

//Js to include OpenMap
document.addEventListener("DOMContentLoaded", function () {
  var map = new ol.Map({
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
      center: ol.proj.fromLonLat([98.2938, 8.0016]),
      zoom: 15,
    }),
  });
});
