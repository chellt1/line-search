 const mas = [
  { index: 7, userName: 'John Duo', age: 27, occupation: 'traktor driver' },
  { index: 2, userName: 'Vitalik Jakovchuh', age: 18, occupation: 'designer' },
  { index: 11, userName: 'Diana Hrytsiuk', age: 17, occupation: 'business woman' },
  { index: 1, userName: 'Yaruna Beresanska', age: 16, occupation: 'english teacher' },
  { index: 9, userName: 'Olya Klymiuk', age: 17, occupation: 'psychologist' },
]
function find(mas, el){
for(let i=0; i<mas.length; i++){
        if(mas[i].name===el){
            return i;
        }else if(mas[i].age===el){
            return i;
        }else if(mas[i].title===el){
            return i;
        }
    }
    return -1;
     }   
    console.log(find(mas,27))