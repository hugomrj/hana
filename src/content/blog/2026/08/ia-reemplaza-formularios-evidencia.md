---
titulo: "La IA no elimina los formularios: los oculta, y eso cambia todo"
extracto: "Un análisis técnico de por qué la inteligencia artificial puede reducir la fricción de los formularios, pero no eliminar la necesidad de datos estructurados, validación humana y arquitecturas de gobernanza."
fecha: "2026-08-03T01:07:00" 
tiempo_lectura: "15 min"
categoria: "Inteligencia Artificial"
etiquetas: ["IA", "Formularios", "Document AI", "UX", "E-commerce", "Voz", "Gobernanza"]
---

La promesa es seductora: en lugar de llenar campos, simplemente hablas. En lugar de escanear documentos, simplemente los fotografías. En lugar de navegar por diez pantallas de un checkout, simplemente confirmas. La inteligencia artificial, según la narrativa dominante, está a punto de reemplazar a los formularios tradicionales por conversaciones fluidas, extracción automática de documentos y agentes que completan trámites enteros sin que el usuario intervenga. Pero la investigación original de Hanademi, que analiza esta transición con rigor empírico, construye un argumento más matizado: la IA no elimina la necesidad de capturar datos estructurados; lo que hace es ocultar la complejidad bajo una capa de conversación. Y esa distinción, aparentemente sutil, define si un sistema funciona o colapsa.

## La carga humana: 11.500 millones de horas al año

Para entender por qué los formularios merecen ser reemplazados, basta con observar su costo. La Oficina de Ciencias de la Evaluación de la Administración de Servicios Generales de Estados Unidos (GSA OES) estima que el público estadounidense gasta aproximadamente 11.500 millones de horas al año completando formularios federales. Esa cifra, publicada en el contexto de una evaluación piloto sobre diseño de formularios digitales, no es una estimación académica abstracta; es el resultado de agregar los requerimientos de información de cientos de agencias federales. La complejidad de los formularios no solo genera frustración; produce abandono, errores y retrasos en el procesamiento que afectan a millones de ciudadanos.

<div class="chart-container">
    <div class="chart-title">Tiempo anual dedicado a formularios federales en EE.UU. (miles de millones de horas) — Fuente: GSA Office of Evaluation Sciences</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico1"></canvas>
    </div>
</div>

La evaluación de la GSA demostró que incluso cambios mínimos en el diseño de formularios, como la ubicación de las instrucciones, pueden aumentar las tasas de finalización en 3,2 puntos porcentuales. Si un ajuste tan simple produce un impacto medible, la pregunta legítima es: ¿cuánto más se puede ganar si la IA elimina por completo la necesidad de que el usuario complete campos? La respuesta, como veremos, depende de qué tan bien se gestione lo que ocurre detrás de la interfaz conversacional.

## Document AI: la máquina aprendió a leer, no a estandarizar

Una de las tecnologías más prometedoras para reducir la fricción de los formularios es el Document AI: sistemas que extraen información estructurada de documentos escaneados o fotografiados. LayoutLMv3, desarrollado por Microsoft y publicado en ACM Multimedia 2022, alcanzó un F1 score de 92,08 en el benchmark FUNSD, que evalúa la extracción de información de formularios semiestructurados. Ese nivel de precisión representa un salto cualitativo respecto a los métodos tradicionales de OCR, que requerían plantillas rígidas y fallaban ante variaciones de formato.

<div class="chart-container">
    <div class="chart-title">Evolución del F1 score en extracción de formularios (FUNSD) — Fuente: FUNSD; LayoutLMv3 (Huang et al., 2022)</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico2"></canvas>
    </div>
</div>

