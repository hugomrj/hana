---
titulo: "Los datos táctiles como llave para desbloquear el entrenamiento robótico y sus ingresos"
extracto: "Un análisis técnico y de mercado sobre el estado de los datasets robóticos, la inversión en IA física, y por qué el tacto humano podría ser la señal de entrenamiento que la robótica industrial aún no ha monetizado."
fecha: "2026-08-04T01:06:00" 
tiempo_lectura: "16 min"
categoria: "Robótica"
etiquetas: ["IA física", "datos táctiles", "embodied AI", "humanoides", "datasets robóticos", "Nerve"]
---

La robótica dejó de ser un campo de laboratorio para convertirse en una industria que moviliza cientos de miles de trabajadores, miles de millones de dólares en capital de riesgo y gobiernos enteros dispuestos a financiar modelos fundacionales de inteligencia artificial física. Sin embargo, en medio de esta explosión de actividad, existe una pregunta técnica aún sin resolver: ¿qué tipo de datos de entrenamiento generan realmente robots útiles? La visión ha dominado el discurso gracias a modelos como RT-2 de Google DeepMind, pero el tacto —esa señal de contacto, fuerza y presión que los humanos usamos inconscientemente— permanece como una frontera inexplorada que podría redefinir tanto la eficiencia del entrenamiento como la economía de quienes venden esos datos. Este artículo examina la evidencia verificada sobre datasets robóticos, la inversión en IA física, los costos de recolección de datos y el caso de negocio para una nueva categoría de infraestructura sensorial.

## La escala de los datos robóticos: de miles a cientos de miles de trayectorias

El entrenamiento de robots por imitación ya no depende de pequeños ensayos en laboratorios aislados. Tres conjuntos de datos públicos, publicados entre 2023 y 2024, ilustran la velocidad de esta transformación. BridgeData V2, desarrollado por investigadores de Berkeley, Stanford y Google, contiene 60.096 demostraciones de tareas cotidianas de manipulación. DROID, el Dataset de Interacción Robótica Distribuida, reúne 76.000 trayectorias teleoperadas —350 horas de interacción— recolectadas en 564 escenas reales por 50 operadores humanos distribuidos en 13 instituciones de América del Norte, Asia y Europa. RH20T, por su parte, alcanza aproximadamente 110.000 trayectorias que cubren 147 tareas en múltiples plataformas robóticas.

Esta escala es impresionante desde una perspectiva académica, pero los recuentos de trayectorias no revelan por sí solos el gasto comercial ni la calidad de la señal. DROID, por ejemplo, utiliza brazos Franka Emika Panda idénticos en todas sus 13 ubicaciones, con cámaras estéreo Zed 2 y Zed Mini sincronizadas, y anotaciones en lenguaje natural generadas por crowdsourcing. Su diseño prioriza la consistencia multi-vista y la diversidad de escenas, no la generalización entre cuerpos robóticos distintos. RH20T, desarrollado por la Universidad Jiao Tong de Shanghái, demuestra que la captura multimodal puede escalar más allá de una sola tarea, pero su utilidad comercial depende de cuántos robots reales pueden beneficiarse de esas demostraciones sin entrenamiento adicional.

<div class="chart-container">
    <div class="chart-title">Datasets públicos de manipulación robótica (número de trayectorias). Fuentes: BridgeData V2, DROID, RH20T</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico1"></canvas>
    </div>
</div>

## La inversión en IA física: capital abundante, presupuestos táctiles invisibles

El capital disponible para la robótica con inteligencia artificial incorporada —embodied AI— ha alcanzado niveles que solo hace tres años parecían pertenecer a la industria del software. En febrero de 2024, Figure AI anunció una ronda Serie B de 675 millones de dólares a una valoración de 2.600 millones, con participación de Microsoft, OpenAI Startup Fund, NVIDIA, Jeff Bezos a través de Bezos Expeditions, Parkway Venture Capital, Intel Capital y ARK Invest. En agosto de 2024 presentó Figure 02, un humanoide con 35 grados de libertad, 16 en sus manos de cinco dedos, capacidad para cargar 25 kilogramos, seis cámaras RGB y un modelo visión-lenguaje-acción a bordo con el triple de potencia computacional que su predecesor.

