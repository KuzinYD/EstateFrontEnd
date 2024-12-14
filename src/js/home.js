// Collapsible element functionality
var coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

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

//JS to expand what we offer faq
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Scroll to top functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show button when user scrolls down 100px from the top
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.classList.add("visible");
  } else {
    scrollToTopBtn.classList.remove("visible");
  }
};

// Scroll to top when button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      scrollToTopBtn.classList.add("visible");
    } else {
      scrollToTopBtn.classList.remove("visible");
    }
  };

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// Bed Counter Functionality
document.addEventListener("DOMContentLoaded", function () {
  let bedCount = 1;

  function updateBedCounter() {
    document.getElementById(
      "bedCounterDropDown"
    ).textContent = `From ${bedCount}`;
    document.getElementById("bedCounterSearchBar").textContent = `${bedCount}`;
  }

  // Increase Beds
  window.increaseBeds = function () {
    bedCount++;
    updateBedCounter();
  };

  // Decrease Beds
  window.decreaseBeds = function () {
    if (bedCount > 1) {
      bedCount--;
      updateBedCounter();
    }
  };
});

//Price range slider
document.addEventListener("DOMContentLoaded", function () {
  // Range inputs in the dropdown
  const rangeMin = document.querySelector(".range-input .range-min");
  const rangeMax = document.querySelector(".range-input .range-max");

  // Number inputs in the price container
  const inputMin = document.querySelector(".price-inputs .input-min");
  const inputMax = document.querySelector(".price-inputs .input-max");

  const progress = document.querySelector(".progress");

  // Check if all required elements exist
  if (!rangeMin || !rangeMax || !inputMin || !inputMax || !progress) {
    console.warn("Some price range elements are missing from the DOM");
    return;
  }

  function updateProgress() {
    const minVal = parseInt(rangeMin.value);
    const maxVal = parseInt(rangeMax.value);

    // Update input values
    inputMin.value = minVal;
    inputMax.value = maxVal;

    // Prevent crossing
    if (minVal > maxVal) {
      [rangeMin.value, rangeMax.value] = [maxVal, minVal];
      return;
    }

    // Calculate progress position and width
    const percent = (minVal / rangeMin.max) * 100;
    const percent2 = 100 - (maxVal / rangeMax.max) * 100;
    progress.style.left = `${percent}%`;
    progress.style.width = `${100 - percent - percent2}%`;
  }

  // Update when range inputs change
  rangeMin.addEventListener("input", updateProgress);
  rangeMax.addEventListener("input", updateProgress);

  // Update when number inputs change
  inputMin.addEventListener("input", () => {
    let val = parseInt(inputMin.value) || 0;
    if (val < 0) val = 0;
    if (val > parseInt(rangeMax.value)) val = parseInt(rangeMax.value);
    rangeMin.value = val;
    updateProgress();
  });

  inputMax.addEventListener("input", () => {
    let val = parseInt(inputMax.value) || 10000000;
    if (val > 10000000) val = 10000000;
    if (val < parseInt(rangeMin.value)) val = parseInt(rangeMin.value);
    rangeMax.value = val;
    updateProgress();
  });

  // Initial update
  updateProgress();
});
