# Cromática – Generador de paletas de colores

Proyecto del Módulo 1 del curso Full Stack. **Cromática** es la herramienta de Colorfly Studio solicitada.

- **Sitio publicado (GitHub Pages):** 
- **Demos en GIF:** https://drive.google.com/drive/folders/1C4wP_EXZV-YZVS5RVGr6NvOz4UWg5VkV?usp=drive_link

## 1. Estructura del repositorio

```
Directory structure:
└── fedeavalos78-proyectom1_federicoavalos/
    ├── README.md
    ├── Documentación-uso-IA.md
    ├── index.html
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── script.js
    └── pages/
        ├── generar.html
        └── mis-paletas.html
```

## 2. Funcionalidades

- **Portada** con presentación, rueda cromática animada y un botón que lleva al generador.
- **Generador de paletas:**
  - Se elige la **cantidad de colores** (6, 8 o 9).
  - Se elige el **formato** en que se muestra el código (**HSL** o **HEX**).
  - Al apretar **"Generar paleta"** se arma una paleta nueva con colores aleatorios.
  - Debajo de cada color se ve el formato y su valor.
- **Copiar un color:** al hacer clic sobre el cuadrado de color, su valor se copia al portapapeles.
- **Microfeedback:** avisos tipo "toast" ("Generaste una nueva paleta", "Color copiado") y un tooltip en el botón de la portada.
---
* FALTA HACER EL BLOQUEO
* FALTA RESPONSIVE
*  ALTA HACER QUE "Hacé click en un color para copiar su valor" APAREZCA SOLO DESPUES DEL PRIMER CLICK EN GENERAR
---

## 3. Cómo usar la aplicación

1. Entrar a la portada y hacer clic en **Generador** (o en el link del menú).
2. Elegir la **cantidad de colores** y el **formato** (HEX o HSL).
3. Hacer clic en **Generar paleta**. Aparece un aviso y se dibujan las franjas.
4. Hacer clic en la **franja de un color** para copiar su código. Aparece el aviso "Color copiado".
5. Pegar el código donde se necesite (CSS, un editor de imágenes, etc.).

Se puede ver cada paso en los GIF de la carpeta de Drive (link arriba).


## 4. Decisiones técnicas

**Colores**
- Todo se calcula en **HSL**, porque con el tono (0–360°) es fácil armar colores que combinen. Con HEX es más difícil.
- La paleta usa **colores análogos**: se sortea un tono base y a cada color siguiente se le suma un paso fijo de 30.
- Se usa `% 360` para que el tono "dé la vuelta" (como un reloj: 370 % 360 = 10).
- Saturación y luminosidad son constantes.
- El **HEX** se calcula solo al mostrar, con las funciones `hslAHex` y `numeroAHex`. La lógica trabaja siempre en HSL.

**JavaScript**
EXPLICAR QUE TENGO QUE MODULIZAR
- Los elementos del DOM se buscan una sola vez, afuera del listener. Los valores de los selects (`.value`) se leen 
adentro, para tener el valor actual.
- La cantidad llega como texto, así que se convierte con `Number()`.
- Las funciones auxiliares van afuera del listener para no recrearse en cada clic.
- Las franjas se crean con `createElement`, `classList.add` y `appendChild`. Para vaciar la paleta anterior se usa 
`innerHTML = ""`.
- Cada franja tiene su propio listener para copiar el color.
- Para copiar se usa `navigator.clipboard.writeText(...)`, y el aviso se muestra dentro de `.then(...)`, para que solo 
aparezca si la copia funcionó.
- `script.js` se carga en todas las páginas, por eso se usa `if (botonGenerar)`: así no falla donde no existe el botón.

**HTML / CSS**
EXPLICAR IMPORT DE FONTS
- Los **toasts** son hermanos de `.color-line` (no hijos), porque `innerHTML = ""` borraría todo lo que esté adentro.
- Los toasts se posicionan con `position: absolute` + `transform: translate(-50%, -50%)`. Se muestran con la clase 
`.visible` (opacidad + `transition`).
- Para evitar que los avisos se pisen con clics rápidos, se usa `clearTimeout` y una variable de temporizador propia 
para cada toast.
- El **tooltip** usa un atributo `data-tooltip` y el pseudo-elemento `::after` con `content: attr(data-tooltip)`.
- El navbar usa **Grid** (`grid-template-columns: 1fr auto 1fr`) para que el título quede realmente centrado.
- Las franjas usan **Flexbox** con `flex: 1`, así se reparten el ancho en partes iguales sin importar la cantidad 
(6, 8 o 9). 


## 8. Uso de IA

Durante el curso usé Claude como tutor. Las reglas que le puse y el registro de cada sesión están en el archivo .md 
Documentación-uso-IA.

