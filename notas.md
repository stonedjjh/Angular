# Notas

## Mitos y realidades

| Primicia                                                              | Resultado |
| --------------------------------------------------------------------- | --------- |
| Angular es mejor que React, Vue, Svelte                               | Mito      |
| Angular es más ordenado que React, Vue, Svelte                        | Mito      |
| Angular es más complicado de aprender que React, Vue, Svelte          | Verdad    |
| Angular libera versiones a cada rato                                  | Verdad    |
| Las aplicaciones de Angular son muy pesadas                           | Mito      |
| Angular no es SEO Friendly                                            | Mito      |
| Angula no soporta patrones como **Redux**                             | Mito      |
| Angular sin importar la versión del mismo es el mismo Angular         | Verdad    |
| Solo puedo correr código de TypeScript en mis aplicaciones de Angular | Mito      |
|                                                                       | Verdad    |

### Sección 3 Bases de TypeScript - Recomendado


Esta sección es un repaso de typescript y otros conceptos claves necesarios para Angular

```bash
npm create vite@latest
```

- al proyecto los nombramos **typescript-intro**
- framework **Vanilla**
- variant **TypeScript**
- use rolldown-vite **No**
- Install with npm and start now? **Yes**
-

### Sección 4 Angular

- En la carpeta src es en donde desarrollaremos la mayoria de nuestro codigo
- **main.ts** es el punto de entrada de nuestra aplicacion
- **index.html** es el archivo HTML principal de nuestra aplicacion

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Bases</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
```

> [!IMPORTANT] Nótese que en el body tenemos la etiqueta `<app-root></app-root>`, esta etiqueta es el selector del componente principal de nuestra aplicacion, es decir `App.ts`

- **App.ts** es el componente principal de nuestra aplicacion

**ejemplo**

```TypeScript
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('02-bases');
}
```

- **RouterOutlet** Su función principal es actuar como un marcador de posición dinámico. Cuando la aplicación navega a una ruta específica, el RouterOutlet le indica al router dónde debe renderizar o cargar el componente asociado a esa ruta dentro de la estructura del DOM (Modelo de Objetos del Documento).

En términos simples:

Se coloca en la plantilla del componente principal de tu aplicación (generalmente en app.component.html).

Cuando cambias de ruta (por ejemplo, de /home a /perfil), el RouterOutlet destruye el componente anterior y carga el nuevo componente de la ruta.

- **app.routes.ts** es el archivo en donde definiremos las rutas de nuestra aplicacion.

**Ejemplo:**

```TypeScript
import { Routes } from '@angular/router';
//Agregamos nuesto componente importandolo
import { CounterPage } from './pages/counter/counter-page';

export const routes: Routes = [
  {

    path: '',
    //lo agregamos a las rutas
    component: CounterPage,
  },
];
```

- **counter-page.ts** este es nuestro componente personalizado, que crear un contador inicializado en 10

```TypeScript
import { Component } from '@angular/core';

//Se usa el decorator Component para definir un componente en Angular
@Component({
  //Definimos el selector y la plantilla HTML del componente
  template: `
    <H1>Hola Mundo</H1>
    <H2>CounterComponent Page 2</H2>
    <!-- Mostramos el valor del contador usando {{}} -->
    <p>Counter: {{ counter }}</p>
    <!-- Botones para incrementar y decrementar el contador -->
    <!-- Usando métodos para cambiar el valor del contador
    este se definen colocando el metodo entre () -->
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="decreaseBy(1)">-1</button>
  `,
})
//Definimos la clase del componente y su lógica
export class CounterPage {
  //Definimos una propiedad counter inicializada en 10
  counter = 10;

  increaseBy(value: number) {
    this.counter += value;
  }

