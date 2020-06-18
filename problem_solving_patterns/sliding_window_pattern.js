function maxSubarraySum(arr,num){
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) return null;
  for (let i = 0;i < num; i++){
    maxSum += arr[i]; 
  }
  tempSum = maxSum;
  for(let i = num;i < arr.length; i++){
    tempSum = tempSum + arr[i] - arr[i-num];
    maxSum = Math.max(tempSum,maxSum);
  }
  return maxSum;

};
                        
let arr = [2,6,9,2,1,8,5,6,3];
                                 
console.log(maxSubarraySum(arr,3));