Skild AI, por su parte, salió de sigilo en julio de 2024 con una Serie A de 300 millones de dólares liderada por Lightspeed Venture Partners, Coatue, SoftBank Group y Jeff Bezos, alcanzando una valoración de 1.500 millones. Su propuesta no es construir robots, sino un "cerebro generalista" —un modelo fundacional entrenado en al menos mil veces más puntos de datos que los modelos competidores— capaz de servir a múltiples cuerpos robóticos, escenarios y tareas, desde cuadrúpedos resistentes hasta humanoides que realizan manipulación diestra. 1X Technologies completó el triángulo con una Serie B de 100 millones de dólares.

Estas cifras demuestran capacidad de inversión, no demanda verificada por datos táctiles. Ninguna de estas rondas revela cuánto capital se destina específicamente a demostraciones con guantes instrumentados, sensores de fuerza o sistemas de captura háptica. El dinero fluye hacia hardware, ingeniería y computación, mientras que el presupuesto para la capa sensorial que podría hacer que esos robots sean realmente diestros permanece opaco.

<div class="chart-container">
    <div class="chart-title">Rondas de financiación en embodied AI (2024). Fuentes: Figure AI, Skild AI, 1X Technologies</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico2"></canvas>
    </div>
</div>

## La producción de datos como operación industrial

La recolección de datos robóticos a escala industrial ya no es una metáfora. JD.com, el gigante chino de comercio electrónico, está trabajando con el gobierno local de Suqian —ciudad natal de su fundador Richard Liu— para generar 10 millones de horas de datos de entrenamiento robótico en dos años. El plan moviliza 100.000 empleados y 500.000 contratistas externos, quienes filman sus tareas domésticas, agrícolas y de cuidado de ancianos usando cámaras montadas en la cabeza y sensores de muñeca. En un barrio dedicado de Suqian, residentes como Gao Bo, una ama de casa, ganan 20 yuanes por hora filmándose haciendo quehaceres durante seis horas diarias.

Esta operación convierte el trabajo doméstico en una infraestructura de datos nacional. Un análisis de Interact Analysis concluye que China lidera en hardware y ecosistema de datos para robótica humanoide, mientras Estados Unidos mantiene ventaja en talento de investigación en IA. Sin embargo, el volumen no garantiza calidad. Un residente de Beijing que contrató un robot humanoide de X Square Robot por 149 yuanes reportó que la máquina tardó aproximadamente una hora en doblar tres prendas de ropa, mientras una empleada doméstica humana completaba la mayor parte del trabajo. La pregunta central sigue abierta: ¿un programa de 10 millones de horas producirá robots capaces de generalizar más allá de entornos controlados?

<div class="chart-container">
    <div class="chart-title">Escala de recolección de datos robóticos (JD.com Suqian). Fuente: aiweekly.co / Rest of World</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico3"></canvas>
    </div>
</div>

## El costo de la hora de trayectoria: un rango demasiado amplio

Las divulgaciones de AgiBot, una empresa china de robótica, implican un costo laboral por hora de trayectoria que oscila entre 265 y 2.244 yuanes. Un rango de mercado reportado por fuentes secundarias se sitúa entre 500 y 1.000 yuanes. Los rangos se superponen, pero su amplitud —un factor de 8,5 entre la estimación inferior y superior de AgiBot— muestra por qué es imposible inferir un presupuesto de cliente fiable a partir de una sola estimación pública.

