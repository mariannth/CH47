package org.generation.ejercicio4;

import java.util.Scanner; // Importamos la clase Scanner, no estaba

public class Ejercicio4 {

	public static void main(String[] args) { // Se agrega el metodo principal, no estaba
		Scanner s = new Scanner(System.in); // Inicializamos Scanner con System.in, no estaba

		// Solicitar entrada del jugador 1
		System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
		String j1 = s.nextLine();

		// Solicitar entrada del jugador 2
		System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
		Scanner s2 = new Scanner(System.in); // Inicializamos otro scanner, aunque se puede prescindir
		String j2 = s.nextLine();

//		if (j1 == j2)) {
//		      System.out.println("Empate");
//		    } else {
//		      int g = 2;
//		      switch(j1) {
//		        case "piedra":
//		          if (j2 == "tijeras") {
//		            g = 1;
//		          }
//
//		        case "papel":
//		          if (j2 == "piedra") {
//		            g = 1;
//		          
//		        case "tijera":
//		          if (j2.equals("papel")) {
//		            g = 1;
//		          }
//		          break;
//		        default:
//		      }
		
		// Comparación de las jugadas
		if (j1.equals(j2)) { // Usamos .equals para comparar cadenas
			System.out.println("Empate");
		} else {
			int ganador = 2; // Por defecto gana el jugador 2

			// Evaluamos la jugada del jugador 1
			switch (j1) {
			case "piedra":
				if (j2.equals("tijeras")) {
					ganador = 1;
				}
				break;

			case "papel":
				if (j2.equals("piedra")) {
					ganador = 2;
				}
				break;

			case "tijeras":
				if (j2.equals("papel")) {
					ganador = 1;
				}
				break;

			default:
				System.out.println("Entrada inválida del jugador 1.");
				return; // Terminamos la ejecución si hay un error en la entrada del jugador 1
			}

			// Si llegamos aquí, ambas entradas fueron válidas
			System.out.println("Gana el jugador " + ganador);
		}

		s.close(); // Cerramos el Scanner
		s2.close();
	}

}