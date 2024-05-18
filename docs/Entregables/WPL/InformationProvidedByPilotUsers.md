<div style={{ display: 'flex' }}>
  <img src="/img/TalentLOGO.png" alt="Imagen 1" style={{ width: '50%', height: 'auto' }} />
  <img src="/img/USLOGO.png" alt="Imagen 2" style={{ width: '30%', height: '30%' }} />
</div>

## <center>Ingeniería del Software y Práctica Profesional - Universidad de Sevilla</center>

BERMEJO SORIA, CARLOS         - Creación


### Entregable: WPL
### Grupo 01 (Mañana) - IT Talent


## <a name="_wkafr5zg0ncg"></a>**Demo 1**

- Feedback de candidatos:



|**Nombre**|Antonio Rodríguez Ruiz|
| :- | :- |
|**Fecha**|7/3/2024|
|**Clockify**|<https://app.clockify.me/shared/65ea1097ea46a3609cad7006>|
|**Valoración general**|4/10|
|**Valoración perfil**|6/10|
|**Valoración login/register**|5/10|
|**Fallos**|<p>Os pongo un 4 por que segun las failure condition del Sprint 1 cualquier panic en la aplicacion desplegada seria un suspenso, ademas del tremendo leak que haceis de algunos datos de los usuarios en las llamadas a la API:</p><p>- Panic en los botones de "edit" en el perfil de un usuario</p><p>- Panic en los botones de subscripcion</p><p>- Los Highlights en los sidebars estan descentrados, el icono de abajo a la derecha no carga</p><p>- Sidebar se queda abierta y podemos interactuar con el resto de la app, no tiene mucho sentido al estar "overlayed"</p><p>- Los numeros de telefono no tienen validacion (123123123 ó 7 son numeros valido)</p><p>- Al hacer el analisis del usuario "Torvalds" no se renderiza bien la pagina, da error y hay que irse al listado de analisis para acceder a su analisis</p><p>- El register te envia a la pagina de "my profile" a pesar de que no te loggea, deberia mandarte a la pagina de login</p><p>- La API da, aunque encriptada, la contraseña y numero de telefonos de todos los usuarios registrados. Peligro de seguridad grave</p><p>- Me gustaria que aceptariais mas proveedores de correos. Hay gente, sobre todo entre developers, que tiene como correos principales alternativas como protonmail o tutanota, a veces incluso dominios propios o corporativos.</p><p>- El darle al "intro" deberia enviar el formulario</p>|
|**Sugerencias**|<p>Cambios a cosas ya existentes:</p><p>- Pedir un token de GH sin especificar los permisos es spooky. Os recomiendo una de las siguientes alternativas: OAuth, conexión como gh app, solicitud de token como Jetbrains</p><p>- El dar stats de cualquier repo privado puede ser peligroso, por tanto os recomendaria que si tomais esas stats en caso de que el token lo permita que solo se le enseñe al usuario con el gh asociado.</p><p>- En la pagina de settings tener el boton de "Delete Account" debajo del de cambiar idioma es tentar a la suerte, yo le he dado sin querer porque además tiene el mismo color que los botones de aceptar (color primario)</p><p></p><p>Mejoras:</p><p>- Deberia de haber una indicacion mas alla del sidebar que me diga si estoy loggeado</p><p>- Me imagino que ya lo habeis pensado pero que toda la info este en formato tabla da una sensacion de baja calidad</p><p>- El background esta muy cargado, hace dificil leer algunas cosas</p><p></p><p>Sobre tema responsive:</p><p>- La aplicacion deja de ser legible en pantallas con menor resolucion a 1080p, se superponen los textos.</p><p>- El resizing de las tablas se hace solo al ancho y queda todo raro</p><p>- Los iconos no tienen resizing y no mantienen aspect ratio, dependiendo de la resolucion podemos llegar a ver solo una linea blanca</p><p>- Esto probablemente lo tengais planificado para otro Sprint, pero lo comento. La aplicacion es inutilizable en dispositivos moviles, algo que deberia ser considerado ya que la mayoria de la gente usa su movil para navegar por internet hoy en dia y quizas quiera acceder a la web fuera de un entorno productivo para enseñarsela a alguien mas</p><p>- Si en un dispositivo movil abro el sidebar me quedo atrapado ahi, no puedo cerrarlo</p>|
|**Otros comentarios**|<p>Ademas de esto con respecto a la "Landing Page"</p><p>- Que la URL tenga "prueba" no da confianza- Descripción/Biografia</p><p>- El poner un indicativo "Popular" arbitrariamente en el plan de precio que querais podria ser ilegal. Seccion 6 de la legislatura de la UE respecto a "unfair practices": https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32005L0029. Por otro lado si estoy pagando 10€ mensuales 3 actualizaciones me parece muy poco. Minimo 1 o 2 semanales. Tampoco se explica lo que son las "trends"</p>|




