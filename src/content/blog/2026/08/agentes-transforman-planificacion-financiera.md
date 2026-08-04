---
titulo: "Los agentes de IA pueden avanzar más rápido que la confianza financiera"
extracto: "Un análisis profundo sobre los límites de los agentes de IA en planificación financiera, la brecha entre capacidad técnica y confiabilidad, y lo que la evidencia empírica dice sobre su despliegue seguro."
fecha: "2026-08-03T01:04:00" 
tiempo_lectura: "14 min"
categoria: "Inteligencia Artificial"
etiquetas: ["Agentes IA", "FP&A", "GenAI", "Finanzas", "RAG", "Confiabilidad"]
---

La promesa de los agentes de inteligencia artificial en la planificación y análisis financiero (FP&A) es seductora: sistemas autónomos que presupuestan, pronostican, analizan escenarios y apoyan la toma de decisiones ejecutivas sin intervención humana constante. Sin embargo, una investigación exhaustiva realizada por Hanademi sobre el estado actual de la evidencia empírica revela una tensión central que todo arquitecto de sistemas financieros, CTO y director de planeación debe comprender: los agentes de IA pueden avanzar más rápido que la confianza que la función financiera puede depositar en ellos. La brecha no está en la velocidad del hardware ni en la sofisticación de los modelos, sino en la distancia entre lo que la tecnología puede generar y lo que una organización puede validar, auditar y controlar.

El punto de partida de cualquier discusión seria sobre agentes financieros debe ser un dato contundente. En el mayor estudio empírico de su tipo, 327 coautores de 186 instituciones educativas en 14 países sometieron a ChatGPT a 28.085 preguntas de evaluaciones contables y bancos de prueba. Los resultados, publicados en *Issues in Accounting Education*, fueron contundentes: los estudiantes promediaron 76,7% de acierto, mientras que ChatGPT se quedó en 47,4%. Aunque el modelo acertó el 56,5% de las preguntas en términos absolutos y superó a los estudiantes en el 15,8% de las evaluaciones cuando se consideraba crédito parcial, su desempeño fue marcadamente inferior en temas fiscales, contabilidad financiera y contabilidad gerencial, áreas donde los procesos matemáticos rigurosos son ineludibles. Este no es un fallo menor: es una señal de que la fiabilidad debe ser el punto de partida, no la meta a alcanzar, para cualquier agente de planificación financiera.

<div class="chart-container">
    <div class="chart-title">ChatGPT vs estudiantes en evaluaciones contables (Wood et al., 2023)</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico1"></canvas>
    </div>
</div>

## Definiendo el territorio: asistentes, agentes y la generación aumentada por recuperación

Antes de evaluar promesas, es necesario clarificar el vocabulario. Un asistente generativo limitado a un único ciclo de instrucción y respuesta no es un agente autónomo. La distinción es operativa, no estética. Un agente basado en grandes modelos de lenguaje (LLM) es un sistema que combina un modelo de lenguaje con planificación, memoria, uso de herramientas e interacción ambiental para perseguir metas durante múltiples pasos. La generación aumentada por recuperación (RAG), por su parte, es el método que recupera registros o documentos externos y los entrega como evidencia al modelo antes de generar una respuesta. Estos tres términos sostienen buena parte del argumento técnico: sin memoria, sin planificación multietapa y sin acceso verificable a fuentes externas, no hay agente financiero, solo un chatbot con ambiciones.

La literatura académica avanza rápidamente en este campo. Wang, Ma, Feng y colaboradores publicaron en 2024 en *Frontiers of Computer Science* la primera revisión sistemática sobre agentes autónomos basados en LLM, proponiendo un marco unificado de cuatro módulos esenciales: perfil, memoria, planificación y acción. Este trabajo, que acumula miles de citas, establece que un agente verdadero requiere no solo generar texto, sino razonar sobre estados, recordar interacciones previas y ejecutar operaciones en entornos externos. En el ámbito de la simulación social, Park y colegas de Stanford demostraron en UIST 2023 que 25 agentes generativos con memoria persistente podían planificar sus días, formar relaciones y coordinar actividades sociales complejas, como organizar una fiesta de San Valentín, a partir de una sola intención inicial. La simulación, aunque costosa en tokens y tiempo, probó que la arquitectura de observación, reflexión y planificación produce comportamientos creíbles. Pero la pregunta que el deck de Hanademi plantea es precisa: ¿qué ocurre cuando esos agentes dejan de simular fiestas y empiezan a tocar balances?

