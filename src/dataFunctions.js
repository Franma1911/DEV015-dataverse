export const filterData = function(data, filterBy, value){
  if (filterBy === "style" && value){
    return data.filter((pintura) => pintura.style === value);
  } else {
    return data }
};
export const sortData = function(data, sortBy, sortOrder){
  const dataCopie = data.slice()
  dataCopie.sort((a,b)=>{
    if(sortOrder === "asc"){
      return (a.year - b.year);
    } else { return (b.year - a.year )}
  });
  return dataCopie
};