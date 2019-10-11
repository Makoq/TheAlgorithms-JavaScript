//动态规划：当前块到达路径=上面块到达路径+左面块到达路径，其中第一行和第一列都为1种到达路径，
//和排列组合：从m+n-2种选择m-1种往下走，C(m+n-2,m-1)

class Solution {
    public int uniquePaths(int m, int n) {
        
        int[][] arr=new int[n][m];
      
        for(int i=0;i<m;i++){
        arr[0][i]=1;
        }

        for(int j=0;j<n;j++){
            arr[j][0]=1;
        }


        for(int i=1;i<n;i++){
            for(int j=1;j<m;j++){
                arr[i][j]=arr[i][j-1]+arr[i-1][j];
            }
        }
        return arr[n-1][m-1];
        
        
    }
}