Para contextualizar, el experimento RoboTurk de Stanford demostró que 54 usuarios distribuidos pueden generar 2.114 demostraciones —111,25 horas totales— usando tres brazos Sawyer en una sola semana. Esa productividad ya es medible. El desafío para cualquier proveedor de datos táctiles no es demostrar que la recolección es posible, sino preservar la usabilidad, la sincronización y la comodidad del operador a escala similar mientras se añade una capa sensorial que registra fuerza, presión y deformación en cada contacto.

<div class="chart-container">
    <div class="chart-title">Costo por hora de trayectoria (yuanes). Fuentes: AgiBot, insidecm.substack.com</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico4"></canvas>
    </div>
</div>

## La promesa del tacto: Feel the Force y la transferencia zero-shot

En 2025, un equipo de la Universidad de Nueva York, UC Berkeley y NYU Shanghái presentó Feel the Force (FTF) en un taller de la conferencia RSS. El sistema utiliza un guante táctil de bajo costo para medir fuerzas de contacto y un modelo de estimación de pose basado en visión para capturar demostraciones humanas. Con estos datos entrena una política transformer en lazo cerrado que predice trayectorias del efector final y fuerzas de contacto deseadas. Al desplegarse en un robot Franka Panda, un controlador PD modula el cierre de la pinza para igualar las fuerzas predichas, logrando una tasa de éxito del 77% en cinco escenarios de manipulación sensibles a la fuerza.

El resultado es técnicamente notable porque demuestra transferencia zero-shot desde demostraciones humanas táctiles a un robot sin ningún dato robótico durante el entrenamiento. Sin embargo, un resultado de taller no establece rendimiento productivo generalizado. FTF prueba que el tipo de datos propuesto puede importar, pero aún se necesita una comparación cuantificada contra la misma política sin entrada táctil para tomar una decisión comercial informada. La pregunta no es si el tacto añade información —eso es físicamente obvio— sino si esa información justifica el costo adicional de recolección, calibración e integración en un pipeline de entrenamiento industrial.

## La visión como línea base exigente

Google DeepMind demostró con RT-2, publicado en 2023, que un modelo visión-lenguaje-acción entrenado con datos web a escala internet puede transferir conocimiento semántico a tareas robóticas nunca vistas. RT-2 alcanzó aproximadamente un 62% de éxito en habilidades emergentes —tareas que requieren razonamiento simbólico, comprensión multilingüe y reconocimiento de personas— superando a RT-1 por un factor de tres en promedio. Críticamente, logró esto sin entrada táctil alguna.

Este dato es incómodo para quienes argumentan que el tacto es indispensable. RT-2 demuestra que para un subconjunto significativo de tareas de manipulación, la visión combinada con modelos de lenguaje preentrenados es suficiente. La implicación no es que el tacto sea inútil, sino que su valor comercial debe demostrarse en el subconjunto de tareas donde la visión falla: manipulación de objetos deformables, inserción de conectores con tolerancias ajustadas, o manipulación de frutas y alimentos donde la fuerza de contacto determina el éxito. La frontera de capacidades de un modelo de lenguaje es irregular, y el tacto debe ganarse su lugar en cada tarea específica.

## Del cuerpo humano al cuerpo robótico: el cuello de botella del retargeting

Una mano humana tiene más de 20 dimensiones articuladas. Una pinza paralela común tiene una. Esa disparidad de 20 a 1, documentada desde los trabajos pioneros de Cutkosky en 1989 sobre diseño de pinzas, convierte el retargeting —la traducción de movimiento humano a órdenes para un cuerpo robótico diferente— en un cuello de botella del producto, no en una simple etapa de exportación.

El dataset Phi9 ilustra la complejidad: combina cinco sensores corporales activos con un guante instrumentado para rastrear dedos con precisión en 2.052 cuadros. VTDexManip reporta 10 tareas cotidianas y 182 objetos. DexCap describe un sistema portátil de captura de movimiento para manipulación diestra. La amplitud es alentadora, pero cada sistema resuelve solo una parte del problema. Un guante puede registrar mucho más movimiento del que muchos robots pueden reproducir, y la pérdida de información en la traducción no es lineal: un gesto humano sutil de ajuste de presión puede no tener equivalente mecánico en una pinza de dos dedos.

