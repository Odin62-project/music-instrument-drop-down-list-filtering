// empty instrument array
const instrumentsArr = [
  {
    category: "woodwinds",
    instrument: "Flute",
    price: 500,
  },
  {
    category: "woodwinds",
    instrument: "Clarinet",
    price: 200,
  },
  {
    category: "woodwinds",
    instrument: "Oboe",
    price: 4000,
  },

  {
    category: "brass",
    instrument: "Trumpet",
    price: 200,
  },

  {
    category: "brass",
    instrument: "Trombone",
    price: 300,
  },
  {
    category: "brass",
    instrument: "French Horn",
    price: 4300,
  },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 },
];

// making selections
const selectContainer = document.querySelector(".select-container");

const productsContainer = document.querySelector(".products-container");

// implementing filtering of insruments functionality
function instrumentCards(instrumentsCategory) {
  // getting all the instrument objects
  const instruments =
    instrumentsCategory === "all"
      ? instrumentsArr
      : // otherwise getting only instruments category
        instrumentsArr.filter(
          ({ category }) => category === instrumentsCategory,
        );

  // getting the html content of instruments and price
  return instruments.map(
    ({ instrument, price }) =>
      `<div class="card"><h2>${instrument}</h2><p>$${price}</p></div>`,
  );
}

// adding an event to the selections
selectContainer.addEventListener("change", () => {
  // displaying the instruments and it price based on categories
  productsContainer.innerHTML = instrumentCards(selectContainer.value).join("");
});
