function bubblesort(arr){
  let noSwaps;
  for(let i = arr.length; i > 0; i--){
    noSwaps= true;
    for (let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps= false;
      }
    }
    if (noSwaps){
      break
      }
  }
  return arr;
}
let arr = [8,1,2,3,4];// =>[1,2,3,4,8]
console.log(bubblesort(arr));

//the main concept of this function is to compare element with the elment in front of it,
//if the element in front of it is greater than it ,swap it. continue comparing until the last element -1;
//And then go to the next iteration,start from index 0 , and end with the the length of not sorted element -1;
// in this way, everytime goes to next itteration, the compared elems will shrink.