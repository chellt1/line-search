const mas = [[7,8,6,4],[3,25,78],[11,163,852,47],[72,73,74,75]
]; 
function find(mas, el)
{
    for(let i=0; i<mas.length; i++)
            for(let j=0; j<mas[i].length; j++){
                if(mas[i][j]===el){
            return "["+i+"]["+j+"]"
        } }
        return -1
        } 
        
    console.log(find(mas,7))