## La evidencia de productividad: ganancias reales, pero delimitadas

La investigación empírica de alta calidad sobre el impacto de la inteligencia artificial generativa en el trabajo del conocimiento no es abundante, pero sí contundente cuando existe. Noy y Zhang, investigadores del MIT, diseñaron un experimento aleatorizado con 453 profesionales universitarios de campos como marketing, consultoría, recursos humanos y análisis de datos. Los participantes completaron dos tareas de escritura profesional de 20 a 30 minutos cada una. La mitad fue expuesta a ChatGPT para la segunda tarea. Los resultados, publicados en *Science* en julio de 2023, mostraron una reducción del 40% en el tiempo de finalización y un aumento del 18% en la calidad evaluada por profesionales del mismo campo que desconocían el origen de los textos. Además, la desigualdad de desempeño entre trabajadores se redujo drásticamente: la correlación entre la primera y segunda tarea cayó de 0,41 en el grupo de control a 0,14 en el grupo con acceso a IA, lo que indica que quienes partían con menor desempeño fueron los más beneficiados.

<div class="chart-container">
    <div class="chart-title">Impacto de ChatGPT en tareas profesionales (Noy & Zhang, 2023)</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico2"></canvas>
    </div>
</div>

Este patrón de beneficios asimétricos se confirma en un estudio de campo aún más grande. Brynjolfsson, Li y Raymond, de Stanford y MIT, analizaron datos de 5.179 agentes de soporte al cliente en los que se introdujo de manera escalonada un asistente conversacional basado en inteligencia artificial generativa. Publicado en el *Quarterly Journal of Economics* en 2025, el estudio encontró un aumento promedio del 14% en los casos resueltos por hora. Pero la distribución importa más que el promedio: los trabajadores menos calificados y experimentados mejoraron cerca de un 34%, mientras que los más experimentados apenas se vieron afectados. El modelo, aparentemente, diseminaba las mejores prácticas de los agentes más capaces y aceleraba la curva de aprendizaje de los novatos. Un agente con dos meses de experiencia que usaba la herramienta rendía igual que uno sin la herramienta con más de seis meses de antigüedad.

<div class="chart-container">
    <div class="chart-title">Ganancia de productividad en soporte al cliente (Brynjolfsson et al., 2025)</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico3"></canvas>
    </div>
</div>

En el ámbito contable específico, un estudio de campo de 2025 liderado por Choi de Stanford y Xie del MIT proporciona evidencia temprana directamente relevante. Analizando datos transaccionales de 79 pequeñas y medianas empresas que usaban software contable con inteligencia artificial generativa, junto con encuestas a 277 contadores, los investigadores documentaron ganancias significativos: un aumento del 18% en el soporte semanal a clientes por desviación estándar de uso de IA, una reasignación del 9% del tiempo de los contadores desde la entrada de datos rutinaria hacia tareas de mayor valor, un aumento del 12% en la granularidad de los libros mayores y una reducción de 7,5 días en el tiempo de cierre mensual. Sin embargo, el estudio también encontró que los contadores a veces confiaban en exceso en clasificaciones generadas por IA que resultaban inexactas, lo que subraya que la asistencia generativa no elimina la necesidad de juicio profesional humano.

## La brecha de adopción y la fragmentación de la evidencia

Si los beneficios potenciales están documentados, la adopción real es otra historia. Un estudio de 2026 basado en la Encuesta Europea de Condiciones de Trabajo 2024, administrada cara a cara a aproximadamente 36.600 trabajadores en 35 países europeos, encontró que solo el 12% de la fuerza laboral usaba inteligencia artificial generativa para su trabajo. El rango entre países era abismal: desde menos del 3% en Bosnia-Herzegovina hasta aproximadamente una cuarta parte en Luxemburgo. La adopción no es un fenómeno uniforme, sino una cuestión de gestión, infraestructura digital y capacidad de absorción organizacional. Los trabajadores con educación terciaria, que realizan tareas cognitivas no rutinarias y que tienen influencia en las decisiones organizacionales, adoptan a tasas significativamente mayores. La intensidad digital del país, la provisión de formación y la complejidad cognitiva del empleo nacional son los correlatos más robustos de la adopción, no el PIB per cápita ni la tasa de educación superior en abstracto.

