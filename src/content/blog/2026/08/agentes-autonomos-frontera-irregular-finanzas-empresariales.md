---
titulo: "Los agentes autónomos prometen revolucionar las finanzas empresariales, pero la frontera irregular de la IA exige cautela antes de ceder el control"
extracto: "El 65% de las organizaciones ya usa IA generativa, pero la evidencia académica y de campo demuestra que la autonomía real en planificación financiera dista años de ser segura. La frontera tecnológica es irregular, la confiabilidad compuesta se desploma y Latinoamérica carece de la infraestructura para absorber el impacto."
fecha: "2026-08-04T18:34:00"
categoria: "Inteligencia Artificial"
etiquetas: ["Agentes Autónomos", "FP&A", "Transformación Digital", "Latinoamérica", "Finanzas"]
link_original: "https://hanademi.com/decks/agentes-autonomos-transforman-planificacion-financiera-empresarial-20260803-194314/"
---

Los titulares del último año han sido contundentes: la inteligencia artificial generativa ya está en las oficinas, los modelos de lenguaje resuelven tareas complejas en segundos y los agentes autónomos prometen ejecutar flujos enteros de planificación financiera sin intervención humana. Sin embargo, entre el anuncio y la realidad existe una brecha que los datos empíricos no dejan ocultar. Cuando se despliega en entornos reales, la capacidad de la IA no se distribuye de manera uniforme: mejora drásticamente en algunas tareas, pero empeora en otras que parecen igual de difíciles. Esa frontera irregular, documentada por investigadores de Harvard y el Boston Consulting Group, es la clave para entender por qué ceder el control de la planificación y análisis financiero (FP&A) a un sistema autónomo no es solo prematuro, sino arriesgado.

## La frontera irregular que el hype no quiere mostrar

En 2023, un experimento de campo diseñado por Fabrizio Dell'Acqua y sus colegas de Harvard Business School, en colaboración con BCG, puso a prueba a 758 consultores de élite frente a 18 tareas realistas que iban desde la creatividad estratégica hasta el análisis cuantitativo. Los resultados, publicados en el working paper [Navigating the Jagged Technological Frontier](https://www.hbs.edu/faculty/Pages/item.aspx?num=64700), fueron asombrosos en un sentido y alarmantes en otro. Dentro de lo que los autores llaman la "frontera de competencia medida" de GPT-4, los consultores que usaban la herramienta completaban más tareas, lo hacían con mayor velocidad y entregaban trabajo de calidad significativamente superior al de sus colegas sin asistencia. La mejora no fue marginal: fue una transformación visible en el rendimiento diario.

<div class="chart-container">
    <div class="chart-title">Impacto de GPT-4 en consultores dentro y fuera de la frontera de competencia. Fuente: Dell'Acqua et al. (2023), Harvard Business School Working Paper 24-013.</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico1"></canvas>
    </div>
</div>