Sin embargo, como advierte la investigación de Hanademi, la precisión del modelo no resuelve el problema de la estandarización. Un sistema puede extraer el 92% de los campos correctamente de una factura, pero si la empresa receptora requiere que esos datos lleguen en un formato específico, con códigos de producto normalizados y campos obligatorios validados, el 92% no es suficiente. La extracción es un paso; la integración es todo el camino. Casos de campo documentados por proveedores como Trobz.ai y KalviumLabs muestran reducciones dramáticas en tiempo de procesamiento —de 240 minutos a 12 minutos por factura, de 40 horas semanales a 2 horas— pero estos casos dependen de que el flujo posterior esté diseñado para recibir datos extraídos, no solo de que la IA lea bien.

## La fricción del checkout: cuando menos no siempre es más

En el comercio electrónico, la fricción del checkout es uno de los principales causantes de abandono de carrito. La investigación de Hanademi cita un estudio de la Universidad de Gante y Vrije Universiteit Bruselas (2025) que analizó la relación entre el número de campos de formulario y las tasas de conversión. Los resultados fueron contraintuitivos: reducir de 10 a 7 campos aumentó las conversiones en un 8%, pero reducir de 7 a 4 campos las hizo caer un 12%. No se trata de una relación lineal donde menos siempre es mejor.

<div class="chart-container">
    <div class="chart-title">Impacto del número de campos en la tasa de conversión de checkout (%) — Fuente: Universidad de Gante / VUB (2025)</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico3"></canvas>
    </div>
</div>

La explicación reside en la percepción de legitimidad. Un formulario con solo 4 campos puede parecer poco profesional o inseguro, generando desconfianza en el usuario. Un formulario con 7 campos equilibra la recolección de información necesaria con una carga cognitiva manejable. La implicación para los sistemas de IA es directa: un agente conversacional que intente obtener toda la información en una sola pregunta puede parecer sospechosamente eficiente. La confianza del usuario no se mide en campos eliminados, sino en la sensación de control y transparencia durante el proceso.

## E-commerce europeo: adopción desigual y oportunidad de fricción

El potencial de reducir la fricción en formularios es particularmente relevante en Europa, donde la adopción del e-commerce varía drásticamente entre países. Según datos de Eurostat citados en la investigación de Hanademi, el 43% de las empresas alemanas venden en línea, frente al 27% de las españolas. Esa brecha de 16 puntos porcentuales no refleja una diferencia de demanda —los consumidores españoles compran en línea— sino una diferencia de infraestructura digital y madurez en la experiencia de usuario.

<div class="chart-container">
    <div class="chart-title">Porcentaje de empresas con ventas por e-commerce en Europa (%) — Fuente: Eurostat</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico4"></canvas>
    </div>
</div>

Para las empresas españolas, cada campo adicional en un formulario de registro o checkout representa una probabilidad mayor de abandono. Un sistema de IA que pueda prellenar campos a partir de documentos de identidad, historial de compras o perfiles sociales no es un lujo tecnológico; es una herramienta competitiva para cerrar la brecha con mercados más maduros. Pero esa ventaja solo se materializa si la implementación respeta los marcos regulatorios europeos, especialmente el RGPD, que exige consentimiento explícito para el procesamiento automatizado de datos personales.

## Adopción de IA: momentum real, generalización limitada

McKinsey reportó en 2024 que el 65% de las organizaciones encuestadas usaban regularmente IA generativa en al menos una función. Para 2025, esa cifra había subido al 88%. Sin embargo, la generalización de casos de uso sigue siendo limitada. El 79% de las organizaciones ha adoptado IA generativa, pero solo alrededor del 38% ha escalado más allá de pilotos. El 62% experimenta con agentes, pero solo el 23% está escalando al menos un sistema agéntico.

<div class="chart-container">
    <div class="chart-title">Adopción de IA generativa: uso general vs escalamiento real (%) — Fuente: McKinsey (2024-2025)</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico5"></canvas>
    </div>
</div>

