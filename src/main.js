import { filterData } from './dataFunctions.js';
import { sortData } from './dataFunctions.js'
import { renderItems } from './view.js';
import data from './data/dataset.js';
const styleSelector = document.querySelector('[data-testid="select-sort"]');
const radioButtons = document.getElementsByName("sort-order");
let filteredData = data
//función de filtrado//
styleSelector.addEventListener("change",()=>{
  const styleSelected = styleSelector.value; 
  filteredData = filterData(data, "style", styleSelected);
  renderItems(filteredData)
});
//fución para ordenar//
radioButtons.forEach(function(radio){ //evento change registra cambios//
  radio.addEventListener("change", ()=>{
    const selectedRadio = document.querySelector('input[name="sort-order"]:checked');
    const selectedOrder = selectedRadio.value;
    const sortedData = sortData(filteredData, "year", selectedOrder);
    renderItems(sortedData);
  })
})
renderItems(data)