# LMSXI — Linguaxes de Marcas e Sistemas de Xestión da Información

Apuntes y materiales didácticos del módulo LMSXI (curso 2026-27, DAW), publicados con [Docusaurus](https://docusaurus.io/).

Sitio: [https://resuacode.es/lmsxi](https://resuacode.es/lmsxi)

## Requisitos

- Node.js ≥ 18.x
- npm

## Instalación

```bash
npm install
npm run start
```

El servidor de desarrollo queda en `http://localhost:3000/lmsxi/`.

## Estructura del proyecto

```
.
├── docs/               # Documentación en Markdown/MDX (UD1–UD7)
├── src/                # Páginas y componentes
├── static/             # Imágenes, PDF y otros estáticos
├── scripts/            # Utilidades (p. ej. exportación a PDF)
├── docusaurus.config.ts
├── sidebars.ts
└── ...
```

## Comandos útiles

```bash
npm run start      # Desarrollo local
npm run build      # Generar sitio estático en /build
npm run serve      # Servir el build (preview)
```

## Despliegue

Despliegue automático en GitHub Pages con cada push a `main` (workflow `.github/workflows/deploy.yml`).

URL de producción: `https://resuacode.es/lmsxi/`

## Autor

Daniel Resúa — [resuacode](https://github.com/resuacode)

## Licencia

Creative Commons Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional (CC BY-NC-SA 4.0).
