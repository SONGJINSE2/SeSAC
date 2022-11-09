package first_project;

import java.util.Scanner;
import java.util.ArrayList;
import java.util.InputMismatchException;

public class Main_2 {

	public static void main(String[] args) {
//		Scanner scanner = new Scanner(System.in);
//		
//		System.out.println("숫자를 입력해 주세요.");
//		int num = 0;
//		try {
//			num = scanner.nextInt();
//		}
//		catch(InputMismatchException e) {
//			System.out.println("숫자를 입력해야해요.");
//		}
//		
//		
//		System.out.println("숫자" + num);
//		
//		scanner.close();
//		
//	
//		int num1 = 5;
//		int num2 = 0;
//		//ArithmeticException
//		
//		try {
//			System.out.println(num1/num2);
//		}
//		catch(ArithmeticException e) {
//			System.out.println("0으로 나눌 수 없어요.");
//		}
//		finally {
//			System.out.println("finally");
//		}
//		
//		
//		System.out.println("aaaaaaaaaa");
		
		// 예외처리 실습
		
//		int [] intArray = new int[4];
//		
//		intArray[0] = 1;
//		intArray[1] = 2;
//		intArray[2] = 3;
//		intArray[3] = 4;
//		
//		try {
//			for(int i = 0; i < intArray.length+1; i++) {
//				
//				System.out.println(intArray[i]);
//			}
//		}
//		catch(ArrayIndexOutOfBoundsException e) {
//			System.out.println("인덱스가 범위를 벗어났습니다.");
//		}
		
		
		// 클래스 실습
//		System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");
//		
//		Scanner scanner = new Scanner(System.in);
//		int num1 = scanner.nextInt();
//		int num2 = scanner.nextInt();
//		
//		
//		Test1 test = new Test1(num1,num2);
//		System.out.println(test.area);
//	
		
		// 클래스 실습 심화
		Scanner scanner = new Scanner(System.in);
	
		ArrayList<Test1> arrayList = new ArrayList<>();
		
		while( true ) {
			
			System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");
			int num1 = scanner.nextInt();
			int num2 = scanner.nextInt();
			
			 if( num1 == 0 && num2 == 0 ) {break;
			 } else {
				 arrayList.add(new Test1(num1, num2));}
			}
		
		for(int i = 0; i < arrayList.size(); i++) {
			System.out.println("가로 길이는:" + arrayList.get(i).width);
			System.out.println("세로 길이는:" + arrayList.get(i).height);
			System.out.println("넓이는:" + arrayList.get(i).area);
			System.out.println("---------------------------------");
			
		}
		System.out.println("Rectangle 인스턴스의 개수는 :" + arrayList.size());
		
	}

}
