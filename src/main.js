import { filterData } from './dataFunctions.js';
import { sortData } from './dataFunctions.js'
import { renderItems } from './view.js';
import data from './data/dataset.js';
const selectStyle = document.querySelector('[data-testid="select-sort"]');
selectStyle.addEventListener("change", ()=>{
  const selectedStyle = selectStyle.value
  const filteredData = filterData(data, "style", selectedStyle);
  const renderedItems = renderItems(filteredData);
  console.log(renderedItems);
})
const radioButtons = document.getElementsByName("sort-order")
radioButtons.forEach(function(radio){
  radio.addEventListener("change",()=>{
    const selectedRadio = document.querySelector('input[name="sort-order"]:checked').value;
    const sortedData = sortData(data, "name", selectedRadio);
    const renderedItems = renderItems(sortedData);
    console.log(renderedItems);
  });
});

console.log(filterData, renderItems(data), data);
