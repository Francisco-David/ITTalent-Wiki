<div style={{ display: 'flex' }}>
  <img src="/img/TalentLOGO.png" alt="Imagen 1" style={{ width: '50%', height: 'auto' }} />
  <img src="/img/USLOGO.png" alt="Imagen 2" style={{ width: '30%', height: '30%' }} />
</div>

## <center>Ingeniería del Software y Práctica Profesional - Universidad de Sevilla</center>

BERMEJO SORIA, CARLOS

CASAL FERRERO, RUBÉN

DOMÍNGUEZ RUIZ. ANDRÉS

DOMÍNGUEZ-ADAME RUIZ. ALBERTO

FERNÁNDEZ CASTILLO, JAVIER

GALLARDO MARTOS, DANIEL

HERRERA RAMIREZ, ISMAEL

IZQUIERDO LAVADO, MARIO

MATEOS GÓMEZ, FERNANDO JOSÉ

MERINO PALMA, ALEJANDRO JOSÉ

MONTERO MARTÍNEZ, FRANCISCO JESÚS

LÓPEZ MOYANO, ROCÍO

OTERO BARBASÁN, MANUEL

VILAPLANA DE TRÍAS, FRANCISCO DAVID

ZARZUELA REINA, CARLOS

<a name="_heading=h.pg8quxt9d0oa">Sevilla, Mayo 2024</a>

### Entregable: PPL
### Grupo 01 (Mañana) - IT Talent

## **Reviewers Guide**

# <a name="_z05qqri5g3tk"></a>Control de Versiones

|**Versión**|**Fecha**|**Autor**|**Cambios**|
| :- | :- | :- | :- |
|v1.0|04/03/2024|Carlos Bermejo Soria|Documento inicial|
|v2.0|26/03/2024|Carlos Bermejo Soria|Segundo Sprint|
|v3.0|20/04/2024|Carlos Bermejo Soria|Tercer Sprint|
|v3.1|04/05/2024|Carlos Bermejo Soria|PPL|

## <a name="_lj1qgmxpo5ez"></a>**Resumen del documento**
Este documento pretende servir de guía para la revisión de la primera demo de IT Talent. Se incluyen tanto el manual de usuario de cada uno de los roles como los requisitos específicos de la guía de revisión.



# <a name="_1fob9te"></a>
#
#
# <a name="_k51xz950apj4"></a><a name="_ug1jcmvg7r12"></a><a name="_9j8c07fxd5sy"></a>Índice

