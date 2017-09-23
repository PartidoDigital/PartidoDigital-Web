---
layout: pagina
title: Plataforma
date: 2017-09-23
---

Uno de los principales valores del Partido Digital es la transparencia. Y esa transparencia no solo aplica al manejo de las [finanzas](/finanzas) o de su [accionar](/documentacion), sino que también aplica al software que se utiliza para brindar espacios de participación a los uruguayos. Ese software que llamaremos herramientas, y que constituyen la plataforma del Partido Digital son todas de código abierto.

Que el software sea de código abierto significa que el código fuente detrás de cada una de esas herramientas está a la vista de todos. De esa manera no queda ninguna duda de que no se está haciendo algo distinto a lo que la herramienta promete ofrecer. Además, al ser de código abierto, cualquier persona con conocimiento técnico podría proponer mejoras o modificaciones, también a la vista de todos, para que logre mejor su objetivo, se corrijan errores o se propongan nuevas funcionalidades que ayuden al Partido Digital con sus objetivos.

## Herramientas

A continuación se detallan las herramientas que se decidieron utilizar desde el Partido Digital para lograr sus objetivos.

### Herramienta de debate
La herramienta de debate que utiliza el Partido Digital es la principal herramienta para colaborar. Esta herramienta habilita a todos aquellos que quieran proponer constructivamente problemáticas, para aprovechar el conocimiento de la comunidad de manera de poder buscar la mejor solución posible. <a data-toggle="collapse" href="#detalleDebate" aria-expanded="false" aria-controls="detalleDebate">Detalles técnicos</a>

