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

# <a name="_z05qqri5g3tk"></a>Control de Versiones

| **Versión** | **Fecha**  | **Autor**                         | **Cambios**                                      |
| :---------- | :--------- | :-------------------------------- | :----------------------------------------------- |
| v1.0        | 02/02/2024 | Alberto, Alejandro, Ismael, Mario | Documento inicial                                |
| v1.1        | 03/02/2024 | Alberto, Alejandro, Ismael, Mario | Nueva versión del documento                      |
| v1.2        | 10/02/2024 | Francisco, Alejandro              | Nueva versión del documento                      |
| v1.3        | 16/02/2024 | Francisco, Ismael                 | Nueva versión del documento                      |
| v1.4        | 01/03/2024 | Francisco                         | Nueva versión del documento                      |
| v1.5        | 17/03/2024 | Francisco                         | Nueva versión del documento                      |
| v1.6        | 29/03/2024 | Francisco                         | Nueva versión del documento                      |
| v1.7        | 19/04/2024 | Francisco                         | Nueva versión del documento                      |
| v1.8        | 03/05/2024 | Francisco                         | Nueva versión del documento                      |
| v1.9        | 17/05/2024 | Francisco                         | Versión final del documento                      |

## <a name="_lj1qgmxpo5ez"></a>**Resumen del documento**

En este informe, se llevará a cabo una evaluación detallada de los costes, junto con la determinación de la estrategia de monetización del proyecto. El objetivo es identificar la mejor manera de recuperar la inversión.

#

# <a name="_30j0zll"></a>Índice