- Feedback de representantes:

Durante este Sprint, recibimos feedback informal a partir de una reunión dada el 12/03/2024. La empresa **GFT** indicó que debería permitir analizar un listado de usuarios muy grande para ser útil y que este se pudiera introducir rápidamente. No veían clara la función de análisis y necesitaban más tiempo para comprender el funcionamiento de la función de búsqueda, por entonces no disponible.

## <a name="_4vr4b9yuuwpp"></a>**Demo 2**
- Feedback de candidatos:



|**Nombre**|Antonio Rodríguez Ruiz|
| :- | :- |
|**Fecha**|29/3/2024|
|**Clockify**|<https://app.clockify.me/shared/66071de46cf4e742fab50590>|
|**Valoración general**|6/10|
|**Valoración perfil**|6/10|
|**Valoración login/register/logout**|4/10|
|**Valoración Developer Info**|7/10|
|**Valoración Working Experience**|1/10|
|**Valoración notificaciones**|5/10|
|**Fallos**|<p>Formulario de Registro:</p><p>- Verificación de Email no funciona: Pruebo con un correo de protonmail y dice que no existe cuando si existe. Pruebo con mi correo personal y me salta el siguiente error proveniente del backend "cannot read properties of undefined (reading 'length'). No puedo decir los pasos para replicar por que fui a crear un usuario, se creo bien, fui a crear otro, y ya me lanzaba este error y me lo sigue lanzando cada vez que intento crear un usuario. No se que he hecho para que pase.</p><p></p><p>Login:</p><p>- El "Enter" o "< CR >" deberia equivaler a hacer submit del formulario.</p><p>- Cuando pongo credenciales incorrectas, luego correctas, no me redirige al perfil de usuario</p><p></p><p>Perfil:</p><p>- Antes los campos del usuario eran editables, ahora no. Por que? Bug o Feature?</p><p></p><p>Plan de Subscripciones:</p><p>- Tened cuidado con las paginas en blanco al clickar en subscribirse, podria considerarse panick y suspenso</p><p></p><p>Work Experience:</p><p>- El formulario aparece demasiado ancho, quizas considerar un grid como en el register o mas pequeño como en el login</p><p>- Puedo emepezar un trabajo el mismo dia que termina. Bug o Feature?</p><p>- Al añadir work experience no aparece por ninguna parte en mi perfil</p>|
|**Sugerencias**|<p>Perfil:</p><p>- Las tecnologías estaría interesante que fueran como un Pie Chart</p><p></p><p>Work Experience:</p><p>- Estaria bien que para "Other" me dierais la opcion de poner el area manualmente</p><p></p><p>Settings:</p><p>Poner el boton de eliminar perfil debajo del de cambiar idioma es un tanto tentar a la suerte, os recomiendo moverlo de sitio o algo</p>|
|**Otros comentarios**|<p>Interfaz de usuario:</p><p>- Mejor que la ultima vez, mas responsive, las imagenes no se bugean y en movil no me quedo atrapado en el sidebar</p><p>- El panel lateral se deberia cerrar si clico fuera, de otra forma queda como q estorba</p><p>- El highlight de los apartados del menu sigue con mucho offset vertical, se ve muy feo</p><p></p><p>Seguridad:</p><p>- No he podido probar todo lo que queria por que la api de swagger no funciona asi que todo lo de aqui lo he sacado del inspector del navegador</p><p>- Seguis pasando las contraseñas, correos, telefonos de todos los usuarios y ahora tambien el listado de payments</p><p>- En casi todos los endpoints se hace una request de los users. Por que? en muchos de ellos no hace falta</p><p>- Cuidado con los console.log que dejais por ahi, se os pueden escapar cosas importantes. (Instancia encontrada en Make analysis)</p><p></p><p>Especulacion:</p><p>- De nuevo, como se me ha roto el register no lo he podido probar, pero si cambio la req y pongo que mi plan es el Pro, puedo tenerlo sin pagar?</p><p></p><p>Mismo feedback que la ultima vez, el cual no se ha aplicado:</p><p></p><p>El poner un indicativo "Popular" arbitrariamente en el plan de precio que querais podria ser ilegal. Seccion 6 de la legislatura de la UE respecto a "unfair practices": https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32005L0029. Por otro lado si estoy pagando 10€ mensuales 3 actualizaciones me parece muy poco. Minimo 1 o 2 semanales. Tampoco se explica lo que son las "trends"</p><p></p>|
|**Valoración formulario**|4/5|

