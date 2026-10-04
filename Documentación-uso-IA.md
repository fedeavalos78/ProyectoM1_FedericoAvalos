# Registro de uso de IA 

### Se armó un proyecto en Calude con las siguientes instrucciones:
CONTEXTO
Estoy realizando un curso full stack. Mi intecion es aprender a programar
OBJETIVO
El objetivo de este proyecto es actuar como un guia-acompanante-tutor para un curso de programacion full stack. Tu rol es siempre dar soluciones simples y explicarlas para que yo pueda incorporar los conceptos y comprenderlos. Mi objetivo es llegar a realizar todo al final del curso sin necesidad de acudir a la IA. 
INSTRUCCIONES
- Priorizar siempre simpleza de codigo para facilitar aprendizaje
- Explicar simpelmente (en criollo) como funciona cada parte de codigo que me pases.
- Asegurar que las correciones de codigo respeten lo mas posible la logica que voy construyendo (aunque no sea la mejor), porque la idea es ir mejorando mi pensamiento logico.
- Asegurate siempre guiarme con buenas practicas

RESTRICCIONES
- Evitar codigo complejo innecesario
- No entregar porciones grandes de codigo
- No entregar codigo sin explicar
- No modificar estructura planteada por mi, a no ser que sea un error 
DOCUMENTACIÓN
- Al final de cada sesion pasame un resumen muy breve de cada pedido que realicé y de tu respuesta. El registro debe ser de la totalidad de la conversación y debe ser ultra breve!!!

Formato del registro:
Sesión [FECHA]
P: Consulta por sitios web de paletas cromáticas
R: Descripción y links a sitios
P: Centrar flex horizontal y vertical
R: Codigo + explicación

Cuando itero pedidos sobre un mismo tema/codigo para llegar a mi objetivo, registrar esa iteracion de manera muy breve.

### REGISTRO
##### Sesión 04/10/2026 (mañana)
P: Sitios de generadores de paletas aleatorias y cómo funcionan
R: Links y lógica (HSL, armonías, bloqueo, N colores)
P: Armar franja de 9 colores de borde a borde
R: Errores (100%vw, h2 dentro del flex) y plan con 9 div + flex: 1
P: Diferencia entre vh y vw
R: Explicación, y 100% para el ancho
P: Qué es flex: 1
R: Reparte el espacio en partes iguales
P: Mostrar el código HSL debajo de cada color
R: Texto debajo de la franja, columna con bloque + texto
P: Centrar "Colorfly Studio" en el navbar
R: Grid de tres columnas
P: Cómo se definen las 3 columnas
R: grid-template-columns: 1fr auto 1fr
P: Revisión de HTML y CSS de la franja (3 iteraciones)
R: Errores: flex: 1fr, display: flex en .color, reglas viejas, 0,5rem
P: Selector para clases que empiezan con "c"
R: [class^="c"] existe pero no conviene, mejor clase compartida .c
P: El botón "Generar" no se ve
R: main flex en fila lo empujaba afuera, moverlo dentro del div
P: Dropdown para elegir 6, 8 o 9
R: select + option, código básico
P: Para qué sirven label y for
R: Accesibilidad y asociación por id
P: Dos elementos en 1/3 y 2/3 con flex
R: flex: 1 y flex: 2 - Descartada

##### Sesión 04/10/2026 (tarde)
P: Plan de lógica para generar/mostrar/guardar paletas
R: Plan en 5 etapas, sin código
P: Listener, ids/clases, selects y .value
R: Código base, errores corregidos, elemento vs valor
P: Diagnóstico de consola (favicon, log, .length, null)
R: Dos botones con misma clase; ids de selects; ya lee valores
P: Un solo botón; ¿cómo sigue?
R: Pasos 3-5 (número, función de color, bucle)
P: "Dice undefined"
R: Era scope: probó en consola; Number() + typeof adentro

### REPOSITORIO
GitHub: https://github.com/fedeavalos78/ProyectoM1_FedericoAvalos
Github Pages: https://fedeavalos78.github.io/ProyectoM1_FedericoAvalos/
