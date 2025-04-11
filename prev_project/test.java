package prev_project;
import java.util.Scanner;

 class Solution {
    static String ninjaAndRegularPolygon(int n, int M, int[] A) {
        int sumOfSides = 0;
        int maxSide = 0;

        for (int i = 0; i < n; i++) {
            sumOfSides += A[i];
            maxSide = Math.max(maxSide, A[i]);
        }

        if (n == M && sumOfSides % M == 0 && maxSide < sumOfSides / M) {
            return "Yes";
        } else {
            return "No";
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] A = new int[n];
        for (int i = 0; i < n; i++) {
            A[i] = scanner.nextInt();
        }
        int M = scanner.nextInt();
        String result = ninjaAndRegularPolygon(n, M, A);
        System.out.println(result);

        scanner.close();
    }
}
