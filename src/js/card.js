// OpenMap
document.addEventListener("DOMContentLoaded", function () {
  // Map configurations
  const mapsConfig = [
    {
      target: "map",
      center: [98.2938, 8.0016],
      zoom: 15,
      markers: [], // No markers for this map
    },
    {
      target: "map-to-us",
      center: [98.4, 8.05],
      zoom: 12,
      markers: [{ coordinates: [98.4, 8.05], label: "Default Marker 1" }],
    },
  ];

  // Initialize each map
  mapsConfig.forEach((config) => {
    const map = new ol.Map({
      target: config.target,
      layers: [
        new ol.layer.Tile({
          source: new ol.source.XYZ({
            url: "https://{1-4}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
            attributions: "© OpenStreetMap contributors & CARTO",
          }),
        }),
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat(config.center),
        zoom: config.zoom,
      }),
    });

    // Add markers if any are defined
    if (config.markers.length > 0) {
      config.markers.forEach((marker) => {
        const markerFeature = new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.fromLonLat(marker.coordinates)),
        });

        const markerStyle = new ol.style.Style({
          image: new ol.style.Icon({
            anchor: [0.5, 1],
            src: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Default marker icon
            scale: 0.1,
          }),
        });

        markerFeature.setStyle(markerStyle);

        const vectorSource = new ol.source.Vector({
          features: [markerFeature],
        });

        const markerLayer = new ol.layer.Vector({
          source: vectorSource,
        });

        map.addLayer(markerLayer);

        // Optional: Add click interaction or label handling
        markerFeature.on("click", () => {
          alert(marker.label); // Show marker label on click
        });
      });
    }
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

// Collapsible element functionality
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    // Toggle content visibility
    if (content.style.display === "block") {
      content.style.display = "none";
      this.querySelector(".open-menu").textContent = "+"; // Change to "+"
    } else {
      content.style.display = "block";
      this.querySelector(".open-menu").textContent = "-"; // Change to "-"
    }
  });

  // Set default text to "+"
  coll[i].querySelector(".open-menu").textContent = "+";
}
