function result (arr,target){

  if( arr===null || arr.length ===0) return -1;
  let start = 0;
  let end = arr.length - 1;
  while(start <= end){
    // let med = Math.floor((start+end)/2);
    let med = start + Math.floor((end - start) / 2);
    if(target > arr[med]){
      start = med +1;
    }
    else if(target < arr[med]){
      end = med - 1;
    }
    else{
      return med;
    }
  }
  return -1;
}
            
let arr = [-1,0,3,5,9,12];
let target = 9;

console.log(result(arr,target));