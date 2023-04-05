const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newList = list.filter((element, i, listRef) =>{
  return element % 2 === 0;
})

// The difference between foreach and filter is that foreach is just traversing the list, but the filter is creating another list. 

console.log(list);
console.log(newList);