import java.util.*;
public class singlenumber{
    public static void main(String [] args){
        int [] arr = {3,3,7,8,0,6,5,0,8,5,6};
        Arrays.sort(arr);
        boolean found=false;
        for(int i=0;i<arr.length-1;i+=2){
            if(arr[i]!=arr[i+1]){
                System.out.println("Single Number = "+arr[i]);
                break;
            }
        }
    }
}