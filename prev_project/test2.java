package prev_project;
import java.util.Scanner;

 class Solution {

    static int arraySortness(int n, int[] a) {
        int sortness = 0;
        int maxOutOfPlace = Integer.MIN_VALUE;

        for (int i = n - 1; i >= 0; i--) {
            if (a[i] > maxOutOfPlace) {
                maxOutOfPlace = a[i];
            } else {
                sortness++;
            }
        }

        return sortness;
    }

    public static void main(String[] args) {
        // Sample Input 1
        int[] a1 = {3, 2, 1};
        int n1 = 3;
        int result1 = arraySortness(n1, a1);
        System.out.println(result1);

        int[] a2 = {7, 8, 9, 8};
        int n2 = 4;
        int result2 = arraySortness(n2, a2);
        System.out.println(result2);

        // Sample Input 2
        int[] a3 = {6, 7, 8, 9, 10, 11, 12};
        int n3 = 7;
        int result3 = arraySortness(n3, a3);
        System.out.println(result3);

        int[] a4 = {5, 7, 4, 8, 9, 10};
        int n4 = 6;
        int result4 = arraySortness(n4, a4);
        System.out.println(result4);
    }
}