## La infraestructura sensorial: de materiales de seis dólares a sistemas integrados

La detección táctil no exige automáticamente superficies frágiles y costosas. ReSkin, desarrollado por investigadores de Meta AI y Carnegie Mellon University en 2021, reportó material sensor por menos de seis dólares y durabilidad superior a 50.000 interacciones. El sensor mide 2-3 milímetros de grosor, detecta fuerzas tan ligeras como 0,1 newtons con una precisión de 1 milímetro, y puede reemplazarse fácilmente cuando se desgasta.

Sin embargo, esas cifras corresponden al material sensor, no a un guante calibrado completo ni a un sistema comercial de captura. La electrónica, la calibración, la integración y la mano de obra de reemplazo quedan fuera de ese precio. Los componentes táctiles van desde materiales de unos pocos dólares hasta sistemas integrados de miles, pero el precio del componente no predice el costo del sistema entregado. Para un arquitecto de sistemas robóticos evaluando una inversión en infraestructura de datos táctiles, esto significa que los presupuestos deben calcularse desde el sistema completo, no desde el costo unitario del sensor.

## Los gobiernos entran en escena: Japón, Corea y la carrera por la IA física

El capital privado no es el único actor. En 2026, el Ministerio de Economía, Comercio e Industria de Japón anunció 387.300 millones de yenes —aproximadamente 2.400 millones de dólares— para Noetra, una iniciativa interindustrial con 44 empresas incluyendo SoftBank, Sony, NEC y Honda, destinada a desarrollar modelos fundacionales de IA física. El plan a largo plazo podría alcanzar el billón de yenes hasta 2030, alineado con la estrategia de desplegar 10 millones de robots con IA en 18 campos para 2040.

Corea del Sur, por su parte, opera desde 2020 el Programa de Vales de IA, que ha apoyado más de 1.000 proyectos con efectos positivos reportados en empleo, ventas y desempeño empresarial. Estos subsidios pueden reducir la barrera de la primera compra para tecnología emergente, pero son una vía para probar demanda, no prueba de disposición a pagar específicamente por datos táctiles.

<div class="chart-container">
    <div class="chart-title">Inversión gubernamental en IA física (millones USD). Fuentes: METI Japón, estimaciones de conversión</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico5"></canvas>
    </div>
</div>

## El ancla de precio del hardware y el modelo de negocio de los datos

En 2026, el humanoide 1X NEO se lista a 20.000 dólares al contado o 499 dólares mensuales con un mínimo de seis meses. Ese precio de hardware establece una referencia adyacente incómoda para cualquier modelo de negocio basado en datos. Un cliente potencial podría pagar más por datos valiosos, pero un piloto de 25.000 dólares debe justificar por qué su resultado supera el precio de un robot completo.

Un modelo de negocio de datos robóticos propone un embudo comercial ilustrativo: 40 objetivos de venta se convierten en 16 reuniones, 8 evaluaciones y 4 ventas, una tasa de conversión del 10%. A 25.000 dólares cada piloto, esas cuatro ventas generan 100.000 dólares en ingresos iniciales. Si cada robot instalado paga 1.000 dólares mensuales en software, 10 equipos producen 120.000 dólares de ARR anual, 50 equipos generan 600.000 y 100 equipos alcanzan 1,2 millones. La curva es aritmética, no tracción, porque ningún cliente ha validado aún el precio mensual ni el comportamiento de renovación.