  decreaseBy(value: number) {
    this.counter -= value;
  }
}
```

> [!IMPORTANT]
> Nótese que para usar la propiedades que definamos debemos usa la notación
> de `{{}}` tal como en blade, vue y otros manejadores de plantilla
> Para definir metodos en nuestra etiquetas usamos `()` por eso en nuestro ejemplo se ve el codigo `(click)` dentro de la etiqueta html button.

#### ¿Qué es un Decorador?

Un Decorador es una característica de TypeScript que permite modificar o añadir metadata (metadatos) a una clase, método, propiedad o parámetro.

##### @Component

Se utiliza este decorador para indicar que crearemos un componente

```TypeScript
@Component({
  selector: 'counter-page',
  templateUrl: './counter-page.html',
  styleUrl: './counter-page.css',
  imports: [UpperCasePipe],
})
```

- **selector**: es el nombre con el que identificaremos nuestro componente en las plantillas HTML
- **templateUrl**: es la ruta del archivo HTML que contiene la plantilla del componente
- **styleUrl**: es la ruta del archivo CSS que contiene los estilos del componente -**imports**: el arreglo imports hace que el componente sea autosuficiente, especificando exactamente qué dependencias necesita para renderizar y funcionar correctamente en su plantilla.

#### Signal

Las señales en Angular son una forma de manejar el estado reactivo dentro de los componentes. Permiten que los componentes respondan automáticamente a los cambios en los datos sin necesidad de usar observables o suscripciones manuales.

```TypeScript
import { signal } from '@angular/core';
export class CounterPage {

  counterSignal = signal(10);

  increaseBy(value: number) {
    this.counterSignal.update((current) => current + value);
  }

  decreaseBy(value: number) {
    this.counterSignal.update((current) => current - value);
  }

  resetCounter() {
    this.counterSignal.set(0);
  }
```

- **set**: se utiliza para establecer el valor de signal.

- **update**: se utiliza para actualizar el valor de signal basado en su valor actual.

#### Signal Computed

Las señales computadas en Angular son una forma de derivar valores basados en otras señales. Permiten crear propiedades reactivas que se actualizan automáticamente cuando las señales de las que dependen cambian.

```TypeScript
import { computed } from '@angular/core';
export class HeroPage {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    return `Super Heroe: ${this.name().toUpperCase()} - Edad: ${this.age()}`;
  });
}
```

### Sección 5 Expandir bases

En esta sección veremos:

- RouterLink
- RouterLink Active
- Nuevo control flow
- @for
- @if
- ngClass - ngStyle - Alternativas
- Comunicación entre componentes
- Inputs / outputs (Como señales)
- Servicios en Angular
- Efectos y LocalStorage
- LinkedSignal
- HashRouter
- Despliegues

#### Creación de un componente

Para crea un componente usando la cli de Angular usamos el comando `ng g c` seguido del nombre del componente.
o `ng g component nombre-del-componente`

ejemplo

```bash
ng g component navbar
```

#### RouterLink

En Angular, un routerLink es una directiva que se utiliza para vincular elementos del HTML (como enlaces `<a>` o botones) con las rutas definidas en tu aplicación.

A diferencia del atributo tradicional href de HTML, routerLink permite la navegación sin recargar la página, lo que es fundamental para mantener la experiencia de una Single Page Application (SPA).

##### Características principales

Navegación fluida: Al hacer clic, Angular intercepta el evento, cambia la URL en la barra de direcciones y carga el componente correspondiente sin realizar una nueva petición al servidor para descargar todo el HTML.

Sintaxis versátil: Puedes pasarle una cadena de texto simple para rutas estáticas o un arreglo para rutas con parámetros dinámicos.

Gestión de estilos: Suele utilizarse junto con la directiva routerLinkActive para aplicar automáticamente una clase de CSS (como active) al enlace cuando su ruta coincide con la URL actual.

Ejemplos comunes:

- Ruta estática:

`<a routerLink="/contacto">Ir a Contacto</a>`

- Ruta dinámica (con parámetros):

`<a [routerLink]="['/perfil', usuarioId]">Ver Perfil</a>`

#### RouterLinkActive

En Angular, la directiva routerLinkActive se utiliza para añadir una o más clases CSS a un elemento HTML de forma automática cuando la ruta vinculada a su routerLink está activa.

Su función principal es mejorar la experiencia de usuario (UX) proporcionando retroalimentación visual, indicándole al usuario en qué sección de la aplicación se encuentra actualmente (por ejemplo, resaltando una opción en un menú de navegación).

##### ¿Cómo funciona?

1. **Sincronización con el Router**: Angular monitorea constantemente la URL actual del navegador.

2. **Detección de Coincidencia**: Compara la ruta activa con el valor definido en el routerLink del elemento.

3. **Aplicación de Estilos**: Si coinciden, aplica la clase CSS que hayas especificado (comúnmente una clase llamada active o selected).

Ejemplo básico de implementación

```HTML

<nav>
  <a routerLink="/inicio" routerLinkActive="clase-activa">Inicio</a>
  
  <a routerLink="/productos" routerLinkActive="clase-activa">Productos</a>
