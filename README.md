# Cromática – Generador de paletas de colores

Proyecto del Módulo 1 del curso Full Stack. **Cromática** es la herramienta de Colorfly Studio solicitada.

- **Sitio publicado (GitHub Pages):** https://fedeavalos78.github.io/ProyectoM1_FedericoAvalos/
- **Demos en GIF:** https://drive.google.com/drive/folders/1C4wP_EXZV-YZVS5RVGr6NvOz4UWg5VkV?usp=drive_link

## 1. Estructura del repositorio

```
Directory structure:
└── fedeavalos78-ProyectoM1_FedericoAvalos/
    ├── README.md
    ├── Documentación-uso-IA.md
    ├── index.html
    ├── css/
    │   └── styles.css
    ├── js/
    │   ├── generar.js
    │   └── mis-paletas.js
    └── pages/
        ├── generar.html
        └── mis-paletas.html
```

## 2. Funcionalidades

- **Portada** con presentación, rueda cromática animada y un botón que lleva al generador.
- **Generador de paletas:**
  - Se elige la **cantidad de colores** (6, 8 o 9).
  - Se elige el **formato** en que se muestra el código (**HSL** o **HEX**).
  - La primera paleta se genera sola al abrir la página; después, cada vez que se aprieta **"Generar paleta"** se arma una nueva con colores aleatorios.
  - Debajo de cada color se ve el formato y su valor.
- **Copiar un color:** al hacer clic sobre el cuadrado de color, su valor se copia al portapapeles.
- **Bloquear colores:** cada color tiene un candado. Se pueden bloquear hasta **3 colores**. Al generar una paleta nueva, los bloqueados quedan primero (a la izquierda), con borde y candado cerrado, y conservan su tono. El bloqueo se mantiene aunque se cambie la cantidad de colores.
- **Guardar paletas y verlas en "Mis Paletas":** la paleta generada se puede guardar y la página `mis-paletas.html` muestra todas las guardadas.
- **Microfeedback:** avisos tipo "toast" ("Generaste una nueva paleta", "Color copiado") y un tooltip en el botón de la portada.
- **Responsive (parcial):** el menú de navegación apila sus links en pantallas chicas.

## 3. Cómo usar la aplicación

1. Entrar a la portada y hacer clic en **Generador** (o en el link del menú).
2. Elegir la **cantidad de colores** y el **formato** (HEX o HSL).
3. Hacer clic en **Generar paleta**. Aparece un aviso y se dibujan las franjas.
4. Hacer clic en la **franja de un color** para copiar su código. Aparece el aviso "Color copiado".
5. Hacer clic en el **candado** de un color para bloquearlo (máximo 3). Al generar de nuevo, ese color se mantiene.
6. Guardar la paleta y verla en **Mis Paletas**.

Se puede ver cada paso en los GIF de la carpeta de Drive (link arriba).

## 4. Decisiones técnicas

**Colores**
- Todo se calcula en **HSL**, porque con el tono (0–360°) es fácil armar colores que combinen. Con HEX es más difícil.
- La paleta usa **colores análogos**: se sortea un tono base y a cada color siguiente se le suma un paso fijo de 30.
- Se usa `% 360` para que el tono "dé la vuelta" (como un reloj: 370 % 360 = 10).
- Saturación y luminosidad son constantes.
- El **HEX** se calcula solo al mostrar, con las funciones `hslAHex` y `numeroAHex`. La lógica trabaja siempre en HSL.

**JavaScript**
- Los elementos del DOM se buscan una sola vez, afuera del listener. 
- La cantidad llega como texto, así que se convierte con `Number()`.
- Las funciones auxiliares van afuera del listener para no recrearse en cada clic.
- La generación está en una función con nombre (`generarPaleta`): el botón la recibe sin paréntesis (se ejecuta al hacer clic) y se la llama una vez al final del archivo para que la primera paleta aparezca sola. El `<script>` usa `defer`, así el JS corre cuando el HTML ya está armado.
- Las franjas se crean con `createElement`, `classList.add` y `appendChild`. Para vaciar la paleta anterior se usa 
`innerHTML = ""`.
- Cada franja tiene su propio listener para copiar el color.
- Para copiar se usa `navigator.clipboard.writeText(...)`, y el aviso se muestra dentro de `.then(...)`, para que solo 
aparezca si la copia funcionó.

