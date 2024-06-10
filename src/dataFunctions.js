export const filterData = function(data, filterBy, value){
  if(value){
    return data.filter((pintura)=>pintura.style === value)
  } else {
    return data
  }
}
export const sortData = function (data, sortBy, sortOrder){
  const copiedData = data.slice();
  copiedData.sort((a,b) => {
    if(sortOrder === "Asc"){
      return (a.name>b.name) ? 1: -1;
    } else {
      return (b.name>a.name) ? 1: -1;
    }
  }
  )
  return copiedData
}