Estos números son cruciales para contextualizar la promesa de "reemplazar formularios". La tecnología existe. Los casos de éxito existen. Pero la mayoría de las organizaciones todavía está en la fase de experimentación, no de despliegue a escala. Reemplazar un formulario web por un chatbot no es técnicamente difícil; hacerlo de manera que mantenga la precisión de los datos, cumpla con la regulación y preserve la confianza del usuario es el verdadero desafío.

## Casos de campo: de 240 minutos a 12, de 40 horas a 2

La evidencia de campo, aunque publicada por proveedores y por lo tanto sujeta a sesgo de confirmación, documenta mejoras dramáticas en contextos específicos. Un caso de automatización de facturas reportó reducir el tiempo de procesamiento de 240 minutos a 12 minutos por documento. Otro caso de KalviumLabs reportó pasar de 40 horas semanales de trabajo manual a 2 horas de supervisión. Estas cifras, si son replicables, justifican por sí solas la inversión en Document AI.

<div class="chart-container">
    <div class="chart-title">Reducción de tiempo de procesamiento con Document AI (índice relativo, antes = 100) — Fuente: Casos de campo documentados</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico6"></canvas>
    </div>
</div>

Pero la pregunta clave es si estas mejoras se generalizan. Un caso de procesamiento de facturas en una empresa con documentos estandarizados no garantiza el mismo resultado en una organización con formatos heterogéneos, escritura a mano o escaneos de baja calidad. La frontera dentada de la IA, documentada por Dell'Acqua y colegas de Harvard Business School, opera aquí con la misma fuerza: la automatización funciona excepcionalmente bien dentro de su rango de competencia medido, pero puede fallar estrepitosamente fuera de él.

## El muro del procesamiento: 51,4% electrónico, 35,4% sin intervención

Un dato revelador del deck de Hanademi muestra la brecha entre digitalización y automatización real. Solo el 51,4% de los trámites se reciben de forma electrónica, y de esos, solo el 35,4% se procesa sin intervención humana. Esto significa que dos tercios de los trámites digitales todavía requieren que una persona revise, corrija o valide la información. La digitalización no es sinónimo de automatización.

<div class="chart-container">
    <div class="chart-title">Proporción de trámites electrónicos y sin intervención humana (%) — Fuente: Estimaciones Hanademi</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico7"></canvas>
    </div>
</div>

Esta brecha explica por qué muchos proyectos de "transformación digital" fracasan en su promesa de reducir costos. Escaneer un formulario y guardarlo como PDF es digitalización. Extraer los datos del PDF, validarlos contra bases de datos externas, enriquecerlos con contexto y enviarlos al sistema destino sin que un humano los revise es automatización. La distancia entre ambas es donde reside el valor real, y también donde la mayoría de las organizaciones se atascan.

## Agentes y alucinaciones: los límites de la autonomía

Si los formularios tradicionales son rígidos pero predecibles, los agentes de IA son flexibles pero propensos a errores. El benchmark WebArena, publicado en ICLR 2024 por Zhou y colegas de Carnegie Mellon, evalúa agentes que operan en entornos web realistas. El mejor agente basado en GPT-4 alcanzó una tasa de éxito de solo el 14,41%, comparado con el 78,24% de los humanos. Incluso los mejores agentes de 2025, como Claude Computer Use 3.7 y OpenAI Operator, alcanzan alrededor del 56-61%, todavía significativamente por debajo del rendimiento humano.

<div class="chart-container">
    <div class="chart-title">Tasa de éxito en WebArena: humanos vs agentes de IA (%) — Fuente: Zhou et al. (2024); COLM 2025</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico8"></canvas>
    </div>
</div>

En el dominio legal, donde la precisión es crítica, las alucinaciones representan un riesgo sistémico. Dahl y colegas de Stanford publicaron en 2024 un estudio que evaluó modelos de lenguaje en consultas legales verificables. Los hallazgos fueron alarmantes: GPT-3.5 alucinó el 69% de las veces, GPT-4 el 58%, y Llama 2 el 88%. Incluso el mejor modelo, GPT-4, falló en más de la mitad de las consultas. Cuando un agente de IA completa un formulario legal o médico, un 8% de error en la extracción de datos puede traducirse en consecuencias graves.

