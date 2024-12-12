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

// Function to create a single topic card
function createTopicCard() {
  return `
        <div class="topic-card">
            <div class="card-header">
                <div class="topic-tag">Research</div>
                <button class="like-btn"><i class="fas fa-heart"></i></button>
            </div>
            <h1 class="topic-title">
                How low can the bitcoin price go? <span>~7min</span>
            </h1>
        </div>
    `;
}

// Function to add new rows of topic cards
function addMoreTopics() {
  const gridContainer = document.querySelector(".topics-grid .grid");
  let newContent = "";

  // Create 9 new cards (3 rows × 3 columns)
  for (let i = 0; i < 9; i++) {
    newContent += createTopicCard();
  }

  gridContainer.insertAdjacentHTML("beforeend", newContent);
}

// Add click event listener to the "See more" button
document.getElementById("see-more").addEventListener("click", addMoreTopics);