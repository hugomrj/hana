---
titulo: "Por qué los presupuestos de modernización de legacy casi siempre fallan (y cómo evitarlo)"
extracto: "El 27% de sobrecosto promedio oculta el verdadero peligro: uno de cada seis proyectos de TI se desvía 200%. Una metodología probabilística basada en evidencia auditable puede convertir estimaciones opacas en decisiones defendibles."
fecha: "2026-08-05T14:00:00"
categoria: "Gestión de Proyectos"
etiquetas: ["Modernización", "Estimación de Costos", "GAO", "Monte Carlo", "Legacy", "CTO"]
link_original: "https://hanademi.com/decks/metodologia-para-estimar-costos-de-modernizacion-de-sistemas-heredados-20260802-193756/es/"
---

Cuando un arquitecto presenta un presupuesto de modernización con una sola cifra, está cometiendo el mismo error que un meteorólogo que predice "mañana lloverá a las 3:15 PM". El futuro de un proyecto de TI no tiene un único resultado; tiene una distribución de probabilidades. Y esa distinción no es académica: es la diferencia entre una estimación defendible y un presupuesto que colapsa ante el primer imprevisto.

La metodología SICT (Sistema de Información y Control Técnico) propone un marco basado en la [guía de estimación de costos de la GAO (GAO-20-195G)](https://www.gao.gov/assets/gao-20-195g.pdf), que establece doce pasos conectados para producir estimaciones confiables. El principio central es simple: una estimación no es un número, es una cadena de evidencia que conecta alcance, estructura de trabajo, datos, supuestos, sensibilidad, riesgo, documentación, aprobación y actualizaciones. Romper esa cadena en cualquier punto convierte la estimación en una conjetura.

## El peligro de los promedios y los cisnes negros de TI

En 2011, Bent Flyvbjerg y Alexander Budzier publicaron en [Harvard Business Review](https://hbr.org/2011/09/why-your-it-project-may-be-riskier-than-you-think) un análisis que cambió la forma en que entendemos el riesgo en proyectos de tecnología. Estudiaron 1,471 proyectos de TI y encontraron que el sobrecosto promedio era del 27%. Esa cifra, aunque preocupante, oculta el verdadero peligro: la distribución de resultados tiene una "cola gorda" donde los valores extremos son mucho más frecuentes de lo que cualquier modelo normal predeciría.

<div class="chart-container">
    <div class="chart-title">Distribución de sobrecostos en proyectos de TI. Fuente: Flyvbjerg & Budzier (2011)</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico1"></canvas>
    </div>
</div>

Uno de cada seis proyectos resultó ser un "cisne negro": sobrecostos promedio del 200% y retrasos del 70%. Estos no son errores estadísticos; son el patrón predecible de sistemas complejos donde las dependencias ocultas, la deuda técnica acumulada y los cambios de alcance crean efectos cascada. Si tu metodología de estimación no modela explícitamente esta cola gorda, estás subestimando el riesgo por un factor de siete.

## La trampa de la estimación determinista

Un presupuesto tradicional toma valores más probables para cada componente y los suma. El resultado es un número único que pretende representar el futuro. Pero ese número ignora la incertidumbre inherente: ¿qué pasa si la migración de datos toma el doble de lo esperado? ¿Qué pasa si una biblioteca de terceros deja de tener soporte? ¿Qué pasa si el equipo de seguridad descubre vulnerabilidades críticas a mitad del proyecto?

La solución es la [estimación probabilística mediante simulación Monte Carlo](https://www.pmi.org/learning/library/monte-carlo-simulation-cost-estimating-6195). En lugar de un valor único por componente, se definen tres escenarios: optimista, más probable y pesimista. El simulador ejecuta miles de combinaciones aleatorias de estos valores y produce una distribución de resultados. De esa distribución se extraen los niveles de confianza P50, P80 y P90: el presupuesto que no se excede en el 50%, 80% y 90% de los escenarios simulados.

<div class="chart-container">
    <div class="chart-title">Niveles de confianza presupuestal (P50, P80, P90). Fuente: Elaboración propia</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico2"></canvas>
    </div>
</div>

Un estudio de 2024 sobre siete casos de infraestructura recomendó explícitamente el uso de Monte Carlo para modelar la incertidumbre del ciclo de vida. La razón es pragmática: cuando presentas tres cifras en lugar de una, obligas a los tomadores de decisiones a discutir su apetito de riesgo. Un P50 puede ser atractivo para optimizar el uso de capital, pero un P90 es el único defendible ante auditores, reguladores o juntas directivas que necesitan certezas.

## El modelo de cinco años y las 75 celdas de costo

Una estimación confiable no termina con el despliegue; cubre todo el ciclo de propiedad. El modelo SICT propone cinco categorías de costo (construcción, migración, operación, seguridad y salida) evaluadas durante cinco años de propiedad. Cada intersección categoría-año recibe tres valores de incertidumbre, produciendo 75 celdas de costo auditable.

Esta granularidad no es burocracia; es protección contra las trampas del precio bajo. Una propuesta de construcción barata puede ocultar costos de migración descomunales, operaciones ineficientes, requerimientos de seguridad crecientes o costos de salida prohibitivos. Solo cuando evalúas la superficie completa de propiedad durante cinco años puedes comparar manzanas con manzanas entre proveedores.

<div class="chart-container">
    <div class="chart-title">Composición típica del costo total de propiedad. Fuente: Market Guide 2026</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico3"></canvas>
    </div>
</div>

Una [guía de mercado de 2026](https://www.fullstack.com/labs/resources/blog/software-development-price-guide-hourly-rate-comparison) estima que la mano de obra representa aproximadamente el 80% del costo de desarrollo de sistemas. Pero ese 80% es solo la punta visible del iceberg. El trabajo no-funcional—seguridad, rendimiento, integración, migración y pruebas—puede multiplicar las cotizaciones varias veces si no se hace visible antes de que los proveedores precifiquen el alcance. El [NIST SP 800-218 (Secure Software Development Framework)](https://csrc.nist.gov/pubs/sp/800/218/final) establece prácticas fundamentales que, si se omiten en la fase de descubrimiento, se convierten en cambios de alcance costosos durante la ejecución.

## La triangulación de 63 celdas: evidencia para procurement

El siguiente nivel de rigor es la triangulación. Siete componentes de costo, cada uno con tres puntos de incertidumbre, probados contra tres referencias de mercado independientes, producen 63 celdas de estimación auditable (7 × 3 × 3 = 63). El simulador se convierte en evidencia de procurement cuando cada componente expone su rango y su base de referencia externa, en lugar de devolver un total opaco.

Este enfoque es particularmente relevante bajo la [nueva Ley de Adquisiciones de México](https://www.dof.gob.mx/index_113.php?year=2025&month=04&day=16), publicada en el Diario Oficial de la Federación el 16 de abril de 2025, que exige mayor transparencia y defensibilidad en las contrataciones públicas. Una estimación que puede mostrar sus 63 celdas con sus fuentes es mucho más difícil de impugnar que una cifra única sin respaldo documental.

<div class="chart-container">
    <div class="chart-title">Componentes no-funcionales frecuentemente omitidos. Fuente: Elaboración propia</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico4"></canvas>
    </div>
</div>

## La evidencia federal: $1.03 mil millones invertidos, $13.5 millones ahorrados

La desconexión entre inversión y resultados no es teórica. El [Technology Modernization Fund (TMF)](https://www.gao.gov/products/gao-26-107737) del gobierno federal estadounidense invirtió aproximadamente $1.03 mil millones en 68 proyectos de modernización de TI entre 2018 y junio de 2025. De esos 68 proyectos, solo 11 habían realizado ahorros verificables por aproximadamente $13.5 millones. Otros 24 proyectos esperan ahorrar $1.06 mil millones en el futuro.

<div class="chart-container">
    <div class="chart-title">Estado de proyectos TMF: inversión vs ahorros realizados (2025). Fuente: GAO</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico5"></canvas>
    </div>
</div>

Esta disparidad ilustra por qué la metodología debe distinguir entre pronósticos y resultados verificados. La [GAO encontró que 8 de 11 sistemas críticos legacy carecían de planes de modernización completamente documentados](https://www.gao.gov/products/gao-25-107795). Un inventario se vuelve útil solo cuando cada sistema tiene una decisión responsable de modernización o retiro, con plazos, costos y criterios de éxito definidos.

## Medición funcional: más allá de pantallas y reportes

El error más común en la estimación de modernización es medir solo lo visible. Pantallas y reportes observan solo el 25% de las familias de unidades requeridas. El método [COSMIC (ISO/IEC 19761)](https://cosmic-sizing.org/) para medición de tamaño funcional demuestra que seis familias distintas de esfuerzo permanecen sin medir cuando solo se cuentan interfaces de usuario: lógica de negocio, integración de datos, reglas de decisión, transformaciones, validaciones y manejo de errores.

El modelo COCOMO II de [Barry Boehm](https://boehmcsse.org/tools/cocomo-ii/) ya advertía hace más de dos décadas que los factores de ajuste (complejidad, experiencia del equipo, herramientas, plataforma) pueden variar el esfuerzo estimado en órdenes de magnitud. Ignorar esos factores es construir una estimación sobre arena.

## Conclusión: La estimación como evidencia, no como promesa

Modernizar sistemas heredados no es un problema técnico; es un problema de gobernanza del riesgo. Las organizaciones que siguen tratando las estimaciones como promesas contractuales en lugar de modelos probabilísticos están firmando cheques en blanco. La metodología SICT no garantiza que el proyecto salga dentro del presupuesto—ninguna metodología puede garantizarlo en sistemas complejos. Pero garantiza que, cuando el proyecto se desvíe, tendrás la evidencia documental para entender por qué, defender tus decisiones y ajustar el rumbo sin perder credibilidad.

El verdadero valor de una estimación no está en su precisión predictiva, sino en su capacidad para hacer visible lo invisible: las dependencias ocultas, los costos diferidos, los riesgos de cola gorda y las salidas automatizadas. En un mundo donde el [costo promedio de una brecha de datos alcanzó los $4.88 millones en 2024](https://www.ibm.com/reports/data-breach), donde los sistemas críticos tienen entre 8 y 51 años de antigüedad, y donde los proyectos más riesgosos se desvían 200%, la estimación rigurosa dejó de ser un lujo técnico y se convirtió en una necesidad de supervivencia organizacional.

### Fuentes y Créditos

Este artículo es una adaptación de la investigación original y los datos recopilados por Hanademi, presentada en su formato de deck original.

- [Hanademi - Metodología para estimar costos de modernización de sistemas heredados](https://hanademi.com/decks/metodologia-para-estimar-costos-de-modernizacion-de-sistemas-heredados-20260802-193756/es/)
- [GAO Cost Estimating and Assessment Guide (GAO-20-195G)](https://www.gao.gov/assets/gao-20-195g.pdf)
- [Flyvbjerg & Budzier - Why Your IT Project May Be Riskier Than You Think (HBR 2011)](https://hbr.org/2011/09/why-your-it-project-may-be-riskier-than-you-think)
- [GAO - Technology Modernization Fund (GAO-26-107737)](https://www.gao.gov/products/gao-26-107737)
- [GAO - Critical Legacy Systems (GAO-25-107795)](https://www.gao.gov/products/gao-25-107795)
- [IBM Cost of a Data Breach Report 2024](https://www.ibm.com/reports/data-breach)
- [NIST SP 800-218 - Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [COSMIC Functional Size Measurement (ISO/IEC 19761)](https://cosmic-sizing.org/)
- [Ley de Adquisiciones, Arrendamientos y Servicios del Sector Público (DOF 2025)](https://www.dof.gob.mx/index_113.php?year=2025&month=04&day=16)
- [PMI - Monte Carlo Simulation in Cost Estimating](https://www.pmi.org/learning/library/monte-carlo-simulation-cost-estimating-6195)
- [Boehm - COCOMO II Software Cost Estimation](https://boehmcsse.org/tools/cocomo-ii/)

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
                labels: ['Promedio general', 'Cisnes negros (1 de cada 6)'],
                datasets: [{
                    label: 'Sobrecosto (%)',
                    data: [27, 200],
                    backgroundColor: [color1 + '99', color1],
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
                    tooltip: {
                        ...premiumTooltip,
                        callbacks: { label: ctx => ctx.parsed.y + '% de sobrecosto' }
                    }
                },
                scales: { 
                    x: { ticks: { color: textColor }, grid: { display: false } }, 
                    y: { ticks: { color: textColor, callback: v => v + '%' }, grid: { color: gridColor }, beginAtZero: true } 
                }
            }
        });
    }

    const ctx2 = document.getElementById('grafico2');
    if (ctx2) {
        new Chart(ctx2, {
            type: 'bar',
            data: { 
                labels: ['P50', 'P80', 'P90'],
                datasets: [{
                    label: 'Multiplicador del presupuesto base',
                    data: [1.0, 1.35, 1.85],
                    backgroundColor: [color1 + '99', color1 + 'cc', color1],
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
                    tooltip: {
                        ...premiumTooltip,
                        callbacks: { label: ctx => ctx.parsed.y + 'x del presupuesto base' }
                    }
                },
                scales: { 
                    x: { ticks: { color: textColor }, grid: { display: false } }, 
                    y: { ticks: { color: textColor, callback: v => v + 'x' }, grid: { color: gridColor }, beginAtZero: true, max: 2.0 } 
                }
            }
        });
    }

    const ctx3 = document.getElementById('grafico3');
    if (ctx3) {
        new Chart(ctx3, {
            type: 'doughnut',
            data: { 
                labels: ['Mano de obra (80%)', 'No-funcional (20%)'],
                datasets: [{
                    data: [80, 20],
                    backgroundColor: [color1, color1 + '66'],
                    borderColor: surfaceColor,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '65%',
                plugins: { 
                    legend: { 
                        display: true,
                        position: 'bottom', 
                        labels: { color: textColor, usePointStyle: true, padding: 15 } 
                    },
                    tooltip: {
                        ...premiumTooltip,
                        callbacks: { label: ctx => ctx.label }
                    }
                }
            }
        });
    }

    const ctx4 = document.getElementById('grafico4');
    if (ctx4) {
        new Chart(ctx4, {
            type: 'bar',
            data: { 
                labels: ['Seguridad', 'Rendimiento', 'Integración', 'Migración', 'Pruebas'],
                datasets: [{
                    label: 'Impacto en presupuesto si se omite',
                    data: [3.5, 2.8, 4.2, 3.8, 2.5],
                    backgroundColor: [color1, color1 + 'cc', color1 + '99', color1 + 'cc', color1 + '66'],
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
                    tooltip: {
                        ...premiumTooltip,
                        callbacks: { label: ctx => ctx.parsed.x + 'x multiplicador de costo' }
                    }
                },
                scales: { 
                    y: { ticks: { color: textColor }, grid: { display: false } }, 
                    x: { ticks: { color: textColor, callback: v => v + 'x' }, grid: { color: gridColor }, beginAtZero: true, max: 5 } 
                }
            }
        });
    }

    const ctx5 = document.getElementById('grafico5');
    if (ctx5) {
        new Chart(ctx5, {
            type: 'doughnut',
            data: { 
                labels: ['Invertido ($1.03B)', 'Ahorrado ($13.5M)', 'Esperado ($1.06B)'],
                datasets: [{
                    data: [1030, 13.5, 1060],
                    backgroundColor: [color1, color1 + '66', color1 + 'cc'],
                    borderColor: surfaceColor,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '60%',
                plugins: { 
                    legend: { 
                        display: true,
                        position: 'bottom', 
                        labels: { color: textColor, usePointStyle: true, padding: 15 } 
                    },
                    tooltip: {
                        ...premiumTooltip,
                        callbacks: { label: ctx => ctx.label + ' millones' }
                    }
                }
            }
        });
    }
</script>