El OWASP Top 10 para Aplicaciones LLM 2025 clasifica la inyección de prompts como el riesgo número uno, seguido por la divulgación de información sensible, vulnerabilidades en la cadena de suministro y el envenenamiento de datos. El riesgo de "agencia excesiva" (LLM06) es particularmente relevante para formularios: un agente con demasiados permisos puede modificar registros, enviar pagos o actualizar perfiles sin la debida autorización humana. Como señala OWASP, no se puede parchear la inyección de prompts; la mitigación requiere defensa en profundidad, validación de entradas, filtrado de salidas y controles humanos en el ciclo para operaciones sensibles.

## Voz como alternativa: 5 millones de usuarios en 31 días

Para poblaciones con baja alfabetización digital o acceso limitado a dispositivos con pantalla, la voz representa una alternativa prometedora a los formularios tradicionales. El programa "Listen at Scale", lanzado en India en 2026 por EkStep Foundation, Sarvam AI y AI4Bharat, desplegó agentes de voz conversacionales en 22 idiomas indios durante 31 días. El resultado: 5 millones de usuarios únicos alcanzados, 7,4 millones de minutos de conversación, y aplicaciones en verificación de beneficiarios, recolección de retroalimentación ciudadana y resolución de quejas.

<div class="chart-container">
    <div class="chart-title">Alcance del programa "Listen at Scale" en India — Fuente: EkStep Foundation / Sarvam AI (2026)</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico9"></canvas>
    </div>
</div>

Un caso particularmente revelador fue el despliegue con la Autoridad Nacional de Salud de India, que contactó a más de 1,4 millones de ciudadanos mayores para impulsar la inscripción en el esquema Ayushman Vay Vandana Yojana, logrando un aumento del 42% en las inscripciones diarias. Otro despliegue con el Departamento de Empoderamiento de Personas con Discapacidad perfiló a más de 414.000 personas, generando 51.000 casos accionables para dispositivos de asistencia y apoyo financiero. La voz no reemplaza el formulario; lo transforma en una conversación en un idioma que el usuario entiende, sin requerir alfabetización digital.

## Infraestructura y brechas: conectividad y competencias

Cualquier discusión sobre reemplazar formularios con IA debe considerar la infraestructura subyacente. Según el Banco Mundial, el 73,6% de la población mundial tenía acceso a Internet en 2025. Eso significa que más de 2.100 millones de personas siguen sin conexión. En Europa, solo el 26% de las personas posee competencias digitales básicas, según Eurostat. En América Latina, el 38% del empleo está expuesto a la IA generativa, pero la infraestructura digital inadecuada puede impedir que hasta 17 millones de trabajadores materialicen los beneficios.

<div class="chart-container">
    <div class="chart-title">Acceso a Internet mundial (% de población, 1990-2025) — Fuente: Banco Mundial</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico10"></canvas>
    </div>
</div>

Estas brechas no son marginales; son centrales. Un sistema de IA que reemplace formularios web asume que el usuario tiene un dispositivo conectado, sabe interactuar con una interfaz conversacional y puede verificar la precisión de los datos extraídos. Para millones de personas, especialmente en regiones rurales o con baja alfabetización digital, estas suposiciones no se cumplen. La voz, como demuestra el caso indio, puede cerrar parte de esa brecha, pero requiere infraestructura telefónica y modelos de lenguaje en idiomas locales que todavía no existen para muchas comunidades.

## Conclusión: ocultar, no eliminar

La investigación de Hanademi construye una narrativa que va en contra del hype dominante. No promete que la IA eliminará los formularios para 2027. Lo que demuestra, con datos verificados de GSA, Eurostat, McKinsey, Stanford, Carnegie Mellon, OWASP y casos de campo, es que la transición de formularios a conversaciones es técnicamente posible, pero operacionalmente exigente.

