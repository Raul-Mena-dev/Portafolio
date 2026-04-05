# Portafolio / CV en React

Landing page profesional de una sola pagina construida con React + Vite, lista para desplegar en Vercel.

## Ejecutar localmente

1. Instala dependencias:

```bash
npm install
```

2. Inicia el entorno de desarrollo:

```bash
npm run dev
```

3. Abre la URL local que muestra Vite en la terminal.

## Build de produccion

```bash
npm run build
```

La carpeta generada sera `dist/`.

## Despliegue en Vercel

1. Sube este proyecto a un repositorio de GitHub.
2. Importa el repositorio en Vercel.
3. Vercel detectara automaticamente que es un proyecto Vite.
4. Usa los valores por defecto:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Despliega.

## Donde editar el contenido

- Datos principales: `src/data/portfolio.js`
- Layout principal: `src/App.jsx`
- Componentes: `src/components/`
- Estilos globales: `src/index.css`
- CV en espanol placeholder: `public/cv-es.pdf`
- CV en ingles placeholder: `public/cv-en.pdf`

## Notas

- Sustituye `public/cv-es.pdf` y `public/cv-en.pdf` por tus CVs finales antes de publicar.
