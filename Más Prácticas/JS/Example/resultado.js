Estás desarrollando un sistema de calendario para una planta industrial que sigue regulaciones estrictas. 
Tu sistema necesita verificar si cierto día y hora de este año se considera una hora laboral estándar.

Input: Días laborales (lunes a viernes de 9:30am a 5:30pm)

Proceso: diasLaborales = días laborales
         constEntrada = 9:30
         constSalida = 17:30

dia = ( )

if dia = sabado || domingo entonces print= "no es día laboral" 

else print "es día laboral"

hora = ( )

if (hora) < horaDeEntrada || > horaDeSalida entonces print = "No es horario laboral"  

else print = "Si es horario laboral" 

Output: Día y hora ¿Si se considera laboral?

Print "No es horario laboral"  
Print "Si es horario laboral" 

Agregando dos condicionales


if var = sabado || domingo || (hora) < horaDeEntrada || > horaDeSalida entonces print = "No es horario laboral"  

else dia != sabado || domingo && (hora) > horaDeEntrada < horaDeSalida 


Entonces Print = "Es horario laboral" 

Conociendo el día de la semana para el 1 de enero, calcula qué día de la semana debe ser una fecha determinada y usa condiciones fijas para las horas.


