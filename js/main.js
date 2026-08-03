// === Lógica de Modo Oscuro/Claro ===
function initTheme() {
    const savedTheme = localStorage.getItem('hana-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateToggleIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('hana-theme', newTheme);
    updateToggleIcon(newTheme);
    
    // Disparar un evento para que los gráficos de Chart.js se actualicen
    window.dispatchEvent(new Event('themeChanged'));
}

function updateToggleIcon(theme) {
    const button = document.getElementById('theme-toggle');
    if (button) {
        button.textContent = theme === 'dark' ? '☀️ Claro' : '🌙 Oscuro';
    }
}

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
    const colors = getChartColors();
    Chart.defaults.color = colors.muted;
    Chart.defaults.borderColor = colors.grid;
    Chart.defaults.font.family = "system-ui, -apple-system, sans-serif";
}

// Inicializar al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    applyChartDefaults();

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleTheme);
    }

    // Escuchar cambios de tema para actualizar los gráficos en vivo
    window.addEventListener('themeChanged', () => {
        applyChartDefaults();
        // Chart.js no actualiza los gráficos ya renderizados automáticamente.
        // Para una SPA real necesitarías recorrer las instancias, 
        // pero como son páginas estáticas, recargamos para simplificar.
        // Alternativamente, puedes recrear los gráficos en esta función.
        location.reload(); 
    });
});