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
      center: ol.proj.fromLonLat([98.2938, 8.0016]),
      zoom: 15,
    }),
  });
});

//Js to expand insights
document.addEventListener("DOMContentLoaded", function () {
  const expandButtons = document.querySelectorAll(".expand-btn");

  expandButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Find the closest insights container and get its description
      const container = button.closest(".insights-container");
      const description = container.querySelector(".insights-description");

      // Toggle the hidden class
      description.classList.toggle("hidden");

      // Change the button text based on state
      button.textContent = description.classList.contains("hidden") ? "+" : "-";
    });
  });
});