**Bloqueo de colores**
- Los tonos bloqueados se guardan en **un único array** (`bloqueados`), no por posición. Se declara afuera del listener de "Generar" para que sobreviva entre clics; la lista de tonos de la paleta actual va adentro, porque se rehace cada vez.
- El máximo es una constante (`MAX_BLOQUEADOS = 3`), para no dejar un "número mágico" suelto en el código.
- Se permiten tonos repetidos entre los bloqueados. Por eso, al desbloquear se saca un solo elemento con `indexOf` + `splice(posición, 1)` (un `filter` borraría todos los repetidos).
- Al generar, los bloqueados ocupan las primeras posiciones: en el `for`, si `i < bloqueados.length`, se usa `bloqueados[i]` en vez del tono calculado. Esa pregunta se guarda en `estaBloqueado` y se reutiliza para el tono, el borde (clase `borde-bloqueado`) y el candado cerrado.
- El candado es un `<button>` ubicado debajo del código, **afuera** de la caja que copia el color, para que el clic en el candado no dispare también el copiado.

**Guardado (localStorage)**
- Las paletas se guardan en `localStorage` bajo la clave `"paletasGuardadas"`, como un array de objetos. `localStorage` solo guarda texto, por eso se usa `JSON.stringify` para guardar y `JSON.parse` para leer.
- Para guardar se lee el array existente, se le agrega la paleta nueva con `push` y se vuelve a escribir. La primera vez no hay nada guardado (`getItem` devuelve `null`) y se parte de un array vacío.
- `mis-paletas.js` lee ese array y lo dibuja con dos `for` anidados: uno recorre las paletas y otro los colores de cada una.

**HTML / CSS**
- Se importan tipografías de google fonts para que sea parecida a la letra del logo de Cromática.
- Los **toasts** son hermanos de `.color-line` (no hijos), porque `innerHTML = ""` borraría todo lo que esté adentro.
- Los toasts se posicionan con `position: absolute` + `transform: translate(-50%, -50%)`. Se muestran con la clase 
`.visible` (opacidad + `transition`).
- Para evitar que los avisos se pisen con clics rápidos, se usa `clearTimeout` y una variable de temporizador propia 
para cada toast.
- El **tooltip** usa un atributo `data-tooltip` y el pseudo-elemento `::after` con `content: attr(data-tooltip)`.
- El navbar usa **Grid** (`grid-template-columns: 1fr auto 1fr`) para que el título quede realmente centrado.
- Las franjas usan **Flexbox** con `flex: 1`, así se reparten el ancho en partes iguales sin importar la cantidad 
(6, 8 o 9). 
- Para el responsive se usa `@media (max-width: ...)` y el bloque va **al final** del CSS: si dos reglas pesan igual, gana la que viene después, y la media query tiene que pisar a las normales. El `<head>` incluye `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.

## 5. Cómo ejecutarlo en local

El proyecto es HTML, CSS y JavaScript puro: no hay que instalar nada.

1. Clonar el repositorio: `git clone https://github.com/fedeavalos78/ProyectoM1_FedericoAvalos.git`
2. Abrirlo en VS Code.
3. Abrir `index.html` con la extensión **Live Server** (clic derecho → *Open with Live Server*).

## 6. Despliegue

El sitio se publica con **GitHub Pages**: en el repositorio, *Settings → Pages → Deploy from a branch*, y se elige la rama y la carpeta donde está el `index.html`. Cada `git push` a esa rama actualiza el sitio publicado.

## 7. Pendientes

- Terminar el responsive (hoy solo está adaptado el menú de navegación).
- Mostrar el aviso (toast) cuando se intenta bloquear un cuarto color.

## 8. Uso de IA

Durante el curso usé Claude como tutor. Las reglas que le puse y el registro de cada sesión están en el archivo .md Documentación-uso-IA.