[Ir a la herramienta de debate](https://debate.partidodigital.org.uy){:class="btn" target="_blank"}
[Ir al repositorio de código fuente](https://github.com/discourse/discourse){:class="btn" target="_blank"}

<div class="collapse" id="detalleDebate">
  <p>
    El equipo técnico optó por la utilización de una instancia de <a href="https://discourse.org" target="_blank">Discourse</a>, la reimplementación del clásico foro pero en el siglo XXI. La misma funciona sobre un droplet 1 GB Memory / 30 GB Disk / NYC3 - Ubuntu 16.04.1 x64 en <a href="#digitalocean">DigitalOcean</a>. Está configurado que instale los siguientes plugins:
  </p>
  <ul>
      <li><a href="https://github.com/PartidoDigital/Discourse-Auth0-Plugin" target="_blank">Discourse-Auth0-Plugin</a>: Necesario para poder utilizar el <a href="#servicio-de-manejo-de-usuarios">servicio de manejo de usuarios</a> elegido.</li>
      <li><a href="https://github.com/discourse/discourse-assign" target="_blank">Discourse-Assign</a>: Necesario para que el equipo interno pueda asignar posts a personas para organizar nuestras tareas.</li>
      <li><a href="https://github.com/discourse/discourse-chat-integration" target="_blank">Discourse-Chat-Integration</a>: Necesario para integrar el <a href="#servicio-de-comunicacion-instantanea">servicio de comunicación instantánea</a> elegido.</li>
  </ul>
</div>

### Herramienta de voto
La herramienta de voto es la vía por la cual las propuestas del Partido Digital llegan a ser votadas. La misma debe proveer una manera fácil de presentar una propuesta con toda la información relevante, la posibilidad de debatir cada propuesta además de proveerle a todos los ciudadanos uruguayos habilitados para votar (que cuentan con su credencial cívica) la capacidad de votar positivamente, negativamente o abstenerse.

Además, por cada propuesta disponible para votar, se le asignará una categoría, para las cuales se le asignaran expertos en el área para enriquecer el debate sobre dicha propuesta. Los expertos al comentar en la propuesta se les priorizará en la lista de comentarios para destacar sus opiniones.

El resultado de la votación de cada propuesta es la que se tendrá en cuenta para ordenarle a los representates del Partido Digital, sea en la entidad que sea, votar en consecuencia. Más información acá del proceso de votación en la [página sobre participación](/participacion#votacion-de-propuestas). <a data-toggle="collapse" href="#detalleVotacion" aria-expanded="false" aria-controls="detalleVotacion">Detalles técnicos</a>

[Próximamente disponible para acceder...](){:class="btn disabled" target="_blank"}
[Ir al repositorio de código fuente](https://github.com/democracyos/democracyos){:class="btn" target="_blank"}

<div class="collapse" id="detalleVotacion">
  <p>
    La herramienta elegida por el momento es <a href="http://democracyos.org" target="_blank">DemocracyOS</a>. Si bien ya estamos experimentando con una instancia en <a href="#heroku">Heroku</a>, estamos implementando agregados para que se ajusten a las necesidades del Partido Digital. Como por ejemplo la posibilidad de asignar multiples expertos a las categorías de las propuestas, la utilización del <a href="#servicio-de-manejo-de-usuarios">servicio de manejo de usuarios</a> elegido y la integración con la <a href="#herramienta-de-debate">herramienta de debate</a> para el espacio de comentarios.
  </p>
</div>

### Herramienta de manejo de finanzas

## Servicios

Las herramientas que componen la plataforma del Partido Digital necesitan de ciertos servicios para poder funcionar correctamente. Además existen servicios que se utilizan internamente. A continuación se detallan todos los servicios utilizados.

### Servicio de manejo de usuarios
Existe un servicio que maneja todo lo relacionado con los usuarios llamado Auth0. El mismo es el que se presenta al momento de registrarse o de ingresar a las herramientas del Partido Digital como la [herramienta de debate](#herramienta-de-debate).

Este servicio se caracteriza por brindar un sistema de manejo de usuarios avanzado, donde es posible agregarle medidas de seguridad como el de autenticación de dos factores, autenticación única para multiples herramientas (SSO), protección y notificación de contraseñas filtradas por aplicaciones externas, entre otras. Además, brinda todos sus servicios sin costo a proyectos de código abierto como lo es el Partido Digital, por lo que en este momento no tiene un costo asociado para su uso.

[Ir al sitio web de Auth0](https://auth0.com){:class="btn" target="_blank"}

### Servicios financieros
Para recibir donaciones y proveer la mayor cantidad de vías para obtener aportes, el Partido Digital integra los siguientes servicios financieros.

#### MercadoPago
MercadoPago nos habilita poder crear un pago simil a lo que sería un pago recurrente. De esta forma puedes aportar una pequeña cantidad todos los meses sin que tenga demasiado efecto en tu economía.

[Conocer las tarifas de MercadoPago](https://www.mercadopago.com.uy/ayuda/recibir-pagos-costos_220){:class="btn" target="_blank"}

#### Colectate
Colectate nos facilita la posibilidad de ofrecer el pago mediante los bancos de plaza, de esta forma puedes hacer una transferencia desde la comodidad de tu celular con la aplicación del banco que gustes.

[Conocer las tarifas de Colectate](https://www.colectate.com.uy/generales/tarifas.php){:class="btn" target="_blank"}

#### Paypal
Paypal se a transformado en una vía de pago electrónico muy popular en los últimos tiempos posibilitando variados mecanismos para efectivizar un aporte.

[Conoce las tarifas de Paypal](https://www.paypal.com/uy/selfhelp/article/%C2%BFcu%C3%A1les-son-las-comisiones-de-las-cuentas-paypal-faq690){:class="btn" target="_blank"}

### Servicio de alojamiento de código fuente
Todo el código fuente asociado a las herramientas que utiliza el Partido Digital se puede encontrar en uestro servicio de alojamiento de código fuente GitHub. Allí por ejemplo se encuentra el código fuente de la página web del Partido Digital así como otros recursos relacionados con el software que utilizamos.

En GitHub, cada conjunto de código fuente de un recurso en particular se encuentra en lo que se llama repositorio. Cada repositorio además tiene la posiblidad de recibir feedback tanto técnico para proponer cambios que mejoren la implementación del recurso que representa el repositorio como también sugerencias. Para esto es necesario tener una cuenta de GitHub. De todas formas el mismo feedback se acepta en la [herramienta de debate](#herramienta-de-de-b-a-te) del Partido Digital.

Ten en cuenta que en esta página web siempre vas a encontrar un pié de página donde hace referencia al archivo en GitHub que representa lo que estas viendo, así puedes también ver cómo fue implementado y proponer cambios si así lo deseas. El Equipo técnico del Partido Digital va a estar pendiente a tus comentarios en GitHub como también en la [herramienta de debate](#herramienta-de-debate).

[Ir a la organización del Partido Digital en GitHub](https://github.com/PartidoDigital){:class="btn" target="_blank"}

### Servicios de ejecución de software
Las herramientas que representan software utilizado por el Partido Digital, como la [herramienta de debate](#herramienta-de-debate) o la [herramienta de voto](#herramienta-de-voto), deben ejecutarse en algún servicio de ejecución software. Estos son los encargados de que siempre esten disponibles y que los mismos funcionen correctamente.

A continuación se detallan aquellos servicios de ejecución de software que el Partido Digital utiliza.

#### DigitalOcean
DigitalOcean es el servicio de ejecución de software utilizado para darle vida a la [herramienta de debate](#herramienta-de-debate). Aquí mediante los "droplets" que ofrece el servicio, una o más herramientas con sus recursos necesario se ejecutan.

Su mayor ventaja es que se puede hacer crecer esos "droplets" a medida que el software que se ejecuta en él va requiriendo de más recursos de memoria y de transferencia, lo que lo hace un servicio totalmente escalable a necesidades cambiantes y a fluctuuaciones.

[Conoce los costos de DigitalOcean (en inglés)](https://www.digitalocean.com/pricing/#droplet){:class="btn" target="_blank"}

#### Heroku
Heroku es otro de los servicios de ejecución de software que el Partido Digital utiliza. En este momento ninguna de nuestras herramientas disponibles al público la utilizan, pero si estamos probando la futura [herramienta de voto](#herramienta-de-voto).

En particular, Heroku habilita la posibilidad de crear secuencias rápidas para tener el último código fuente ejecutando luego de que se hacen cambios, tiene la posibilidad de ejecutar código de forma gratuita, ideal para no consumir recursos económicos mientras un software se encuentra en la fase de prueba previo a que se haga público su uso.

[Conoce más sobre Heroku](https://es.wikipedia.org/wiki/Heroku){:class="btn" target="_blank"}

### Servicio de administración de contenido y dominios
Un servicio de administración de contenido y dominios de internet es fundamental para el manejo de un perfil online de cualquier tipo de proyecto. Sin él no se podría configurar la seguridad con la cuál las páginas web son entregadas al navegador de los usuarios, ni se podría utilizar un dominio de internet, como es partidodigital.org.uy para la página web oficial del Partido Digital, debate.partidodigital.org.uy o debate.uy para la [herramienta de debate](#herramienta-de-debate), entre otros dominios.

El equipo técnico optó por la utiliación de Cloudflare como su servicio de administración de contenido y dominios. Este servicio provee una opción gratuita que se ajusta con las necesidades actuales del Partido Digital y puede llegar a optarse alguna de sus opciones pagas en cualquier momento que sea necesario si llega a haber algún otro requerimiento.

[Conoce más sobre Cloudflare](https://es.wikipedia.org/wiki/Cloudflare){:class="btn" target="_blank"}

### Servicio de comunicación instantánea
Además de proveer una [herramienta de debate](#herramienta-de-debate) donde se pueden crear debates y discusiones que generan una clara conversación que se puede visualizar todos los aportes de los miembros de a herramienta en orden cronológico para entender hacia donde va determinado tema discutido, el Partido Digital también utiliza un servicio de comunicación instantánea para conversaciones más fugaces internamente o como canal de difusión para todos aquellos que quieran ser notificados de ciertos hitos relacionados con el Partido Digital.

Este servicio utilizado se llama Telegram, el primer servicio de comunicación instantánea que introdujo el concepto de mensajes seguros entre dos personas. El más conocido de estos servicios es WhatsApp y sin que Telegram haya implementado este concepto en su aplicación para teléfonos móviles inteligentes, WhatsApp tampoco lo hubiera implementado.

En particular, Telegram provee un canal de comunicación fácil de configurar que no depende del teléfono móvil exclusivamente como si requiere WhatsApp. Es posible acceder a la versión online sin tener el teléfono móvil contigo, o utilizarlo en tu tableta con acceso a Internet. Además, es posible acceder a comunicarse con una persona sin tener que saber su número de teléfono móvil, lo que lo hace más conveniente. Por ejemplo, pueden encontrar el ícono de Telegram en los vínculos a redes sociales del [equipo del Partido Digital](/#equipo) por si desean comunicarse con ellos específicamente.

[Ir al canal de difusión del Partido Digital en Telegram](https://t.me/PartidoDigital){:class="btn" target="_blank"}
