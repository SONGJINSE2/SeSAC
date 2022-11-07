package first_project;

import java.util.Scanner;
import java.util.Arrays;
import java.util.ArrayList;


public class Main {
	// 메소드 실습
//	public static double sum(double num1, double num2) {
//		return num1 + num2;
//	}
//
//	public static double minus(double num1, double num2) {
//		return num1 - num2;
//	}
//
//	public static double divide(double num1, double num2) {
//		return num1 / num2;
//	}
//
//	public static double multiple(double num1, double num2) {
//		return num1 * num2;
//	}
//	
	
	
	
//	public static int number(){
//		return 5 ;
//	}
//		
//	public static void hello() {
//		System.out.println("Hello");
//	}
		
	public static void main(String[] args) {

//		System.out.println("이름, 나이, 키, 결혼 여부를 입력해주세요.");
//		// 송진세 32 170.8 false
//		
//		Scanner scanner = new Scanner(System.in);
//		
//		String name = scanner.next();
//		int age = scanner.nextInt();
//		double height = scanner.nextDouble();
//		boolean married = scanner.nextBoolean();
//		
//		System.out.println(name);
//		System.out.println(age);
//		System.out.println(height);
//		System.out.println(married);
//		
//		scanner.close();
		
		
//		double a = 5.2;
//		double b = 2.0;
//		System.out.println(a/b);
//		
//		int c = 5;
//		int d = 2;
//		System.out.println((double)c/d);
		
//		// 실습1
//		
//		Scanner scanner = new Scanner(System.in);
//	
//		System.out.println("이름을 입력하세요");
//		
//		String name = scanner.next();
//				
//		System.out.println("나이를 입력하세요");
//		
//		int age = scanner.nextInt();
//		
//		System.out.println("안녕하세요!" + name + "님(" + age + "세)");
//		
//		
		
//		// if문
//		String str = new String("홍길동");
//		
//		if( str == "홍길동" ) {
//			System.out.println("남자");
//		}
//		else {System.out.println("여자");}

		
		// switch문 
//		int number = 7;
//		
//		switch (number%3) {
//		case 0:
//			System.out.println("3의 배수입니다.");
//			break;
//		default:
//			System.out.println("3의 배수가 아닙니다");
//	}

		
		// for문
//		int i;
//		for (i=0; i<10; i++) {
//			System.out.print(i + " ");
//		}

		// while문
//		int i = 0;
//		while(i<10){
//			System.out.print(i+" ");
//			i++;
//		}
		
		
		// while문 예제
//		Scanner scanner = new Scanner(System.in);
//		
//		while(true) {
//			System.out.println("숫자를 입력하세요. 0을 입력하면 종료");
//			int number = scanner.nextInt();
//			
//			if( number == 0 ) break;
//		}
//		
		
		// do while문
//		int i = 0;
//		while ( i<10 ) {
//			System.out.print( i+ " ");
//			i++;
//		}
//		
//		int j = 10;
//		do {
//			System.out.print( j+ " asdsd" );
//			j++;
//			
//		}
//		while (j<10);
//	
//	
//		hello();
//		
//		int a = number();
//		
//		System.out.println(a);
//		
//		
		
		// 조건문 실습1.
//		System.out.println("나이를 입력하세요.");
//		Scanner scanner = new Scanner(System.in);
//		int age = scanner.nextInt();
//		
//		if( age<8 ) {
//			System.out.println("유아");
//		} else if( age<14 ) {
//			System.out.println("초등학생");
//		} else if( age<17 ) {
//			System.out.println("중학생");
//		} else if( age<20 ) {
//			System.out.println("고등학생");
//		} else {
//			System.out.println("성인");
//		}
//		
		
		// 조건문 실습2.
//		System.out.println("이름을 입력하세요");
//		Scanner scanner = new Scanner(System.in);
//		String str = scanner.next();
//		
//		if( str.equals ("홍길동")) {
//			System.out.println("남자");
//		} else if ( str.equals ("성춘향")) {
//			System.out.println("여자");
//		} else {
//			System.out.println("모르겠어요.");
//		}
		
		// 반복문 실습.
//		System.out.println("숫자를 입력하세요");
//		Scanner scanner = new Scanner(System.in);
//		
//		int number = scanner.nextInt();
//		
//		for ( int i = 0; i < number+1 ; i++ ) {
//			System.out.print(i+" ");
//		}
	
		
		// 메소드 실습
//		System.out.println("숫자 두 개를 입력하세요");
//		Scanner scanner = new Scanner(System.in);
//		
//		double number1 = scanner.nextDouble();
//		double number2 = scanner.nextDouble();
//		System.out.println("덧셈 결과 : " + sum(number1, number2));
//		System.out.println("뺄셈 결과 : " + minus(number1, number2));
//		System.out.println("나눗셈 결과 : " + divide(number1, number2));
//		System.out.println("곱셈 결과 : " + multiple(number1, number2));
		
		
		
//		int [] intArray = new int[2];  
//		
//		intArray[0] = 1;  
//		intArray[1] = 2;
//		
//		int [] intArray2 = { 1,2 };
//		
//		for(int i = 0; i < intArray2.length; i++) {
//			if(i == 0) System.out.print("[");
//			
//			System.out.print(intArray2[i]);
//			
//			if(i == intArray2.length-1) System.out.println("]");
//			else  System.out.print(", ");
//		}
//		
//		
//			for ( int value : intArray2 ) {
//				System.out.print(value);
//			}
//			
//		System.out.println(Arrays.toString(intArray));
		
		
//		ArrayList<Integer> arrayList1 = new ArrayList<>();
//		ArrayList<Integer> arrayList2 = new ArrayList<>();
//		
//		for ( int i=0; i<10; i++ ) {
//			arrayList2.add(i);
//		}
//
//		arrayList1.add(1);
//		// [ 1 ] 
//
//		arrayList1.add(2);
//		// [ 1, 2 ]
//
//		arrayList1.add(0,3);
//		// [ 3, 1, 2 ]
//
//		arrayList1.addAll(arrayList2);
//		// [ 3, 1, 2, 0, 1, 2, 3, ......, 9 ] 
//
//		for(int value : arrayList1) {
//			System.out.print( value + " " );
//		}
//		
//		// 배열실습
//		System.out.println("5개의 정수를 입력하세요.");
//		Scanner scanner = new Scanner(System.in);
//		int number1 = scanner.nextInt();
//		int number2 = scanner.nextInt();
//		int number3 = scanner.nextInt();
//		int number4 = scanner.nextInt();
//		int number5 = scanner.nextInt();
//		
//		int [] intArray = new int[5];
//		
//		intArray[0] = number1;
//		intArray[1] = number2;
//		intArray[2] = number3;
//		intArray[3] = number4;
//		intArray[4] = number5;
//
//		
//		int a = intArray[0] + intArray[1] + intArray[2] + intArray[3] + intArray[4]  ; 
//		
//		System.out.print(  "평균은" + (double)a/5);
		
		
		//ArrayList 실습
		
		
		Scanner scanner = new Scanner(System.in);
	
		
		ArrayList<String> arrayList = new ArrayList<>();
		

		while( true ) {
			
			
			System.out.println("문자를 입력해주세요.");
			String str = scanner.next();
			

			 if( str.equals("exit") ) {break;
			 } else {arrayList.add(str);}
		
			 
		}
		
		for(int i = 0; i < arrayList.size(); i++) {
			System.out.println(arrayList.get(i));

		}
		
		
		
		
	
	}
	
}

