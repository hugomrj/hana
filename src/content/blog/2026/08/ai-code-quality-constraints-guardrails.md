---
titulo: "Por qué los desarrolladores que más confían en AI escriben el código más peligroso"
extracto: "Un estudio de campo con 16 desarrolladores experimentados demostró que AI los hizo 19% más lentos mientras creían ser 20% más rápidos. La paradoja de la calidad percibida vs. la estabilidad real obliga a repensar cómo medimos la productividad asistida por modelos."
fecha: "2026-08-05T16:30:00"
categoria: "Ingeniería de Software"
etiquetas: ["AI", "Calidad de Código", "DORA", "Productividad", "DevOps", "Seguridad"]
link_original: "https://hanademi.com/decks/ai-code-quality-depends-on-the-right-constraints-20260802-153358/es/"
---

Existe una paradoja incómoda en el desarrollo de software contemporáneo: cuanto más entusiasta es un equipo respecto a la inteligencia artificial generativa, más frágiles se vuelven sus entregas en producción. No es un problema de adopción, es un problema de medición. Las organizaciones que evalúan AI únicamente por cuántas líneas de código produce están optimizando la variable equivocada, y la evidencia empírica acumulada en los últimos tres años empieza a mostrarlo con una claridad preocupante.

## La ilusión de calidad y la caída de la estabilidad

