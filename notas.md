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

### Sección 3 del Modulo

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

### Sección 4 del Modulo

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
