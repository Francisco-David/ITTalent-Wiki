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

<a name="_pg8quxt9d0oa"></a> Sevilla, Mayo 2024

### Entregable: WPL

### Grupo 01 (Mañana) - IT Talent
###  <a name="_z05qqri5g3tk"></a>Control de Versiones


|**Versión**|**Fecha**|**Autor**|**Cambios**|
| :- | :- | :- | :- |
|v1.0|06/02/2024|<p>Rubén Casal Ferrero</p><p>Carlos Zarzuela Reina</p>|Documento inicial|
|||||

## <a name="_lj1qgmxpo5ez"></a>**Resumen del documento**
El objetivo de este documento es dejar reflejado los requisitos del sistema, tanto de forma general como específica, también se documentarán  los casos de uso y un diagrama UML del dominio.  Los temas a tratar serán los siguientes:

- Requisitos generales del sistema
- Requisitos funcionales
- Requisitos de información
- Reglas de negocio
- Requisitos de integración
- Casos de uso
- Diagrama UML del dominio del problema





#
#
# <a name="_ug1jcmvg7r12"></a><a name="_75wikx1f1szv"></a><a name="_9j8c07fxd5sy"></a>Índice



[**Control de Versiones**	](#_z05qqri5g3tk)**3****

[Resumen del documento	](#_lj1qgmxpo5ez)3

[**Índice**	](#_9j8c07fxd5sy)**4**

[**1. Requisitos**	](#_3znysh7)**5**

[1.1. Requisitos Generales	](#_2et92p0)5

[1.2. Requisitos Específicos	](#_5wvgiemkrjgo)7

[1.2.1. Requisitos Funcionales	](#_6f42jauyw77b)7

[1.2.2. Requisitos de Información	](#_tvrd36euq3kn)13

[1.2.3. Reglas de Negocio	](#_tibk3eu0cz2j)16

[1.2.4. Requisitos No Funcionales	](#_2or0h8bc2vmr)17

[1.2.5. Requisitos de Integración	](#_57ulfk1s0416)18

[1.3. Casos de uso	](#_56mi8ss4v59)19

[**Diagrama UML del dominio del problema**	](#_tm5wu5r8ewcq)**24**













1. # <a name="_3znysh7"></a> Requisitos 

En esta parte del documento se enumeran los requisitos del sistema, todos cuentan con un código para facilitar su identificación que sigue el siguiente esquema.

- RG : Requisito General
- RF: Requisito Funcional
- RI: Requisito de Información
- RN: Regla de Negocio
- RNF: Requisito No Funcional
- RINT: Requisito de Integración
  1. ## <a name="_2et92p0"></a>**Requisitos Generales**


RG1. Gestión usuarios: El sistema permitirá el **registro** e **inicio de sesión** de los usuarios candidatos, si estos proporcionan i**nformación básica** (representantes y candidatos) . Habrá 3 tipos de usuarios: **representantes** (analistas o personal de recursos humanos de las empresas), **candidatos** (personas que quieren conseguir un trabajo) y **administradores.**

RG2. Plan de suscripciones: El sistema contará con un **plan de suscripciones** tanto para usuarios representantes como para usuarios candidatos, que permitirá acceder a **funcionalidades** y **mejoras** de las mismas.


RG3. Búsqueda y filtrado de candidatos: El sistema permitirá la **búsqueda** avanzada y **filtrado** para que los representantes encuentren candidatos basándose en criterios específicos. Además podrán **guardar los resultados** para analizarlos posteriormente y consultar su historial de búsqueda.

RG4. Recomendación candidatos: El sistema implementará algoritmos de **recomendación** para sugerir candidatos que cumplan con los **requisitos especificados** de  los representantes.

RG5. Información relevante: El sistema **almacenará** la información relevante de las siguientes entidades (**candidatos, representantes, experiencia profesional de candidatos y recomendaciones a representantes**).

RG6.  Usabilidad y diseño: El sistema debe contar con una interfaz **intuitiva** y **adaptable** a todos los dispositivos (ordenador, móviles y tablets). 

RG7. Internacionalización: El sistema debe soportar como mínimo **español** e **inglés**.

RG8. Soporte: El sistema contará con una sección de **soporte** y de **preguntas frecuentes**.
































1. ## <a name="_5wvgiemkrjgo"></a>**Requisitos Específicos**
### <a name="_6f42jauyw77b"></a>1.2.1. Requisitos Funcionales

**Requisitos Usuarios Candidatos**


**Registro y Login**

RF1. Registro de usuarios candidatos: Los usuarios que utilicen el sistema como candidatos, accediendo al apartado de **“Registrarse como candidato”** y seguidamente introduciendo los datos de su email, teléfono, nombre, apellido 1 y apellido 2, usuario de github y la contraseña, el usuario quedará registrado en el sistema. El usuario anteriormente debe aceptar los términos y condiciones.

RF2. Inicio de sesión candidato: Si el usuario ya ha sido registrado en el sistema, podrá iniciar sesión en el apartado de **“Inicia sesión como candidato”** y seguidamente introduciendo su nombre de usuario y contraseña.

**Añadir datos perfil candidato**

RF3. Añadir CV: Una vez iniciada sesión en el sistema, el candidato podrá acceder a su perfil, y en el botón de **“Añadir CV”**, podrá subir al sistema un pdf de su currículum para complementar la información de su perfil.

RF4. Información profesional adicional: El candidato en el apartado de su perfil, podrá añadir información de su experiencia profesional, para ello en el apartado de perfil usuario, habrá un apartado llamado **“Añadir Experiencia Profesional”**, seguidamente el candidato deberá rellenar un formulario con los siguientes campos:

- Fecha de Inicio
- Fecha Final o Hasta el día de hoy
- Nombre empresa o proyecto
- Área profesional, el cual será un dropdown con los siguientes campos (Aplicaciones Web,Aplicaciones Móviles,Sistemas Operativos,Ciencia de Datos,Inteligencia Artificial, Desarrollo de juegos, Seguridad, Backend, Frontend, DevOps, Otro )

RF5. Añadir API KEY GitHub: Los candidatos en el apartado de perfil de usuario, en el campo **“Añadir key de GitHub”** podrán proporcionar la api key de github privada, para el sistema también contabilice la información de sus repositorios privados.

RF6. Foto de perfil: Los usuario candidatos en el apartado de su perfil de usuario, podrán añadir una **foto de perfil**.

RF7. Actualizar preferencias: Los usuario candidatos en el apartado de su perfil podrán actualizar las preferencias en cuanto a la localización de los trabajo ofertas. Las posibilidades serán las siguientes.

- Estilo de vida: Teletrabajo/Presencial/Indiferente

- Ubicación del trabajo: Indiferente/Provincia


**Plan de suscripción usuario candidato**

RF8. Plan de suscripción: Los usuarios  candidatos  al acceder a su perfil e irse a la zona de **“Mi plan”** podrán optar por mejorar su plan actual al avanzado, para **mejorar** y **desbloquear** funcionalidades adicionales de la aplicación, especificadas en los requisitos **RF9**, **RF10 y RN12**  . Para los usuarios candidatos únicamente habrá dos planes, el **plan básico** que es gratuito y el **avanzado** con un precio de 10€.

**Información relevante para candidatos**

RF9. Notificaciones candidatos: A los usuarios que utilicen el sistema como candidatos, se les notificará cuando el sistema los **recomiende** para alguna búsqueda en el proceso de selección. 

- Si el usuario tiene activo el **plan básico** se le mostrará el número de **empresas** interesadas en su perfil.  (Ejemplo: 2 empresas han visualizado tu perfil)

- Si el usuario tiene activo el **plan avanzado** se le mostrará el nombre de la empresa y permitirá acceder a sus datos de contacto. (Ejemplo: Fujitsu ha visualizado tu perfil)


RF10.  Información Tendencias (Plan Avanzado): Los usuario candidatos podrán acceder a un apartado donde puedan visualizar información sobre las **tendencias** de los **requisitos exigidos** por los representantes, la información será la siguiente:

- Top 10 tecnologías/lenguajes de programación (junto a la cantidad de veces que han sido exigidos).

- Top 10 ubicaciones exigidas

- Número Teletrabajo vs Número Presencial

- Top 5 especialidades (junto a la cantidad de veces que han sido exigidas)

RF11.  Actualización análisis usuario: Los usuarios una vez registrados, accediendo a su perfil podrán actualizar el análisis de sus datos según la información del usuario definida pulsando en el botón **“Actualizar Datos”**.

RF12.  Visualización análisis usuario: Los usuarios candidatos, en el apartado de **“Mi análisis”** podrá visualizar el análisis que el sistema tiene almacenado de dicho candidato.

**Soporte**

RF13. Soporte candidatos: El sistema contará con una parte de **soporte**, el cual se ofrecerá un **email de contacto**, y un listado de las **preguntas frecuentes** con sus respuestas para ayudar a los usuarios a resolver sus problemas.


**Requisitos Usuarios Representantes**

**Registro y Login**

RF14. Registro de usuarios representantes: Los usuarios que utilicen el sistema como representantes, accediendo al apartado de **“Registrarse como representante”**  y seguidamente introduciendo los datos de su email empresarial, nombre de usuario, contraseña y nombre de la sociedad corporativa o proyecto. el usuario quedará registrado en el sistema.  El usuario posteriormente debe aceptar los términos y condiciones

RF15. Inicio de sesión representante: Si el usuario ya ha sido registrado en el sistema, podrá iniciar sesión en el apartado de **“Inicia sesión como representante”** y seguidamente introduciendo su nombre de usuario y contraseña.




**Añadir datos perfil representante**

RF16. Perfil representante: En el apartado del perfil del representante, éste podrá añadir mediante un cuadro de texto **información descriptiva** sobre su sociedad corporativa o proyecto para que los candidatos tengan un mejor entendimiento sobre el representante.

RF17. Foto de perfil: El representante en su perfil de usuario podrá añadir una **imagen** de su sociedad corporativa o proyecto.

**Plan de suscripción**

RF18. Plan de suscripción representantes: Los usuarios representantes con 3 tipos de planes, **plan básico**, **plan avanzado** y **plan personalizado**, Cada plan personalizado representará un cambio en las funcionalidades de la aplicación, el cual será especificado en los requisitos .

**Búsqueda de candidatos**

RF19. Búsqueda de candidatos:  Los representantes podrán realizar una búsqueda de**  candidatos en la ventana “Búsqueda”. Al acceder a esta vista, visualizamos un formulario en el que podremos añadir de 1 a 5 candidatos. Podremos configurar el número de candidatos en todo momento. Para cada candidato añadido deberemos modificar los siguientes campos:

- Especialidad

- Lenguajes/Tecnologías

- Años de experiencia

- Estilo de vida

- Ubicación del trabajo 

RF20. Recomendación candidatos: La recomendación de los candidatos será llevada a cabo por un algoritmo que se asegurará de que la mayoría de los **requisitos exigidos**  por el representante se cumplen.

RF21. Visualización recomendaciones: Para mostrar las recomendaciones al representante se le mostrará un **listado de los candidatos propuestos para cada miembro candidato que se está buscando (entre 1 y 5)**, con una información resumida de cada uno **(foto de perfil, nombre y apellidos, años de experiencia y especialidad)**.


RF22. Recomendación no completada con éxito: Si la recomendación mostrada al representante **no cumple con el porcentaje de compatibilidad estipulado** en la **RN10**, el **intento de búsqueda será cancelado** mostrando un aviso en el que se detalla que se **recomienda hacer búsquedas menos restrictivas**.

RF23. Visualización de análisis/detalles de candidatos recomendados:  tras hacer un análisis o en la página de visualización de búsqueda de candidatos, al  pulsar sobre uno de los **candidatos propuestos** de la recomendación, visualizaremos los detalles de dicho perfil:

- Foto de perfil
- Nombre y Apellidos
- Email
- Nombre de usuario de Github
- Estilo de vida

Estos datos deberían ser opcionales, porque desde github para usuarios que no son candidatos no se puede sacar esta información
- Ubicación del trabajo
- Top 5 Tecnologías/Lenguajes de programación más usados (Número de repositorios en los que este usuario ha contribuido y en el que se utiliza dicha Tecnología/Lenguaje)
- Top 5 repositorios en los que ha contribuido el usuario (respecto al número de commits que realiza el candidato en dichos repositorios, más commits = mejor repositorio)
- Número de contribuciones en todos los repositorios (commits)
- Número de pull requests mergeadas por el usuario
- Número de issues cerradas asignadas al usuario

RF24. Guardados de recomendaciones: Una vez entregada la recomendación, el representante podrá decir si **guardar** o no la **recomendación** como favorita.

RF25. Listado de recomendaciones: Los representantes en el apartado de la página principal **“Mis recomendaciones”**, se mostrará un listado de las recomendaciones anteriores ofrecidas por el sistema. También podrá acceder al apartado favoritos en el que encontrará las recomendaciones guardadas como favoritas.

RF26. Detalles recomendación anterior: En el listado de las recomendaciones anteriores del apartado de **“Mis recomendaciones”**, el representante podrá pulsar en uno de ellos, para visualizar  información detallada, como se le mostró por primera vez, conteniendo la siguiente información:

- Listado de los candidatos propuesto, con una información resumida de cada uno.

RF27. Eliminar recomendación anterior: En el listado de las recomendaciones anteriores del apartado de **“Mis recomendaciones”**, el representante podrá pulsar en una de las recomendaciones y pulsando el botón “Eliminar recomendación”, esta recomendación no volverá a ser mostrada al representante ni almacenada en el apartado de “Mis recomendaciones”.

**Visualización Información candidatos**

RF28. Análisis de perfiles:  Los representantes podrán realizar un análisis de**  un **perfil.** Para ello deberá introducir los datos con los que se realizará el análisis:

- Nombre completo

- Usuario de github

- Token opcional (opcional)

Nota: la visualización del análisis queda recogida en en el RF23

RF29. Análisis favoritos: El representante una vez realizado un análisis de un candidato concreto y mostrada su información, si este lo desea podrá añadir a favoritos este análisis del candidato.

RF30. Listado análisis anteriores: El representante en la sección de “Mis análisis”, podrá ver un listado de todos los análisis anteriores realizados, así como sus análisis favoritos.

RF31. Eliminar análisis anterior: El representante podrá **eliminar** un análisis del apartado de **“Mis análisis”** si ya no le resulta conveniente almacenarlo.
### <a name="_tvrd36euq3kn"></a>1.2.2. Requisitos de Información

RI1.  Perfil candidato: El sistema deberá almacenar la siguiente información sobre el perfil del candidato. 

- Foto de perfil

- Nombre

- Apellido 1

- Apellido 2

- Nombre de usuario

- email

- Usuario de GitHub

- Token

- Experiencias profesionales

- Notificaciones de visualización

- Análisis del candidato

RI2.  Experiencia profesional candidato: El sistema deberá almacenar la siguiente información sobre la experiencia profesional de los candidatos:

- Fecha de Inicio

- Fecha Final o Hasta el día de hoy

- Nombre empresa o proyecto

- Área profesional, el cual será un dropdown con los siguientes campos (Aplicaciones Web, Aplicaciones Móviles, Sistemas Operativos, Ciencia de Datos,Inteligencia Artificial, Desarrollo de juegos, Seguridad, Backend, Frontend, DevOps )

RI3.  Notificación de visualización: El sistema deberá almacenar la siguiente información sobre las notificaciones de visualización.

- Fecha de notificación

- Representante que visualiza el perfil

RI4.  Análisis del candidato: El sistema deberá almacenar la siguiente información sobre los análisis del candidato. 

- Usuario de GitHub

- Token

- Estilo de vida

- Ubicación del trabajo

- Top 5 Tecnologías/Lenguajes de programación más usados (Número de repositorios en los que este usuario ha contribuido y en el que se utiliza dicha Tecnología/Lenguaje)

- Top 5 repositorios en los que ha contribuido el usuario (respecto al número de commits que realiza el candidato en dichos repositorios, más commits = mejor repositorio)

- Número de contribuciones en todos los repositorios (commits)

- Número de pull requests mergeadas por el usuario

- Número de issues cerradas asignadas al usuario

RI5. Perfil representante: El sistema deberá almacenar la siguiente información sobre el perfil de los representantes:

- Nombre de usuario
- email

- teléfono

- Dirección de empresa

- Nombre de la sociedad corporativa o proyecto

- Foto de perfil

- Información descriptiva de la sociedad corporativa o proyecto

- Historial de análisis de candidatos

- Historial de cuadros de mandos de búsquedas

RI6. Cuadros de mando de búsqueda: El sistema deberá almacenar la siguiente información sobre los cuadros de mando utilizados por los representantes:

- ` `Número de personas a contratar

- Candidatos en búsqueda

RI7. Candidato en búsqueda: El sistema deberá almacenar la siguiente información sobre los candidatos en búsqueda utilizados por las búsqueda:

- Especialidad (Área profesional)

- Lenguajes/Tecnologías

- Años de experiencia

- Estilo de vida

- Ubicación del trabajo 

¿qué es esto exactamente?
- Análisis de los perfiles candidatos

RI8. Herramienta: El sistema deberá almacenar la siguiente información sobre las herramientas utilizadas por los candidatos y representantes:

- Nombre

- Tipo de herramienta
### <a name="_tibk3eu0cz2j"></a>1.2.3. Reglas de Negocio

**Registro y Autenticación**

¿vista extra que ponga "Te hemos enviado un correo para que nos confirmes la cuenta"?

Si la pones dejalo para el final
RN1. Email válido:Todos los usuarios deben registrarse con un **email válido**, que será verificado mediante un enlace de confirmación.

RN2. Contraseñas seguras:Las contraseñas deben cumplir con criterios de **seguridad mínimos:**

- Debe incluir letras y números.
- Debe combinar letras mayúsculas y minúsculas.
- La contraseña debe incluir caracteres especiales.
- La longitud de la contraseña debe ser igual o mayor a 8 caracteres.

vistas que indiquen los fallos al poner contraseñas

Una vista como tal no seria la misma vista con los fallos pero no es necesario que lo indiques como tal en los mockups. Si lo haces debe ser de lo ultimo que hagas
- No debe tener espacios en blanco.

RN3. Autenticación necesaria: Los usuarios no pueden acceder a ninguna funcionalidad del sistema sin completar el **proceso de autenticación**.

RN4. Roles definidos: Los usuarios registrados como representantes no pueden acceder a la funcionalidades de candidatos y viceversa

**Gestión de Perfiles**

RN5. Información básica candidatos: Los usuarios registrados como candidatos deben proporcionar la **información básica**  (nombre, apellido 1, apellido 2, nombre de usuario, email, usuario de GitHub) para completar su registro.

RN6. Información básica representantes: Los usuarios registrados como representantes  deben proporcionar la **información básica** (nombre de usuario, email, teléfono, dirección de empresa, nombre de la sociedad corporativa o proyecto, información descriptiva de la sociedad corporativa o proyecto)

RN7. Foto de perfil: Los usuarios del sistema deben poder actualizar su **foto de perfil** en cualquier momento, pero esta debe ser adecuada y no contener material explícito.

**Información y recomendación candidatos**

RN8. Información pública/privada: Solo se recopilará información pública disponible en GitHub, a menos de que el candidato proporcione su **API KEY de GitHub**

RN9. Recomendación candidatos: Las recomendaciones de los candidatos suplirán todos los requisitos estipulados o un porcentaje mayor al **60%**.

RN10. Algoritmos de recomendación: En el caso de no se encuentre ningún candidato o grupo de candidatos que cumpla al 100% con los requisitos, se escogerá la recomendación con un **mayor porcentaje** de requisitos cumplidos. En el caso de que no se cumpla la RN9 la búsqueda será cancelada y notificada al representante

**Seguridad y privacidad**

RN11.Datos protegidos: La información de los perfiles de los candidatos será almacenada con los convenientes **mecanismos de protección.**

RN11. Ley de protección de datos: La información de los candidatos será tratada de acuerdo a las leyes de **protección de datos** actuales.


` `**Actualización de Datos**

RN12. Actualización : Los datos recabados de GitHub de los candidatos podrán ser actualizados **cada 30 días de forma manual por los usuarios.**

**Plan básico candidato**: Los candidatos podrán actualizar sus datos cada **30 días**.

**Plan Avanzado candidato**: Los candidatos podrán actualizar sus datos **3 veces** cada **30 días.**
### <a name="_2or0h8bc2vmr"></a>1.2.4. Requisitos No Funcionales

**Rendimiento y Escalabilidad**

#### <a name="_gwongnnvuqpj"></a>RNF1. Rendimiento recomendaciones: Las recomendaciones para la búsqueda de candidatos no deberá superar un tiempo que congestione el rendimiento del sistema.

RNF2. Capacidad Usuarios: El sistema deberá soportar un mínimo de **200 representantes y 500 candidatos simultáneamente**.

RNF3. Recomendaciones simultáneas: El sistema deberá soportar un mínimo de **15 recomendaciones** simultáneas.

RNF4. Disponibilidad: El sistema deberá estar **siempre** apto para su uso.

**Usabilidad**

RNF5. Diseño: El sistema debe ser capaz de adaptarse a **cualquier dispositivo** (móvil, ordenador, tablet).

RNF6. Interfaz intuitiva: La interfaz de usuario del sistema debe ser **intuitiva**.

RNF7. Pasos para crear control de mando de búsqueda: Los pasos a seguir para que un representante cree un **control de mando de búsqueda** y reciba una **recomendación**, no deben ser superiores a **3**.


**Internacionalización**

RNF8.Internacionalización: El sistema deberá soportar **internacionalización (i18n)** y como mínimo, deben estar presentes el **español** y el **inglés**.


### <a name="_57ulfk1s0416"></a>1.2.5. Requisitos de Integración

RINT1. Integración GitHub: El sistema debe permitir una autenticación segura con la **API de GitHub**, pudiendo acceder a la información de los candidatos para extraer los datos relevantes.













1. ## <a name="_56mi8ss4v59"></a>**Casos de uso**

|<p>**Identificador de**</p><p>**Caso de Uso**</p>|<p>
falta el paso en el que el representante debe seleccionar el plan de subscripción</p><p>**CU\_01:**</p>|||
| :- | :- | :- | :- |
|**Nombre**|Registrarse como representante|||
|**Descripción**|Este caso de uso permite al representante crear una cuenta en el sistema|||
|**Actores**|Representante|||
|**Secuencia normal**||||
|**Actor**|**Software**|||
|1\. El **representante sin registrar accede a** la opción **“Registrarse como representante”**.||||
||2\. El **sistema pide al representante los siguientes datos:** nombre de usuario, nombre de empresa, email corporativo, teléfono, dirección corporativa, descripción de la organización  y contraseña.|||
|3\. El **representante ingresa los datos** solicitados.||||
||4\. El **sistema valida la información** ingresada|||
||5\. El **sistema muestra al usuario los términos y condiciones de privacidad** y le pregunta si acepta dichos términos y condiciones.|||
|6\. El **representante acepta los términos y condiciones de privacidad.**||||
||7\. El **sistema almacena los datos** proporcionados y muestra un mensaje de confirmación al representante y dirige al representante a la vista del plan de precios.|||
||8\. El caso de uso termina.|||
|**Excepciones**|**Software**|||
|4\. Error al ingresar los datos.|<p>a. Muestra un mensaje de error mostrando qué datos son incorrectos.</p><p>b. Regresar al paso 3.</p>|||
|7\. El representante no acepta los términos y condiciones de privacidad.|<p>a. Se informa al representante que **si no acepta las condiciones su cuenta no será creada.**</p><p>b. Se vuelve al paso 5 del caso de uso</p>|||
|**CU relacionados**|**CU\_02**|||
|**Precondición**|El **representante no está registrado** en el sistema.|||
|**Post condición**|Nuevo **representante registrado en la base de datos** del sistema.|||
#




|<p><a name="_ntcc76luzamw"></a>**Identificador de**</p><p>**Caso de Uso**</p>|**CU\_02:**|||
| :- | :- | :- | :- |
|**Nombre**|Registrarse como candidato|||
|**Descripción**|Este caso de uso permite a un profesional registrarse en el sistema como candidato.|||
|**Actores**|Candidato|||
|**Secuencia normal**||||
|**Actor**|**Software**|||
|1\. El **candidato sin registrar accede a** la opción **“Registrarse como candidato”.**||||
||<p>el sistema le pide al candidato los apellidos, pero luego lo que guarda es el nombre completo?</p><p>2\. El **sistema pide al candidato los siguientes datos:** nombre de usuario, nombre, apellido 1, apellido 2, email, teléfono, usuario de github y contraseña.</p>|||
|3\. El **candidato ingresa los datos** solicitados.||||
||5\. El **sistema valida la información** ingresada|||
||6\. El **sistema muestra al usuario los términos y condiciones de privacidad** y le pregunta si acepta dichos términos y condiciones.|||
|7\. El **candidato acepta los términos y condiciones de privacidad.**||||
||8\. El **sistema almacena los datos proporcionados** y muestra un mensaje de confirmación al candidato .|||
||9\. El caso de uso termina.|||
|**Excepciones**|**Software**|||
|4\. Error al ingresar los datos.|<p>a. Muestra un mensaje de error mostrando qué datos son incorrectos.</p><p>b. Regresar al paso 3.</p>|||
|7\. El usuario no acepta los términos y condiciones de privacidad.|<p>a. Se informa al usuario que **si no acepta las condiciones su cuenta no será creada.**</p><p>b. Se vuelve al paso 6 del caso de uso</p>|||
|**CU relacionados**|**CU\_01:**|||
|**Precondición**|El **candidato no está registrado** en el sistema.|||
|**Post condición**|<p>con plan básico</p><p>Nuevo **candidato registrado en la base de datos** del sistema.</p>|||
#











|<p><a name="_2obb3117px0c"></a>**Identificador de**</p><p>**Caso de Uso**</p>|**CU\_03:**|||
| :- | :- | :- | :- |
|**Nombre**|Análisis candidatos|||
|**Descripción**|Este caso de uso permite a un representante registrado analizar perfiles para visualizar un análisis en particular introduciendo su usuario de GitHub y/o token|||
|**Actores**|Representante, Github|||
|**Secuencia normal**||||
|**Actor**|**Software**|||
|1\. El **representante selecciona** la ventana de **“Análisis de perfiles”**||||
||2\. El **sistema** pide al representante que añada **el usuario de GitHub y** opcionalmente su **API KEY** **privada** |||
|3\. El **representante introduce la información** solicitada.||||
||4\. El **sistema valida la información** ingresada.|||
||<p>este paso dependerá de que ese usuario tenga una cuenta en talent de antemano. Es decir, si el gmail que le otorga GitHub ya se encuentra registrado en Talent, el sistema puede ofrecer más información de esa persona</p><p>5\. El **sistema solicita la información a github (si se ha añadido una API KEY, se usará la API KEY,** de lo contrario, **se usará el usuario de github), la procesa y la almacena en la base de datos** como un nuevo análisis.</p>|||
||6\. El **sistema muestra una visualización** de los datos **del perfil analizado,** mostrando la información **ordenadamente.**|||
|7\.  **El representante visualiza los datos** del perfil buscado.||||
||9\. El caso de uso termina.|||
|**Excepciones**|**Software**|||
|4\. Error al ingresar los datos.|<p>a. Muestra un mensaje de error mostrando qué datos son incorrectos.</p><p>b. Regresar al paso 3.</p>|||
|**CU relacionados**|**CU\_04:**|||
|**Precondición**|El representante necesita analizar un perfil.|||
|**Post condición**|El representante dispone de un análisis del perfil especificado.|||
#


|<p><a name="_sys533a5gnhs"></a>**Identificador de**</p><p>**Caso de Uso**</p>|**CU\_04:**|||
| :- | :- | :- | :- |
|**Nombre**|Buscar candidatos|||
|**Descripción**|Este caso de uso permite a un representante registrado buscar rápidamente un candidato o grupo de ellos que cumpla con sus necesidades.|||
|**Actores**|Representante, Github|||
|**Secuencia normal**||||
|**Actor**|**Software**|||
|1\. El representante accede a “Búsqueda”||||
|2\. El representante selecciona la ventana de **“Buscar”**||||
||<p>¿qué es perfil candidato y para que usarlo en este momento si lo que estas buscando son candidatos?</p><p>3\. El sistema pide al **representante que seleccione los siguientes datos:** número de candidatos, especialidad, Lenguajes/Tecnologías, años de experiencia, estilo de vida, ubicación del trabajo, perfil candidato</p>|||
|4\. El **representante introduce los datos solicitados** en función de lo que desea buscar**.**||||
||5\. El **sistema valida la información** ingresada.|||
||7\. El **sistema analiza, procesa la información y muestra una serie de  candidatos** para cada puesto del equipo solicitado. (El sistema envía a cada candidato una notificación de que el representante ha visualizado su perfil)|||
|8\. El **representante accede a un candidato** de su interés.||||
||9\. El **sistema muestra información detallada** de dicho candidato.|||
|10\. El representante vuelve a acceder a la visualización general y **selecciona a los candidatos que desea**||||
||13\. El sistema permite al representante **añadir a favoritos** la recomendación de la búsqueda.|||
|14\. El representante **pulsa** en **añadir a favoritos la recomendación de la búsqueda**||||
||15\. El sistema **almacena** la recomendación en favoritos y en el historial del representante.|||
||16\. El caso de uso termina.|||
|**Excepciones**|**Software**|||
|La recomendación del sistema **no cumple** con el **60%** de los requisitos exigidos por el representante.|El sistema cancelará la búsqueda recomendando al representante que sea menos específico para encontrar más resultados.|||
|**CU relacionados**|**CU\_03:**|||
|**Precondición**|El **representante necesita montar un equipo** con ciertas habilidades rápidamente.|||
|**Post condición**|El **representante dispone de una lista de potenciales equipos** que cumplen sus necesidades.|||


#

|<p><a name="_m6ztus2fe4n"></a>**Identificador de**</p><p>**Caso de Uso**</p>|**CU\_05:**|||
| :- | :- | :- | :- |
|**Nombre**|Modificación de perfil de análisis de candidato.|||
|**Descripción**|Este caso de uso **permite al candidato modificar los datos con los que se realizarán los posteriores análisis de su perfil** en el sistema.|||
|**Actores**|Candidato, Github|||
|**Secuencia normal**||||
|**Actor**|**Software**|||
|1\. El candidato registrado **accede a la opción de “Perfil”**.||||
||2\. El sistema **muestra los distintos apartados del perfil** del candidato **a modo de tarjetas**.|||
|3\. El candidato **accede a la opción de “Actualizar perfil**”.||||
||4\. El sistema **muestra un formulario con los datos actuales del candidato** de los que dispone.|||
|5\. El candidato **pulsa el botón de actualizar.**||||
||6\. El sistema **hace las validaciones** correspondientes.|||
||7\. El sistema **solicita la información a github (si se ha añadido una API KEY, se usará la API KEY**, de lo contrario, **se usará el usuario de github)**, la **procesa y la almacena en la base de datos en el perfil del candidato.**|||
||8\. El sistema **muestra el formulario del paso 4 actualizado** junto a un **mensaje de confirmación** al candidato.|||
||9\. El caso de uso termina.|||
|**Excepciones**|**Software**|||
|4\. El candidato **tiene el plan básico y ya ha realizado una actualización de su perfil hace menos de 30 días.**|a. El sistema informa al candidato que **no puede actualizar su perfil hasta que hayan pasado 30 días desde la última actualización, o a menos que obtenga el plan Pro.**|||
|4\. El candidato tiene el plan pro y ya ha realizado 3 actualizaciones y hace menos de 30 días desde la primera de ellas.|a. El sistema **informa al candidato que ya ha actualizado su perfil el número máximo de veces permitido desde hace menos de 30 días**, y le **dice el día más próximo en el que podrá actualizarlo**. |||
|**CU relacionados**||||
|**Precondición**|El candidato **desea actualizar la información de su perfil para futuros análisis** a su perfil.|||
|**Post condición**|El candidato **puede comprobar la información actualizada** en su perfil.|||
# <a name="_tm5wu5r8ewcq"></a>Diagrama UML del dominio del problema