<div class="chart-container">
    <div class="chart-title">Adopción de GenAI en el trabajo en Europa, 2024 (EWCS)</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico4"></canvas>
    </div>
</div>

La fragmentación también afecta a la base de evidencia misma. Una revisión sistemática publicada en 2026 en *Review of Managerial Science* por Bauch, Kanbach y Dabic, basada en un escaneo de 680 casos de uso, encontró que la evidencia empresarial sobre inteligencia artificial generativa es mayoritariamente no académica: 355 fuentes no académicas frente a 14 académicas, y 587 casos de uso no académicos frente a 93 académicos. Esto no invalida la evidencia práctica, pero significa que gran parte de lo que se considera "mejores prácticas" carece del escrutinio metodológico que exige la función financiera. Las síntesis revisadas por pares de 2023 y 2024, como las de Banh y Strobel en *Electronic Markets* y Feuerriegel y colegas en *Business & Information Systems Engineering*, describen un crecimiento técnico y de mercado vertiginoso mientras dejan abiertas las preguntas sobre implementación organizacional. El crecimiento por sí solo no demuestra preparación para el trabajo financiero agéntico.

<div class="chart-container">
    <div class="chart-title">Evidencia sobre GenAI: fuentes académicas vs no académicas (Bauch et al., 2026)</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico5"></canvas>
    </div>
</div>

## Cuando la automatización acelera lo defectuoso

Una lección crítica, a menudo ignorada en la conversación sobre agentes, es que la eficiencia y la calidad decisoria son resultados distintos. Una automatización más rápida puede conservar una regla, fuente o control defectuoso; simplemente lo reproduce más velozmente. Kokina, Gilleran, Blanchette y Stoddard exploraron esta tensión en *Accounting Horizons* en 2021, analizando los roles y competencias del contador como innovador digital en la era de la automatización. Su trabajo anticipa el riesgo central de los agentes financieros: acelerar un proceso sin mejorar sus decisiones fundamentales. Una regla defectuosa sigue produciendo resultados defectuosos, solo que a mayor escala.

La evidencia empírica sobre los efectos no neutrales de la automatización estandarizada es contundente. En China, la implementación escalonada de la reforma de facturación electrónica completamente digitalizada, introducida mediante programas piloto en 2021 y expandida nacionalmente, fue seguida por un aumento de 0,91 puntos porcentuales en las tasas efectivas de impuestos de las empresas, según un estudio de 2026 publicado en *PLOS ONE* por Tao y Li. El análisis, basado en 15.652 observaciones de empresas chinas cotizadas entre 2019 y 2023, muestra que la reforma rediseñó el comportamiento de reporte tanto en el lado de los ingresos como en el de los costos: los ingresos reportados disminuyeron un 1,90% y los costos reportados un 2,08%, indicando que las empresas realinearon su reporte ante una fiscalización digital más estricta. La lección para los agentes de planificación financiera es clara: el diseño del proceso automatizado puede cambiar los resultados financieros de manera medible, y no siempre en la dirección prevista.

## La paradoja de la confiabilidad: modelos más grandes, menos fiables

Una de las conclusiones más inquietantes de la literatura reciente viene de Zhou, Schellaert, Martínez-Plumed y colegas, publicada en *Nature* en septiembre de 2024. El estudio demuestra que los modelos de lenguaje más grandes y más instructables pueden volverse menos confiables. Los autores encontraron que, si bien los modelos escalados mejoran en instancias fáciles para humanos, no aseguran áreas de baja dificultad donde el modelo no cometa errores o donde la supervisión humana pueda detectarlos. Los modelos más recientes tienden a dar respuestas aparentemente sensatas pero incorrectas con mucha mayor frecuencia que sus predecesores más pequeños, incluyendo errores en preguntas difíciles que los supervisores humanos pasan por alto con frecuencia. En áreas de alto riesgo como las finanzas, donde la distribución predecible de errores es primordial, este hallazgo es una advertencia severa.

