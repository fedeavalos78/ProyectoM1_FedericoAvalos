#APUNTES TRANSITORIOS

###Funcionalidades
- el boton en el main y el link en el nav que dicen generar paleta tienen que mandarte a la pagina generar paleta.
- el link nav de mis paletas lleva a otro html donde se ve el local storage con las paletas que elegi guardar

- en generar.html debe haber:
    * al imagen de portada en el medio centrada y 1/3 de la pantalla
    * abajo un selector de cantidad de colores en la paleta (6,8,9)
    * abajo un selector de formato de colores hsl o hex
    * abajo un boton de generar

- los clicks en generar de la pagina generarhtml deben:
    * Cuando se clickea generar debe haber algun tipo de animacion sutil que muestre que se esta armando la paleta (la imagen de portada deja de girar y se va achicando lentamente en su posicion, tomando el centro de la imagen como eje, hasta desaparecer)
    * cuando la paleta esta lista mostrar el resultado en un div central rectangular que ocupe toda la una franja horizontal dividido en la cantidad de franjas necesarias segun la cantidad de colores solicitados 
    * debajo de cada color, centrado en relacion a la franja, se debe mostrar el codigo hex de cada color
    * debajo del div que muestra el resultado de los colores debe aparecer un boton que diga guardar paleta y debe guaradarlo en localstorage

- Cosas que debe haver en Mis Paletas
    * Tiras finas (de unos 50 px) con los colores elegidos 
    * debajo de cada color, centrado en relacion a la franja, se debe mostrar el codigo hex de cada color
 
- Cosas que no pueden faltar para lograrlo    
    * Event listener para el click de generar
    * Math random para generar los colores segun la cantidad elegida
    * Con el resultado de math random obtener los otros colres que pertenzcan a la paleta segun teoria de colores
    * Microfeedback visible (tooltip, toast u otro equivalente).
    * Consideraciones básicas de accesibilidad (labels asociados, contraste suficiente, foco visible).

  
    