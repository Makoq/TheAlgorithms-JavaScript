/**
 *  动态规划问题
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let arr=[]
    arr[0]=1
    arr[1]=1
    
    for(let i=2;i<=n;i++){
        arr[i]=0
       for(let j=1;j<=i;j++){
           arr[i]+=arr[j-1]*arr[i-j]
       }
    }
    
   return arr[n] 
    
    
};