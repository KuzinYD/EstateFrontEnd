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
      center: ol.proj.fromLonLat([-0.09, 51.505]),
      zoom: 13,
    }),
  });
});