El [Accelerate State of DevOps Report 2024](https://dora.dev/research/2024/dora-report/) de Google Cloud documentó una correlación que debería incomodar a cualquier CTO: un aumento del 25% en la adopción de herramientas de AI se asoció con una mejora del 3.4% en la calidad percibida del código, pero simultáneamente con caídas en las dos métricas que realmente sostienen un sistema en producción. El throughput de entrega bajó 1.5%, y la estabilidad se desplomó 7.2%.

<div class="chart-container">
    <div class="chart-title">Impacto de un aumento del 25% en adopción de AI sobre métricas DORA. Fuente: Accelerate State of DevOps 2024</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico1"></canvas>
    </div>
</div>

La desconexión es el verdadero hallazgo. El código *se siente* mejor al desarrollador que lo escribe con asistencia de AI, pero el sistema se vuelve más difícil de enviar con seguridad. Este desfase sugiere que las métricas tradicionales de actividad —líneas por hora, commits por día, pull requests cerrados— son exactamente lo que AI sabe inflar artificialmente, mientras que las métricas de resultado —tiempo de recuperación, tasa de fallo de cambios, tiempo de ciclo real— son las que AI no puede fingir. La solución no es rechazar la herramienta, es dejar de medirla con la regla equivocada.

## La brecha entre uso y confianza

La [Stack Overflow Developer Survey](https://survey.stackoverflow.co/2024/ai) reveló en 2024 otra señal de alarma: el 62% de los desarrolladores usaban herramientas de AI, pero solo el 43% confiaba en su precisión. Casi un tercio desconfiaba activamente del output.

<div class="chart-container">
    <div class="chart-title">Adopción vs confianza en herramientas de AI (2024). Fuente: Stack Overflow Developer Survey</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico2"></canvas>
    </div>
</div>

Esta brecha no es resistencia al cambio; es un mecanismo de defensa profesional racional. Un desarrollador que usa AI pero no confía en ella está operando con un modo de revisión intensivo que, irónicamente, es el modo correcto. El peligro aparece cuando la brecha se invierte: cuando equipos adoptan AI sin la revisión proporcional a su tasa real de errores.

Lo más revelador es que la brecha no se está cerrando con el tiempo. En la [edición 2025](https://survey.stackoverflow.co/2025/ai) de la misma encuesta, la confianza cayó al 33% mientras la desconfianza subió al 46%. Más experiencia con las herramientas ha generado *menos* fe, no más. Este dato contradice la narrativa de que AI "madurará" y simplemente la aceptaremos. Lo que está madurando es el juicio crítico de quienes la usan.

<div class="chart-container">
    <div class="chart-title">Evolución de la confianza en AI entre desarrolladores. Fuente: Stack Overflow</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico3"></canvas>
    </div>
</div>

## El estudio de campo que nadie esperaba

La evidencia más contundente llegó en 2025 con un [estudio de campo aleatorizado realizado por METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/). Dieciséis desarrolladores experimentados de código abierto completaron 246 tareas reales de repositorio bajo condiciones controladas. El resultado fue contraintuitivo: cuando se les permitió usar herramientas de AI de principios de 2025, tardaron un 19% más en completar las tareas, no menos.

<div class="chart-container">
    <div class="chart-title">Expectativa vs realidad del impacto de AI en velocidad de desarrollo. Fuente: METR 2025</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico4"></canvas>
    </div>
</div>

Lo más perturbador del estudio no fue el resultado, sino la disociación perceptiva. Antes del experimento, expertos en economía pronosticaban una reducción del 39% en tiempo. Después de vivir la experiencia, los propios desarrolladores estimaban haber trabajado un 20% más rápido. La realidad medida fue exactamente lo opuesto: 19% más lentos. Este desacople entre percepción y medición es exactamente el tipo de sesgo que justifica tener restricciones formales en los flujos de trabajo, porque el juicio humano sobre su propia productividad asistida es notoriamente poco fiable.

## El problema invisible: seguridad del output

El riesgo más serio del código generado por AI no es que sea funcionalmente incorrecto, sino que sea funcionalmente correcto *y vulnerable*. El [estudio seminal de Pearce y colaboradores en IEEE S&P 2022](https://cacm.acm.org/research-highlights/asleep-at-the-keyboard-assessing-the-security-of-github-copilots-code-contributions/) generó 1,689 programas a través de 89 escenarios de seguridad distintos y clasificó aproximadamente el 40% como vulnerables.

Ese 40% no es una tasa universal aplicable a todos los modelos actuales. Es una medición de una versión temprana de Copilot bajo condiciones específicas. Pero establece un principio que sigue vigente: el output funcional no limpia la puerta de seguridad. La coincidencia es perturbadora: la tasa de confianza en AI (43%) está a solo tres puntos porcentuales de la tasa de programas vulnerables (40%). Dicho de otro modo, confiar ciegamente en AI es estadísticamente equivalente a aceptar que casi uno de cada dos bloques de código podría tener fallas explotables.

## Las restricciones no son universales

Un hallazgo sutil pero crucial proviene de experimentos de contexto. Cuando se añadió contexto irrelevante a las peticiones, un modelo (Sonnet) vio caer su desempeño en 8 puntos de benchmark, mientras que otro modelo (Opus) mejoró 4 puntos con exactamente la misma entrada. La misma estrategia de prompting produce resultados opuestos en modelos distintos.

Esto significa que las "mejores prácticas" copiadas entre workflows son estructuralmente defectuosas. Las restricciones —qué contexto incluir, qué temperatura usar, qué tamaño de ventana, qué modo de salida exigir— deben evaluarse por modelo específico, no decretarse globalmente. Un estándar corporativo único para todas las herramientas de AI es, técnicamente, una mala ingeniería.

## El costo real de la certeza

El extremo opuesto de la confianza ciega es la verificación formal, y el [proyecto seL4](https://www.sigops.org/s/conferences/sosp/2009/papers/klein-sosp09.pdf) muestra su costo real. Para verificar formalmente un kernel de 8,700 líneas de C, el equipo produjo aproximadamente 200,000 líneas de prueba en Isabelle/HOL. Una relación de más de 20 a 1 entre especificación verificada y código implementado.

<div class="chart-container">
    <div class="chart-title">Proporción de esfuerzo entre implementación y verificación formal en seL4. Fuente: Klein et al. (SOSP 2009)</div>
    <div class="chart-canvas-wrapper">
        <canvas id="grafico5"></canvas>
    </div>
</div>

Esa inversión no es una regla universal, sino una demostración de dónde pertenece la verificación formal: donde el fallo es caro. En sistemas de aviación, médicos, financieros o de infraestructura crítica, el multiplicador de 20x es justificable. En un formulario web interno, es un despilfarro. El error común es aplicar el mismo nivel de rigor a todo, ya sea por exceso (verificar formalmente lo trivial) o por defecto (no verificar lo crítico).

La evidencia en compiladores refuerza el punto. Pruebas aleatorias con herramientas como Csmith descubrieron 325 bugs en GCC y 79 en LLVM, mientras que CompCert, cuyo núcleo está verificado formalmente, reportó solo 6 bugs, ninguno produciendo código incorrecto. La verificación funciona, pero cuesta. La pregunta correcta nunca es "¿debemos verificar?", sino "¿cuánto cuesta no verificar en este contexto específico?".

## Medir en cinco dimensiones, no en una

El [framework SPACE](https://cacm.acm.org/practice/the-space-of-developer-productivity/) —Satisfaction, Performance, Activity, Communication, Efficiency— ofrece el antídoto contra las métricas unidimensionales. El error más común al evaluar AI es mirar únicamente la "Activity": commits, líneas de código, pull requests generados. [OpenAI Codex generó más de 400,000 pull requests en repositorios abiertos en menos de dos meses](https://arxiv.org/html/2604.03196v1), un volumen que colapsa cualquier proceso de revisión manual que no haya sido rediseñado para esa escala.

Si solo mides actividad, AI parece un éxito rotundo. Si mides las cinco dimensiones de SPACE, aparecen las tensiones: la satisfacción puede subir (trabajo tedioso automatizado), la actividad puede dispararse, pero la performance real puede caer (bugs no detectados), la comunicación puede degradarse (los PRs ya no se revisan con profundidad) y la eficiencia del flujo puede desplomarse por interrupciones de debugging.

## Conclusión: Guardrails proporcionales al daño potencial

La evidencia disponible no justifica ni el entusiasmo acrítico ni el rechazo dogmático a las herramientas de AI para desarrollo de código. Lo que sí justifica es un principio de ingeniería simple: los controles deben ser proporcionales al daño potencial del fallo.

Un script interno que calcula reportes mensuales puede tolerar un nivel de revisión bajo. Un endpoint que procesa pagos debe pasar pruebas generadas adversarialmente, análisis estático reforzado y posiblemente verificación formal de sus invariantes críticas. Un modelo que maneja datos personales requiere auditoría de seguridad independiente de quien escribió el código.

La calidad del código asistido por AI no depende de qué tan inteligente sea el modelo, sino de qué tan bien diseñadas estén las restricciones que lo rodean. Revisión humana sistemática, pruebas automatizadas, límites de contexto por modelo, métricas multidimensionales, y verificación formal donde el fallo cuesta vidas o millones. Esas son las cinco barreras que transforman una herramienta peligrosa en una herramienta útil. No son burocracia. Son ingeniería.

### Fuentes y Créditos

Este artículo es una adaptación de la investigación original y los datos recopilados por Hanademi, presentada en su formato de deck original.

- [Hanademi - AI code quality depends on the right constraints](https://hanademi.com/decks/ai-code-quality-depends-on-the-right-constraints-20260802-153358/es/)
- [Google Cloud - Accelerate State of DevOps Report 2024](https://dora.dev/research/2024/dora-report/)
- [Stack Overflow Developer Survey 2024 - AI](https://survey.stackoverflow.co/2024/ai)
- [Stack Overflow Developer Survey 2025 - AI](https://survey.stackoverflow.co/2025/ai)
- [METR - Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)
- [Pearce et al. - Asleep at the Keyboard? (IEEE S&P 2022)](https://cacm.acm.org/research-highlights/asleep-at-the-keyboard-assessing-the-security-of-github-copilots-code-contributions/)
- [Klein et al. - seL4: Formal Verification of an OS Kernel (SOSP 2009)](https://www.sigops.org/s/conferences/sosp/2009/papers/klein-sosp09.pdf)
- [Forsgren et al. - The SPACE of Developer Productivity (CACM)](https://cacm.acm.org/practice/the-space-of-developer-productivity/)
- [An Empirical Study of Code Review Agents in Pull Requests (arXiv)](https://arxiv.org/html/2604.03196v1)

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
                labels: ['Calidad percibida', 'Throughput', 'Estabilidad'],
                datasets: [{
                    label: 'Cambio porcentual',
                    data: [3.4, -1.5, -7.2],
                    backgroundColor: [color1, color1 + '99', color1 + '66'],
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
                        callbacks: { label: ctx => (ctx.parsed.y > 0 ? '+' : '') + ctx.parsed.y + '%' }
                    }
                },
                scales: { 
                    x: { ticks: { color: textColor }, grid: { display: false } }, 
                    y: { ticks: { color: textColor, callback: v => v + '%' }, grid: { color: gridColor } } 
                }
            }
        });
    }

    const ctx2 = document.getElementById('grafico2');
    if (ctx2) {
        new Chart(ctx2, {
            type: 'doughnut',
            data: { 
                labels: ['Usan AI (62%)', 'Confían en precisión (43%)', 'Desconfían (31%)'],
                datasets: [{
                    data: [62, 43, 31],
                    backgroundColor: [color1 + '66', color1, color1 + 'cc'],
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
                        callbacks: { label: ctx => ctx.label }
                    }
                }
            }
        });
    }

    const ctx3 = document.getElementById('grafico3');
    if (ctx3) {
        new Chart(ctx3, {
            type: 'line',
            data: { 
                labels: ['2023', '2024', '2025'],
                datasets: [
                    {
                        label: 'Confianza en AI (%)',
                        data: [42, 43, 33],
                        borderColor: color1,
                        backgroundColor: color1 + '22',
                        borderWidth: 2,
                        tension: 0.3,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        fill: true
                    },
                    {
                        label: 'Desconfianza en AI (%)',
                        data: [26, 31, 46],
                        borderColor: color1 + '99',
                        backgroundColor: color1 + '11',
                        borderWidth: 2,
                        tension: 0.3,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        borderDash: [5, 5],
                        fill: true
                    }
                ]
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
                    tooltip: {
                        ...premiumTooltip,
                        callbacks: { label: ctx => ctx.dataset.label + ': ' + ctx.parsed.y + '%' }
                    }
                },
                scales: { 
                    x: { ticks: { color: textColor }, grid: { display: false } }, 
                    y: { ticks: { color: textColor, callback: v => v + '%' }, grid: { color: gridColor }, beginAtZero: true, max: 55 } 
                }
            }
        });
    }

    const ctx4 = document.getElementById('grafico4');
    if (ctx4) {
        new Chart(ctx4, {
            type: 'bar',
            data: { 
                labels: ['Pronóstico economistas', 'Percepción desarrolladores', 'Resultado medido'],
                datasets: [{
                    label: 'Cambio en tiempo de completado',
                    data: [-39, -20, 19],
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
                        callbacks: { label: ctx => (ctx.parsed.y > 0 ? '+' : '') + ctx.parsed.y + '% (negativo = más rápido)' }
                    }
                },
                scales: { 
                    x: { ticks: { color: textColor }, grid: { display: false } }, 
                    y: { ticks: { color: textColor, callback: v => v + '%' }, grid: { color: gridColor } } 
                }
            }
        });
    }

    const ctx5 = document.getElementById('grafico5');
    if (ctx5) {
        new Chart(ctx5, {
            type: 'doughnut',
            data: { 
                labels: ['Implementación C (8.7K líneas)', 'Prueba Isabelle (200K líneas)'],
                datasets: [{
                    data: [8.7, 200],
                    backgroundColor: [color1 + 'cc', color1],
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
</script>