Además, cuatro pilotos crean concentración, no diversificación. Si cada cliente aporta igual, perder uno elimina el 25% de los ingresos. La renovación y la calidad operativa importan tanto como ganar el primer contrato. Un margen bruto del 60% —25.000 dólares de ingreso menos 10.000 de costo directo— se ve atractivo en una hoja de cálculo, pero una integración difícil podría borrarlo por completo si los costos directos reales resultan mayores que los estimados.

<div class="chart-container">
    <div class="chart-title">Embudo comercial ilustrativo (prospectos a ventas). Fuente: Hanademi análisis</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico6"></canvas>
    </div>
</div>

## La evidencia necesaria para una valoración de datos robóticos

La investigación acumulada sugiere que una empresa de datos táctiles para robótica no puede valorarse con confianza hasta que cruce cuatro hitos de evidencia. Primero, cuatro pilotos pagados que prueben demanda real. Segundo, dos renovaciones que demuestren valor continuo. Tercero, una integración repetible que pruebe escalabilidad más allá de un único entorno. Cuarto, un contrato que preserve derechos sobre datos derivados, determinando si el conjunto de datos puede convertirse en un activo reutilizable más allá de un solo cliente.

Figure 02 acumuló 1.250 horas productivas manipulando más de 90.000 piezas durante 11 meses en la planta de BMW. Esa exposición operativa hace a Figure un cliente plausible, pero no confirma que compraría un sistema de datos táctiles. Open X-Embodiment combinó aproximadamente 60 conjuntos de datos de 22 cuerpos robóticos y 34 laboratorios, ilustrando tanto el valor de los datos como su incompatibilidad cruzada. Scale AI y Figure anunciaron una alianza sobre datos para robots humanoides, pero ninguna parte divulgó valor contractual, alcance táctil ni volumen de demostraciones.

## Conclusión: el tacto debe ganarse su lugar

La robótica está en una transición de escala sin precedentes. Los datasets públicos ya superan el millón de trayectorias combinadas. La inversión privada en embodied AI supera los mil millones de dólares por empresa. Los gobiernos de Japón y Corea están construyendo infraestructura nacional para IA física. Sin embargo, entre toda esta actividad, el presupuesto específico para datos táctiles permanece invisible.

Para arquitectos de sistemas, CTOs y desarrolladores de robótica, la lección es operativa. La visión ya está en la mano —literalmente, en forma de cámaras RGB montadas en muñecas y pinzas— y ha demostrado capacidades emergentes que hace cinco años parecían imposibles sin sensores hápticos. El tacto no es una mejora universal; es una especialización que debe justificarse tarea por tarea. Su valor comercial aparece donde la visión falla: en el contacto rico, la fuerza fina y la manipulación de objetos donde la deformación y la fricción determinan el éxito.

La oportunidad para los proveedores de datos táctiles es real pero condicional. La tecnología sensorial es viable económicamente —materiales de menos de seis dólares lo demuestran— y la transferencia zero-shot desde demostraciones humanas ya es un resultado publicado. Pero el modelo de negocio no se sostiene con datasets grandes ni con capital de riesgo ajeno. Se sostiene cuando un operador robótico industrial —como Figure en BMW, JD.com en Suqian o un fabricante japonés dentro del ecosistema Noetra— decide que la señal de contacto vale más que el costo de obtenerla. Hasta que esa decisión se materialice en contratos firmados y renovados, el tacto seguirá siendo una promesa técnica brillante en busca de su primer cliente que pague por ella.

### Fuentes y Créditos

Este artículo es una adaptación de la investigación original y los datos recopilados por Hanademi, presentada en su formato de deck original.