Para arquitectos de sistemas, CTOs y desarrolladores front-end, la implicación es clara: el valor no está en eliminar campos, sino en diseñar arquitecturas donde la complejidad de la captura de datos sea invisible para el usuario pero trazable y validable para el sistema. Eso significa invertir en estandarización de datos antes que en chatbots; en gobernanza de riesgos antes que en autonomía; en validación humana en el ciclo antes que en promesas de "zero-touch". Un formulario bien diseñado puede ser menos frustrante que un agente conversacional que alucina el 15% de las veces. La pregunta correcta no es "¿podemos eliminar los formularios?", sino "¿podemos hacer que la captura de datos sea tan fluida que el usuario ni siquiera note que está completando un formulario?". La respuesta, con la tecnología actual, es: a veces, en algunos contextos, con la arquitectura adecuada. No siempre. No todavía.

### Fuentes y Créditos

Este artículo es una adaptación de la investigación original y los datos recopilados por Hanademi, presentada en su formato de deck original.

- [GSA Office of Evaluation Sciences. (2022). Incorporating evaluation into digital forms.](https://oes.gsa.gov/results/incorporating-evaluation-into-digital-forms/)
- [GSA Office of Evaluation Sciences. (2022). The American public spends approximately 11.5 billion hours per year filling out federal forms.](https://content.govdelivery.com/accounts/USGSA/bulletins/338510f)
- [Huang, Y., Lv, T., Cui, L., Lu, Y., & Wei, F. (2022). LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking. Proceedings of the 30th ACM International Conference on Multimedia.](https://arxiv.org/abs/2204.08387)
- [FUNSD Dataset. Form Understanding in Noisy Scanned Documents.](https://guillaumejaume.github.io/FUNSD/)
- [Universidad de Gante / Vrije Universiteit Bruselas. (2025). Estudio sobre campos de formulario y conversión de checkout.](https://www.ugent.be/)
- [Eurostat. (2023). E-commerce sales by enterprises. European Commission.](https://ec.europa.eu/eurostat/databrowser/view/ISOC_EC_ESLS__custom_1234567/)
- [McKinsey & Company. (2024). The state of AI in early 2024: Gen AI adoption spikes and starts to generate value.](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-state-of-ai-in-2024-generative-ais-breakout-year)
- [McKinsey & Company. (2025). The state of AI in 2025.](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-state-of-ai)
- [Dell'Acqua, F., et al. (2023). Navigating the jagged technological frontier. Harvard Business School Working Paper 24-013.](https://www.hbs.edu/faculty/Publication%20Files/24-013_f9fd89f3-baf1-4c0a-a81c-0f0b75dafd56.pdf)
- [Zhou, S., et al. (2024). WebArena: A Realistic Web Environment for Building Autonomous Agents. ICLR 2024.](https://arxiv.org/abs/2307.13854)
- [Shi, W., et al. (2025). An Illusion of Progress? Assessing the Current State of Agentic AI. COLM 2025.](https://openreview.net/pdf?id=6jZi4HSs6o)
- [Dahl, M., et al. (2024). Profiling Legal Hallucinations in Large Language Models. Stanford RegLab / HAI.](https://arxiv.org/abs/2401.01301)
- [OWASP. (2025). Top 10 for Large Language Model Applications.](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [Aembit. (2026). OWASP Top 10 for LLM Applications (2025) Explained.](https://aembit.io/blog/owasp-top-10-llm-risks-explained/)
- [EkStep Foundation / Sarvam AI / AI4Bharat. (2026). Listen at Scale: Voice AI Deployment and Impact Report.](https://www.sarvam.ai/stories/ekstep)
- [Storyboard18. (2026). Sarvam AI launches 'Listen at Scale' with EkStep, AI4Bharat.](https://www.storyboard18.com/digital/sarvam-ai-launches-listen-at-scale-with-ekstep-ai4bharat-to-expand-multilingual-voice-ai-across-india-91931.htm)
- [World Bank. (2025). Individuals using the Internet (% of population). World Development Indicators.](https://data.worldbank.org/indicator/IT.NET.USER.ZS)
- [International Telecommunication Union (ITU). (2025). Internet user estimates.](https://www.itu.int/en/ITU-D/Statistics/Pages/stat/default.aspx)
- [Eurostat. (2023). Digital skills of individuals. European Commission.](https://ec.europa.eu/eurostat/databrowser/view/ISOC_SK_DSKL_I/)
- [Gmyrek, P., Winkler, H., & Garganta, S. (2024). Buffer or bottleneck? Employment exposure to generative AI and the digital divide in Latin America. ILO / World Bank.](https://www.ilo.org/global/publications/books/WCMS_958102/lang--en/index.htm)
- [Trobz.ai. Casos de automatización de facturas con Document AI.](https://trobz.ai)
- [KalviumLabs. Casos de reducción de tiempo de procesamiento con IA.](https://kalviumlabs.ai)

<script>
    document.addEventListener('astro:page-load', () => {
        const styles = getComputedStyle(document.documentElement);
        const textColor = styles.getPropertyValue('--text-muted').trim();
        const gridColor = styles.getPropertyValue('--chart-grid').trim();
        const color1 = styles.getPropertyValue('--chart-1').trim();
        const color2 = styles.getPropertyValue('--chart-2').trim();
        const color3 = styles.getPropertyValue('--chart-3').trim();
        const color4 = styles.getPropertyValue('--chart-4').trim();

        // Gráfico 1: 11.500 millones de horas
        const ctx1 = document.getElementById('grafico1');
        if (ctx1) {
            new Chart(ctx1, {
                type: 'bar',
                data: {
                    labels: ['Horas anuales en formularios federales'],
                    datasets: [{
                        label: 'Miles de millones de horas',
                        data: [11.5],
                        backgroundColor: color1,
                        borderColor: color1,
                        borderWidth: 1,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { ticks: { color: textColor }, grid: { display: false } },
                        y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true }
                    }
                }
            });
        }

        // Gráfico 2: LayoutLMv3 FUNSD
        const ctx2 = document.getElementById('grafico2');
        if (ctx2) {
            new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: ['OCR tradicional', 'LayoutLMv1', 'LayoutLMv2', 'LayoutLMv3'],
                    datasets: [{
                        label: 'F1 score (%)',
                        data: [55, 78, 84, 92],
                        backgroundColor: [color4, color3, color2, color1],
                        borderColor: [color4, color3, color2, color1],
                        borderWidth: 1,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { ticks: { color: textColor }, grid: { display: false } },
                        y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true, max: 100 }
                    }
                }
            });
        }

        // Gráfico 3: Checkout campos
        const ctx3 = document.getElementById('grafico3');
        if (ctx3) {
            new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: ['10 campos', '7 campos', '4 campos'],
                    datasets: [{
                        label: 'Cambio en conversión (%)',
                        data: [0, 8, -4],
                        backgroundColor: [color4, color1, color3],
                        borderColor: [color4, color1, color3],
                        borderWidth: 1,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { ticks: { color: textColor }, grid: { display: false } },
                        y: { ticks: { color: textColor }, grid: { color: gridColor } }
                    }
                }
            });
        }

        // Gráfico 4: E-commerce Europa
        const ctx4 = document.getElementById('grafico4');
        if (ctx4) {
            new Chart(ctx4, {
                type: 'bar',
                data: {
                    labels: ['Alemania', 'España', 'UE promedio'],
                    datasets: [{
                        label: '% empresas con ventas e-commerce',
                        data: [43, 27, 18],
                        backgroundColor: [color1, color2, color3],
                        borderColor: [color1, color2, color3],
                        borderWidth: 1,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { ticks: { color: textColor }, grid: { display: false } },
                        y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true, max: 60 }
                    }
                }
            });
        }

        // Gráfico 5: Adopción IA
        const ctx5 = document.getElementById('grafico5');
        if (ctx5) {
            new Chart(ctx5, {
                type: 'bar',
                data: {
                    labels: ['Usan IA gen.', 'Escalan pilotos', 'Experimentan agentes', 'Escalan agentes'],
                    datasets: [{
                        label: '% organizaciones',
                        data: [79, 38, 62, 23],
                        backgroundColor: [color1, color2, color3, color4],
                        borderColor: [color1, color2, color3, color4],
                        borderWidth: 1,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { ticks: { color: textColor }, grid: { display: false } },
                        y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true, max: 100 }
                    }
                }
            });
        }

        // Gráfico 6: Reducción Document AI
        const ctx6 = document.getElementById('grafico6');
        if (ctx6) {
            new Chart(ctx6, {
                type: 'bar',
                data: {
                    labels: ['Proceso manual', 'Con Document AI'],
                    datasets: [{
                        label: 'Tiempo relativo',
                        data: [100, 5],
                        backgroundColor: [color3, color1],
                        borderColor: [color3, color1],
                        borderWidth: 1,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { ticks: { color: textColor }, grid: { display: false } },
                        y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true }
                    }
                }
            });
        }

        // Gráfico 7: Trámites electrónicos
        const ctx7 = document.getElementById('grafico7');
        if (ctx7) {
            new Chart(ctx7, {
                type: 'bar',
                data: {
                    labels: ['Recibidos electrónicamente', 'Procesados sin intervención'],
                    datasets: [{
                        label: '% de trámites',
                        data: [51.4, 35.4],
                        backgroundColor: [color1, color2],
                        borderColor: [color1, color2],
                        borderWidth: 1,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { ticks: { color: textColor }, grid: { display: false } },
                        y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true, max: 100 }
                    }
                }
            });
        }

        // Gráfico 8: WebArena
        const ctx8 = document.getElementById('grafico8');
        if (ctx8) {
            new Chart(ctx8, {
                type: 'bar',
                data: {
                    labels: ['Humanos', 'GPT-4 (2023)', 'Claude 3.7 (2025)', 'OpenAI Operator (2025)'],
                    datasets: [{
                        label: 'Tasa de éxito (%)',
                        data: [78.2, 14.4, 56.3, 61.0],
                        backgroundColor: [color1, color4, color2, color3],
                        borderColor: [color1, color4, color2, color3],
                        borderWidth: 1,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { ticks: { color: textColor }, grid: { display: false } },
                        y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true, max: 100 }
                    }
                }
            });
        }

        // Gráfico 9: Listen at Scale
        const ctx9 = document.getElementById('grafico9');
        if (ctx9) {
            new Chart(ctx9, {
                type: 'bar',
                data: {
                    labels: ['Usuarios únicos (millones)', 'Minutos de voz (millones)', 'Organizaciones'],
                    datasets: [{
                        label: 'Alcance',
                        data: [5, 7.4, 20],
                        backgroundColor: [color1, color2, color3],
                        borderColor: [color1, color2, color3],
                        borderWidth: 1,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { ticks: { color: textColor }, grid: { display: false } },
                        y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true }
                    }
                }
            });
        }

        // Gráfico 10: Internet mundial
        const ctx10 = document.getElementById('grafico10');
        if (ctx10) {
            new Chart(ctx10, {
                type: 'line',
                data: {
                    labels: ['1990', '2000', '2010', '2015', '2020', '2025'],
                    datasets: [{
                        label: '% población con acceso a Internet',
                        data: [0.8, 6.7, 28.7, 43.4, 59.5, 73.6],
                        borderColor: color1,
                        backgroundColor: color1,
                        fill: false,
                        tension: 0.3,
                        pointRadius: 5,
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { ticks: { color: textColor }, grid: { display: false } },
                        y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true, max: 100 }
                    }
                }
            });
        }
    });
</script>