Pero el estudio incluyó una tarea deliberadamente diseñada para caer fuera de esa frontera. Allí, los consultores asistidos por IA fueron menos propensos a producir la respuesta correcta que quienes trabajaban sin ella. La ganancia de velocidad y calidad no se transfirió automáticamente a lo desconocido. Este hallazgo es fundamental para el FP&A, donde cada pregunta puede exigir leer una narrativa, encontrar valores en una tabla y realizar un cálculo simultáneamente. Los benchmarks financieros como [FinQA](https://arxiv.org/abs/2109.00122), [FinanceBench](https://arxiv.org/abs/2311.11944) y [TAT-QA](https://arxiv.org/abs/2108.09052) documentan miles de pares de pregunta-respuesta que requieren exactamente ese tipo de razonamiento híbrido entre texto y números. Si la frontera es irregular, la autoridad del sistema solo debe expandirse después de probarla tarea por tarea.

## Un modelo que habla no es un agente que decide

La distinción entre un modelo de lenguaje y un agente autónomo es, en la práctica comercial, más difusa de lo que debería. Un LLM interpreta y genera texto; un agente, según el marco propuesto por Wang y colegas en su [survey de 2023](https://arxiv.org/abs/2308.11432), añade memoria, planificación y acción. Es decir, no se trata solo de que el sistema converse fluidamente, sino de que perciba, fije objetivos, planifique, actúe, evalúe e interactúe. Esa definición, útil para filtrar afirmaciones exageradas, sigue siendo un diseño de investigación académico, no una certificación de producción.

<div class="chart-container">
    <div class="chart-title">Ganancia de productividad con asistencia generativa en soporte al cliente. Fuente: Brynjolfsson, Li & Raymond (2023), NBER Working Paper 31161.</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico2"></canvas>
    </div>
</div>

La evidencia de campo más sólida disponible proviene de un estudio de Erik Brynjolfsson, Danielle Li y Lindsey Raymond, publicado inicialmente como [NBER Working Paper 31161](https://www.nber.org/papers/w31161) y posteriormente en el *Quarterly Journal of Economics*. Analizaron a 5.179 agentes de soporte al cliente que usaban una herramienta generativa. La productividad medida en problemas resueltos por hora aumentó en promedio, pero con una variación enorme: los trabajadores menos experimentados obtuvieron ganancias más del doble del promedio. El efecto laboral cercano se parece más a una compresión de habilidades que a una eliminación inmediata de equipos. Y lo más importante: un responsable humano conservó el control de cada interacción con el cliente, decidiendo si usar o ignorar cada recomendación del sistema. La evidencia más robusta disponible, por tanto, apoya el juicio asistido, no la agencia sin supervisión.

## La matemática implacable de la confiabilidad compuesta

Incluso si un paso individual del agente fuera confiable el 95% de las veces, la probabilidad de que todo un flujo de trabajo de múltiples pasos llegue correctamente al final cae de forma implacable. Bajo un supuesto de independencia, diez pasos consecutivos reducen la confiabilidad end-to-end a poco más de la mitad. Veinte pasos la hunden por debajo de un tercio. Esta no es una observación filosófica: es aritmética pura.

<div class="chart-container">
    <div class="chart-title">Confiabilidad end-to-end según número de pasos independientes (95% por paso). Fuente: cálculo ilustrativo basado en probabilidad compuesta.</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico3"></canvas>
    </div>
</div>

El benchmark [GAIA](https://arxiv.org/pdf/2311.12983), diseñado por investigadores de Meta y Hugging Face, pone cifras concretas a esta brecha. En 466 preguntas reales que cualquier humano resolvería con facilidad conceptual, los participantes humanos alcanzaron cerca de un 92% de acierto. Un sistema temprano GPT-4 con complementos se quedó en el 15%. La diferencia es de unos 77 puntos porcentuales. Si se modela un flujo de diez pasos, igualar el desempeño humano exigiría una fiabilidad por paso del 99.2%, un estándar que los sistemas actuales no alcanzan. [AgentBench](https://arxiv.org/abs/2308.03688), evaluando agentes en ocho entornos distintos, mostró que la capacidad varía materialmente según la tarea y la interfaz. Incluso el modelo más avanzado fallaba por exceso de turnos, formatos inválidos o acciones incorrectas. La acumulación de errores convierte una brecha modesta por paso en una brecha integral de capacidad abismal.

## Lo que funciona es la asistencia, no la abdicación

La historia de la automatización financiera ofrece una lección previa que conviene recordar. La investigación sobre RPA contable señala repetidamente que los robots funcionan mejor cuando la variación está diseñada fuera del proceso: reglas estandarizadas, entradas estructuradas y excepciones manejables. Es comparable a un lavavajillas que ejecuta un ciclo conocido; los objetos inusuales todavía requieren intervención humana. La estandarización no es meramente un proyecto de eficiencia. La reforma escalonada de facturación digital en China aumentó las tasas efectivas de las empresas en 0.91 puntos porcentuales, demostrando que una capa transaccional estandarizada puede cambiar resultados financieros, no solo velocidad de procesamiento.

Los agentes financieros pueden reunir evidencia, construir borradores de presupuesto o reconciliar variaciones, pero una persona debe conservar la autoridad para revisar y decidir. Cuando un agente puede actuar, cada conexión se convierte en otra ruta que exige permisos, monitoreo y recuperación. El [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) separa deliberadamente la capacidad técnica de la autoridad organizacional como decisiones de diseño distintas. No hay razón para fusionarlas por apresuramiento.

## Latinoamérica: el espejo donde la evidencia no se refleja

La región no es ajena al impacto de la IA generativa. Según un estudio conjunto de la [OIT y el Banco Mundial](https://www.ilo.org/resource/news/press-release-ai-latin-america) publicado en 2024, entre el 26% y el 38% del empleo en América Latina y el Caribe podría verse influenciado por esta tecnología. Sin embargo, la infraestructura digital inadecuada podría impedir que hasta 17 millones de trabajadores expuestos materialicen los beneficios. La brecha no es de voluntad, sino de acceso.

<div class="chart-container">
    <div class="chart-title">Exposición del empleo regional a la IA generativa. Fuente: OIT y Banco Mundial (2024).</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico4"></canvas>
    </div>
</div>

Los datos del [Banco Mundial](https://data.worldbank.org/) pintan un panorama de capacidad desigual. Brasil alcanzó 7.440 millones de dólares en exportaciones de servicios TIC en 2025, mientras que Chile cerró el periodo por debajo de los 800 millones. Colombia y Costa Rica superaron a Chile en dólares exportados, y Uruguay construyó una base de 1.500 millones desde casi cero en 2010. Argentina multiplicó por once sus suscripciones de banda ancha fija, pero su PIB por persona empleada sigue por debajo del pico de 2011. México, por su parte, vio caer su gasto en I+D del 0.47% del PIB en 2010 al 0.25% en 2024, cerca de la mitad.

<div class="chart-container">
    <div class="chart-title">Exportaciones de servicios TIC en 2025 (miles de millones de USD). Fuente: Banco Mundial Open Data.</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico5"></canvas>
    </div>
</div>

Una base exportadora de servicios digitales considerable no sustituye la evidencia directa sobre adopción, precisión o retornos financieros de agentes autónomos. La densidad de evidencia regional sobre agentes financieros autónomos desplegados en entornos EOR o FP&A multifirma es, en términos prácticos, cero. Las encuestas a 277 contadores documentan heterogeneidad en la adopción, pero no establecen una tasa de prevalencia de agentes autónomos. Un modelo temático analizó 78.822 artículos de 110 revistas financieras y no logró cuantificar cuántas empresas han desplegado realmente agentes autónomos en producción. La atención del mercado no es autonomía.

## El camino híbrido: memoria con supervisión

El futuro del FP&A no pasa por eliminar al analista financiero, sino por redefinir su rol. Los agentes pueden asumir la carga operativa de extraer datos, formatear reportes y detectar anomalías, liberando al profesional para el juicio estratégico, la gestión de excepciones y la supervisión de flujos. Las tarjetas inteligentes de India redujeron las fugas de pagos en más de un 40% y generaron ahorros de tiempo estimados en 4.5 millones de dólares, pero la fricción de implementación frenó la adopción: después de dos años solo procesaban la mitad de los pagos en las zonas tratadas. La tecnología funciona, pero la organización necesita tiempo para adaptarse.

La pregunta que deben hacerse los líderes financieros no es si los agentes autónomos llegarán, sino bajo qué condiciones deberían operar. La respuesta, según la evidencia acumulada, es clara: memoria y planificación sí, ejecución final bajo control humano. La frontera tecnológica es irregular, la matemática de la confiabilidad compuesta es implacable y la infraestructura regional es desigual. Ceder el paso final antes de probar cada frontera específica no es innovación; es imprudencia.

## Fuentes y Créditos

Este artículo es una adaptación de la investigación original y los datos recopilados por Hanademi, presentada en su formato de deck original.

- [Hanademi - Agentes Autónomos Transforman Planificación Financiera Empresarial](https://hanademi.com/decks/agentes-autonomos-transforman-planificacion-financiera-empresarial-20260803-194314/)
- [Dell'Acqua, F., et al. (2023). Navigating the jagged technological frontier. Harvard Business School Working Paper 24-013](https://www.hbs.edu/faculty/Pages/item.aspx?num=64700)
- [Brynjolfsson, E., Li, D., & Raymond, L. R. (2023). Generative AI at work. NBER Working Paper No. 31161](https://www.nber.org/papers/w31161)
- [McKinsey & Company. (2024). The state of AI in early 2024](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-in-early-2024)
- [Gmyrek, P., Winkler, H., & Garganta, S. (2024). Buffer or bottleneck? Employment exposure to generative AI and the digital divide in Latin America. ILO and World Bank](https://www.ilo.org/resource/news/press-release-ai-latin-america)
- [Wang, L., et al. (2023). A survey on large language model based autonomous agents. arXiv:2308.11432](https://arxiv.org/abs/2308.11432)
- [Xi, Z., et al. (2023). The rise and potential of large language model based agents: A survey. arXiv:2309.07864](https://arxiv.org/abs/2309.07864)
- [Mialon, G., et al. (2024). GAIA: A benchmark for general AI assistants. ICLR 2024](https://arxiv.org/pdf/2311.12983)
- [Liu, X., et al. (2024). AgentBench: Evaluating LLMs as agents. ICLR 2024](https://arxiv.org/abs/2308.03688)
- [Chen, Z., et al. (2021). FinQA: A dataset of numerical reasoning over financial data. EMNLP 2021](https://arxiv.org/abs/2109.00122)
- [Islam, P., et al. (2023). FinanceBench: A new benchmark for financial question answering. arXiv](https://arxiv.org/abs/2311.11944)
- [Zhu, F., et al. (2021). TAT-QA: A question answering benchmark on a hybrid of tabular and textual content in finance. ACL-IJCNLP 2021](https://arxiv.org/abs/2108.09052)
- [National Institute of Standards and Technology. (2023). AI Risk Management Framework 1.0](https://www.nist.gov/itl/ai-risk-management-framework)
- [World Bank Open Data](https://data.worldbank.org/)
- [povertyactionlab.org](https://www.povertyactionlab.org/)

<script is:inline data-astro-rerun>
    const styles = getComputedStyle(document.documentElement);
    const textColor = styles.getPropertyValue('--text-muted').trim();
    const gridColor = styles.getPropertyValue('--chart-grid').trim();
    const surfaceColor = styles.getPropertyValue('--surface').trim();
    const color1 = styles.getPropertyValue('--chart-1').trim();

    const premiumTooltip = {
        backgroundColor: surfaceColor,
        titleColor: textColor,
        bodyColor: textColor,
        borderColor: gridColor,
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        displayColors: true
    };

    const ctx1 = document.getElementById('grafico1');
    if (ctx1) {
        new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: ['Más tareas', 'Más rápido', 'Mayor calidad', 'Respuesta correcta fuera de frontera'],
                datasets: [{
                    label: 'Cambio porcentual',
                    data: [12.2, 25.1, 40, -19],
                    backgroundColor: [color1, color1 + 'cc', color1 + '99', color1 + '66'],
                    borderColor: color1,
                    borderWidth: 1,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: premiumTooltip
                },
                scales: {
                    x: { ticks: { color: textColor }, grid: { display: false } },
                    y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true }
                }
            }
        });
    }

    const ctx2 = document.getElementById('grafico2');
    if (ctx2) {
        new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: ['Promedio', 'Menos experimentados'],
                datasets: [{
                    label: 'Aumento de productividad (%)',
                    data: [14, 34],
                    backgroundColor: [color1, color1 + 'cc'],
                    borderColor: color1,
                    borderWidth: 1,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: premiumTooltip
                },
                scales: {
                    x: { ticks: { color: textColor }, grid: { display: false } },
                    y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true }
                }
            }
        });
    }

    const ctx3 = document.getElementById('grafico3');
    if (ctx3) {
        new Chart(ctx3, {
            type: 'line',
            data: {
                labels: ['1 paso', '5 pasos', '10 pasos', '20 pasos'],
                datasets: [{
                    label: 'Confiabilidad end-to-end (%)',
                    data: [95, 77.4, 59.9, 35.8],
                    borderColor: color1,
                    backgroundColor: color1 + '22',
                    tension: 0.3,
                    pointRadius: 4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: premiumTooltip
                },
                scales: {
                    x: { ticks: { color: textColor }, grid: { display: false } },
                    y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true, max: 100 }
                }
            }
        });
    }

    const ctx4 = document.getElementById('grafico4');
    if (ctx4) {
        new Chart(ctx4, {
            type: 'doughnut',
            data: {
                labels: ['Expuesto a GenAI', 'No expuesto'],
                datasets: [{
                    data: [38, 62],
                    backgroundColor: [color1, color1 + '66'],
                    borderColor: color1,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: { color: textColor, usePointStyle: true, padding: 20 }
                    },
                    tooltip: premiumTooltip
                }
            }
        });
    }

    const ctx5 = document.getElementById('grafico5');
    if (ctx5) {
        new Chart(ctx5, {
            type: 'bar',
            data: {
                labels: ['Brasil', 'México', 'Argentina', 'Costa Rica', 'Colombia', 'Uruguay', 'Chile'],
                datasets: [{
                    label: 'Exportaciones TIC 2025 (miles de millones USD)',
                    data: [7.44, 3.26, 2.83, 2.67, 2.31, 1.50, 0.76],
                    backgroundColor: [color1, color1 + 'e6', color1 + 'cc', color1 + 'b3', color1 + '99', color1 + '80', color1 + '66'],
                    borderColor: color1,
                    borderWidth: 1,
                    borderRadius: 4
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: premiumTooltip
                },
                scales: {
                    x: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true },
                    y: { ticks: { color: textColor }, grid: { display: false } }
                }
            }
        });
    }
</script>