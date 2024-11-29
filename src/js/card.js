// OpenMap
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

//See more button
document.querySelectorAll(".see-more").forEach((button) => {
  button.addEventListener("click", function () {
    const parent = button.closest(".object-description");
    const secondDesc = parent.querySelector(".second-desc");

    if (secondDesc) {
      const isExpanded = secondDesc.classList.toggle("expanded");
      // Toggle button text
      button.textContent = isExpanded ? "See Less" : "See More";
    }
  });
});