</nav>

```

##### Características avanzadas

- Múltiples clases: Puedes pasar una lista de clases separadas por espacios: routerLinkActive="clase1 clase2".

- En elementos contenedores: Puedes poner la directiva en un elemento padre (como un `<li>`) y Angular aplicará la clase al padre si el `<a>` que está dentro tiene la ruta activa.

- routerLinkActiveOptions: Por defecto, Angular activa la clase si la URL actual empieza por el link definido. Para que solo se active si la coincidencia es exacta, se usa:

```HTML

<a routerLink="/inicio" 
   [routerLinkActiveOptions]="{ exact: true }" 
   routerLinkActive="active">Inicio</a>
```

#### Estilos dentro del componente

Dentro de nuestro comoponente en su html podemos colocar estilos, no es lo recomendable pero se puede hacer.

```html
<style>
nav{
  display: flex;
  justify-content: space-arround;
  background-color: #212121;
  color: white;
  padding: 10px;
}
nav a {
  color: white;
  text-decoration: none;
}
</style>
```

para ver la aplicación de este ejemplo lo podemos verificar en `02-bases\src\app\components\shared\navbar\navbar.html`

#### Directiva @for (Control Flow)

Se utiliza para iterar sobre una colección de datos (arreglos) y renderizar elementos repetitivos en la plantilla. Es la evolución moderna del antiguo `*ngFor`.

Sintaxis Básica

```HTML
<<ul>
  @for (item of items; track item.id) {
    <li>{{ item.name }}</li>
  } @empty {
    <li>No hay elementos en la lista</li>
  }
</ul>
```

##### Elementos Clave

- track: Es obligatorio. Se utiliza para darle a Angular un identificador único para cada elemento. Esto ayuda al framework a saber exactamente qué elemento cambió, se agregó o se eliminó, optimizando drásticamente el rendimiento del renderizado.

- @empty: Es un bloque opcional que se muestra automáticamente cuando el arreglo está vacío (items.length === 0).

##### Variables Contextuales

Dentro del @for, puedes acceder a variables útiles del ciclo de vida de la iteración:

|Variable|Descripción|
|$index|El índice del elemento actual (0, 1, 2...).|
|$first|True si es el primer elemento.|
|$last|True si es el último elemento.|
|$count|El número total de elementos en la colección.|

###### Ejemplo con índice

```HTML
@for (user of users; track user.id) {
  <p>Usuario #{{ $index + 1 }}: {{ user.name }}</p>
}
```

> [!IMPORTANT]A diferencia de las directivas antiguas como *ngFor, la nueva sintax
is @for no necesita ser incluida en el arreglo imports de tu @Component. Angular la reconoce automáticamente en todas las plantillas.

#### Directiva ngClass

Es una directiva de atributo que permite añadir o eliminar clases de CSS de un elemento HTML de forma dinámica, basándose en expresiones lógicas o el estado de variables en el componente.

##### Formas de uso principal

##### 1. Objeto (La más utilizada)

La llave es el **nombre de la clase CSS** y el valor es la **condición booleana**. Si la condición es `true`, la clase se añade; si es `false`, se quita.

```html
<div [ngClass]="{
    'text-success': isOnline,
    'text-danger': !isOnline,
    'font-bold': count > 10
  }">
  Estado del servidor
</div>
```

#### Directiva @if (Control Flow)

Es la nueva directiva de flujo de control (introducida en Angular 17) que permite mostrar u ocultar elementos del DOM de forma condicional. Sustituye a la antigua directiva estructural `*ngIf`.

##### Sintaxis Básica (If / Else)

```html
@if (isLoggedIn) {
  <p>Bienvenido de nuevo, usuario.</p>
} @else {
  <button>Iniciar sesión</button>
}
```

##### Sintaxis Completa (Else If)

Permite manejar múltiples condiciones de forma mucho más limpia que las versiones anteriores.

```html
@if (role === 'admin') {
  <p>Panel de Control de Administrador</p>
} @else if (role === 'editor') {
  <p>Panel de Edición de Contenido</p>
} @else {
  <p>Panel de Usuario Estándar</p>
}
```

##### Referencia de resultados (As)

También puedes guardar el resultado de una expresión (como un Observable con el pipe async) en una variable local dentro del bloque:

```html
@if (userProfile$ | async; as user) {
  <p>Nombre: {{ user.name }}</p>
}
```