La confiabilidad end-to-end de un agente financiero compuesta por múltiples pasos independientes se degrada exponencialmente. Si cada paso tiene una confiabilidad del 90%, diez pasos independientes producen solo un 34,9% de confiabilidad integral (0,9 elevado a la décima potencia). Este cálculo simple pero brutal explica por qué un asistente de un solo ciclo puede ser útil mientras que un agente multietapa financiero puede ser peligroso. La auto-revisión no resuelve el problema: cuando el mismo modelo genera una respuesta y la critica, la crítica puede repetir el punto ciego original. Los flujos financieros necesitan validación independiente, no solo otra pasada del mismo sistema.

<div class="chart-container">
    <div class="chart-title">Confiabilidad end-to-end de un agente de 10 pasos (90% cada paso)</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico6"></canvas>
    </div>
</div>

## Superficies de ataque: cuando el agente toca sistemas reales

Un error de texto puede producir un mal memorando. Un error con acceso a herramientas puede llegar a un sistema y cambiar algo en el mundo real. Greshake, Abdelnabi, Mishra y colegas demostraron en el ACM Workshop on Artificial Intelligence and Security en 2023 que los sistemas integrados con herramientas exponen al menos tres superficies de ataque: el contenido recuperado (por ejemplo, a través de inyección indirecta de prompts en documentos que el agente lee), las instrucciones generadas para herramientas (que pueden ser manipuladas para ejecutar acciones no autorizadas) y los permisos de acción (que determinan qué puede modificar el agente en sistemas externos). Los autores demostraron ataques prácticos contra sistemas reales como Bing Chat y motores de completado de código, mostrando cómo el procesamiento de prompts recuperados puede actuar como ejecución de código arbitrario. Para un agente de planificación financiera conectado a sistemas ERP, bases de datos de presupuesto o plataformas de reporting, estas vulnerabilidades no son teóricas: son puertas abiertas a la manipulación de datos financieros, el robo de información sensible o la ejecución de transacciones no autorizadas.

## El vacío latinoamericano y la necesidad de validación local

Quizás la conclusión más incómoda del análisis de Hanademi sea también la más específica: entre cuatro estudios adyacentes de alta calidad revisados, ninguno examinó directamente la adopción de FP&A agéntico en empresas latinoamericanas de tercerización. Los resultados de trabajo de soporte, escritura profesional o contabilidad en Estados Unidos, Europa o China no pueden transferirse automáticamente a contextos donde la regulación financiera, la infraestructura tecnológica, la madurez de datos y la cultura organizacional difieren sustancialmente. Uzbekistán, por ejemplo, ordenó recientemente a 19 empresas estatales estratégicas reducir sus costos de producción entre un 10% y un 20% sin disminuir la producción. Un objetivo de costos de esa magnitud, con una restricción operativa explícita, es exactamente el tipo de límite medible que necesitaría un agente financiero. Pero la capacidad de un agente para interpretar correctamente esas restricciones en un contexto regulatorio y cultural específico no puede asumirse; debe probarse.

## Hacia una arquitectura de confianza

¿Qué implican todos estos hallazgos para un director de FP&A o un CTO evaluando el despliegue de agentes de inteligencia artificial? Primero, que la productividad documentada es real pero delimitada. Los experimentos de Noy y Zhang, Brynjolfsson y colegas, y Choi y Xie demuestran ganancias medibles en tareas acotadas, pero ninguno de ellos probó un agente autónomo ejecutando flujos financieros complejos sin supervisión. Segundo, que la adopción organizacional es el cuello de botella. Con solo un 12% de adopción laboral promedio en Europa y una variación de casi diez veces entre países, la barrera no es la disponibilidad de la tecnología, sino la preparación de la organización. Tercero, que la seguridad y la confiabilidad deben diseñarse desde la arquitectura, no añadirse como capa posterior. Los agentes financieros necesitan controles independientes, trazas de auditoría inmutables, límites de permisos granulares y validación humana en puntos de control críticos.

La pregunta correcta no es si los agentes de IA pueden planificar financieramente, sino bajo qué condiciones una organización puede confiar en esa planificación lo suficiente como para actuar sobre ella. La evidencia sugiere que, en el estado actual de la tecnología, la configuración más prudente es la de aumento humano (augmentation), no la de automatización completa. Los agentes pueden acelerar la recopilación de datos, generar borradores de escenarios, identificar anomalías y liberar al analista financiero para el juicio profesional. Pero la decisión final sobre presupuestos, pronósticos y asignación de capital sigue requiriendo una mente humana que comprenda el contexto, evalúe el riesgo y asuma la responsabilidad. La tecnología puede avanzar a la velocidad de los tokens; la confianza financiera avanza a la velocidad de la verificación. Y entre esas dos velocidades reside el espacio donde se juega el futuro de la planificación financiera.