- Feedback representantes:

No existe actualmente feedback por parte de representantes de la segunda demo.


## <a name="_4vr4b9yuuwpp"></a>**Demo 3**
- Feedback de candidatos:



|**Nombre**|Antonio Rodríguez Ruiz|
| :- | :- |
|**Fecha**|24/4/2024|
|**Clockify**|<https://app.clockify.me/shared/6623fedc0730fe5f66bbc340>|
|**Valoración general**|7/10|
|**Valoración perfil**|8/10|
|**¿Es cómoda la actualización del perfil?**|Sí, lo es|
|**¿Se entienden los planes de suscripción?**|Si, se entienden, pero no se aplican correctamente. Puedo ver stats sin ser Pro, es confuso|
|**¿Cree que la sección de pago para el cambio de plan es intuitiva?**|Sí, lo es|
|**Valoración login/register/logout**|8/10|
|**Valoración Developer Info**|7/10|
|**¿Cree que los campos de Developer Info son adecuados?**|No se si esto sera cosa de github o no, pero en las tecnologias aparece por alguna razon express o mongoose, que he usado 1 vez en mi vida, y no otras como Django con la que tengo muchos repositorios hechos|
|**Valoración Working Experience**|7/10|
|**Valoración notificaciones**|5/10|
|**Valoración "Trends"**|7/10|
|**Fallos**|Muchos de estos problemas están relacionados con capturas de pantalla que os enviaré por otros medios. - El modal de aceptar los términos de licencia no aparece en medio de la pantalla, sino abajo. Además es algo difícil de leer ya que hay poco contraste. - Hay tremendo leak de usuarios, hasta el punto que te da los datos de su subscripcion id, y la puedes robar con un PATCH a tu usuario, consiguiendo status premium sin tener que pagar. - Cuando copias el link de una imagen de internet, te viene sin el .png o .jpg. Al pegarlo en el formulario de editar usuario te dice que el problema es que tiene que empezar con http:// o https://, lo cual ya hace. Por tanto hay que ir completando a mano lo del .png (solo lo sabrias si tienes el manual del usuario candidato), y ademas por cada caracter que pones te salta el error, lo que lo hace un poco pesado. - El usuario "Representative" proporcionado en el manual del usuario candidato no es valido. Es decir, no me puedo loggear con las credenciales provistas, y por tanto no he podido probar la parte de las notificaciones. - Las gráficas de repositorios más forkeados no se si están rotas o no, pero son casi ilegibles, no entiendo la información que representa. El resto de errores estan relacionados con la responsiveness de la aplicacion. He visto que esta muy mejorada, por lo que como interpreto que lo habeis tomado en cuenta os indico donde se puede mejorar un poco: - La tabla de repositorios populares esta rota en movil - El titulo de la pantalla de notificaciones se sale del container - El register está bien adaptado a móviles, pero no el login. El input se vuelve enano.|
|**Sugerencias**|Muchas de estas sugerencias están relacionados con capturas de pantalla que os enviaré por otros medios. - Estaría bien que te permitiera poner tu trabajo actual y no solo trabajos pasados, lo que no es posible actualmente pq te pide una fecha de fin obligatoriamente. - Estaría bien que para probar la aplicación la base de datos estuviera algo más populada. La parte de las trends se queda un poco vacía. La ultima es una sugerencia personal: - Por favor arreglad el sidebar, el highlight sigue super descentrado con respecto al elemento seleccionado, y me raya que no se cierre cuando hago click fuera, como si fuera un modal. Mas que nada pq este tipo de sidebars que se ponen encima de la app y no desplazan el contenido siempre funcionan, en ese aspecto, como un modal.|
|**Otros comentarios**|Muy buen trabajo con respecto al Sprint anterior, se nota el crunch!!|
|**Valoración formulario**|5/5|

