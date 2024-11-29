package org.generation.ejercicio6;

import java.util.Scanner;

public class Ejercicio6 {
	public static void main(String[] args) { // Agregando el método principal de la clase
		int[] n = new int[20]; // Agregando la palabra new para inicializar el arreglo

		// Llenamos el arreglo con números aleatorios entre 20 y 400
		for (int i = 0; i < 20; i++) {
			// Agregando un + al contador
			n[i] = (int) (Math.random() * 381) + 20;
			System.out.print(n[i] + " "); // Imprimimos los números, faltaba la palabra out, no la tenía
		}

		System.out.println("\n¿Qué números quiere resaltar?"); // Se agrega la n al println
		System.out.print("(1 – los múltiplos de 5, 2 – los múltiplos de 7): ");

		// Leemos la opción del usuario
		Scanner scanner = new Scanner(System.in);
//		    int opcion = Integer.parseInt(System.console().readLine();
		int opcion = scanner.nextInt(); // Cambiamos la forma de leer la variale

		// Determinamos el múltiplo en función de la opción
		int multiplo = (opcion == 1) ? 5 : 7; // Cambiamos el ? y : del operador ternario porque estaban al revés

		// Recorremos el arreglo y resaltamos los números que cumplen la condición

		for (int e : n) { // noo es foreach, es for
			if (e % multiplo == 0) {
				System.out.print("[" + e + "] ");
			} else {
				System.out.print(e + " "); // Cambiamos in por aut ya que es salida y no entrada de datos
			}
		}
		scanner.close(); // Cerramos el scanner

	}

}
