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
- | :- | :- |
  | **Fórmula:** | **$\frac{n}{N}100$** |
  Aplicando esta fórmula, **para validar un caso de prueba se debe alcanzar el 100% de Aceptación.**


# <a name="_3znysh7"></a>**2.Plan de cobertura establecido**

# <a name="2.1"></a>**2.1.Módulo: Team Creator**
**1-Integración - Caso positivo:**
- **Historia de usuario:** Como representante, quiero crear un equipo correctamente 
- **Condiciones:**
  - [X] Se crea un equipo correctamente y se guarda en DB
  - [X] Se añaden tantas entradas al historial del representante como candidatos propuestos en el equipo
  - [ ] Se me reste la cantidad de tokens de búsqueda

- **Estado:** Completado



# <a name="_3znysh7"></a>**3.Historial de bugs**

|**Commit**|**Fecha de aparición**|**Descripción**|**Estado**|
| :- | :- | :- | :- |
|[392b470](https://github.com/JaviFdez7/ISPP-G1-Talent/commit/392b4709259678bd0359911bd43768dc9d3b10e7)|08/04/2024|Cuando se estaba realizando el SetUp del archivo de testing que estudiaba las pruebas unitarias sobre la funcionalidad de crear equipos, se pudo observar de que cuando realizas varias llamadas a la Api GraphQL de forma consecutiva, existe la posibilidad de que se rompa el Api rate, obligando al usuario a actualizar el token de GitHub. **Propuesta para solucionarlo:** Establecer un límite de llamadas a la API y un orden de ejecución, de tal forma que si varios usuarios simultaneamente realizan análisis, que haya un orden y un tiempo de espera establecido |Sin solucionar|

