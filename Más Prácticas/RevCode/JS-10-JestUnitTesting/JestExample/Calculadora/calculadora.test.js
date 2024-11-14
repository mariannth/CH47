const calculate = require('./index');


//Lo que deberia de suceder en proceso de prueba es:
//1. el usuario coloca la información, en este caso llena dos inputs
//2. Selecciona si lo que busca es una suma, resta o multiplicacion. 
//3. en el html se renderiza el resultado

describe("operation = suma", ()=>{
    let number1, number2, resultElement;

        beforeEach(()=>{
         // simular El DOM 
            document.body.innerHTML = `<input  id="number1" value="2"/>
            <input id="number2" value="2"/>
            <div id="result"></div>`;

            number1 = document.getElementById("number1").value;
            number2 = document.getElementById("number2").value;
            resultElement = document.getElementById("result");
        });

    test("values 2,2 & expected 4 ", ()=>{
        calculate("add");
        expect(resultElement.innerText).toBe("Resultado: 4")
    })
})

