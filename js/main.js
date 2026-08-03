// === Configuración global de Chart.js ===
function getChartColors() {
    const styles = getComputedStyle(document.documentElement);
    return {
        text: styles.getPropertyValue('--text').trim(),
        muted: styles.getPropertyValue('--text-muted').trim(),
        accent: styles.getPropertyValue('--accent').trim(),
        grid: styles.getPropertyValue('--chart-grid').trim()
    };
}

// Aplicar colores de Chart.js basados en el CSS
function applyChartDefaults() {
    // Si Chart.js no está cargado en esta página, salir sin error
    if (typeof Chart === 'undefined') return;

    const colors = getChartColors();
    Chart.defaults.color = colors.muted;
    Chart.defaults.borderColor = colors.grid;
    Chart.defaults.font.family = "system-ui, -apple-system, sans-serif";
}

// Inicializar al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    try {
        initTheme();
        applyChartDefaults();

        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleTheme);
        }

        // Escuchar cambios de tema para actualizar los gráficos en vivo
        window.addEventListener('themeChanged', () => {
            applyChartDefaults();
            location.reload();
        });
    } catch (err) {
        console.error('hana: error de inicialización:', err);
    }
});