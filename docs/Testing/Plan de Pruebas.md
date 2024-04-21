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


### Entregable: S3
### Grupo 01 (Mañana) - IT Talent


###  <a name="_z05qqri5g3tk"></a>Control de Versiones

|**Versión**|**Fecha**|**Autor**|**Cambios**|
| :- | :- | :- | :- |
|v1.0|12/04/2024|Andrés Domínguez Ruiz|Documento inicial|
|v1.1|13/04/2024|Andrés Domínguez Ruiz|Añadir bug al historial y añadir resto de apartados|
|v1.2|21/04/2024|Andrés Domínguez Ruiz|Rellenar apartados|


## <a name="_lj1qgmxpo5ez"></a>**Resumen del documento**
<a name="_30j0zll"></a>La intención principal del documento es explicar de forma detallada y clara el plan de pruebas que se seguirá durante esta etapa del proyecto de tal forma que se verifique el correcto cumplimiento de las funcionalidades y requisitos desarrollados. 

Los principales temas a tratar en el documento son los siguientes:

- Método de evaluación de los tests
- Plan de Cobertura establecido
- Historial de bugs encontrados

# <a name="_1fob9te"></a>
#
#
# <a name="_k51xz950apj4"></a><a name="_ug1jcmvg7r12"></a><a name="_9j8c07fxd5sy"></a>Índice


# <a name="_3znysh7"></a>**1.Método de evaluación de tests**
- **Descripción:** Como no se puede confiar del todo en la cobertura de los tests, es necesario fijar una serie de condiciones que se deben verificar en cada caso de prueba. De esta forma, se podrá valorar o identificar el estado de cada caso de pruebas realizado, asi como verificar que se cumplen los requisitos solicitados por el cliente.

- **Fórmula del cálculo de "Aceptación":** La fórmula es la siguiente:
- n= Nº de condiciones correctas
- N= Nº total de condiciones solicitadas
- | **Fórmula:** | **$\frac{n}{N}100$** |
  | :- | :- |

- Aplicando esta fórmula, **para validar un caso de prueba se debe alcanzar el 100% de Aceptación.**


# <a name="_3znysh7"></a>**2.Plan de cobertura establecido**

# <a name="2.1"></a>**2.1.Módulo: Team Creator**
**1-Integración - Positivo:**
- **Historia de usuario:** Como representante, quiero crear un equipo correctamente 
- **Condiciones:**
  - [X] Se crea un equipo correctamente y se guarda en DB
  - [X] Se añaden tantas entradas al historial del representante como candidatos propuestos en el equipo
  - [X] Se me reste la cantidad de tokens de búsqueda
- **Estado:** Completado
- **Aceptación:** 100%

**2-Aceptación - Negativo:**
- **Historia de usuario:** Como representante, quiero que se me impida crear un equipo al no introducir mi token correctamente 
- **Condiciones:**
  - [ ] Que salte error 400 Forbiden Access al no enviar ningún token
  - [ ] Que salte error 403 Forbiden Access al enviar un token no existente
  - [ ] Que salte error 403 Forbiden Acces al enviar un token de otro representante
- **Estado:** Incompleto
- **Aceptación:** 0%

**3-Aceptación - Negativo:**
- **Historia de usuario:** Como representante, quiero que se me impida crear un equipo al enviar peticiones con campos incorrectos
- **Condiciones:**
  - [ ] Que salte error 400 Bad Request al enviar todos los campos vacíos
  - [ ] Que salte error 400 Bad Request al enviar en un campo de enumerados un valor no esperado.
- **Estado:** Incompleto
- **Aceptación:** 0%

# <a name="2.2"></a>**2.2.Módulo: Analysis**
**1-Aceptación - Positivo:**
- **Historia de usuario:** Como candidato quiero poder ver mi propio perfil de análisis tras crear una cuenta
- **Condiciones:**
  - [ ] Que salga 200
  - [ ] Que el githubUser sea el mismo que el del usuario
