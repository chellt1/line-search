const mas = [78, 25, 2, 7, 4, 5]

function find(mas, el){
  for (let i = 0; i < mas.length; i++){
    if (mas[i] === el){
      return i;
    }
  }
  return -1;
}

 console.log(find(mas, 25));





