# Informe Práctica 10 - Cliente y servidor para una aplicación de procesamiento de notas de texto


![nodejs](https://i.imgur.com/wGV4Azu.png)



╔═══════════════════════════════════════════════════════════════════╗

> - Autora: Andrea Calero Caro > [alu0101202952@ull.edu.es](alu0101202952@ull.edu.es)
> - Práctica 10 - Cliente y servidor para una aplicación de procesamiento de notas de texto
> - Asignatura: Desarrollo de Sistemas Informáticos
> - Universidad de La Laguna

╚═══════════════════════════════════════════════════════════════════╝



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## Índice


  - Objetivos
  - Paso previo: Aceptación de tarea de GitHub Classroom
  - Estructura básica de proyectos
  - Instalación, configuración Typedoc
  - Instalación, configuración Mocha y Chai
  - Instalación, configuración Coverage, Instanbul, Coveralls
  - Estructura programa 
    -   Desarrollo del código
  - GitHubActions: workflows, Coveralls
  - Desarrollo del informe con GitHub Pages
  - Conclusiones
  - Bibliografía y/o Webgrafía
  
  



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## OBJETIVOS


En esta práctica se plantean una serie de ejercicios o retos a resolver haciendo uso de las APIs proporcionadas por Node.js para interactuar con el sistema de ficheros, así como para crear procesos.

**ENLACE A LA DOCUMENTACIÓN EN TYPEDOC**
> - [Informe documentación con Typedoc](http://127.0.0.1:5500/docs/)



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## PASO PREVIO: ACEPTACIÓN DE TAREA DE GITHUB CLASSROOM


Antes de comenzar se nos requiere que aceptemos la tarea asignada en el GitHub Classroom:

![Asignación GitHub Classroom](https://i.imgur.com/D5MAZSL.jpg)

Con ello ya podríamos trabajar en esta práctica.



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## ESTRUCTURA BÁSICA DE PROYECTOS


Lo primero sería estructurar el workspace de nuestra práctica, primero clonaremos el repositorio y lo iremos estructurando:

Se comienza modificando el **package.json** y creando el fichero de configuración **tsconfig.json** como se ha visto en prácticas anteriores.

Se quedaría el **package.json** tal que:

![packagejson](https://i.imgur.com/gKhuyyl.jpg)

Se crean el directorio `./src` y sus ejecutables .js en el directorio `./dist`, como hemos hecho en otras prácticas.

Manualmente, se crearía ambos directorios donde trabajaremos. 

También se necesita una compilación con control automático de cambios que se instalará con el comando `npm install --save-dev tsc-watch`

Por último en la organización de la estructura básica será la instalación del paquete **EsLint**, esto por si quisiéramos comprobar la sintaxis de nuestro código, encontrar y solucionar problemas en el mismo. Primero lo instalamos con el comando:

> `npm install -g eslint` 

Y lo inicializamos con `eslint --init` añadiéndole esto valores:

![Configuración Eslint](https://i.imgur.com/Xp8pzj7.jpg)

Luego modificar el fichero .eslint.

Además crearemos el fichero .gitignore donde excluiremos los siguientes directorios: 

![gitignore](https://i.imgur.com/DzHhrEB.jpg)

Tras la estructura básica se trabajará en el directorio `./src` donde se alojan los .ts correspondientes a cada clase que se me he planteado para la correcta organización del código de nodas de node.js manteniendo así los principios SOLID, además de preparar la documentación con typedoc y las pruebas unitarias (TDD) con Mocha y Chai.



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## INSTALACIÓN. CONFIGURACIÓN TYPEDOC

Para conocer más sobre esta herramienta consultar [Typedoc](https://typedoc.org/). Como ya desde la práctica 3 nos habíamos introducido a la herramienta **Typedoc**, solo queda seguir los mismos pasos mecánicos para esta práctica. Dicho informe creado en Typedoc hecho con los comentarios de los ejercicios de esta práctica se aloja en:

[Informe Typedoc Práctica 10](http://127.0.0.1:5500/docs/) 

O también mirando en los apartados **Objetivos** y **Bibliografía/ webgrafía** de este informe.

Comenzamos con la instalación de typedoc.

Con ello podemos ver que se ha creado un directorio, que es como organizará typedoc la documentación que es por módulos, creando así `./node_modules`. Continuaremos con la configuración para poder usar Typedoc, primero si no se ha creado por defecto crear el **typedoc.json**, lo creamos y le añadimos la ruta de los ficheros a los que haremos el seguimiento de documentación. Y en el apartado `"out: "` pondremos el directorio donde se alojará toda esa documentación. Tras guardar dicha configuración se genereará automáticamente el directorio `./doc`.


Ya tendríamos la documentación en el directorio `./doc` para ejecutarla serviría con el comando ´npm run doc´ como antes especificamos. 
Esto genera documentación pero a partir de comentarios de TypeScript del estilo `/** */` con esta forma especificando la función, los parámetros, lo que devuelve, los snippet...

Esto guardaría esos comentarios en forma de página HTML para la documentación, tendríamos que ir al fichero `index.html` en el directorio de `./modules`, y con el click derecho pinchar sobre la opción de: __Open with Live Server__ y así generaría una página HTML con los comentarios en forma de documentación.

Finalizando así la documentación con Typedoc.



━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━






▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## INSTALACIÓN. CONFIGURACIÓN MOCHA Y CHAI

En este apartado como ya hemos anteriormentem, tendremos que volver a ejecutar dichos pasos para poder trabajar con Pruebas Unitarias con las herramientas **Mocha** y **Chai**. Primero instalaremos las dependencias y paquetes de Mocha y chai. 

A continuación con el comando `touch .mocharc.json` crearemos el fichero de configuración de la herramienta Mocha, este irá en la raíz de el proyecto y nos indicará utilidades para hacer TDD, es decir las pruebas unitarias. Para ello le indicaremos que las pruebas unitaras se alojarán en el directorio **./tests** y tendrán una terminología de **.spec.ts**. 

Como ha pasado con la herramienta **Typedoc** indicaremos en el **package.json** con qué comando, ejecutaremos la herramienta de mocha. Esta herramienta se ejecuta tal que `npm run [nombre_de_invocación]`, el nombre de invocación en nuestro caso será **test**, quedando el comando completo para ejecutar las pruebas unitarias de la forma: 

> `npm run test`

Este nombre de invocación es el que configuraremos en el package.json
Finalizando con todo esto la configuración de las herramientas necesarias para ejecutar los ejercicios mediante TDD. Quedando la estructura final con los ficheros además del .nojekyll.



━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## INSTALACIÓN, CONFIGURACIÓN COVERAGE, INSTANBUL, COVERALLS

Comenzaremos instalando los paquetes y dependencias de las herramientas asociadas a Instanbul, como es **nyc** y la de **coveralls**, como se han visto en prácticas anteriores y se enlazará el repositorio, tras hacerlo **público** a coveralls. Se copia el token del repo en un fichero creado .coveralls.yml, tal que:

![token](https://i.imgur.com/ZcDaHt7.jpg)

A la hora de conectarlo con Coveralls este me ha dado fallo y no me genera correctamente el badges.


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## ESTRUCTURA DEL PROGRAMA

La idea es alojar en el directorio ./src todo el código .ts relativo al tratamiento de notas que se aprovechó y mejoró algunas partes del código de la práctica 8 y que a continuación pasaré a explicar en detalle. La estructura final del repositorio se presenta como:

![estructura final](https://i.imgur.com/sxUzc8e.jpg)

Lo ideal es hacer todo esto con metodología TDD, pero debido a que se trabaja con procesos de node.js se han omitido test salvo en el ejercicio 3, que no se ha realizado, sólo puesto el ejercicio de la práctica 8, y sus pruebas unitarias.

━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### MEJORAS DE LA PRÁCTICA 8 PARA PODER REALIZAR CORRECTAMENTE LA PRÁCTICA

La idea de esta parte es mejorar el funcionamiento de la práctica adaptada para actuar con un servidor y las notas, de la práctica 8, para ello se tuvo que adaptar el código y tests con relación a la práctica 8.

Para ello se modificó del fichero **todoCollection.ts** de mi práctica 8 que recuerdo que tenía la estructura y modos de guardar y cargar las notas, o conjuntos de notas. Para ello se necesitó, definir funciones independientes de la clase para poder exportar luego para que el servidor pueda trabajar luego. Quedando:

- Función getTodoColor(), consigue el color con la herramienta chalk, ya usada anteriormente:

![estructura funciones independientes](https://i.imgur.com/eJ435yo.jpg)

- Funciónes getTodoByName() consigue el nombre de la nota con la que se necesitará luego, loadTodo() carga la nota que está alojada y asignada a un usuario determinado:

![estructura funciones independientes](https://i.imgur.com/rQnEAkx.jpg)

- Función saveTodo(), guarda las notas y las asigna a un usuario determinado:

![estructura funciones independientes](https://i.imgur.com/FjhbiWe.jpg)


Tras modificar ese fichero y adaptar algunos datos en los test, continuamos con el funcionamiento de la práctica 10 y el planteamiento de su funcionamiento.

━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Práctica 10

La idea de la estructura para este ejercicio 10 es la siguiente:

![estructura](https://i.imgur.com/AvilekO.jpg)

Los ficheros alojados dentro del directorio > `./src/api-notas/notes` estos son reutilizados para el tratamiento de notas y modificados según se especificó anteriormente. Los otros ficheros los explicaré a continuación:

━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


#### Types.ts

Este fichero contiene los tipos que se manejarán para el control de request y response sufridas en la conexión con el server.

![type.ts](https://i.imgur.com/vEGJJNA.jpg)

Este fichero tendrá los tipos con los que trabajará de petición y respuesta del servidor como tratamiento de las notas con sus respectivos atributos que se indican.


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

#### Server.ts

Este fichero contiene el tratamiento de las notas y las respuestas del servidor a las peticiones que se le realizan con el tratamiento de las notas. Estas acciones son: **add**, **update**, **remove**, **list** y **read** y en el caso de respuesta además proporcionará un tipo **error** a modo indicador de fallo como respuesta si no se realizó bien la acción. Implementadas está la acción o petición **add** y es la que se presentará.

Por tanto la estructura del servidor es:

![es1](https://i.imgur.com/Rl6JyM2.jpg)

![es2](https://i.imgur.com/sIYmQYH.jpg)

![es3](https://i.imgur.com/0JjHh7N.jpg)

Está estructurado en dos partes o dos funciones diferenciadas, una para el tratamiento de los campos de entrada de las notas, comprobando que son tipo "strings" los atributos de las notas, que serán de petición para el server (function **todoFields**). Por otro lado está la función que trabaja las respuestas que trata el servidor a estas peticiones, en específico a la petición de añadido de notas **add** y esto el servidor lo tratará en escucha desde el puerto 60300 (function **processRequest**).


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


#### Commands.ts

Este fichero contiene los comandos que se trabajará con la ayuda de los request al server y la herramienta **yarg** para el tratamiento de comandos por línea de comandos. Para ello el fichero está estructurado:

![e1](https://i.imgur.com/ANokvNM.jpg)

![e2](https://i.imgur.com/oO7yxPO.jpg)

![e3](https://i.imgur.com/kOdyxzY.jpg)

Como se observa se distinguen 2 partes diferenciadas una función que se exporta asu vez para también luego tratarla en otros ficheros, en este caso, en el server. La primera paret es la función que se corresponde con el añadido de notas, esto con **addTodo**, con ello comprobamos los atributos de las notas, como el usuario el título y color, los datos necesarios mínimos para añadir notas. Por otro lado está el tratamiento del comando por línea de comandos con el **yarg** por un lado definiendo, como se ve en la segunda foto, los atributos y comandos que se pasan por consola. Esto es igual que la práctica 8, lo que cambia de todo ello es el handler porque al tratarlo no se tratará de misma manera, porque esta vez contamos con una petición al servidor, por ello, conectamos con el cliente por conexión por el puerto del servidor que antes se definió, alamcenando todo lo relacionado con esta acción de añadido y acabando a esto añadiendo la conversión a .json en el que se encuentran las notas a tratar. En otros casos se muestra errores en color rojo, con la herrmaienta chalk, que esto ya lo hacía en la práctica 8 y sigue con esta idea en la práctica 10.


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

#### EJEMPLO DE PRUEBA DE LA PRÁCTICA

Se abrirán dos terminal, en una se ejecuta el server en modo escucha, con el comando:

> `npx ts-node src/api-notas/server.ts`

Quedando:

![ejecutar server](https://i.imgur.com/0LhFM18.jpg)

Pr otro lado en la otra terminal haremos de cliente que quiere añadir una nota específico con los atributos y comando necesarios. Esto con el comando:

> `npx ts-node src/api-notas/commands.ts add --title="Red note" --user="edu" --body="This is now a red note" --color="red"`

El comando es similar al que se usaba en la práctica 8, con la diferencia que tratamos de una conexión cliente-server para las peticiones.

Quedando:

![commands](https://i.imgur.com/RkscBtz.jpg)

Finalizando así la práctica y continuamos con el seguimiento continuo por Coverage y github actions.

 
 ━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 
 
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## GITHUB ACTIONS: WORKFLOWS, COVERALLS

En esta parte tenemos que hacer momentáneamente el repositorio público en github para poder engancharlo con GitHub Actions y Coveralls y así hacer el seguimiento continuo de github Actions y luego el de coveralls quedando:

Copiando el token de coveralls por una parte en un fichero **.coveralls.yml**:

![token](https://i.imgur.com/ZcDaHt7.jpg)

Luego realizaríamos el seguimiento continuo por GitHub Actions creando un propio workflows para coveralls:

![coveralls workflow](https://i.imgur.com/jZ9kDN3.jpg)



━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


 
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## DESARROLLO DEL INFORME CON GITHUB PAGES


Tras finalizar la práctica se nos requiere un informe en con el formato de estilos de Markdown en **GitHub Pages**, para ello usamos la guía de estilos de Markdown en [Markdown guide](https://guides.github.com/features/mastering-markdown/).

Y así finalizamos esta práctica e informe redactado en el archivo **index.md**.





▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

## CONCLUSIONES


Conclusión sobre la práctica e informe: Con respecto a la práctica tuve dudas a la hora de organizar el fichero y por ello acudí a tutorías, a partir de ahí pude encaminar mejor la práctica, simplificando el prototipo inicial con un fichero client.ts el cual era innecesario a cambio hice un fichero commands.ts que maneja los comandos yargs necesarios para el tratamiento de notas. Al principio por ello tuve problemas de saber organizar de forma estructurada la práctica. Luego tuve fallos con las github actions a la hora de enlazar los buges a pesar de lso test que hice y que salieron. Y sonarCloud no reconoce mi repositorio, dificultándome el trabajar pues a pesar de hacer el repo público, sonarcloud no me lo reconoce y no puedo encontrarlo, por ello no lo he tratado. 

▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

## BIBLIOGRAFÍA Y/O WEBGRAFÍA


- [Enunciado práctica](https://ull-esit-inf-dsi-2021.github.io/prct10-async-sockets/)