[**Control de Versiones	2**](#_z05qqri5g3tk)**

[**Resumen del documento	2**](#_lj1qgmxpo5ez)

[**Índice	3**](#_9j8c07fxd5sy)

[**1. Datos necesarios	5**](#_xa6lfspey938)

[**1.1 Enlaces y credenciales	5**](#_bfbs3vm63jd7)

[**1.2 Changelog**](#_r5c4sh3vv7v5)[	5](#_r5c4sh3vv7v5)

[**2. Manual de Usuario de candidato	6**](#_xa64yd52esgi)

[**2.1 Registro	6**](#_in20z6q0o8kk)

[**2.2 Inicio de sesión	7**](#_kzpe3bewbwz)

[**2.3 Cierre de sesión	9**](#_4n2bgyoj2cq4)

[**2.4 Perfil	10**](#_2pdb1c74rch3)

[**2.5 Editar perfil	10**](#_hxl5kb20daal)

[**2.6 Developer Info	12**](#_i7onr4fxr0eu)

[**2.7 Mi análisis	12**](#_buxoim5qo6mj)

[**2.8 Work Experience	13**](#_b5o1qmc7mc58)

[**2.9 Añadir experiencia laboral	13**](#_ls684lvuq3xl)

[**2.10 Gestionar experiencia laboral	14**](#_8hyvulnb6g01)

[**2.11 Notificaciones	15**](#_jyjv8kvjijsf)

[**2.12 Perfil del representante	16**](#_crhjurvx7oss)

[**2.13 Gestionar notificaciones	17**](#_gs1hhuykdoh2)

[**2.14 Suscripción	17**](#_hp26rnyabc1r)

[**2.15 Planes del usuario candidato	17**](#_b2sy1mfusuwe)

[**2.16 Selección de plan	18**](#_qru7c4y6z6g0)

[**2.17 Tendencias	19**](#_j9ddwwh8r8uf)

[**2.18 Estadísticas	19**](#_5k7ekgwe2v6s)

[**2.19 Información	20**](#_8wh8ynmxiz3o)

[**3. Manual de Usuario de representantes	21**](#_kq0ahi7y3kqd)

[**3.1 Registro	21**](#_9x34mmv5cl0l)

[**3.2 Inicio de sesión	23**](#_abynzfa48dyu)

[**3.3 Cierre de sesión	25**](#_hmuwl7mmtsck)

[**3.4 Perfil	25**](#_cd2j88l2lmzt)

[**3.5 Editar perfil	26**](#_mpixdlol8mhz)

[**3.6 Últimas acciones	27**](#_owh6j2sx1klg)

[**3.7 Análisis	28**](#_e035v47k8h4l)

[**3.8 Análisis	28**](#_5v7tkuv75y24)

[**3.9 Historial de análisis	30**](#_5hoi22qm4v1c)

[**3.10 Búsqueda	31**](#_l9w7j6m6atp6)

[**3.11 Realizar una búsqueda	31**](#_shznbqkx5lnf)

[**3.12 Historial de búsquedas	33**](#_yke4ae65mniq)

[**3.13 Suscripción	34**](#_hzqpu57csbgk)

[**3.14 Planes del usuario representante	34**](#_bi7opssz5m8x)

[**3.15 Selección de plan	35**](#_s247ymvr7iqy)

[**3.16 Información	36**](#_bl4x0ogtfdgm)




# <a name="_xa6lfspey938"></a> 1. Datos necesarios
## <a name="_bfbs3vm63jd7"></a>**1.1 Enlaces y credenciales**

Antes de comenzar a probar la aplicación, es posible que necesite los siguientes enlaces:

- URL de la landing page: <https://ismaelherrera2000.github.io/it-talent/>
- URL de la plataforma de despliegue: <https://ispp-g1-talent-frontend.vercel.app/>
- URL de GitHub: <https://github.com/JaviFdez7/ISPP-G1-Talent>
- URL de la herramienta de seguimiento: <https://dashboard.bluejay.governify.io/dashboard/script/dashboardLoader.js?dashboardURL=https:%2F%2Freporter.bluejay.governify.io%2Fapi%2Fv4%2Fdashboards%2Ftpa-ISPP-2024-GH-JaviFdez7_ISPP-G1-Talent%2Fmain&orgId=1>
- URL de Clockify(Monitorización del tiempo): <https://app.clockify.me/shared/662657d3ea745f2d089a6340>
- URL de la base de conocimiento del grupo: <https://it-talent-wiki.vercel.app/docs/intro>
- URL de el vídeo de la DEMO: <https://youtu.be/M8asZArWEAw>
- URL de la presentación: <https://www.canva.com/design/DAGB_43VmDE/MCOxrCoK_99F7QEca96XWA/view?utm_content=DAGB_43VmDE&utm_campaign=designshare&utm_medium=link&utm_source=editor>

Además, es posible que necesite estas credenciales:

- Credenciales herramientas de seguimiento:
  - Usuario: *user*
  - Contraseña: *bluejay*
- Credenciales para usuario candidato de IT Talent:
  - Usuario 1: *TalentCandidate, candidate1234*
  - Usuario 2: *ismaherra, isma1234*
- Credenciales para usuario representante de IT Talent:
  - Usuario 1: *RepresentativeTalent, repres1234*
  - Usuario 2: *antonioR, antonio1234*

Las credenciales que no han sido proporcionadas, o bien son privadas, o bien no existen. Para iniciar sesión en IT Talent, debe crearse una cuenta siguiendo el formulario de registro explicado en el manual.

## <a name="_r5c4sh3vv7v5"></a>**1.2 Changelog**

Los cambios en la aplicación realizados durante el tiempo de esta entrega son los siguientes:

- Nueva funcionalidad en el inicio de sesión para **cambiar de contraseña** en caso de haberla olvidado.
- Cambios en la **visualización** de búsquedas y análisis.
- *Bug fixing*.

# <a name="_xa64yd52esgi"></a>2. Manual de Usuario de candidato
A continuación se describen los pasos necesarios para probar los casos de uso *core*  de IT Talent como usuario **candidato**.
## <a name="_in20z6q0o8kk"></a>**2.1 Registro**

Si es nuevo en IT Talent, deberá crearse una cuenta que se corresponda con el rol de la aplicación que desea utilizar. Para ello, primero acceda a la página de inicio y haga clic en el botón “**Register**”.



Una vez dentro, seleccione el rol que desea utilizar (candidato o representante). En el caso de este manual, seleccionaremos “**Candidate**”.



A continuación, **rellene los campos** del formulario, especialmente aquellos marcados con un asterisco, ya que son obligatorios. Si un campo se introduce incorrectamente, debería aparecer un breve mensaje de error justo debajo del campo introducido. Asegúrese de introducir información real y útil para usted, o de otra forma, no aprovechará las funcionalidades de la aplicación. El número de teléfono debe tener un formato válido (ej.: “*+34 -612123123*”). El correo electrónico ha de ser real o, de lo contrario, la API de validación de correo no permitirá registrar al usuario. *Cabe destacar que la API de validación de correo tiene un **límite de 50 validaciones diarias** y al alcanzar ese límite no se validará el correo.*

Acepte las **condiciones de privacidad** y haga clic en el botón de registro al final del formulario. Si todo ha salido correctamente, debería ver un modal indicando que el proceso puede tardar un tiempo y debería redirigirle al perfil correspondiente a su rol seleccionado. El registro debería funcionar correctamente e iniciar la sesión.
## <a name="_kzpe3bewbwz"></a>**2.2 Inicio de sesión**

Una vez se tiene una cuenta creada en IT Talent, se puede acceder de forma sencilla accediendo a la página de inicio y haciendo clic en el botón “**Login**”.



Ahora debe introducir su **nombre de usuario** previamente establecido para poder identificarle y su **contraseña** para la autenticación. Haga clic en el botón de inicio de sesión al final del formulario y debería redirigirle a su perfil de forma correcta.



**Si ha olvidado su contraseña**, puede hacer clic en el enlace con el texto “*Forgot your password?*” y accederá a un formulario donde se le pedirá un usuario o correo electrónico. Se le enviará por correo la información pertinente para cambiar su contraseña.



Si la sesión lleva demasiado tiempo iniciada, se cerrará automáticamente y un mensaje de error aparecerá en pantalla, redirigiéndole a la pantalla de *Login*.
## <a name="_4n2bgyoj2cq4"></a>**2.3 Cierre de sesión**

Al iniciar sesión podrá ver en el menú lateral accesible mediante el botón desplegable a la izquierda de la página, que aparece un pequeño marco con su información principal de sesión. Ahí puede hacer clic en el botón de ***logout*** y se cerrará la sesión.



Una vez cerrada la sesión la aplicación le debería redirigir a la página principal y debería ver que la sesión está efectivamente terminada.


## <a name="_2pdb1c74rch3"></a>**2.4 Perfil**

Abriendo la barra de navegación en el **botón desplegable** en forma de flecha (a la izquierda de la página), debería ser capaz de acceder al perfil de usuario en la parte inferior del menú lateral. La barra de navegación debería verse tal y como se muestra en la imagen.



Una vez se ha accedido al **perfil**, debería ver una imagen por defecto y unos datos de usuario. Dichos datos deben corresponderse con los introducidos en el momento de crear la cuenta. 

## <a name="_hxl5kb20daal"></a>**2.5 Editar perfil**

Debe aparecer en su perfil un botón de edición “**Update**”.




Una vez accedido a la página de actualización del perfil, debería ver varios campos modificables, así como un campo para introducir un enlace a una imagen. Una vez modificado el perfil, se puede hacer clic en “***Update***” para confirmar los cambios.



También es posible modificar la contraseña del usuario haciendo clic en el botón “***Change Password***”. Debe confirmar su contraseña antigua y luego introducir una nueva para ello. *La URL de la foto de perfil debe acabar en .png o .jpg, como esta: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Linear\_regression.svg/1280px-Linear\_regression.svg.png*

Además, podrá **actualizar su análisis** de Github almacenado en la aplicación para que los representantes puedan ver sus datos más recientes. Opcionalmente, puede introducir un token privado de Github con permisos de lectura. Con el token privado, podrá incluir en su análisis sus datos protegidos y ampliar el alcance del análisis.



## <a name="_i7onr4fxr0eu"></a>**2.6 Developer Info**

Una de las funcionalidades clave de IT Talent es la realización de análisis de usuarios a través de credenciales de Github. Los usuarios **representantes** podrán acceder a una funcionalidad de análisis de datos de usuario que permite analizar a un candidato que haya ofrecido sus datos, incluso si este no está registrado en la aplicación. Los **candidatos** podrán acceder a su información de análisis desde su perfil.

## <a name="_buxoim5qo6mj"></a>**2.7 Mi análisis**

A través de la barra de navegación accesible mediante el botón desplegable a la izquierda de la pantalla, se puede acceder a su perfil. Desde ahí, verá una sección “***Developer Info***”.

Cada vez que un candidato se registra en la aplicación con un usuario de Github, la aplicación genera un análisis de su información pública. La página de *Developer Info* ofrece **numerosa información** acerca del usuario. Se incluyen desde el número de *commits* hasta los lenguajes más utilizados, pasando por los repositorios públicos más importantes. Esta información es la misma que los usuarios representantes pueden ver al analizar a un usuario, solo que si está registrado, podrá aparecer en los resultados de las búsquedas de equipo que realizan los representantes.



## <a name="_b5o1qmc7mc58"></a>**2.8 Work Experience**

Al igual que la información de desarrollador (*Developer Info*), también existe en su perfil una sección al final de la página que muestra su experiencia laboral o “***Work Experience***”.

## <a name="_ls684lvuq3xl"></a>**2.9 Añadir experiencia laboral**

Desde la página del perfil, acceda al apartado de experiencia laboral y haga clic en el botón de “***Create new work experience***”.



Debería poder ver ahora un formulario con varios campos a rellenar. Debe poder seleccionar con un selector de calendario una fecha de inicio y una fecha de fin, que debe ser posterior. Introduzca también el nombre del proyecto y el área y haga clic en “***Create***”.



## <a name="_8hyvulnb6g01"></a>**2.10 Gestionar experiencia laboral**

Una vez creada, debería poder ver en su apartado de experiencia laboral una nueva entrada con los datos introducidos en el formulario.



Haciendo clic en el nombre, podrá ver una página con la información ampliada de su experiencia laboral. En todo momento podrá editar (a través del botón “***Update***”) o borrar la entrada (a través del botón “***Delete***”).



## <a name="_jyjv8kvjijsf"></a>**2.11 Notificaciones**

Si desea ver qué representantes han visitado su análisis, puede acceder a la página de **notificaciones**, donde aparecerán todas las visitas de su análisis registradas. Para acceder puede hacer clic en el icono en forma de sobre en el menú lateral accesible mediante el botón deslizante a la izquierda de la pantalla. Este sobre contendrá además un icono con el número de notificaciones pendientes.



Debería entonces ver una lista de las notificaciones de los representantes que han visitado su perfil ordenadas por fecha y sin repetir. Si ha adquirido el plan *Pro*, podrá ver en las nuevas notificaciones que reciba qué empresa ha sido la que ha visitado su perfil. *Si quiere probar a analizar su perfil, puede iniciar sesión como **representante** (nombre: RepresentativeTalent y contraseña: repres1234), pero por favor no elimine la cuenta ni modifique ninguno de los datos. Para realizar un análisis vaya a la pestaña “**My Analysis**” e inserte el nombre de Github que puso en su cuenta.*
## <a name="_crhjurvx7oss"></a>**2.12 Perfil del representante**

Si tiene el plan *Pro* adquirido (más información en el apartado de suscripciones), podrá hacer clic en un botón “***View profile***” y podrá acceder al perfil del representante que ha visitado su análisis.



En el **perfil del representante** podrá ver datos como el nombre de la empresa o sus datos de contacto.



## <a name="_gs1hhuykdoh2"></a>**2.13 Gestionar notificaciones**

El botón “***Dismiss***” de las notificaciones permite eliminarlas y dejar de visualizarlas en pantalla.



## <a name="_hp26rnyabc1r"></a>**2.14 Suscripción**

En IT Talent, un usuario, ya sea candidato o representante, puede acceder a una serie de **ventajas** distintas en función del plan que decida obtener. Ambos tipos de usuario tienen planes diferentes, cada uno con sus ventajas únicas.

## <a name="_b2sy1mfusuwe"></a>**2.15 Planes del usuario candidato**

El usuario candidato puede acceder a **dos planes** distintos: básico y avanzado.

- **Plan básico**. Contiene todas las funcionalidades básicas de IT Talent, como la gestión de la cuenta, análisis propio, datos de desarrollador, etc.
- **Plan avanzado**. Permite actualizar el perfil más a menudo, acceder a estadísticas globales de la aplicación, entre otros.

## <a name="_qru7c4y6z6g0"></a>**2.16 Selección de plan**

Accede a través de la barra de navegación (a través del botón desplegable de la izquierda de la pantalla) a la página de “**Subscription**”.



Una vez dentro debería poder ver una **página de selección** de plan con los planes correspondientes a su rol. Puede ver las características de cada uno de los planes así como cuál es el plan más popular entre los usuarios en la aplicación.

Haga clic en “***Subscribe***” y podrá acceder a la página de compra. Dentro introduzca sus credenciales de pago y haga clic en “***Purchase***” para cambiar su plan. ***Es muy importante que NO utilice datos reales**, en su lugar utilice las tarjetas de test de Stripe, como por ejemplo el número 4242 4242 4242 4242 (el CVV y fecha pueden ser aleatorios). Si utiliza datos reales, podrán ser vistos desde la página de Stripe, tenga cuidado.*





## <a name="_j9ddwwh8r8uf"></a>**2.17 Tendencias**

Si forma parte del **plan pro** de candidatos, podrá acceder a la página de tendencias, donde se mostrarán estadísticas globales de interés para los candidatos.

## <a name="_5k7ekgwe2v6s"></a>**2.18 Estadísticas**

La página de “***Trends***” accesible a través del menú lateral desplegable, ofrece una vista general sobre las estadísticas de todos los usuarios de la aplicación.

Esta página recopila datos de todos los **análisis** y **búsquedas realizadas por representantes**, de modo que facilita al candidato cierta información sobre cuáles son las tendencias de búsqueda que las empresas y de las tecnologías más comunes entre los otros desarrolladores.



Podrá ver múltiples gráficas mostrando datos visualmente tanto de las tecnologías más utilizadas por los desarrolladores, como de las más solicitadas por los representantes en sus búsquedas de equipo. Podrá mantener el ratón encima de las gráficas para obtener datos numéricos de las estadísticas.



## <a name="_8wh8ynmxiz3o"></a>**2.19 Información**

IT Talent incluye páginas sencillas que todos los usuarios deben poder ver en cualquier momento sin problema.

Para acceder, despliegue la barra de navegación con el botón a la izquierda de la pantalla y verá un enlace a la página de “***Information***”.



Dentro de la página, debe poder verse un resumen de la información de soporte. Además, incluye una pequeña sección con preguntas frecuentes.




# <a name="_kq0ahi7y3kqd"></a>3. Manual de Usuario de representantes
A continuación se describen los pasos necesarios para probar los casos de uso *core*  de IT Talent como usuario **representante**.
## <a name="_9x34mmv5cl0l"></a>**3.1 Registro**

Si es nuevo en IT Talent, deberá crearse una cuenta que se corresponda con el rol de la aplicación que desea utilizar. Para ello, primero acceda a la página de inicio y haga clic en el botón “**Register**”.



Una vez dentro, seleccione el rol que desea utilizar (candidato o representante). En el caso de este manual, seleccionaremos “**Representative**”.



A continuación, **rellene los campos** del formulario, especialmente aquellos marcados con un asterisco, ya que son obligatorios. Si un campo se introduce incorrectamente, debería aparecer un breve mensaje de error justo debajo del campo introducido. Asegúrese de introducir información real y útil para usted, o de otra forma, no aprovechará las funcionalidades de la aplicación. El número de teléfono debe tener un formato válido (ej.: “*+34 -612123123*”). El correo electrónico ha de ser real o, de lo contrario, la API de validación de correo no permitirá registrar al usuario. *Cabe destacar que la API de validación de correo tiene un **límite de 50 validaciones diarias** y al alcanzar ese límite no se validará el correo.*

Acepte las **condiciones de privacidad** y haga clic en el botón de registro al final del formulario. Si todo ha salido correctamente, debería redirigirle al perfil correspondiente a su rol seleccionado. El registro debería funcionar correctamente e iniciar la sesión. 

Una vez registrado, **no podrá utilizar la aplicación hasta que elija uno de los planes** de suscripción. Haga clic en “***Subscribe***”, introduzca sus credenciales de pago (***NO utilice datos reales**, en su lugar puede usar el número “4242 4242 4242 4242”*) y haga clic en “***Purchase***”. Más información con respecto a las suscripciones en el apartado de suscripciones de este manual.
## <a name="_abynzfa48dyu"></a>**3.2 Inicio de sesión**

Una vez se tiene una cuenta creada en IT Talent, se puede acceder de forma sencilla accediendo a la página de inicio y haciendo clic en el botón “**Login**”.



Ahora debe introducir su **nombre de usuario** previamente establecido para poder identificarle y su **contraseña** para la autenticación. Haga clic en el botón de inicio de sesión al final del formulario y debería redirigirle a su perfil de forma correcta.



**Si ha olvidado su contraseña**, puede hacer clic en el enlace con el texto “*Forgot your password?*” y accederá a un formulario donde se le pedirá un usuario o correo electrónico. Se le enviará por correo la información pertinente para cambiar su contraseña.



Si la sesión lleva demasiado tiempo iniciada, se cerrará automáticamente y un mensaje aparecerá en pantalla.
## <a name="_hmuwl7mmtsck"></a>**3.3 Cierre de sesión**

Al iniciar sesión podrá ver en el menú lateral accesible mediante el botón desplegable a la izquierda de la página, que aparece un pequeño marco con su información principal de sesión. Ahí puede hacer clic en el botón de ***logout*** y se cerrará las sesión.



Una vez cerrada la sesión la aplicación le debería redirigir a la página principal y debería ver que la sesión está efectivamente terminada.


## <a name="_cd2j88l2lmzt"></a>**3.4 Perfil**

Abriendo la barra de navegación en el **botón desplegable** en forma de flecha (a la izquierda de la página), debería ser capaz de acceder al perfil de usuario. La barra de navegación debería verse tal y como se muestra en la imagen.



Una vez se ha accedido al **perfil**, debería ver una *imagen por defecto* y unos datos de usuario. Dichos datos deben corresponder con los introducidos en el momento de crear la cuenta.

## <a name="_mpixdlol8mhz"></a>**3.5 Editar perfil**

Debe aparecer en su perfil un botón de edición “**Update**”.




Una vez accedido a la página de actualización del perfil, debería ver varios campos modificables, así como un campo para introducir un enlace a una imagen. Una vez modificado el perfil, se puede hacer clic en “***Update***” para confirmar los cambios.



También es posible modificar la contraseña del usuario haciendo clic en el botón “***Change Password***”. Debe confirmar su contraseña antigua y luego introducir una nueva para ello. *La URL de la foto de perfil debe acabar en .png o .jpg, como esta: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Linear\_regression.svg/1280px-Linear\_regression.svg.png*
## <a name="_owh6j2sx1klg"></a>**3.6 Últimas acciones**

El perfil tiene además un resumen del historial de búsquedas y de análisis. Puede hacer clic en “***See All***” para acceder al historial completo o hacer **clic sobre una de las entradas** para acceder a la página concreta de ese análisis o búsqueda.



## <a name="_e035v47k8h4l"></a>**3.7 Análisis**

Una de las funcionalidades clave de IT Talent es la realización de análisis de usuarios a través de credenciales de Github. Los usuarios **representantes** podrán acceder a una funcionalidad de análisis de datos de usuario que permite analizar a un candidato que haya ofrecido sus datos, incluso si este no está registrado en la aplicación. Los **candidatos** podrán acceder a una ventana de análisis personal desde su perfil.

## <a name="_5v7tkuv75y24"></a>**3.8 Análisis**

A través de la barra de navegación accesible mediante el botón desplegable a la izquierda de la pantalla, se puede acceder a la sección “**My Analysis**”.

Verá una página con un pequeño **formulario**. Introduzca el nombre de usuario de la cuenta de Github de aquel desarrollador a quien desee analizar. Si fuera necesario, de forma consensuada y externa a la aplicación, obtenga el ***token*** de Github de este desarrollador para poder analizar sus datos privados. El *token* debería tener, al menos, los permisos de lectura de Github para poder obtener todos los datos tanto públicos como privados. Es importante saber que **cada análisis se almacena** en la base de datos de la aplicación (a menos que ya existiera).



La página ofrece **numerosa información** acerca del usuario de Github, *aunque en un futuro es posible que permita mostrar más datos*. Se incluyen desde el número de *commits* hasta los lenguajes utilizados. Si así lo desea, puede **añadir a favoritos** dicho análisis para visualizarlos más fácilmente en su historial.




Podrá ver varias secciones dentro del análisis. La sección “***Top recent Repositories***” muestra los repositorios recientes más populares de dicho usuario. Por otro lado, la sección “***Experience***” muestra datos sobre las tecnologías *y trabajos* de dicho perfil.
## <a name="_5hoi22qm4v1c"></a>**3.9 Historial de análisis**

Para acceder a su historial de análisis, vaya a  la barra de navegación (accesible a través del botón desplegable de la izquierda de la pantalla) y haga clic en “**My Analysis**”.

Una vez dentro, haga clic en “**Analysis List**” (también puede acceder al historial completo desde su perfil).



Dentro de la lista de análisis podrá ver una **lista de todos sus análisis** con el nombre del usuario analizado, la fecha, así como unos botones de **borrar** o **añadir a favoritos**. Si hace clic en cualquiera de los análisis que aparecen en la lista, podrá acceder directamente a la información correspondiente sin necesidad de volver a analizar al usuario.

Puede filtrar las entradas del historial según si están o no marcadas como favoritos. Para ello haga clic en el desplegable “***Choose a filter***” y seleccione uno de los tres filtros disponibles.



Para borrar una entrada del historial, simplemente haga clic en el icono de un **cubo de basura** al lado de la entrada que desea eliminar. Debería aparecer una ventana pidiendo confirmación y, una vez aceptada, la eliminación de la entrada debería llevarse a cabo. Esto **no eliminará el análisis** de la base de datos, sino que eliminará el historial en su cuenta.

Para permitir que el usuario pueda cancelar la acción de añadir a favoritos sin problema, la página no debería actualizarse automáticamente cuando se hace clic sobre el botón de añadir a favoritos.

## <a name="_l9w7j6m6atp6"></a>**3.10 Búsqueda**

Una de las funcionalidades más interesantes de IT Talent es la **búsqueda**. Permite a los usuarios representantes seleccionar requisitos y obtener un equipo completo de los candidatos con mejor compatibilidad.
## <a name="_shznbqkx5lnf"></a>**3.11 Realizar una búsqueda**

Para acceder a la página de búsqueda, haga clic en “***Team Search***” en el menú lateral accesible a la izquierda de la página.



Una vez en la página, puede hacer clic en “***New Search***” para comenzar la búsqueda. Una vez en el formulario de búsqueda, verá arriba un desplegable que le permitirá escoger cuántos usuarios se desea buscar para su equipo. *En un futuro, se ampliará el número de usuarios a buscar y, dependiendo del plan elegido, deberá poder elegir un número de usuarios diferente.*



Por cada uno de los miembros del equipo puede elegir varios lenguajes, tecnologías y campos de trabajo, además de un número mínimo de años de experiencia. Una vez haya elegido los miembros que está buscando, puede acceder a la búsqueda mediante el botón “***Search***”.

Una vez terminada la búsqueda, verá que aparecen varios **desplegables**. Cada uno de ellos se corresponde con un resultado de la búsqueda, es decir, un miembro del equipo que encaje aproximadamente con los filtros establecidos. *Habiendo pocos datos, es normal que los resultados no sean siempre satisfactorios.*

Si abre uno de los desplegables, podrá ver los filtros utilizados, así como el **nombre** de los posibles candidatos y **otros datos**, así como el enlace a su **análisis** personal.



## <a name="_yke4ae65mniq"></a>**3.12 Historial de búsquedas**

Cuando realice alguna búsqueda, es posible que le interese revisitarla en algún momento. Es por ello que existe una sección de historial de búsquedas de equipo. Para acceder, dentro de la ventana de búsqueda (o desde su perfil) haga clic en “***Search List***”.



Al igual que en el historial de análisis, podrá **eliminar** entradas del historial, así como marcarlas como **favoritos** y revisitarlas.



## <a name="_hzqpu57csbgk"></a>**3.13 Suscripción**

En IT Talent, un usuario, ya sea candidato o representante, puede acceder a una serie de **ventajas** distintas en función del plan que decida obtener. Ambos tipos de usuario tienen planes diferentes, cada uno con sus ventajas únicas.

## <a name="_bi7opssz5m8x"></a>**3.14 Planes del usuario representante**

El usuario representante puede acceder a **tres planes** distintos: básico, avanzado y personalizado.

- **Plan básico**. Contiene todas las funcionalidades básicas de IT Talent, como la gestión de la cuenta, análisis de candidatos, búsqueda, historial, etc.
- **Plan avanzado**. Permite realizar más peticiones de análisis y búsqueda, realizar búsquedas de equipos más grandes y más.
- **Plan personalizado**. Permite contactar con el equipo de IT Talent para acordar un plan que se ajuste a sus necesidades.

## <a name="_s247ymvr7iqy"></a>**3.15 Selección de plan**

Accede a través de la barra de navegación (a través del botón desplegable de la izquierda de la pantalla) a la página de “**Subscription**”.



Una vez dentro debería poder ver una **página de selección** de plan con los planes correspondientes a su rol. Puede ver las características de cada uno de los planes así como cuál es el plan más popular entre los usuarios en la aplicación.

Haga clic en “***Subscribe***” y podrá acceder a la página de compra. Dentro introduzca sus credenciales de pago y haga clic en “***Purchase***” para cambiar su plan. ***Es muy importante que NO utilice datos reales**, en su lugar utilice las tarjetas de test de Stripe, como por ejemplo el número 4242 4242 4242 4242 (el CVV y fecha pueden ser aleatorios). Si utiliza datos reales, podrán ser vistos desde la página de Stripe, tenga cuidado.*



## <a name="_bl4x0ogtfdgm"></a>**3.16 Información**

IT Talent incluye páginas sencillas que todos los usuarios deben poder ver en cualquier momento sin problema.

Para acceder, despliegue la barra de navegación con el botón a la izquierda de la pantalla y verá un enlace a la página de “***Information***”.



Dentro de la página, debe poder verse un resumen de la información de soporte. Además, incluye una pequeña sección con preguntas frecuentes.