- **Estado:** Incompleto
- **Aceptación:** 0%

**2-Aceptación - Positivo:**
- **Historia de usuario:** Como representante quiero poder ver un análisis que he buscado
- **Condiciones:**
  - [ ] Que salga 200
  - [ ] Que ese análisis se encuentre en el historial del representante
- **Estado:** Incompleto
- **Aceptación:** 0%

**3-Aceptación - Negativo:**
- **Historia de usuario:** Como usuario, quiero que me salga error al enviar una petición de forma incorrecta al intentar consultar un análisis por su identificador
- **Condiciones:**
  - [ ] 403 Forbidden al no enviar un token
  - [ ] 403 Forbidden al enviar un token que no existe
  - [ ] 403 Forbidden al enviar un token DE CANDIDATO que no es el mismo que el del id
  - [ ] 403 Forbidden al enviar un token DE REPRESENTANTE que no tiene en su historial ese análisis
  - [ ] 400 Bad Requests al utilizar un ID que no existe en DB
- **Estado:** Incompleto
- **Aceptación:** 0%

**4-Aceptación - Negativo:**
- **Historia de usuario:** Como usuario, quiero que me salga error al enviar una petición incorrecta al intentar consultar un análisis por el githubUsername
- **Condiciones:**
  - [ ] 403 Forbidden al utilizar un token de un candidato
  - [ ] 400 Bad Requests al utilizar un username inexistente
  - [ ] 400 Bad Requests al utilizar un username existente en DB pero no en el historial del representante
- **Estado:** Incompleto
- **Aceptación:** 0%

**5-Integración (API) - Positivo:**
- **Historia de usuario:** Como usuario, quiero que me salga error al enviar una petición incorrecta al intentar consultar un análisis por el githubUsername
- **Condiciones:**
  - [X] Se guarda en la base de datos
  - [ ] Se resta un token de uso del representante
  - [ ] Se crea una entrada del historial
- **Estado:** Incompleto
- **Aceptación:** 33%

**6-Integración (API) - Positivo:**
- **Historia de usuario:** Como representante, quiero crear un análisis con un nombre de usuario asociado a un candidato y verificar que se guarda el análisis en DB
- **Condiciones:**
  - [ ] No se crea un nuevo análisis, sino que se actualiza el ya existente
  - [ ] Se crea una entrada del historial
- **Estado:** Incompleto
- **Aceptación:** 0%

**7- Aceptación - Negativo:**
- **Historia de usuario:** Como representante, quiero que salte un error al intentar crear un análisis enviando una petición incorrecta
- **Condiciones:**
  - [ ] Salta 400 Bad Request al enviar una petición vacía
  - [ ] Salta 403 Forbidden al no tener más tokens
  - [ ] Salta 404 al introducir un github user inexistente
  - [ ] Salta 401 al utilizar un token de un candidato/o un token incorrecto
- **Estado:** Incompleto
- **Aceptación:** 0%

# <a name="2.3"></a>**2.3.Módulo: Professional-Experiences**
**1 - Integración - Positivo:**
- **Historia de usuario:** Como candidato, quiero poder consultar mis experiencias profesionales correctamente, introduciendo mi token de usuario.
- **Condiciones:**
  - [ ] Tras crear correctamente una experiencia profesional, al leer el perfil aparezca esa entrada
  - [ ] La experiencia profesional estará asociada al candidato
- **Estado:** Incompleto
- **Aceptación:** 0%

**2 - Aceptación - Negativo:**
- **Historia de usuario:** Como candidato, quiero que aparezcan errores al consultar mis experiencias profesionales enviando peticiones incorrectas
- **Condiciones:**
  - [ ] 401 si usas un token falso/de un representante/de otro candidato distinto al userId
  - [ ] 400 al utilizar un userId no asociado a un candidato
- **Estado:** Incompleto
- **Aceptación:** 0%

