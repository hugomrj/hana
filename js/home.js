document.addEventListener('DOMContentLoaded', () => {
    // Asegurarse de que el tema esté cargado (de main.js)
    if (typeof initTheme === 'function') initTheme();

    const heroSection = document.getElementById('hero-section');
    const newsGrid = document.getElementById('news-grid');

    // Cargar el JSON de artículos
    fetch('data/articulos.json')
        .then(response => {
            if (!response.ok) throw new Error('No se pudo cargar el listado de artículos');
            return response.json();
        })
        .then(articulos => {
            // Ordenar por fecha descendente (más nuevo primero)
            articulos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

            if (articulos.length === 0) {
                heroSection.innerHTML = '<p class="empty-state">Aún no hay artículos publicados.</p>';
                return;
            }

            // 1. Renderizar el artículo destacado (El más nuevo)
            const heroArt = articulos[0];
            const heroDate = new Date(heroArt.fecha).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
            
            heroSection.innerHTML = `
                <article class="hero-article">
                    <span class="kicker">${heroArt.categoria}</span>
                    <h1><a href="${heroArt.archivo}">${heroArt.titulo}</a></h1>
                    <div class="byline">${heroDate} · ${heroArt.tiempo_lectura} de lectura</div>
                    <p class="hero-extracto">${heroArt.extracto}</p>
                    <a href="${heroArt.archivo}" class="read-more">Leer análisis completo →</a>
                </article>
            `;

            // 2. Renderizar el resto de artículos en la cuadrícula
            if (articulos.length > 1) {
                const restantes = articulos.slice(1);
                newsGrid.innerHTML = restantes.map(art => {
                    const artDate = new Date(art.fecha).toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' });
                    return `
                        <article class="news-card">
                            <span class="kicker">${art.categoria}</span>
                            <h3><a href="${art.archivo}">${art.titulo}</a></h3>
                            <div class="byline">${artDate} · ${art.tiempo_lectura}</div>
                            <p>${art.extracto}</p>
                        </article>
                    `;
                }).join('');
            } else {
                newsGrid.innerHTML = '<p class="empty-state">Vuelve pronto para más análisis.</p>';
            }
        })
        .catch(error => {
            console.error('Error cargando artículos:', error);
            heroSection.innerHTML = '<p class="empty-state">Error al cargar los artículos. Asegúrate de que el archivo JSON existe.</p>';
        });
});