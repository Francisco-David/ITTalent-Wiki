<div style={{ display: 'flex' }}>
  <img src="/img/TalentLOGO.png" alt="Imagen 1" style={{ width: '50%', height: 'auto' }} />
  <img src="/img/USLOGO.png" alt="Imagen 2" style={{ width: '30%', height: '30%' }} />
</div>

## <center>Ingeniería del Software y Práctica Profesional - Universidad de Sevilla</center>

BERMEJO SORIA, CARLOS         - Creación


### Entregable: S2
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