**3 - Aceptación - Negativo:**
- **Historia de usuario:** Como candidato, quiero crear una experiencia profesional de forma incorrecta
- **Condiciones:**
  - [ ] Al enviar campos vacíos, devuelve 400 Bad Request
  - [ ] 401 si usas un token falso/de un representante/de otro candidato distinto al userId
  - [ ] Al haber conflicto con las fechas de inicio y fin, que devuelva error
- **Estado:** Incompleto
- **Aceptación:** 0%

**4 - Aceptación - Negativo:**
- **Historia de usuario:** Como candidato, quiero editar una experiencia profesional de forma incorrecta
- **Condiciones:**
  - [ ] Al enviar campos vacíos, devuelve 400 Bad Request
  - [ ] 401 si usas un token falso/de un representante/de otro candidato distinto al userId
  - [ ] Al haber conflicto con las fechas de inicio y fin, que devuelva error
  - [ ] 404 al intentar acceder a un ID de una experiencia inexistente
- **Estado:** Incompleto
- **Aceptación:** 0%

**5 - Aceptación - Negativo:**
- **Historia de usuario:** Como candidato, quiero borrar una experiencia profesional de forma incorrecta
- **Condiciones:**
  - [ ] 401 si usas un token falso/de un representante/de otro candidato distinto al userId
  - [ ] 404 al intentar acceder a un ID de una experiencia inexistente
- **Estado:** Incompleto
- **Aceptación:** 0%

**6 - Integración - Positivo:**
- **Historia de usuario:** Como candidato, quiero crear de forma correcta una experiencia profesional
- **Condiciones:**
  - [ ] Se guarda en la base de datos
  - [ ] Al realizar la búsqueda de un equipo hecho por un representante cuyo perfíl solicite una experiencia laboral que tiene el candidato, deberá aparecer ese candidato
- **Estado:** Incompleto
- **Aceptación:** 0%

# <a name="_3znysh7"></a>**3.Historial de bugs**

|**Commit**|**Fecha de aparición**|**Descripción**|**Estado**|
| :- | :- | :- | :- |
|[392b470](https://github.com/JaviFdez7/ISPP-G1-Talent/commit/392b4709259678bd0359911bd43768dc9d3b10e7)|08/04/2024|Cuando se estaba realizando el SetUp del archivo de testing que estudiaba las pruebas unitarias sobre la funcionalidad de crear equipos, se pudo observar de que cuando realizas varias llamadas a la Api GraphQL de forma consecutiva, existe la posibilidad de que se rompa el Api rate, obligando al usuario a actualizar el token de GitHub. **Propuesta para solucionarlo:** Establecer un límite de llamadas a la API y un orden de ejecución, de tal forma que si varios usuarios simultaneamente realizan análisis, que haya un orden y un tiempo de espera establecido |Sin solucionar|
|[d1bfc23](https://github.com/JaviFdez7/ISPP-G1-Talent/commit/d1bfc230cc6b5b19336aa0aa76852c2568edb1ea)|18/04/2024|El paquete que nosotros utilizamos para realizar tests(mocha y mockHttp) no interpreta los métodos del middleware. Por lo que a la hora de realizar tests de aceptación hay que buscar la forma de introducir las validaciones de los middleware.|Sin solucionar y sin propuesta añadida|
|[d1bfc23](https://github.com/JaviFdez7/ISPP-G1-Talent/commit/d1bfc230cc6b5b19336aa0aa76852c2568edb1ea)|20/04/2024|Actualmente se puede actualizar el githubUsername durante la actualización del perfil de un candidato, haciendo que se cree otro analisis y se mantenga un análisis sin asociar, haciendo que el historial de un representante sea afectado al tener información incorrecta y desactualizada. Hay que evitar desde frontend y desde backend se pueda actualizar ese githubUser. **Propuesta para solucionarlo:** Impedir que se actualice el githubUsername desde frontend y backend|Sin solucionar|