[**Sevilla, Enero 2024**](#_pg8quxt9d0oa)

[**Control de Versiones**](#_z05qqri5g3tk)

[Resumen del documento](#_lj1qgmxpo5ez)

[**Índice**](#_30j0zll)

[**1. Estimación general de costes**](#_3znysh7)

[Costes de puesta en marcha](#_t35hwt4r1rbg)

[Costes de marketing](#_mj8t1npc9dus)

[Costes de desarrollo](#_vvewq7jwuq3n)

[Costes operativos (por mes)](#_y0zmy03no5iy)

[Cálculo del Coste Total de Propiedad (TCO) después de un mes](#_pfv5o172w9dw)

[**2. Análisis de los modelos de negocio de los competidores**](#_ihj9lnsxca0c)

[**3. Decisión de monetización**](#_wckdhu8m1di)

[Empresas](#_tgj66a4xfzrz)

[Candidatos](#_5ol0mjrnt5fj)

[**4. Bibliografía**](#_gpwc251m2fw5)

#

# <a name="_3znysh7"></a>Estimación general de costes

Según el PMBOK, un coste son todos aquellos gastos que realiza una organización para llevar a cabo una tarea. Definimos como gastos los siguientes:

- Aquellos que forman parte de la actividad diaria de la organización.
- Los que están vinculados a los procesos internos.
- Los que son indispensables para el desarrollo del proyecto.

Realizaremos un análisis de costes en escenarios muy diferentes; en concreto, en escenarios optimistas, pesimistas y realistas, a corto y largo plazo. Antes de comenzar, se hace necesario hablar de algunos puntos relevantes para nuestra estimación de costes:

-El número de empresas con actividades relacionadas con la informática que tienen sede en Sevilla es de 1.329 y el número de personas desempleadas es de 61.435 (los números pueden haber variado ligeramente desde que se hicieron los estudios). Utilizaremos esta información para plantear diferentes escenarios.

-La aplicación realizará análisis de perfiles de GitHub, por lo que es necesario analizar cuántos puntos de la API de GraphQL gastaremos en cada escenario, para decidir qué licencia de GitHub necesitaremos contratar en cada caso.

Para cada análisis la aplicación realiza dos consultas. Sumando las solicitudes que se tienen que realizar para la primera:

- 10 últimos repositorios del usuario = 1
- Detalles básicos del usuario = 1
- Idiomas: 10 (una por repositorio)
- Archivo package.json: 10 (una por repositorio)
- Contribuciones: 1

Total = 23 solicitudes.

Aplicando la fórmula que se proporciona en la [documentación de GitHub](https://docs.github.com/en/graphql/overview/rate-limits-and-node-limits-for-the-graphql-api) (dividiendo entre 100 y redondeando) nos da un total de 1 punto (23/100). Sumando las solicitudes que se tienen que realizar para la segunda:

- Detalles básicos del usuario = 1
- 100 últimas Pull Requests = 1
- Archivos de las Pull Request: 100 (una por PR)

Total = 102 solicitudes.

En este caso, nos vuelve a dar 1 punto (102/100).

El estudio realizado nos lleva a la conclusión de que cada análisis conlleva un total de 2 puntos gastados. Cualquier cuenta de GitHub, utilizando un token de autenticación, proporciona 5000 puntos por hora. Teniendo eso en cuenta, además del hecho de que los candidatos pueden modificar su perfil (y, por lo tanto, generar un análisis) una vez al mes, y si pagan el plan avanzado 3 veces, analicemos cada escenario por separado.

-Como gasto inicial se incluyen 1.000€ que se destinatarán a campañas de marketing enfocadas a empresarios que buscan candidatos y a candidatos que buscan empleo. Nos centraremos en LinkedIn, pues allí se encuentra nuestro público objetivo, y destinaremos un 60% a las empresas, pues suponen la fuente de ingresos más importante de la aplicación.

Pasamos, pues, al análisis en cada escenario. En el escenario **pesimista** tendremos las siguientes condiciones iniciales:

Durante los 6 primeros meses, el lanzamiento del producto enfrentará desafíos, resultando en ingresos mínimos. El número de usuarios prácticamente no incrementará, resultando en los siguientes números en el último mes de este difícil período:

- El 6% de las empresas TIC con sede en Sevilla deciden pagar alguna de nuestras suscripciones, estando solo el 15% de ellas interesadas en el plan más costoso:
  - 12 empresas están suscritas a nuestro plan avanzado.
  - 60 empresas están suscritas a nuestro plan básico.
  - 8 empresas están suscritas a un plan personalizado por valor de 150€.
- El 1% de las personas desempleadas de Sevilla utilizan nuestra aplicación, de las cuales un 1% deciden pagar nuestra suscripción:
  - 614 candidatos utilizan nuestra aplicación.
  - 6 candidatos están suscritos a nuestro plan avanzado.
- La campaña de marketing con LinkedIn Ads genera 200 clics de empresarios con un CPC de 3€. El 5% deciden pagar alguna de nuestras suscripciones, estando solo el 15% de ellos interesados en el plan más costoso:
  - 2 empresas, además de las 12 que se habían conseguido sin la campaña, están suscritas a nuestro plan avanzado.
  - 7 empresas, además de las 60 que se habían conseguido sin la campaña, están suscritas a nuestro plan básico.
  - 1 empresa, además de las 8 que se habían conseguido sin la campaña, están suscritas a un plan personalizado por valor de 150€.
- La campaña de marketing con LinkedIn Ads genera 200 clics de candidatos con un CPC de 2€. El 15% se convierten en usuarios de la aplicación, de los cuales el 10% de ellos deciden pagar nuestra suscripción:
  - 30 candidatos, además de los 614 que se habían conseguido sin la campaña, utilizan nuestra aplicación.
  - 2 candidatos, además de los 6 que se habían conseguido sin la campaña, están suscritos a nuestro plan avanzado.

En este escenario, la campaña de marketing no resulta rentable, pues se consiguen 40 usuarios nuevos pero los beneficios económicos están por debajo de los 1.000€ que costó.

| **Rol**       | <p> </p><p>Número de usuarios (mensuales)</p> |
| :------------ | :-------------------------------------------- |
| Candidato     | 644                                           |
| Representante | 90                                            |
| **Total**     | **734**                                       |

Se podrán realizar, como máximo, 660 análisis al mes. Por lo tanto, se gastarán, como máximo, 1.320 puntos de la API de GraphQL.

Al cabo de 12 meses, el crecimiento de ingresos seguirá siendo lento. Se han mejorado los resultados, pero siguen siendo ingresos insuficientes para recuperar la inversión, resultando en los siguientes números el último mes de este período:

- El 8% de las empresas TIC con sede en Sevilla deciden pagar alguna de nuestras suscripciones, estando solo el 20% de ellas interesadas en el plan más costoso:
  - 21 empresas están suscritas a nuestro plan avanzado.
  - 77 empresas están suscritas a nuestro plan básico.
  - 8 empresas están suscritas a un plan personalizado por valor de 150€.
- El 1,5% de las personas desempleadas de Sevilla utilizan nuestra aplicación, de las cuales un 2% deciden pagar nuestra suscripción:
  - 922 candidatos utilizan nuestra aplicación.
  - 18 candidatos están suscritos a nuestro plan avanzado.

| **Rol**       | <p> </p><p>Número de usuarios (mensuales)</p> |
| :------------ | :-------------------------------------------- |
| Candidato     | 922                                           |
| Representante | 106                                           |
| **Total**     | **1.028**                                     |

Se podrán realizar, como máximo, 958 análisis al mes. Por lo tanto, se gastarán, como máximo, 1.916 puntos de la API de GraphQL.

Al cabo de 24 meses, la empresa enfrentará decisiones difíciles, con ingresos decrecientes, resultando en los siguientes números en el último mes de este período:

- El 6% de las empresas TIC con sede en Sevilla deciden pagar alguna de nuestras suscripciones, estando solo el 12% de ellas interesadas en el plan más costoso:
  - 10 empresas están suscritas a nuestro plan avanzado.
  - 64 empresas están suscritas a nuestro plan básico.
  - 6 empresas están suscritas a un plan personalizado por valor de 150€.
- El 1,2% de las personas desempleadas de Sevilla utilizan nuestra aplicación, de las cuales un 2% deciden pagar nuestra suscripción:
  - 737 candidatos utilizan nuestra aplicación.
  - 15 candidatos están suscritos a nuestro plan avanzado.

| **Rol**       | <p> </p><p>Número de usuarios (mensuales)</p> |
| :------------ | :-------------------------------------------- |
| Candidato     | 737                                           |
| Representante | 80                                            |
| **Total**     | **817**                                       |

En el escenario **optimista** tendremos las siguientes condiciones iniciales:

Durante los 6 primeros meses, los ingresos crecerán de manera modesta a medida que el producto gana tracción, resultando en los siguientes números en el último mes de este período:

- El 10% de las empresas TIC con sede en Sevilla deciden pagar alguna de nuestras suscripciones, estando el 30% de ellas interesadas en el plan más costoso:
  - 40 empresas están suscritas a nuestro plan avanzado.
  - 81 empresas están suscritas a nuestro plan básico.
  - 12 empresas están suscritas a un plan personalizado por valor de 150€.
- El 2% de las personas desempleadas de Sevilla utilizan nuestra aplicación, de las cuales un 10% deciden pagar nuestra suscripción:
  - 1.229 candidatos utilizan nuestra aplicación.
  - 123 candidatos están suscritos a nuestro plan avanzado.
- La campaña de marketing con LinkedIn Ads genera 600 clics de empresarios con un CPC de 1€. El 20% deciden pagar alguna de nuestras suscripciones, estando el 30% de ellos interesados en el plan más costoso:
  - 36 empresas, además de las 40 que se habían conseguido sin la campaña, están suscritas a nuestro plan avanzado.
  - 77 empresas, además de las 81 que se habían conseguido sin la campaña, están suscritas a nuestro plan básico.
  - 7 empresas, además de las 12 que se habían conseguido sin la campaña, están suscritas a un plan personalizado por valor de 150€.
- La campaña de marketing con LinkedIn Ads genera 400 clics de candidatos con un CPC de 1€. El 30% se convierten en usuarios de la aplicación, de los cuales el 25% de ellos deciden pagar nuestra suscripción:
  - 120 candidatos, además de los 1.229 que se habían conseguido sin la campaña, utilizan nuestra aplicación.
  - 30 candidatos, además de los 123 que se habían conseguido sin la campaña, están suscritos a nuestro plan avanzado.

En este escenario, la campaña de marketing ha resultado muy rentable, pues se han conseguido una gran cantidad de usuarios, además de que los beneficios superan con creces al coste de la campaña.

| **Rol**       | <p> </p><p>Número de usuarios (mensuales)</p> |
| :------------ | :-------------------------------------------- |
| Candidato     | 1.349                                         |
| Representante | 253                                           |
| **Total**     | **1.602**                                     |

Se podrán realizar, como máximo, 1.655 análisis al mes. Por lo tanto, se gastarán, como máximo, 3.310 puntos de la API de GraphQL.

Al cabo de 12 meses, el producto captará una gran cuota de mercado, siendo este un punto de inflexión. Los ingresos incrementan mes a mes, resultando en los siguientes números en el último mes de este período:

- El 30% de las empresas TIC con sede en Sevilla deciden pagar alguna de nuestras suscripciones, estando el 40% de ellas interesadas en el plan más costoso:
  - 159 empresas están suscritas a nuestro plan avanzado.
  - 258 empresas están suscritas a nuestro plan básico.
  - 18 empresas están suscritas a un plan personalizado por valor de 150€.
- El 6% de las personas desempleadas de Sevilla utilizan nuestra aplicación, de las cuales un 15% deciden pagar nuestra suscripción:
  - 3.686 candidatos utilizan nuestra aplicación.
  - 553 candidatos están suscritos a nuestro plan avanzado.

| **Rol**       | <p> </p><p>Número de usuarios (mensuales)</p> |
| :------------ | :-------------------------------------------- |
| Candidato     | 3.686                                         |
| Representante | 399                                           |
| **Total**     | **4.085**                                     |

Se podrán realizar, como máximo, 4.792 análisis al mes. Por lo tanto, se gastarán, como máximo, 9.584 puntos de la API de GraphQL.

Es la primera vez que se sobrepasan los 5000 puntos que GraphQL ofrece cada hora. Sin embargo, teniendo en cuenta que los análisis se realizarán a lo largo del mes, es prácticamente imposible que se hagan más de 5000 en menos de una hora. En el peor de los casos, se puede controlar que, si muchos usuarios modifican su perfil en poco tiempo, los análisis se queden en cola.

Al cabo de 24 meses, la empresa se consolidará en el mercado, con ingresos que continúan creciendo a un ritmo más moderado, resultando en los siguientes números en el último mes de este período:

- El 40% de las empresas TIC con sede en Sevilla deciden pagar alguna de nuestras suscripciones, estando el 50% de ellas interesadas en el plan más costoso:
  - 266 empresas están suscritas a nuestro plan avanzado.
  - 236 empresas están suscritas a nuestro plan básico.
  - 30 empresas están suscritas a un plan personalizado por valor de 150€.
- El 8% de las personas desempleadas de Sevilla utilizan nuestra aplicación, de las cuales un 20% deciden pagar nuestra suscripción:
  - 4.915 candidatos utilizan nuestra aplicación.
  - 983 candidatos están suscritos a nuestro plan avanzado.

| **Rol**       | <p> </p><p>Número de usuarios (mensuales)</p> |
| :------------ | :-------------------------------------------- |
| Candidato     | 4.915                                         |
| Representante | 532                                           |
| **Total**     | **5.447**                                     |

Se podrán realizar, como máximo, 6.881 análisis al mes. Por lo tanto, se gastarán, como máximo, 13.762 puntos de la API de GraphQL.

Al igual que en el caso anterior, los puntos que se gastarán como máximo a lo largo del mes no parecen suficientes como para necesitar un mejor plan.

En el escenario **realista** tendremos las siguientes condiciones iniciales:

Durante los 6 primeros meses, los ingresos crecerán de forma gradual, resultando en los siguientes números en el último mes de este período:

- El 8% de las empresas TIC con sede en Sevilla deciden pagar alguna de nuestras suscripciones, estando el 20% de ellas interesadas en el plan más costoso:
  - 21 empresas están suscritas a nuestro plan avanzado.
  - 76 empresas están suscritas a nuestro plan básico.
  - 9 empresas están suscritas a un plan personalizado por valor de 150€.
- El 1,5% de las personas desempleadas de Sevilla utilizan nuestra aplicación, de las cuales un 8% deciden pagar nuestra suscripción:
  - 922 candidatos utilizan nuestra aplicación.
  - 74 candidatos están suscritos a nuestro plan avanzado.
- La campaña de marketing con LinkedIn Ads genera 300 clics de empresarios con un CPC de 2€. El 10% deciden pagar alguna de nuestras suscripciones, estando el 20% de ellos interesados en el plan más costoso:
  - 6 empresas, además de las 21 que se habían conseguido sin la campaña, están suscritas a nuestro plan avanzado.
  - 21 empresas, además de las 76 que se habían conseguido sin la campaña, están suscritas a nuestro plan básico.
  - 3 empresas, además de las 9 que se habían conseguido sin la campaña, están suscritas a un plan personalizado por valor de 150€.
- La campaña de marketing con LinkedIn Ads genera 267 clics de candidatos con un CPC de 1,5€. El 20% se convierten en usuarios de la aplicación, de los cuales el 15% de ellos deciden pagar nuestra suscripción:
  - 53 candidatos, además de los 922 que se habían conseguido sin la campaña, utilizan nuestra aplicación.
  - 8 candidatos, además de los 74 que se habían conseguido sin la campaña, están suscritos a nuestro plan avanzado.

En este escenario, la campaña de marketing ha salido rentable; no tanto como en el caso optimista, pero los beneficios han superado con creces al coste de la campaña.

| **Rol**       | <p> </p><p>Número de usuarios (mensuales)</p> |
| :------------ | :-------------------------------------------- |
| Candidato     | 922                                           |
| Representante | 136                                           |
| **Total**     | **1.058**                                     |

Se podrán realizar, como máximo, 1.086 análisis al mes. Por lo tanto, se gastarán, como máximo, 2.172 puntos de la API de GraphQL.

Al cabo de 12 meses, la empresa observará un crecimiento sostenido de ingresos. La competencia es notable pero manejable, resultando en los siguientes números en el último mes de este período:

- El 15% de las empresas TIC con sede en Sevilla deciden pagar alguna de nuestras suscripciones, estando el 30% de ellas interesadas en el plan más costoso:
  - 60 empresas están suscritas a nuestro plan avanzado.
  - 126 empresas están suscritas a nuestro plan básico.
  - 13 empresas están suscritas a un plan personalizado por valor de 150€.
- El 3% de las personas desempleadas de Sevilla utilizan nuestra aplicación, de las cuales un 10% deciden pagar nuestra suscripción:
  - 1.843 candidatos utilizan nuestra aplicación.
  - 184 candidatos están suscritos a nuestro plan avanzado.

| **Rol**       | <p> </p><p>Número de usuarios (mensuales)</p> |
| :------------ | :-------------------------------------------- |
| Candidato     | 1.843                                         |
| Representante | 199                                           |
| **Total**     | **2.042**                                     |

Se podrán realizar, como máximo, 2.211 análisis al mes. Por lo tanto, se gastarán, como máximo, 4.422 puntos de la API de GraphQL.

Al cabo de 24 meses, se consolidará la base de clientes y el crecimiento se moderará, resultando en los siguientes números en el último mes de este período:

- El 25% de las empresas TIC con sede en Sevilla deciden pagar alguna de nuestras suscripciones, estando el 40% de ellas interesadas en el plan más costoso:
  - 133 empresas están suscritas a nuestro plan avanzado.
  - 185 empresas están suscritas a nuestro plan básico.
  - 14 empresas están suscritas a un plan personalizado por valor de 150€.
- El 4% de las personas desempleadas de Sevilla utilizan nuestra aplicación, de las cuales un 12% deciden pagar nuestra suscripción:
  - 2.457 candidatos utilizan nuestra aplicación.
  - 295 candidatos están suscritos a nuestro plan avanzado.

| **Rol**       | <p> </p><p>Número de usuarios (mensuales)</p> |
| :------------ | :-------------------------------------------- |
| Candidato     | 2.457                                         |
| Representante | 332                                           |
| **Total**     | **2.789**                                     |

Se podrán realizar, como máximo, 3.047 análisis al mes. Por lo tanto, se gastarán, como máximo, 6.094 puntos de la API de GraphQL.

Para calcular el **Coste Total de Propiedad (TCO)** tendremos en cuenta los costes de puesta en marcha, los de marketing, los asociados a las 9 semanas de desarrollo y los costes operativos mensuales, considerando las siguientes condiciones iniciales:

- Establecemos nuestra hora básica de servicio en 15 €.
- Los cálculos se harán tomando como referencia el escenario realista de los 6 primeros meses, ya que el marco temporal serán las 9 semanas de ejecución y el primer mes posterior al desarrollo.
- El equipo estará compuesto por 15 personas durante la fase de ejecución, que se comprometen a dedicar 10 horas semanales al proyecto.
- Una vez que se complete la fase de desarrollo, únicamente se mantendrán dos técnicos para el soporte técnico, un GDPR Data Protection Manager Officer y un Community Manager.
- Cada registro de usuario ha resultado en 1,5 correos validados, en promedio.

### <a name="_t35hwt4r1rbg"></a> Costes de puesta en marcha

Son todos los costes previos al desarrollo. Pueden incluir material, licencias de pago único y cualquier gasto que necesitemos para poner en marcha el proyecto.

| **Gasto**              | **Unidades** | **Precio por unidad** | <p> </p><p>Total</p> |
| :--------------------- | :----------- | :-------------------- | :------------------- |
| Ordenadores portátiles | 15 unidades  | 400,00€               | 6\.000,00 €          |
| **Total**              |              |                       | **6.000,00 €**       |

### <a name="_mj8t1npc9dus"></a> Costes de marketing

Son todos los costes relativos al plan de marketing, que incluyen las campañas publicitarias realizadas para impulsar el producto desde su lanzamiento.

| **Campaña**               | **Coste**      |
| :------------------------ | :------------- |
| LinkedIn Ads - Empresas   | 600,00€        |
| LinkedIn Ads - Candidatos | 400,00€        |
| **Total**                 | **1.000,00 €** |

El formato de anuncios, en el caso de la campaña para empresas, será contenido patrocinado y Text Ads. En el caso de la campaña para candidatos, InMails patrocinados y contenido patrocinado.

### <a name="_vvewq7jwuq3n"></a> Costes de desarrollo

Son todos los costes necesarios para las 9 semanas de ejecución del proyecto. Pueden incluir suministros, personal y licencias mensuales, entre otras cosas.

| **Tipo de suministro** | **Personas** | <p> </p><p>**Precio del suministro por persona**</p> | <p> </p><p>Total</p> |
| :--------------------- | -----------: | :--------------------------------------------------- | -------------------: |
| Luz                    |           15 | 0,123 €/hora                                         |             166,05 € |
| Internet               |           15 | 1,67 €/semana                                        |             225,45 € |

Cada persona rondará las 90 horas durante la fase de ejecución, por lo que el coste de luz se calcula como el producto del número de horas (90), el número de personas (15) y el precio por hora (0,123).

Internet, en cambio, se paga por semana; por lo tanto, se calcula como el producto del número de semanas (9), el número de personas (15) y el precio por semana (1,67).

| <p></p><p>**Roles**</p> | **Nº de miembros por cada rol** | **Hora básica de servicio** | **Multiplicador de la hora básica de servicio** |      Total |
| :---------------------: | :-----------------------------: | :-------------------------: | :---------------------------------------------: | ---------: |
|   Gerente de proyecto   |                1                |             15€             |                       1,5                       | 2\.025,00€ |
|    Gerente de Equipo    |                3                |             15€             |                       1,5                       | 6\.075,00€ |
|       Programador       |                6                |             15€             |                        1                        | 8\.100,00€ |
|        Analista         |                5                |             15€             |                      1,25                       | 8\.437,50€ |

Para calcular los costes de personal, poniendo como ejemplo el rol de gerente de equipo, debemos calcular el producto del número de horas (90), el número de miembros del rol (3), la hora básica de servicio (15) y el multiplicador de la hora básica de servicio (1,5).

| **Licencia** | **Personas** | <p> </p><p>**Precio por persona (cada mes)**</p> | <p> </p><p>Total</p> |
| :----------- | -----------: | :----------------------------------------------- | -------------------: |
| GitHub Team  |           15 | 3,72 €                                           |              167,4 € |

Teniendo en cuenta que las peticiones a la API de GraphQL no son un problema, ya que difícilmente sobrepasaremos los 5.000 puntos por hora incluso en el escenario más optimista, para elegir la licencia de GitHub más conveniente debemos tener en cuenta los minutos mensuales que necesitaremos GitHub Actions.

Teniendo en cuenta que somos 15 personas, el workflow tarda en ejecutarse no más de dos minutos y no estimamos superar el commit diario por miembro, difícilmente superaremos los 900 minutos y nos quedaremos significativamente lejos del límite de 3.000 minutos que ofrece GitHub Pro, lo que nos dará un margen importante en los meses donde la carga de trabajo sea mayor e incluso si el número de miembros del equipo crece con el paso del tiempo.

| **Coste total de desarrollo** | **25.196,4 €** |
| :---------------------------- | -------------: |

### <a name="_y0zmy03no5iy"></a> Costes operativos (por mes)

Son todos los costes necesarios para mantener el software en funcionamiento una vez que se ha completado el proyecto. Para el cálculo consideraremos que todos los trabajadores han tenido jornadas de 8 horas, 5 días a la semana, durante cuatro semanas; es decir, la condición inicial del primer mes operativo es que los trabajadores han trabajado 160 horas cada uno.

Además, estimamos tener 312 usuarios registrados, por lo que se habrán validado 468 correos electrónicos. El plan pro de la API de Validect, que es la que utilizamos para validar los correos, ofrece 3000 validaciones mensuales.

|     <p></p><p>**Roles**</p>     | **Nº de miembros por cada rol** | **Hora básica de servicio** | **Número de horas** | Multiplicador de la hora básica de servicio |  Coste/mes  |    Total    |
| :-----------------------------: | :-----------------------------: | :-------------------------: | :-----------------: | :-----------------------------------------: | :---------: | :---------: |
|        Equipo de soporte        |                2                |             15€             |         160         |                      1                      | 2\.400,00 € | 2\.400,00 € |
| GDPR Protection Manager Officer |                1                |             15€             |         160         |                     1,5                     | 3\.600,00 € | 3\.600,00 € |
|        Community manager        |                1                |             15€             |         160         |                      1                      | 2\.400,00 € | 2\.400,00 € |

| **Tipo de suministro** | **Personas** | <p> </p><p>**Precio del suministro por persona**</p> | <p> </p><p>Total</p> |
| :--------------------- | -----------: | :--------------------------------------------------- | -------------------: |
| Luz                    |            4 | 0,123 €/hora                                         |              78,72 € |
| Internet               |            4 | 1,67 €/semana                                        |              26,72 € |

| <p></p><p>**Gasto**</p>  |      Coste/mes | Total   |
| :----------------------- | -------------: | :------ |
| Vercel (2 personas)      |        37,56 € | 37,56 € |
| GitHub Team (2 personas) | 3,72 €/persona | 7,44 €  |
| Plan pro Validect        |         5,62 € | 5,62 €  |

| **Coste total operativo** | **10.956,06 € / mes** |
| :------------------------ | --------------------: |

Para calcular el TCO se deben tener en cuenta todos los costes asociados con el proyecto en su vida útil. Posteriormente se comprobará, en los supuestos planteados al principio, cuántos meses necesitaríamos para recuperar la inversión.

### <a name="_pfv5o172w9dw"></a> Cálculo del Coste Total de Propiedad (TCO) después de un mes

| <p></p><p>**Tipo de coste**</p> |           Total |
| :------------------------------ | --------------: |
| Puesta en marcha                |     6\.000,00 € |
| Marketing                       |     1\.000,00 € |
| Desarrollo                      |     25\.196,4 € |
| Mantenimiento                   |    10\.956,06 € |
| **Total**                       | **43.152,46 €** |

Si elegimos tener un colchón para imprevistos del 15%, el TCO final sería de

**49.625,33 €**

<div style={{ display: 'flex' }}>
  <img src="/img/DistribucionTCO.png" alt="Imagen 3"/>
</div>

Figura 9. Distribución del TCO

**CAPEX vs OPEX:**

**CAPEX** son todos aquellos fondos de una empresa que representan una inversión. Todos estos están enfocados en invertir hacia el crecimiento de la compañía.

| **CAPEX**              | <p> </p><p>Total</p> |
| :--------------------- | :------------------- |
| Ordenadores portátiles | 6\.000,00 €          |
| **Total**              | **6.000,00 €**       |

**OPEX** son desembolsos del día a día que se requieren para que la empresa funcione.

| **OPEX**            | <p> </p><p>Total</p> |
| :------------------ | :------------------- |
| Luz                 | 244,77 €             |
| Internet            | 252,17 €             |
| Costes de marketing | 1\.000,00 €          |
| Costes de personal  | 35\.437,50 €         |
| Licencias mensuales | 180,46 €             |
| Servidores          | 37,56 €              |
| **Total**           | **37.152,46 €**      |

Ahora vamos a calcular el **retorno de la inversión (ROI)** para los tres escenarios (optimista, pesimista y realista). Se comenzará mostrando los ingresos obtenidos en varios puntos de referencia (6 meses, 1 año y 2 años), para luego detallar la evolución desde el primer mes.

Comenzamos con el escenario **optimista**, calculando los ingresos que estimamos obtener al sexto mes:

| **Plan de precios**           | **Suscripciones** | <p> </p><p>Total</p> |
| :---------------------------- | :---------------: | :------------------- |
| Plan básico (empresas)        |        158        | 7\.900,00 €          |
| Plan avanzado (empresas)      |        76         | 7\.600,00 €          |
| Plan personalizado (empresas) |        19         | 2\.850,00 €          |
| Plan avanzado (candidatos)    |        153        | 1\.530,00 €          |
| **Total**                     |                   | **19.880,00 €**      |

A pesar de perder dinero en los primeros meses, se comenzó a recuperar la inversión muy pronto.

Calculamos los ingresos que estimamos obtener al decimosegundo mes:

| **Plan de precios**           | **Suscripciones** | <p> </p><p>Total</p> |
| :---------------------------- | :---------------: | :------------------- |
| Plan básico (empresas)        |        258        | 12\.900,00 €         |
| Plan avanzado (empresas)      |        159        | 15\.900,00 €         |
| Plan personalizado (empresas) |        18         | 2\.700,00 €          |
| Plan avanzado (candidatos)    |        557        | 5\.570,00 €          |
| **Total**                     |                   | **37.070,00 €**      |

El número de usuarios es muy superior, por lo que durante este periodo (del sexto al decimosegundo mes) se consideró necesario contratar un técnico y recalcular el coste mensual operativo:

|     <p></p><p>**Roles**</p>     | **Nº de miembros por cada rol** | **Hora básica de servicio** | **Número de horas** | Multiplicador de la hora básica de servicio |  Coste/mes  |    Total    |
| :-----------------------------: | :-----------------------------: | :-------------------------: | :-----------------: | :-----------------------------------------: | :---------: | :---------: |
|        Equipo de soporte        |                3                |             15€             |         160         |                      1                      | 2\.400,00 € | 7\.200,00 € |
| GDPR Protection Manager Officer |                1                |             15€             |         160         |                     1,5                     | 3\.600,00 € | 3\.600,00 € |
|        Community manager        |                1                |             15€             |         160         |                      1                      | 2\.400,00 € | 2\.400,00 € |

| **Tipo de suministro** | **Personas** | <p> </p><p>**Precio del suministro por persona**</p> | <p> </p><p>Total</p> |
| :--------------------- | -----------: | :--------------------------------------------------- | -------------------: |
| Luz                    |            5 | 0,123 €/hora                                         |               98,4 € |
| Internet               |            5 | 1,67 €/semana                                        |               33,4 € |

| <p></p><p>**Gasto**</p>  |      Coste/mes | Total   |
| :----------------------- | -------------: | :------ |
| Vercel (3 personas)      |        56,32 € | 56,32 € |
| GitHub Team (3 personas) | 3,72 €/persona | 11,16 € |
| Plan pro Validect        |         5,62 € | 5,62 €  |

| **Coste total operativo** | **13.404,90 € / mes** |
| :------------------------ | --------------------: |

Más adelante se podrá comprobar, detalladamente, en qué mes se recalculó el coste mensual operativo, así como los ingresos y gastos desde el primer mes. En este punto, la empresa factura considerablemente más de lo que gasta y ya se ha recuperado con creces la inversión.

Para finalizar, analizamos los ingresos que estimamos obtener al vigesimocuarto mes:

| **Plan de precios**           | **Suscripciones** | <p> </p><p>Total</p> |
| :---------------------------- | :---------------: | :------------------- |
| Plan básico (empresas)        |        236        | 11\.800,00 €         |
| Plan avanzado (empresas)      |        266        | 26\.600,00 €         |
| Plan personalizado (empresas) |        30         | 4\.500,00 €          |
| Plan avanzado (candidatos)    |        983        | 9\.830,00 €          |
| **Total**                     |                   | **52.730,00 €**      |

El incremento en el número de usuarios es menor que en el periodo anterior, pero suficiente como para que la empresa tomara la decisión durante este periodo de contratar un técnico y recalcular los costes operativos:

|     <p></p><p>**Roles**</p>     | **Nº de miembros por cada rol** | **Hora básica de servicio** | **Número de horas** | Multiplicador de la hora básica de servicio |  Coste/mes  |    Total    |
| :-----------------------------: | :-----------------------------: | :-------------------------: | :-----------------: | :-----------------------------------------: | :---------: | :---------: |
|        Equipo de soporte        |                4                |             15€             |         160         |                      1                      | 2\.400,00 € | 9\.600,00 € |
| GDPR Protection Manager Officer |                1                |             15€             |         160         |                     1,5                     | 3\.600,00 € | 3\.600,00 € |
|        Community manager        |                1                |             15€             |         160         |                      1                      | 2\.400,00 € | 2\.400,00 € |

| **Tipo de suministro** | **Personas** | <p> </p><p>**Precio del suministro por persona**</p> | <p> </p><p>Total</p> |
| :--------------------- | -----------: | :--------------------------------------------------- | -------------------: |
| Luz                    |            6 | 0,123 €/hora                                         |             118,08 € |
| Internet               |            6 | 1,67 €/semana                                        |              40,08 € |

| <p></p><p>**Gasto**</p>  |      Coste/mes | Total   |
| :----------------------- | -------------: | :------ |
| Vercel (4 personas)      |        75,10 € | 75,10 € |
| GitHub Team (4 personas) | 3,72 €/persona | 14,88 € |
| Plan pro Validect        |         5,62 € | 5,62 €  |

| **Coste total operativo** | **15.853,76 € / mes** |
| :------------------------ | --------------------: |

El aumento en los ingresos supera con creces el aumento en el coste total operativo, por lo que la empresa continúa aumentando los beneficios.

Basándonos en los ingresos estimados en los tres puntos de referencia (6 meses, 1 año y 2 años), podemos estimar la siguiente evolución:

<div style={{ display: 'flex' }}>
  <img src="/img/EstimacionOptimista.png" alt="Imagen 4"/>
</div>

Vamos ahora con el escenario **pesimista**, calculando los ingresos que estimamos obtener al sexto mes:

| **Plan de precios**           | **Suscripciones** | <p> </p><p>Total</p> |
| :---------------------------- | :---------------: | :------------------- |
| Plan básico (empresas)        |        67         | 3\.350,00 €          |
| Plan avanzado (empresas)      |        14         | 1\.400,00 €          |
| Plan personalizado (empresas) |         9         | 1\.350,00 €          |
| Plan avanzado (candidatos)    |         8         | 80,00 €              |
| **Total**                     |                   | **6.180,00 €**       |

Las pérdidas son considerablemente grandes; por lo tanto, durante este periodo la empresa consideró necesario tomar medidas, reduciendo el personal y teniendo que recalcular el coste mensual operativo:

|     <p></p><p>**Roles**</p>     | **Nº de miembros por cada rol** | **Hora básica de servicio** | **Número de horas** | Multiplicador de la hora básica de servicio |  Coste/mes  |    Total    |
| :-----------------------------: | :-----------------------------: | :-------------------------: | :-----------------: | :-----------------------------------------: | :---------: | :---------: |
|        Equipo de soporte        |                1                |             15€             |         160         |                      1                      | 2\.400,00 € | 2\.400,00 € |
| GDPR Protection Manager Officer |                1                |             15€             |         160         |                     1,5                     | 3\.600,00 € | 3\.600,00 € |
|        Community manager        |                1                |             15€             |         160         |                      1                      | 2\.400,00 € | 2\.400,00 € |

| **Tipo de suministro** | **Personas** | <p> </p><p>**Precio del suministro por persona**</p> | <p> </p><p>Total</p> |
| :--------------------- | -----------: | :--------------------------------------------------- | -------------------: |
| Luz                    |            3 | 0,123 €/hora                                         |              59,04 € |
| Internet               |            3 | 1,67 €/semana                                        |              20,04 € |

| <p></p><p>**Gasto**</p> |      Coste/mes | Total   |
| :---------------------- | -------------: | :------ |
| Vercel (1 persona)      |        18,77 € | 18,77 € |
| GitHub Team (1 persona) | 3,72 €/persona | 3,72 €  |
| Plan pro Validect       |         5,62 € | 5,62 €  |

| **Coste total operativo** | **8.507,19 € / mes** |
| :------------------------ | -------------------: |

Calculamos los ingresos que estimamos obtener al decimosegundo mes:

| **Plan de precios**           | **Suscripciones** | <p> </p><p>Total</p> |
| :---------------------------- | :---------------: | :------------------- |
| Plan básico (empresas)        |        77         | 3\.850,00 €          |
| Plan avanzado (empresas)      |        21         | 2\.100,00 €          |
| Plan personalizado (empresas) |         8         | 1\.200,00 €          |
| Plan avanzado (candidatos)    |        18         | 180,00 €             |
| **Total**                     |                   | **7.330,00 €**       |

El aumento de usuarios es muy pequeño y la empresa está en mi peligro, por lo que durante este periodo nos vimos obligados a prescindir del Community Manager y recalcular el coste mensual operativo:

|     <p></p><p>**Roles**</p>     | **Nº de miembros por cada rol** | **Hora básica de servicio** | **Número de horas** | Multiplicador de la hora básica de servicio |  Coste/mes  |    Total    |
| :-----------------------------: | :-----------------------------: | :-------------------------: | :-----------------: | :-----------------------------------------: | :---------: | :---------: |
|        Equipo de soporte        |                1                |             15€             |         160         |                      1                      | 2\.400,00 € | 2\.400,00 € |
| GDPR Protection Manager Officer |                1                |             15€             |         160         |                     1,5                     | 3\.600,00 € | 3\.600,00 € |

| **Tipo de suministro** | **Personas** | <p> </p><p>**Precio del suministro por persona**</p> | <p> </p><p>Total</p> |
| :--------------------- | -----------: | :--------------------------------------------------- | -------------------: |
| Luz                    |            2 | 0,123 €/hora                                         |              39,36 € |
| Internet               |            2 | 1,67 €/semana                                        |              13,36 € |

| <p></p><p>**Gasto**</p> |      Coste/mes | Total   |
| :---------------------- | -------------: | :------ |
| Vercel (1 persona)      |        18,77 € | 18,77 € |
| GitHub Team (1 persona) | 3,72 €/persona | 3,72 €  |
| Plan pro Validect       |         5,62 € | 5,62 €  |

| **Coste total operativo** | **6.080,83 € / mes** |
| :------------------------ | -------------------: |

Por último, analizamos los ingresos que estimamos obtener al vigesimocuarto mes:

| **Plan de precios**           | **Suscripciones** | <p> </p><p>Total</p> |
| :---------------------------- | :---------------: | :------------------- |
| Plan básico (empresas)        |        64         | 3\.200,00 €          |
| Plan avanzado (empresas)      |        10         | 1\.000,00 €          |
| Plan personalizado (empresas) |         6         | 900,00 €             |
| Plan avanzado (candidatos)    |        15         | 150,00 €             |
| **Total**                     |                   | **5.250,00 €**       |

Prescindir del Community Manager redujo las pérdidas durante un tiempo, pero el crecimiento también bajó y la empresa no ha dejado de perder dinero desde que se fundó.

Basándonos en los ingresos estimados en los tres puntos de referencia (6 meses, 1 año y 2 años), podemos estimar la siguiente evolución:

<div style={{ display: 'flex' }}>
  <img src="/img/EstimacionPesimista.png" alt="Imagen 5"/>
</div>

Para finalizar, vamos con la estimación **realista**, calculando los ingresos que estimamos obtener al sexto mes:

| **Plan de precios**           | **Suscripciones** | <p> </p><p>Total</p> |
| :---------------------------- | :---------------: | :------------------- |
| Plan básico (empresas)        |        97         | 4\.850,00 €          |
| Plan avanzado (empresas)      |        27         | 2\.700,00 €          |
| Plan personalizado (empresas) |        12         | 1\.800,00 €          |
| Plan avanzado (candidatos)    |        82         | 820,00 €             |
| **Total**                     |                   | **10.170,00 €**      |

Los primeros meses perdimos dinero, ya que los ingresos no superaron el coste mensual operativo; sin embargo, el crecimiento invitó a pensar que, muy pronto, comenzaríamos a recuperarlo.

Calculamos los ingresos que estimamos obtener al decimosegundo mes:

| **Plan de precios**           | **Suscripciones** | <p> </p><p>Total</p> |
| :---------------------------- | :---------------: | :------------------- |
| Plan básico (empresas)        |        126        | 6\.300,00 €          |
| Plan avanzado (empresas)      |        60         | 6\.000,00 €          |
| Plan personalizado (empresas) |        13         | 1\.950,00 €          |
| Plan avanzado (candidatos)    |        184        | 1\.840,00 €          |
| **Total**                     |                   | **16.090,00 €**      |

El número de usuarios es considerablemente superior, por lo que en este periodo fue necesario contratar un nuevo técnico de soporte y recalcular el coste operativo:

|     <p></p><p>**Roles**</p>     | **Nº de miembros por cada rol** | **Hora básica de servicio** | **Número de horas** | Multiplicador de la hora básica de servicio |  Coste/mes  |    Total    |
| :-----------------------------: | :-----------------------------: | :-------------------------: | :-----------------: | :-----------------------------------------: | :---------: | :---------: |
|        Equipo de soporte        |                3                |             15€             |         160         |                      1                      | 2\.400,00 € | 7\.200,00 € |
| GDPR Protection Manager Officer |                1                |             15€             |         160         |                     1,5                     | 3\.600,00 € | 3\.600,00 € |
|        Community manager        |                1                |             15€             |         160         |                      1                      | 2\.400,00 € | 2\.400,00 € |

| **Tipo de suministro** | **Personas** | <p> </p><p>**Precio del suministro por persona**</p> | <p> </p><p>Total</p> |
| :--------------------- | -----------: | :--------------------------------------------------- | -------------------: |
| Luz                    |            5 | 0,123 €/hora                                         |               98,4 € |
| Internet               |            5 | 1,67 €/semana                                        |               33,4 € |

| <p></p><p>**Gasto**</p>  |      Coste/mes | Total   |
| :----------------------- | -------------: | :------ |
| Vercel (3 personas)      |        56,32 € | 56,32 € |
| GitHub Team (3 personas) | 3,72 €/persona | 11,16 € |
| Plan pro Validect        |         5,62 € | 5,62 €  |

| **Coste total operativo** | **13.404,90 € / mes** |
| :------------------------ | --------------------: |

A pesar de ello, el crecimiento en ingresos hizo que, en este punto, la empresa comenzara a recuperar la inversión.

Por último, analizamos los ingresos que estimamos obtener al vigesimocuarto mes:

| **Plan de precios**           | **Suscripciones** | <p> </p><p>Total</p> |
| :---------------------------- | :---------------: | :------------------- |
| Plan básico (empresas)        |        185        | 9\.250,00 €          |
| Plan avanzado (empresas)      |        133        | 13\.300,00 €         |
| Plan personalizado (empresas) |        14         | 2\.100,00 €          |
| Plan avanzado (candidatos)    |        295        | 2\.950,00 €          |
| **Total**                     |                   | **27.600,00 €**      |

El incremento en el número de usuarios no es tan grande como en el periodo anterior, por lo que no estimamos necesario, bajo esta carga de usuarios, contratar a más personal. El coste operativo se mantendría con respecto al periodo anterior y la empresa comenzaría a ser rentable.

Basándonos en los ingresos estimados en los tres puntos de referencia (6 meses, 1 año y 2 años), podemos estimar la siguiente evolución:

<div style={{ display: 'flex' }}>
  <img src="/img/EstimacionRealista.png" alt="Imagen 6"/>
</div>

Es momento de analizar los resultados obtenidos en cada escenario:

**Escenario optimista:**

- Se tardan 3 meses en acabar un mes con balance positivo.
- Estamos en un balance total positivo a los 4 meses.
- Al transcurrir los 24 meses, la empresa queda en un balance positivo, habiendo ganado 481.507,66 € y consiguiendo recuperar la inversión (puesta en marcha + marketing + desarrollo) en 9 meses.

**Escenario pesimista:**

- Se tardan 11 meses en acabar un mes con balance positivo.
- Nunca se llega a estar en un balance total positivo.
- Al transcurrir los 24 meses, la empresa queda en un balance negativo, sin haber conseguido recuperar la inversión y habiendo perdido una importante suma de dinero.

**Escenario realista:**

- Se tardan 8 meses en acabar un mes con balance positivo.
- Estamos en un balance total positivo a los 14 meses.
- Al transcurrir los 24 meses, la empresa queda en un balance positivo, habiendo ganado 111.601,52 € y consiguiendo recuperar la inversión en 19 meses.

Utilizando la estimación **PERT**, llegamos a la conclusión de que tardaremos alrededor de 8 meses en comenzar a recuperar la inversión (que los ingresos cada mes comiencen a superar a los gastos). Esto es así porque:

PERT = (Optimista + (4x Realista) + Pesimista) / 6 -> (3 + (4x8) + 11)/6 = 7,66 meses

**Plan de acción en caso de aumento de usuarios:**

- Realizar pruebas de carga para asegurarse de que la infraestructura puede manejar el aumento de carga sin degradar la experiencia del usuario.
- Estimar la cantidad de correos electrónicos que se validarán a lo largo del mes, por si fuera necesario mejorar el plan de Validect.
- Identificar causas del aumento de usuarios, analizar en profundidad la nueva situación y considerar diferentes medidas, como por ejemplo:
  - Implementar nuevas funcionalidades que satisfagan al tipo de público que está aumentando la carga del sistema.
  - Ofrecer nuevos niveles de suscripción o paquetes premium para maximizar los ingresos.
  - Contratar más personal para dar soporte a la nueva carga de usuarios.
  - Contratar alguna campaña de marketing para que el aumento sea aún mayor.

**Plan de acción en caso de disminución de usuarios:**

- Estimar la cantidad de correos electrónicos que se validarán a lo largo del mes, por si fuera posible adquirir un plan más económico.
- Identificar causas de la disminución de usuarios, así como si hay segmentos específicos de usuarios que están dejando la aplicación y considerar diferentes medidas, como por ejemplo:
  - Implementar cambios o mejoras basadas en el feedback de los usuarios que se han ido.
  - Desarrollar campañas dirigidas a usuarios inactivos que pagaron en algún momento alguno de los planes, ofreciendo incentivos para su retorno.
  - Introducir ofertas especiales o descuentos para atraer a nuevos usuarios o recuperar a los antiguos.

Las medidas dependen en gran medida del motivo por el que se haya producido el aumento o disminución de usuarios, por lo que el plan de acción es meramente orientativo, exceptuando los dos primeros pasos en caso de aumento de usuarios y el primero en caso de disminución, que deben realizarse bajo cualquier contexto.

# <a name="_ihj9lnsxca0c"></a>Análisis de los modelos de negocio de los competidores

El modelo de negocio que siguen nuestros competidores es principalmente la **monetización por planes de pago mensual**, que van desde el básico, con las funcionalidades mínimas de la aplicación que permite a los competidores atraer a una variedad de clientes con diversas necesidades y presupuestos, además de ciertas restricciones en distintos aspectos, al premium, el cual contiene todas las funcionalidades y su uso de forma ilimitada.

Los diversos planes disponibles presentan diferencias de precios entre sí, siendo **Manatal** el competidor con la oferta más económica **15,00** **€/mes** (15 consultas) y **LinkedIn Recruiter** con la propuesta más costosa **574,99** **€/mes** (consultas ilimitadas). Este enfoque de tarifas sugiere una competencia centrada en el valor percibido y la oferta de características exclusivas asociadas a los planes premium.

Los clientes son empresas de varios tamaños y diferentes sectores, que requieren una solución para mejorar su proceso de contratación de nuevos empleados. Un **elemento diferenciador** es que nuestros competidores no expanden sus modelos de pago hacia los propios **candidatos** que se encuentran en búsqueda de empleo, además de que **no están orientadas al sector IT.**

# <a name="_wckdhu8m1di"></a>Decisión de monetización

Se han planteado dos modelos de negocio, enfocados a las empresas que buscan candidatos y a los candidatos que buscan trabajo:

### <a name="_tgj66a4xfzrz"></a> Empresas

La monetización seguirá un modelo de **suscripción mensual**, y se ha llegado a esta conclusión tras un análisis de mercado y tras sopesar otras opciones como la **venta de licencias** y el uso de **créditos de API**. Creemos que este último modelo de monetización puede ser poco intuitivo para los usuarios. La venta de licencias se mantiene como una opción secundaria, pero creemos que la suscripción puede resultar más cómoda para el usuario, al ofrecer diferentes posibilidades. Generalmente, cuando se vende un producto, las únicas opciones que tiene el usuario son comprarlo o no. Al darle más opciones fomentamos que el usuario compare y le preste más atención a las características que ofrecemos.

Hemos considerado que la **mensualidad** es adecuada, ya que un pago semanal permitiría que, por un precio muy reducido, muchos usuarios utilizaran la aplicación el tiempo justo y necesario para satisfacer su necesidad, y nos interesa que pasen más tiempo en la aplicación. Un pago anual podría ser incómodo para el usuario, ya que pueden pasar varios meses entre un proceso de contratación y otro, por lo que las empresas difícilmente pagarán una anualidad para no utilizar la aplicación durante varios meses.

Ofrecemos los siguientes planes de pago:

|                        |          **Precio**           |                                                                                                                                                                                                                                                 **Ventajas**                                                                                                                                                                                                                                                  |
| ---------------------- | :---------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Plan básico**        |            50€/mes            |                                                                                          <p>-Hasta 40 búsquedas de candidatos al mes.</p><p><a name="_rtddy1mgx4qk"></a>-Búsqueda individual y por equipos de hasta 3 personas.</p><p><a name="_m4h9hoflldfd"></a>-Sin scroll entre las opciones de candidatos.</p><p>-Filtros básicos disponibles.</p><p><a name="_skpsf4noel0i"></a>-Prueba gratis de 30 días.</p>                                                                                          |
| **Plan avanzado**      |    <p></p><p>100€/mes</p>     | <p>-Hasta 250 búsquedas de candidatos al mes.</p><p>-Búsqueda por equipos de hasta 5 personas.</p><p><a name="_93fx36426obl"></a>-Scroll de hasta 10 opciones diferentes para cada uno de los resultados en búsquedas por equipo.</p><p><a name="_wt8jlk1kh0sf"></a>-Todos los filtros disponibles.</p><p><a name="_rto42g28toxo"></a>-Estadísticas del perfil del candidato.</p><p><a name="_mppxewf1odhr"></a>-Tiempos de respuesta más cortos.</p><p><a name="_fnfq6vc5t9px"></a>-Soporte prioritario.</p> |
| **Plan personalizado** | <a name="_lajxygsx53si"></a>- |                                                                                                                                                                                                                                 -Características personalizadas bajo demanda.                                                                                                                                                                                                                                 |

<div style={{ display: 'flex' }}>
  <img src="/img/PricingEmpresas.png" alt="Imagen 7"/>
</div>

Estos planes han sido determinados tras un minucioso análisis de mercado. El **plan básico** se ha posicionado con **un precio más competitivo** y suficientes características como para que sea completamente funcional en un proceso de contratación. La idea es que los usuarios del plan básico sientan que tienen todo lo que necesitan para cumplir con el propósito con el que instalaron la aplicación.

El **plan avanzado** supera con creces las características ofrecidas por el plan básico. En lugar de hacer sentir al usuario que necesita actualizar su plan porque el básico le es insuficiente, buscamos que los usuarios que utilicen frecuentemente la aplicación quieran actualizar al plan avanzado porque **sus características son ampliamente superiores** y podrían tener una experiencia de uso aún mejor.

El **plan personalizado** tiene el objetivo de que las empresas contacten con nuestro equipo para negociar un plan que se ajuste a sus necesidades concretas. Creemos que será un escenario común, puesto que ofrecemos varias cosas diferentes y, en lugar de plantear un nuevo plan con características impuestas, muchas empresas querrán seleccionar qué características de entre las disponibles necesitan, y en qué medida.

### Candidatos

<a name="_5ol0mjrnt5fj"></a>La monetización seguirá un modelo de **suscripción mensual**, y se ha llegado a esta conclusión por motivos similares al caso anterior. Al igual que con las empresas, creemos que la **mensualidad** es adecuada, ya que el objetivo del candidato al utilizar la aplicación es encontrar empleo, y difícilmente pagará una anualidad si existe la posibilidad de que lo encuentre mucho antes. Al ofrecer funcionalidadesmuy relacionadas con la búsqueda de empleo, es natural que el usuario deje de pagar cuando encuentre uno (aunque se tratará de evitar, especialmente a través de las campañas de marketing).

Ofrecemos los siguientes planes de pago:

|                   |                                  **Precio**                                   |                                                                                                                                                                                                                 **Ventajas**                                                                                                                                                                                                                  |
| ----------------- | :---------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Plan básico**   |                                   Gratuito                                    |                                                                                                                                               <p><a name="_knmwk1yv2xqd"></a>-Todas las funcionalidades básicas de la aplicación.</p><p>-Posibilidad de actualizar los datos cada 30 días.</p>                                                                                                                                                |
| **Plan avanzado** | <p></p><p><a name="_5ba8shiu5m7"></a><a name="_i452zi3xp17z"></a>10 €/mes</p> | <p><a name="_45wnzio2sgdt"></a>-Todas las funcionalidades del plan anterior.</p><p><a name="_mbzkg4xvbnz"></a>-Posibilidad de actualizar los datos tres veces cada 30 días.</p><p><a name="_k60xc3dcs4i"></a>-Posibilidad de ver qué empresas han visualizado tu perfil.</p><p><a name="_fiwf192aq2yh"></a>-Estadísticas avanzadas de la aplicación, que ofrecerán una visión de los perfiles profesionales que están teniendo más éxito.</p> |

<div style={{ display: 'flex' }}>
  <img src="/img/PricingCandidatos.png" alt="Imagen 8"/>
</div>

A diferencia de para las empresas, el **plan básico** es gratuito. Queremos que cualquier usuario, independientemente de poder pagar o no, tenga la oportunidad de encontrar empleo en la aplicación.

El **plan avanzado** le ofrece al usuario ciertas ventajas para que su experiencia en la aplicación sea más enriquecedora, pero tendrá las mismas oportunidades de recibir ofertas laborales que los usuarios del plan básico.

Hemos identificado que, **para amortizar nuestra inversión** en un período aproximado de un año, sería necesario una base de **544 empresas** en el **plan básico**, **204 empresas** en el **plan avanzado**, **1630 candidatos** en el **plan avanzado** o cualquier combinación de estos (sin contar el plan personalizado).

Además, **para que el mantenimiento anual sea rentable**, necesitaríamos **247 empresas** en el **plan básico**, **93 empresas** en el **plan avanzado**, **740 candidatos** en el **plan avanzado** o cualquier combinación de estos (sin contar el plan personalizado).

<div style={{ display: 'flex' }}>
  <img src="/img/PrecioPlanes.png" alt="Imagen 9"/>
  Figura 1. Gráfica para calcular el precio de los planes y el volumen de usuarios necesarios
</div>

# <a name="_gpwc251m2fw5"></a>Bibliografía

1. Gráfica generada con GeoGebra: <https://www.geogebra.org/classic?lang=es>
2. Numero de empresas del sector de la informatica en Sevilla <https://www.informa.es/directorio-empresas/J062_PROGRAMACION-CONSULTORIA-OTRAS-ACTIVIDADES-RELACIONADAS-INFORMATICA/Provincia_SEVILLA.html>
3. Desempleo en Sevilla: https://www.sevilla.org/actualidad/noticias/2023/el-desempleo-en-sevilla-capital-baja-de-la-barrera-de-las-62-000-personas-el-dato-mas-reducido-en-14-anos
4. Pricing Github: https://github.com/pricing
5. Límites de la API de Graphql: https://docs.github.com/en/graphql/overview/rate-limits-and-node-limits-for-the-graphql-api
6. Pricing Validect: https://rapidapi.com/pmtech/api/validect-email-verification/pricing
7. Pricing Vercel: https://vercel.com/pricing
