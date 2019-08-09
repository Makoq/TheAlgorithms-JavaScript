/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    let cu=[],res=[]
    
    if(nums.length===0){
       return []
    }
    
    fc(nums,cu,res)
    
    return res
};


function fc(nums,cu,res){
    if(nums.length===0){
        let [...c]=cu
        res.push(c)

        cu.pop()
    }else{
        let [...a]=nums

        for(let i=0;i<nums.length;i++){
            cu.push(a[i])
            
            a.splice(i,1)

            fc(a,cu,res)

            a=nums
        }


        cu.pop()
    }
    
    
}

var a=[1,2,3]
permute(a)