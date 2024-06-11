import { filterData } from "./dataFunctions.js";
import { sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";
//obtener radioButtons y el select//
const styleSelector = document.querySelector('[data-testid="select-sort"]');
const radioButtons = document.getElementsByName("sort-order");
let filteredData = data;
//función de filtrado//
styleSelector.addEventListener("change", () => { //evento change registra cambios en la selección//
  const styleSelected = styleSelector.value;
  filteredData = filterData(data, "style", styleSelected);
  renderItems(filteredData);
});
//fución para ordenar, se le añade un event listener a cada uno de los radiobuttons//
radioButtons.forEach(function (radio) {
  radio.addEventListener("change", () => {//evento change registrar cambios registra cambios en la selección//
    const selectedRadio = document.querySelector(
      'input[name="sort-order"]:checked'
    );
    const selectedOrder = selectedRadio.value;
    const sortedData = sortData(filteredData, "year", selectedOrder);
    renderItems(sortedData);
  });
});
renderItems(data);