- Feedback representantes:

|**Nombre empresa**|IPECA|
| :- | :- |
|**Fecha**|20/4/2024|
|**Valoración general**|5/10|
|**Valoración perfil**|5/10|
|**¿Es cómoda la actualización del perfil?**|Tiene problemas|
|**¿Se entienden los planes de suscripción?**|No lo sé, no sé el fixing price|
|**¿Cree que la sección de pago para el cambio de plan es intuitiva?**|No, me siento inseguro pagando|
|**Valoración login/register/logout**|4/10|
|**Valoración del análisis**|5/10|
|**¿Qué cambios le haría a la sección de análisis?**|mas friendly|
|**Valoración historial de análisis**|5/10|
|**Valoración búsqueda de equipos**|5/10|
|**¿Qué cambios haría a la búsqueda de equipos?**|más "ligera"|
|**Valoración historial de búsqueda**|5/10|
|**Fallos**|no permite el login tiene distintos front-end.|
|**Sugerencias**|no lo habéis estructurado adecuadamente|
|**Otros comentarios**|os falta depurarlo|
|**Valoración formulario**|3/5|

- Análisis del feedback:
 
|Error|Detalles|Prioridad|FC|
| :- | :- | :- | :- |
|Visualización del modal|El modal de aceptar los términos de licencia no aparece en medio de la pantalla, sino abajo. Además es algo difícil de leer ya que hay poco contraste.|Muy baja|NO|
|Leak de usuarios|Hay "leak" de usuarios, hasta el punto que te da los datos de su _subscriptionId_, y la puedes robar con un PATCH a tu usuario, consiguiendo status premium sin tener que pagar.|Neutral|NO|
|Foto de perfil|Cuando copias el link de una imagen de internet, te viene sin el .png o .jpg. Al pegarlo en el formulario de editar usuario te dice que el problema es que tiene que empezar con http:// o https://, lo cual ya hace. Por tanto, hay que ir completando a mano lo del .png (solo lo sabrías si tienes el manual del usuario candidato), y ademas por cada caracter que pones te salta el error, lo que lo hace un poco pesado.|Neutral|NO|
|Errores de _responsiveness_|Hay diversos errores de _responsiveness_ en diversas secciones de la aplicación.|Alta|NO|
|La sección de análisis es poco "friendly"|El usuario piloto asegura que la información que aparece en el análisis de Github es complicada de entender.|Muy baja|NO|
|Acceso a _Trends_|Se puede acceder a las estadísticas sin tener el plan adeacuado.|Alta|NO|

La prioridad puede ser _muy baja_, _baja_, _neutral_, _alta_ o _muy alta_. Esta prioridad se correspondería con la etiqueta que se le asignaría a la tarea de enmendación de errores que podría generarse en el tablero del proyecto, en caso de que se considerase oportuno. Por otra parte, "FC" representa si el error es una _Software Failure Condition_ o no.

- Decisiones y soluciones:

