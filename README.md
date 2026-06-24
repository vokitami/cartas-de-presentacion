Cartas de Presentación

Aplicación web hecha con React + Vite + Tailwind CSS que muestra tarjetas de perfil con información de cada persona: nombre, rol, habilidades, proyectos, seguidores y años de experiencia. Incluye un buscador en tiempo real para filtrar perfiles por nombre o rol.

Funcionalidades


Tarjetas dinámicas: los datos se cargan desde un archivo JSON y se renderizan automáticamente.
Imagen de perfil o iniciales: si el perfil no tiene imagen asignada, se muestra un círculo con las iniciales del nombre y un color de fondo aleatorio (consistente entre renders).
Habilidades con colores: cada habilidad se muestra como una etiqueta con un color aleatorio, generado una sola vez por perfil.
Buscador en tiempo real: filtra las tarjetas mientras el usuario escribe, sin necesidad de botón de búsqueda.
Diseño responsivo: el grid de tarjetas se adapta de 1 columna (móvil) a 2 (tablet) y 3 (escritorio).
Estadísticas por perfil: cantidad de proyectos, seguidores y años de experiencia.


🛠️ Tecnologías usadas


React
Vite
Tailwind CSS


📁 Estructura de carpetas

cartas-de-presentacion/
├── public/
│   └── (imágenes de perfil, ej: angel.jpeg, napo.jpeg)
├── src/
│   ├── Componentes/
│   │   ├── Buscador.jsx       # Input de búsqueda, recibe el estado por props
│   │   └── Tarjetas.jsx       # Renderiza el grid de tarjetas con los perfiles
│   ├── data/
│   │   └── perfiles.json      # Datos de cada perfil (nombre, rol, habilidades, etc.)
│   ├── App.jsx                 # Componente principal, maneja el estado de búsqueda
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md

📦 Instalación

bash# Clonar el repositorio
git clone <url-del-repositorio>
cd cartas-de-presentacion

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

📝 Formato de los datos (perfiles.json)

Cada perfil sigue esta estructura:

json{
  "id": 1,
  "imagen": null,
  "nombre": "Juan García",
  "rol": "Front-end Developer",
  "habilidades": ["React", "JavaScript", "Tailwind"],
  "proyectos": 43,
  "seguidores": 2000,
  "experiencia": 5
}


imagen: ruta de la imagen (ej. "/juan.jpg") o null si no tiene (en ese caso se muestran las iniciales).
habilidades: array de strings con las tecnologías o áreas de conocimiento.


🔍 Cómo funciona el buscador

El estado de búsqueda vive en App.jsx y se comparte con Buscador.jsx y Tarjetas.jsx mediante props:

App.jsx (useState busqueda)
   ├── Buscador.jsx   → muestra el input y actualiza el estado
   └── Tarjetas.jsx   → recibe la lista ya filtrada y la renderiza

El filtro usa .filter() junto con .includes() para buscar coincidencias parciales, sin distinguir mayúsculas o minúsculas.


🚀 Próximas mejoras


 Persistir colores entre recargas de página
 Buscar por habilidades además de nombre/rol
 Modo oscuro/claro
 Paginación o scroll infinito si la lista crece
