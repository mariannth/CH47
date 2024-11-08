//POO
/*
-Clases: Un conjunto de propiedades y metodos (moldes para objetos o plantilla), se refiere a la plantilla para poder crear objetos. Utiliza la palabra reservada class

-Constructor: Es una función obligatorio para crear objetos a traves de caracteristicas (atributos) especificas. Se usa la palabra reservada constructor

-Objetos: Una instancia de una clase, es lo que constuimos a traves de la clase y el constructor. Se usa la palabra reservada new

-Atributos: Caracteristicas (propiedades) de un objeto
-Metodos: Comportamiento (funciones) de un objeto, es lo que hace el objeto(saludar, brincar, caminar). Se usa la palabra reservada function

-Instanciar: Se refiere a cuando ya creamos la clase, el constructor y el objeto. Se usa la palabra reservada new

//Principios de POO
-Herencia: La herencia permite reutilizar el codigo de la clase padre en la clase hija, cuenta la palabra reservada extend para hacerlo.
-Polimorfismo: El polimorfismo permite que un objeto de una clase hija pueda ser tratado como un objeto de la clase padre, contiene la palabra reservada override para hacerlo. Es decir que los objetos se comportan de manera diferente.
-Encapsulamiento: El encapsulamiento es la forma de controlar la accesibilidad de los atributos y metodos de la clase, es decir encierro los atributos y metodos de la clase para que no puedan ser accedidos desde fuera de la clase. Se usa la palabra reservada private para hacerlo.
-Abstracción: La abstraccion permite que un objeto sea tratado como un objeto abstracto, es decir, no se puede instanciar directamente, se usa la palabra reservada abstract para hacerlo.

Modularidad: Permite dividir un programa en modulos, es decir, funciones, clases, etc. Esto es para que el programa sea mas facil de entender y mantener. Se usa la palabra reservada import para hacerlo.

Metodos estáticos: Utiliza la palabra reservada static para hacerlo, nos permite acceder a ellos sin necesidad de instanciar la clase.

-Metodos accesores: Utiliza la palabra reservada get y set para hacerlo, nos permite acceder a ellos sin necesidad de instanciar la clase.

Principios SOLID: 
-S: Single Responsibility Principle: Se refiere a que una clase debe tener una sola responsabilidad y debe ser única, la responsabilidad de un objeto debe ser limitada a una sola tarea y no debe tener dependencias de otros objetos.

-O: Open/Closed Principle: Se refiere a que una clase debe ser abierta para extensiones y cerrada para modificaciones. Tiene la posibilidad de escalar, pero no se modifica

-L: Liskov Substitution Principle: Se refiere a que una clase debe ser capaz de ser sustituida por objetos de la misma o de subclases. Podemos tener cualquier tipo de objeto dentro de una clase y no se ve afectado por el comportamiento de la clase.

-I: Interface Segregation Principle: Se refiere a que una clase debe ser capaz de ser utilizada por objetos de diferentes interfaces. 

-D: Dependency Inversion Principle: Se refiere a que dependencias deben ser abiertas para extensiones y cerradas para modificaciones. Trabaja a traves de la abstraccion para que el codigo no dependa de detalles especificos.

Objetos JSON
Javascript Object Notation (JSON) es un formato de datos para enviar y manejar datos, no tiene métodos ni atributos.
*/

class ch47 {
  //Clase padre o principal
  constructor(nombre, apellido, email, edad) {
    //nos permite crear el objeto
    this.name = nombre;
    this.lastName = apellido;
    this.email = email;
    this.age = edad;
    this.info = `Holi, soy ${this.name} ${this.lastName}, mi correo es ${this.email} y tengo ${this.age} años.`;
  }

  infoIntegrantes() {
    console.log(this.info);
  }
}

class instruccion extends ch47 {
  constructor(nombre, apellido, email, edad, escolaridad) {
    super(nombre, apellido, email, edad);
    this.grado = escolaridad;
    this.info = `Holi, soy ${this.name} ${this.lastName}, mi correo es ${this.email} y tengo ${this.age} años. Mi escolaridad es ${this.grado}.`;
  }
  static darSesion() {
    console.log("Hoy no tienes sesion");
  }
}

class mentoria extends ch47 {
  constructor(nombre, apellido, email, edad, telefono) {
    super(nombre, apellido, email, edad);
    this.numTel = telefono;
    this.info = `Holi, soy ${this.name} ${this.lastName}, mi correo es ${this.email} y tengo ${this.age} años. Mi telefono es ${this.numTel}.`;
  }

  static darMentoria() {
    console.log("Tienes muchxs mentees");
  }
}

class participante extends ch47 {
  constructor(nombre, apellido, email, edad, municipio) {
    super(nombre, apellido, email, edad);
    this.municipio = municipio;
    this.info = `Holi, soy ${this.name} ${this.lastName}, mi correo es ${this.email} y tengo ${this.age} años. Mi municipio es ${this.municipio}.`;
  }
  static soyParticipante() {
    console.log("Soy parte de Generation");
  }
}

//METODOS ACCESORES  ###TAREA###


//------------------------------------------------------
console.log("----Ahora voy a llamar a la clase ch47----");
const ch1 = new ch47("Mariana", "Torres", "mariana@example.com", 26); //los obbjetos se deben definir con const y new
ch1.infoIntegrantes();

console.log("----Ahora voy a llamar a la clase instruccion----");
const ch2 = new instruccion(
  "Mariana",
  "Torres",
  "mariana@example.com",
  26,
  "Ingenieria en Sistemas"
);
ch2.infoIntegrantes();
instruccion.darSesion();

console.log("----Ahora voy a llamar a la clase mentoria----");
const ment = new mentoria(
  "Mariana",
  "Torres",
  "mariana@example.com",
  26,
  123456789
);
ment.infoIntegrantes();
mentoria.darMentoria();

console.log("----Ahora voy a llamar a la clase participante----");
const part = new participante(
  "Mariana",
  "Torres",
  "mariana@example.com",
  26,
  "Pachuca"
);
part.infoIntegrantes();
participante.soyParticipante();

