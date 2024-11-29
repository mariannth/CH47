package org.generation.ejercicio5;

import java.util.Scanner; // Importamos Scanner

public class Ejercicio5 {
	public static void main(String[] args) { // Método principal
		Scanner s = new Scanner(System.in); // Inicializamos Scanner

		System.out.print("Introduzca un número: "); // Cambiamos comillas de simple a doble
		String ni = s.nextLine(); // Leemos el número como cadena

		int nOriginal; // Variable para el número original

		// Intentamos convertir el valor ingresado a un entero
		try {
			nOriginal = Integer.parseInt(ni); // Convertimos a entero
		} catch (NumberFormatException e) {
			System.out.println("Entrada no válida. Debe ser un número entero.");
			s.close();
			return;
		}

		// Validamos si el número es positivo
		if (nOriginal <= 0) {
			System.out.println("Por favor, ingrese un número entero positivo.");
			s.close();
			return;
		}

		int c = nOriginal; // Copiamos el número original para análisis
		int afo = 0; // Contador de dígitos afortunados
		int noAfo = 0; // Contador de dígitos no afortunados

		// Analizamos cada dígito
		while (c > 0) {
			int digito = c % 10; // Extraemos el último dígito
			// Verificamos si el dígito es afortunado
			if (digito == 3 || digito == 7 || digito == 8 || digito == 9) {
				afo++;
			} else {
				noAfo++;
			}
			c /= 10; // Eliminamos el último dígito
		}

		// Verificamos si es un número afortunado
		if (afo > noAfo) {
			System.out.println("El " + nOriginal + " es un número afortunado.");
		} else {
			System.out.println("El " + nOriginal + " no es un número afortunado.");
		}
		s.close(); // Cerramos Scanner
	}
}
