import { filterData } from './dataFunctions.js';
import { sortData } from './dataFunctions.js'
import { renderItems } from './view.js';
import data from './data/dataset.js';
const styleSelector = document.querySelector('[data-testid="select-sort"]');
styleSelector.addEventListener("change",()=>{
  const styleSelected = styleSelector.value; 
  const filteredData = filterData(data, "style", styleSelected);
  renderItems(filteredData);
});
renderItems(data);
const radioButtons = document.getElementsByName("sort-order")
radioButtons.forEach(function(radio){
radio.addEventListener("change", ()=>{
  const selectedRadio = document.querySelector('input[name="sort-order"]:checked')
  const selectedOrder = selectedRadio.value
  const sortedData = sortData(data, "year", selectedOrder)
  renderItems(sortedData)
})
})