## Fuentes y Créditos

Este artículo es una adaptación de la investigación original y los datos recopilados por Hanademi, presentada en su formato de deck original.

- [Wood, D. A. et al. (2023). The ChatGPT Artificial Intelligence Chatbot: How Well Does It Answer Accounting Assessment Questions?. Issues in Accounting Education, 38(4), 81-108.](https://pdxscholar.library.pdx.edu/busadmin_fac/324/)
- [Noy, S., & Zhang, W. (2023). Experimental evidence on the productivity effects of generative artificial intelligence. Science, 381(6654), 187-192.](https://www.science.org/doi/10.1126/science.adh2586)
- [Brynjolfsson, E., Li, D., & Raymond, L. R. (2025). Generative AI at work. Quarterly Journal of Economics, 140(2), 889-942.](https://www.nber.org/system/files/working_papers/w31161/w31161.pdf)
- [Choi, J. H., & Xie, C. (2025). Human + AI in Accounting: Early Evidence from the Field. Stanford University & MIT.](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5240924)
- [Zhou, L., Schellaert, W., Martínez-Plumed, F., et al. (2024). Larger and more instructable language models become less reliable. Nature, 634, 61-68.](https://www.nature.com/articles/s41586-024-07930-y)
- [Tao, R., & Li, J. (2026). Does electronic invoicing lead to stronger tax compliance? Evidence from China. PLOS ONE, 21(4), e0331880.](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0331880)
- [Greshake, K., Abdelnabi, S., Mishra, S., et al. (2023). Not what you've signed up for: Compromising real-world LLM-integrated applications with indirect prompt injection. ACM AISec 2023.](https://dl.acm.org/doi/10.1145/3605764.3623985)
- [Wang, L., Ma, C., Feng, X., et al. (2024). A survey on large language model based autonomous agents. Frontiers of Computer Science, 18, Article 186345.](https://link.springer.com/article/10.1007/s11704-024-40231-1)
- [Park, J. S., O'Brien, J. C., Cai, C. J., et al. (2023). Generative Agents: Interactive Simulacra of Human Behavior. UIST 2023, ACM.](https://github.com/joonspk-research/generative_agents)
- [Bauch, J., Kanbach, D. K., & Dabic, M. (2026). Beyond the GenAI hype: a framework for Generative AI in business. Review of Managerial Science.](https://link.springer.com/article/10.1007/s11846-026-01040-x)
- [Banh, L., & Strobel, G. (2023). Generative artificial intelligence. Electronic Markets, 33, Article 63.](https://link.springer.com/article/10.1007/s12525-023-00653-5)
- [Feuerriegel, S., Hartmann, J., Janiesch, C., & Zschech, P. (2024). Generative AI. Business & Information Systems Engineering, 66, 111-126.](https://link.springer.com/article/10.1007/s12599-024-00881-3)
- [European Working Conditions Survey 2024 — Generative AI at Work (arXiv:2604.18849)](https://arxiv.org/abs/2604.18849)
- [Kokina, J., Gilleran, R., Blanchette, S., & Stoddard, D. (2021). Accountant as digital innovator: Roles and competencies in the age of automation. Accounting Horizons.](https://meridian.allenpress.com/ahorizons)

<script>
    document.addEventListener('astro:page-load', () => {
        const styles = getComputedStyle(document.documentElement);
        const accentColor = styles.getPropertyValue('--accent').trim();
        const textColor = styles.getPropertyValue('--text-muted').trim();
        const gridColor = styles.getPropertyValue('--chart-grid').trim();

        const commonOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: textColor, font: { size: 12 } }
                }
            },
            scales: {
                x: {
                    ticks: { color: textColor, font: { size: 11 } },
                    grid: { color: gridColor }
                },
                y: {
                    ticks: { color: textColor, font: { size: 11 } },
                    grid: { color: gridColor }
                }
            }
        };

        const ctx1 = document.getElementById('grafico1');
        if (ctx1) {
            new Chart(ctx1, {
                type: 'bar',
                data: {
                    labels: ['ChatGPT', 'Estudiantes'],
                    datasets: [{
                        label: 'Puntuación media (%)',
                        data: [47.4, 76.7],
                        backgroundColor: [gridColor, accentColor],
                        borderColor: [gridColor, accentColor],
                        borderWidth: 1
                    }]
                },
                options: {
                    ...commonOptions,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { ticks: { color: textColor }, grid: { color: gridColor } },
                        y: {
                            ticks: { color: textColor, callback: (v) => `${v}%` },
                            grid: { color: gridColor },
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            });
        }

        const ctx2 = document.getElementById('grafico2');
        if (ctx2) {
            new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: ['Reducción tiempo', 'Aumento calidad'],
                    datasets: [{
                        label: 'Cambio porcentual',
                        data: [40, 18],
                        backgroundColor: accentColor,
                        borderColor: accentColor,
                        borderWidth: 1
                    }]
                },
                options: {
                    ...commonOptions,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { ticks: { color: textColor }, grid: { color: gridColor } },
                        y: {
                            ticks: { color: textColor, callback: (v) => `${v}%` },
                            grid: { color: gridColor },
                            beginAtZero: true,
                            max: 60
                        }
                    }
                }
            });
        }

        const ctx3 = document.getElementById('grafico3');
        if (ctx3) {
            new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: ['Todos los agentes', 'Menos calificados'],
                    datasets: [{
                        label: 'Aumento productividad (%)',
                        data: [14, 34],
                        backgroundColor: [gridColor, accentColor],
                        borderColor: [gridColor, accentColor],
                        borderWidth: 1
                    }]
                },
                options: {
                    ...commonOptions,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { ticks: { color: textColor }, grid: { color: gridColor } },
                        y: {
                            ticks: { color: textColor, callback: (v) => `${v}%` },
                            grid: { color: gridColor },
                            beginAtZero: true,
                            max: 50
                        }
                    }
                }
            });
        }

        const ctx4 = document.getElementById('grafico4');
        if (ctx4) {
            new Chart(ctx4, {
                type: 'doughnut',
                data: {
                    labels: ['Usan GenAI en el trabajo', 'No usan GenAI en el trabajo'],
                    datasets: [{
                        data: [12, 88],
                        backgroundColor: [accentColor, gridColor],
                        borderColor: [accentColor, gridColor],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: { color: textColor, font: { size: 12 } }
                        }
                    }
                }
            });
        }

        const ctx5 = document.getElementById('grafico5');
        if (ctx5) {
            new Chart(ctx5, {
                type: 'bar',
                data: {
                    labels: ['Fuentes incluidas', 'Casos de uso cubiertos'],
                    datasets: [
                        {
                            label: 'Académicas',
                            data: [14, 93],
                            backgroundColor: gridColor,
                            borderColor: gridColor,
                            borderWidth: 1
                        },
                        {
                            label: 'No académicas',
                            data: [355, 587],
                            backgroundColor: accentColor,
                            borderColor: accentColor,
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    ...commonOptions,
                    scales: {
                        x: { ticks: { color: textColor }, grid: { color: gridColor } },
                        y: {
                            ticks: { color: textColor },
                            grid: { color: gridColor },
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        const ctx6 = document.getElementById('grafico6');
        if (ctx6) {
            new Chart(ctx6, {
                type: 'line',
                data: {
                    labels: ['1 paso', '2 pasos', '3 pasos', '4 pasos', '5 pasos', '6 pasos', '7 pasos', '8 pasos', '9 pasos', '10 pasos'],
                    datasets: [{
                        label: 'Confiabilidad acumulada (%)',
                        data: [90.0, 81.0, 72.9, 65.6, 59.0, 53.1, 47.8, 43.0, 38.7, 34.9],
                        borderColor: accentColor,
                        backgroundColor: accentColor,
                        pointBackgroundColor: accentColor,
                        pointRadius: 4,
                        tension: 0.3,
                        fill: false
                    }]
                },
                options: {
                    ...commonOptions,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { ticks: { color: textColor }, grid: { color: gridColor } },
                        y: {
                            ticks: { color: textColor, callback: (v) => `${v}%` },
                            grid: { color: gridColor },
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            });
        }
    });
</script>