|Issue|Acción|Detalles|Estado|
| :- | :- | :- | :- |
|[#403](https://github.com/JaviFdez7/ISPP-G1-Talent/issues/403)|Resolver error foto de perfil|Resolver problema de actualizacion de foto descrito en el feedback.|DONE|
|[#430](https://github.com/JaviFdez7/ISPP-G1-Talent/issues/430)|Mejorar foto de perfil|Cargar foto de perfil desde local.|TO DO|
|[#434](https://github.com/JaviFdez7/ISPP-G1-Talent/issues/434)|Acceso a _Trends_|Que los trends sean accesibles solo por el plan de suscripcion adecuado.|DONE|

## <a name="_4vr4b9yuuwpe"></a>**Demo 3.1**
- Feedback de candidatos:



|**Nombre**|Antonio Rodríguez Ruiz|
| :- | :- |
|**Fecha**|2024-05-05|
|**Clockify**|<https://app.clockify.me/shared/6637436d963af9639f1407b6>|
|**Valoración general**|8/10|
|**Valoración perfil**|8/10|
|**¿Es cómoda la actualización del perfil?**|En general muy bien. Me entristece que no se pueda usar en movil ya que ha dejado de ser responsive pero en términos generales es mucho más útil y bonita, aunque si la pantalla es menor a 1080p empezamos a tener problemas de superposiscion de elementos. Buen trabajo|
|**¿Se entienden los planes de suscripción? ¿Pagaría por ellos?**|Se entienden bien. Si embargo yo, personalmente, no pagaria por ello ya que hay estadísticas públicas anualmente sobre el tipo de informacion presente en "trends". Y las empresas las puedo ver y contactar a través de LinkedIn|
|**¿Cree que la sección de pago para el cambio de plan es intuitiva?**|Lo es, pero el código postal en España es distinto a otros paises, dejarlo como un numero de 5 digitos no es la mejor opción. Por ejemplo en UK son 6 letras|
|**Valoración login/register/logout**|9/10|
|**Valoración Developer Info**|9/10|
|**¿Cree que los campos de Developer Info son adecuados?**|Sí, son interesantes|
|**Valoración Working Experience**|5/10|
|**Valoración notificaciones**|5/10|
|**Valoración "Trends"**|7/10|
|**Fallos**|Errores GRAVES: - Al entrar por primera vez no me aparecian los botones de Register y Login. Se cree que puede ser debido a que tenia un token antiguo en el localStorage - Las notigicaciones solo tienen boton "Dismiss" - Mientras compraba el plan Pro se me ha acabado la sesion por alguna razon. Ha sido una sesion de unos 10 minutos. Otros errores: - Si se pulsa el boton update developer info sin cambiar el token de github tambien se gastan las veces que se puede hacer. - Sigo sin poder crear mi trabajo actual como experiencia. - Se sigue pudiendo robar una subscriptionId a otro usuario mandando una request manual de PATCH. - El input de has olvidado la contraseña no tiene estilos - Actualizando el usuario si pongo el link de una imagen sin el .png se carga bien, pero cuando le doy a guardar me dice que es invalida.|
|**Sugerencias**|	- Arreglar estilos del sidebar, lleva roto desde el Sprint 1 - Permitir introducir mi trabajo actual - Crear un link que te lleve a crear un token de github con los campos necesarios pre-seleccionados. Parecido a como hacen IDEs como IntelliJ|
|**Otros comentarios**||
|**Valoración formulario**|5/5|

|**Nombre**|-|
| :- | :- |
|**Fecha**|2024-05-03|
|**Clockify**|-|
|**Valoración general**|10/10|
|**Valoración perfil**|9/10|
|**¿Es cómoda la actualización del perfil?**|Sí, lo es|
|**¿Se entienden los planes de suscripción? ¿Pagaría por ellos?**|Se entienden correctamente y probablemente merezcan la pena con un uso más intensivo de la aplicación|
|**¿Cree que la sección de pago para el cambio de plan es intuitiva?**|Sí, lo es|
|**Valoración login/register/logout**|10/10|
|**Valoración Developer Info**|10/10|
|**¿Cree que los campos de Developer Info son adecuados?**|Sí, son interesantes|
|**Valoración Working Experience**|8/10|
|**Valoración notificaciones**|10/10|
|**Valoración "Trends"**|10/10|
|**Fallos**|- El token de sesión suele caducar muy rápido, ocurre en algunos momentos puntuales mientras se usa la app - Al volver atrás, acabas en la pantalla principal con un mensaje "Welcome (nombre del usuario)" y pese a que se puede acceder desde la pestaña de la izquierda, debería de haber un acceso rápido desde la propia pantalla de bienvenida|
|**Sugerencias**|- En la experiencia de trabajo dejaría que la fecha de End fuese indefinida (por si el candidato se encuentra aún en ella) - Agregaría en la sección de experiencia de trabajo un apartado de tecnologías usadas - El apartado de Top Repositories no aclara mucho si, por ejemplo, todos los repos que aparecen tienen 0 estrellas y forks 0. Podría haber alguna manera de ordenarlos o ver en qué se prioriza|
|**Otros comentarios**|Muy buen trabajo del equipo, me ha sorprendido y tiene mucho potencial|
|**Valoración formulario**|5/5|

|**Nombre**|Antonio Rodríguez Ruiz|
| :- | :- |
|**Fecha**|2024-05-18|
|**Clockify**|<https://app.clockify.me/shared/664892fce51abc632e81c0e5>|
|**Valoración general**|9/10|
|**Valoración perfil**|10/10|
|**¿Es cómoda la actualización del perfil?**|Sí, lo es|
|**¿Se entienden los planes de suscripción? ¿Pagaría por ellos?**|Personalmente no, no pagaría por ello. Siento que las ventajas que te da no son lo suficientemente buenas. Quizas una mayor visibilidad para las empresas si sería mas conveniente|
|**¿Cree que la sección de pago para el cambio de plan es intuitiva?**|Al pagar pide que el código postal sea español. Pero la página al estar en ingles da a entender que sería algo internacional|
|**Valoración login/register/logout**|9/10|
|**Valoración Developer Info**|8/10|
|**¿Cree que los campos de Developer Info son adecuados?**|Son correctos, pero mejorables|
|**Valoración Working Experience**|7/10|
|**Valoración notificaciones**|8/10|
|**Valoración "Trends"**|9/10|
|**Fallos**|En el registro de cambios se decía que se incluia la posibilidad de introducir experiencias indefinidas, pero eso no es así. Se permite introducir una fecha futura como fin de la experiencia, pero no se permite registrar un trabajo cuya fecha de fin es indefinida, ya que obliga a rellenar el campo. Con respecto a la edición del perfil, sería ideal que se pudieran subir imágenes y no actualizarlas con un link. Pero incluso con el link da problemas porque tienes que añadir manualmente ".png" al final, a pesar de que la imagen parece cargar correctamente.|
|**Sugerencias**|Personalmente lo que menos me atrae son los colores y fondo de la interfaz, me parecen que pueden ser difíciles de leer. Con respecto a la funcionalidad considero que está muy completo|
|**Otros comentarios**|Muy buen trabajo en general. La plataforma ha mejorado muchísimo desde la primera vez que la probé.|
|**Valoración formulario**|5/5|

- Feedback representantes:

|**Nombre empresa**|ITCON Iberia|
| :- | :- |
|**Fecha**|2024-05-03|
|**Valoración general**|10/10|
|**Valoración perfil**|9/10|
|**¿Es cómoda la actualización del perfil?**|Sí, lo es|
|**¿Se entienden los planes de suscripción?**|Según si se da un uso intensivo podría resultar interesante, al menos con el plan BASIC. El Pro quizás puede resultar interesante con un mayor volumen de uso|
|**¿Cree que la sección de pago para el cambio de plan es intuitiva?**|	Sí, lo es|
|**Valoración login/register/logout**|10/10|
|**Valoración del análisis**|10/10|
|**¿Qué cambios le haría a la sección de análisis?**|Permitiría que se pudiese acceder al contenido de los repositorios mostrados en el perfil encontrado en el análisis|
|**Valoración historial de análisis**|9/10|
|**Valoración búsqueda de equipos**|9/10|
|**¿Qué cambios haría a la búsqueda de equipos?**|Poder buscar por un sólo candidato o dejar un sólo formulario de búsqueda y que se filtre el listado a raíz de ahí|
|**Valoración historial de búsqueda**|9/10|
|**Fallos**|- El token de sesión a veces caduca muy rápido, ocurre en la pantalla de Subscription|
|**Sugerencias**|- Poder acceder de forma más intuitiva desde el perfil a tus candidatos favoritos - Búsqueda de candidatos con un sólo formulario|
|**Otros comentarios**|Tiene mucho potencial, un gran trabajo. Interfaz muy bonita y sencilla y buena representación de datos|
|**Valoración formulario**|-|

- Análisis del feedback:


|Error|Detalles|Prioridad|FC|
| :- | :- | :- | :- |
|Error en _Local Storage_|Al abrir la página con el almacenamiento local en el navegador de un usuario que no existe, se genera un error que impide al usuario realizar ninguna acción. Tiene que realizar GET Hacking o borrar el almacenamiento local del navegador para poder continuar.|Muy alta|SÍ|
|Notificaciones|El usuario piloto asegura que las notificaciones solo tienen botón "Dismiss".|Alta|NO|
|Fin de sesión inesperado|El usuario piloto asegura que su sesión se acabó en apenas 10 minutos y mientras realizaba un cambio de suscripción.|Neutral|NO|
|Número de intentos|Si se pulsa el boton update developer info sin cambiar el token de github tambien se gastan las veces que se puede hacer.|Muy baja|NO|
|Limitaciones de _Working Experience_|El usuario piloto no puede seleccionar su profesión actual como Working Experience. Se necesitan más opciones.|Baja|NO|
|Robo de suscripciones|Se sigue pudiendo robar una _subscriptionId_ a otro usuario mandando una _request_ manual de PATCH.|Alta|NO|
|Estilos de olvido de contraseña|El _input_ de "has olvidado la contraseña" no tiene estilos.|Muy baja|NO|
|Validador de imagen de perfil|Actualizando el usuario, si se pone el link de una imagen sin el ".png", se carga bien, pero cuando se le da a guardar dice que es invalida.|Baja|NO|
|Estilos del _Navbar_|La barra de navegación tiene fallos puntuales en los estilos.|Baja|NO|
|Facilitar creación de un token de Github|Sería útil un enlace a la página de creación de token de Github para mejorar la UX.|Muy baja|NO|
|Errores de _responsiveness_|Hay diversos errores de _responsiveness_ en diversas secciones de la aplicación. Especialmente debido a las gráficas.|Alta|NO|
|Enlace a repositorios|El usuario piloto considera útil un enlace directo a los repositorios desde el análisis.|Muy baja|NO|
|Búsqueda de 1 candidato|El usuario piloto considera útil la posibilidad de buscar un solo candidato en la búsqueda de equipos.|Baja|NO|
|_Escape Hatch_ más claro|El usuario piloto no ha encontrado el acceso al _Escape Hatch_ que lleva a la página de inicio. Se puede hacer más visible.|Muy baja|NO|
|Fecha de finalización de _Work Experience_|La fecha de finalización de las experiencias laborales debería ser indefinida por si el candidato aún se encuentra en la posición y no sabe cuándo terminará. Habría que considerar qué hacer con los años de experiencia.|Neutral|NO|
|_Top Repositories_|El apartado de Top Repositories no aclara mucho si, por ejemplo, todos los repos que aparecen tienen 0 estrellas y 0 forks. Podría haber alguna manera de ordenarlos y ver en qué se prioriza.|Baja|NO|
|Cargar imagen|Sería ideal poder cargar una imagen desde el ordenador.|Baja|NO|

La prioridad puede ser _muy baja_, _baja_, _neutral_, _alta_ o _muy alta_. Esta prioridad se correspondería con la etiqueta que se le asignaría a la tarea de enmendación de errores que podría generarse en el tablero del proyecto, en caso de que se considerase oportuno. Por otra parte, "FC" representa si el error es una _Software Failure Condition_ o no.


- Decisiones y soluciones:

|Issue|Acción|Detalles|Estado|
| :- | :- | :- | :- |
|[#467](https://github.com/JaviFdez7/ISPP-G1-Talent/issues/467)|Resolver bug localStorage|Solucionar error del localStorage. Si el userId o el token no corresponde a un usuario de la base de datos se debe desloguear automáticamente.|DONE|
|[#467](https://github.com/JaviFdez7/ISPP-G1-Talent/issues/467)|Ordenar repositorios|Ordenar los repositorios de un candidato o análisis en base al número de estrellas y forks. Es buena idea que aparezcan primero los que más estrellas y forks tienen.|DONE|
|[#467](https://github.com/JaviFdez7/ISPP-G1-Talent/issues/467)|Visualización de gráficas|Aumentar un poco el texto de las vistas de gráficas y cambiar el color de las letras para que sea blanco y no gris. Esto servirá para que se vea mejor todo.|DONE|
|[#467](https://github.com/JaviFdez7/ISPP-G1-Talent/issues/467)|Fecha de Work Experience|Quitar la validación de que la fecha de final sea anterior a la fecha actual ya que ha sido solicitado por los usuarios piloto.|DONE|

## <a name="_4vr4b9yuuxpe"></a>**Demo 3.2**
- Feedback de candidatos:

|**Nombre**|Antonio Rodríguez Ruiz|
| :- | :- |
|**Fecha**|2024-05-18|
|**Clockify**|<https://app.clockify.me/shared/664892fce51abc632e81c0e5>|
|**Valoración general**|9/10|
|**Valoración perfil**|10/10|
|**¿Es cómoda la actualización del perfil?**|Sí, lo es|
|**¿Se entienden los planes de suscripción? ¿Pagaría por ellos?**|Personalmente no, no pagaría por ello. Siento que las ventajas que te da no son lo suficientemente buenas. Quizas una mayor visibilidad para las empresas si sería mas conveniente|
|**¿Cree que la sección de pago para el cambio de plan es intuitiva?**|Al pagar pide que el código postal sea español. Pero la página al estar en ingles da a entender que sería algo internacional|
|**Valoración login/register/logout**|9/10|
|**Valoración Developer Info**|8/10|
|**¿Cree que los campos de Developer Info son adecuados?**|Son correctos, pero mejorables|
|**Valoración Working Experience**|7/10|
|**Valoración notificaciones**|8/10|
|**Valoración "Trends"**|9/10|
|**Fallos**|En el registro de cambios se decía que se incluia la posibilidad de introducir experiencias indefinidas, pero eso no es así. Se permite introducir una fecha futura como fin de la experiencia, pero no se permite registrar un trabajo cuya fecha de fin es indefinida, ya que obliga a rellenar el campo. Con respecto a la edición del perfil, sería ideal que se pudieran subir imágenes y no actualizarlas con un link. Pero incluso con el link da problemas porque tienes que añadir manualmente ".png" al final, a pesar de que la imagen parece cargar correctamente.|
|**Sugerencias**|Personalmente lo que menos me atrae son los colores y fondo de la interfaz, me parecen que pueden ser difíciles de leer. Con respecto a la funcionalidad considero que está muy completo|
|**Otros comentarios**|Muy buen trabajo en general. La plataforma ha mejorado muchísimo desde la primera vez que la probé.|
|**Valoración formulario**|5/5|

- Feedback representantes:

No existe actualmente feedback por parte de representantes de la fase de WPL.

- Análisis del feedback:


|Error|Detalles|Prioridad|FC|
| :- | :- | :- | :- |
|Cargar imagen|Sería ideal poder cargar una imagen desde el ordenador.|Neutral|NO|
|_Work Experience_|Se permiten fechas futuras para la experiencia laboral, pero no se permiten fechas indefinidas.|Muy baja|NO|

La prioridad puede ser _muy baja_, _baja_, _neutral_, _alta_ o _muy alta_. Esta prioridad se correspondería con la etiqueta que se le asignaría a la tarea de enmendación de errores que podría generarse en el tablero del proyecto, en caso de que se considerase oportuno. Por otra parte, "FC" representa si el error es una _Software Failure Condition_ o no.


- Decisiones y soluciones:

|Issue|Acción|Detalles|Estado|
| :- | :- | :- | :- |
|[#430](https://github.com/JaviFdez7/ISPP-G1-Talent/issues/430)|Cargar imagen|Se realizará una rama en la que se implementará tanto el backend como el frontend. El miembro asignado a esta tarea deberá ponerse de acuerdo con el miembro de backend para realizar esta funcionalidad.|CLOSED|
|[#467](https://github.com/JaviFdez7/ISPP-G1-Talent/issues/467)|Solucionar feedback general|Solucionar feedback general pendiente de semanas anteriores. Se describen más precisamente en la sección de la demo anterior.|DONE|
