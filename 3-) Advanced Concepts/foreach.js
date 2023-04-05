const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

list.forEach((value, i, listRef) => {
  console.log(value, i, listRef);
})

//Short syntax for traversing lists. CAUTION: this is slower than for.