- [Walke, H., et al. (2023). BridgeData V2: A dataset for robot learning at scale. Conference on Robot Learning](https://arxiv.org/abs/2308.12952)
- [Khazatsky, A., et al. (2024). DROID: A large-scale in-the-wild robot manipulation dataset. Robotics: Science and Systems](https://droid-dataset.github.io/)
- [Fang, H. S., et al. (2023). RH20T: A comprehensive robotic dataset for learning diverse skills in one-shot. arXiv](https://arxiv.org/abs/2305.04796)
- [Feel the Force (FTF). Contact-Driven Learning from Humans. NYU / UC Berkeley / NYU Shanghái](https://feel-the-force-ftf.github.io/)
- [Bhirangi, R., et al. (2021). ReSkin: Versatile, replaceable, lasting tactile skins. Conference on Robot Learning](https://arxiv.org/abs/2111.00071)
- [Figure AI (2024). Figure raises $675M Series B](https://www.figure.ai/)
- [Skild AI (2024). Skild AI raises $300M Series A](https://www.skild.ai/)
- [1X Technologies (2024). 1X raises $100M Series B](https://www.1x.tech/)
- [Brohan, A., et al. (2023). RT-2: Vision-language-action models transfer web knowledge to robotic control. Conference on Robot Learning](https://arxiv.org/abs/2307.15818)
- [Open X-Embodiment Collaboration (2024). Open X-Embodiment: Robotic learning datasets and RT-X models. IEEE ICRA](https://robotics-transformer-x.github.io/)
- [Wang, C., et al. (2024). DexCap: Scalable and portable mocap data collection system for dexterous manipulation. RSS](https://dex-cap.github.io/)
- [Cutkosky, M. R. (1989). On grasp choice, grasp models, and the design of hands for manufacturing tasks. IEEE Transactions on Robotics and Automation](https://ieeexplore.ieee.org/document/30857)
- [JD.com / Rest of World (2026). China is training a robot future — one folded shirt at a time](https://restofworld.org/2026/china-ai-robotics-training-data/)
- [Japan Times (2026). Japan announces aid for domestic AI development project](https://www.japantimes.co.jp/)
- [OECD. Korea AI Voucher Programme](https://www.oecd.org/)
- [aiweekly.co. JD.com mobilizes 600,000 workers for robot training data](https://aiweekly.co/)
- [deploy.report. Figure 02 BMW deployment](https://deploy.report/)
- [businessmodelanalyst.com. AI's Next Bottleneck Is a Warehouse of People Playing Jenga](https://businessmodelanalyst.com/)
- [techcrunch.com. Collecting robot training data is dirty, unglamorous work](https://techcrunch.com/)
- [restofworld.org. How China is using human labor to win the humanoid robot data race](https://restofworld.org/)
- [roboturk.stanford.edu. RoboTurk dataset](https://roboturk.stanford.edu/)
- [huggingface.co. Phi9 dataset](https://huggingface.co/)
- [proceedings.iclr.cc. VTDexManip](https://proceedings.iclr.cc/)
- [insidecm.substack.com. AgiBot cost analysis](https://insidecm.substack.com/)
- [consultancy.eu. KPN partners with McKinsey](https://consultancy.eu/)
- [news.deploy.report. 1X NEO pricing](https://news.deploy.report/)
- [1X Technologies. NEO Home Robot](https://www.1x.tech/discover/neo-home-robot)
- [USA Today (2025). What to know about NEO, the $20,000 humanoid robot](https://www.usatoday.com/)
- [Crunchbase News (2024). Skild AI grabs $300M to build robot brains](https://news.crunchbase.com/)
- [The Robot Report (2024). Figure AI raises $675M to commercialize humanoids](https://www.therobotreport.com/)
- [Light Reading (2026). Japan to develop physical AI with cross-industry initiative](https://www.lightreading.com/)
- [Forbes (2026). Japan bets $2.3 trillion to reboot its innovation engine](https://www.forbes.com/)

<script>
    document.addEventListener('astro:page-load', () => {
        const styles = getComputedStyle(document.documentElement);
        const textColor = styles.getPropertyValue('--text-muted').trim();
        const gridColor = styles.getPropertyValue('--chart-grid').trim();
        const color1 = styles.getPropertyValue('--chart-1').trim();
        const color2 = styles.getPropertyValue('--chart-2').trim();
        const color3 = styles.getPropertyValue('--chart-3').trim();
        const color4 = styles.getPropertyValue('--chart-4').trim();

        // Gráfico 1: Datasets públicos de manipulación robótica
        const ctx1 = document.getElementById('grafico1');
        if (ctx1) {
            new Chart(ctx1, {
                type: 'bar',
                data: {
                    labels: ['BridgeData V2', 'DROID', 'RH20T'],
                    datasets: [{
                        label: 'Trayectorias (miles)',
                        data: [60.1, 76, 110],
                        backgroundColor: [color2, color3, color1],
                        borderColor: [color2, color3, color1],
                        borderWidth: 1,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        x: { ticks: { color: textColor }, grid: { display: false } },
                        y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true }
                    }
                }
            });
        }

        // Gráfico 2: Rondas de financiación en embodied AI
        const ctx2 = document.getElementById('grafico2');
        if (ctx2) {
            new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: ['Figure AI', 'Skild AI', '1X Technologies'],
                    datasets: [{
                        label: 'Millones USD',
                        data: [675, 300, 100],
                        backgroundColor: [color1, color2, color3],
                        borderColor: [color1, color2, color3],
                        borderWidth: 1,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        x: { ticks: { color: textColor }, grid: { display: false } },
                        y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true }
                    }
                }
            });
        }

        // Gráfico 3: Escala JD.com Suqian
        const ctx3 = document.getElementById('grafico3');
        if (ctx3) {
            new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: ['Empleados', 'Contratistas', 'Horas objetivo (millones)'],
                    datasets: [{
                        label: 'Escala de operación',
                        data: [100, 500, 10],
                        backgroundColor: [color1, color2, color3],
                        borderColor: [color1, color2, color3],
                        borderWidth: 1,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        x: { ticks: { color: textColor }, grid: { display: false } },
                        y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true }
                    }
                }
            });
        }

        // Gráfico 4: Costo por hora de trayectoria
        const ctx4 = document.getElementById('grafico4');
        if (ctx4) {
            new Chart(ctx4, {
                type: 'bar',
                data: {
                    labels: ['AgiBot (bajo)', 'AgiBot (alto)', 'Mercado (bajo)', 'Mercado (alto)'],
                    datasets: [{
                        label: 'Yuanes / hora',
                        data: [265, 2244, 500, 1000],
                        backgroundColor: [color2, color2, color3, color3],
                        borderColor: [color2, color2, color3, color3],
                        borderWidth: 1,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        x: { ticks: { color: textColor }, grid: { display: false } },
                        y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true }
                    }
                }
            });
        }

        // Gráfico 5: Inversión gubernamental en IA física
        const ctx5 = document.getElementById('grafico5');
        if (ctx5) {
            new Chart(ctx5, {
                type: 'bar',
                data: {
                    labels: ['Japón (año 1)', 'Japón (total estimado)'],
                    datasets: [{
                        label: 'Millones USD',
                        data: [2400, 6150],
                        backgroundColor: [color1, color2],
                        borderColor: [color1, color2],
                        borderWidth: 1,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        x: { ticks: { color: textColor }, grid: { display: false } },
                        y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true }
                    }
                }
            });
        }

        // Gráfico 6: Embudo comercial ilustrativo
        const ctx6 = document.getElementById('grafico6');
        if (ctx6) {
            new Chart(ctx6, {
                type: 'bar',
                data: {
                    labels: ['Objetivos', 'Reuniones', 'Evaluaciones', 'Ventas'],
                    datasets: [{
                        label: 'Número de prospectos',
                        data: [40, 16, 8, 4],
                        backgroundColor: [color3, color2, color1, color1],
                        borderColor: [color3, color2, color1, color1],
                        borderWidth: 1,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        x: { ticks: { color: textColor }, grid: { display: false } },
                        y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true }
                    }
                }
            });
        }
    });
</script>