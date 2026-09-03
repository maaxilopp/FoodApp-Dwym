# Food App - Trabajo de la asignatura Desarrollo Web y Mobile

[![Maximiliano López](https://img.shields.io/badge/GitHub-Maximiliano_López-B7E3FF?logo=github&logoColor=black)](https://github.com/maaxilopp)

Aplicación de pedidos de comida hecha con React. Permite seleccionar productos, ajustar cantidades y ver la cuenta con el total en tiempo real.

## Interfaz gráfica

<img width="1920" height="915" alt="image" src="https://github.com/user-attachments/assets/16ae07c7-2e10-4e9a-be92-b383e2e70124" />

Aplicación de pedidos de comida hecha con React. Permite seleccionar productos, ajustar cantidades y ver la cuenta con el total en tiempo real.

##  Funcionalidades

- Listado de productos renderizado de forma dinámica
- Botones **+** / **−** para ajustar la cantidad de cada producto
- Validaciones: no permite cantidades negativas ni superar el stock disponible
- El stock disponible se actualiza según lo que agregás
- Cuenta con el detalle de lo pedido y el cálculo del total
- Botón para remover un producto de la cuenta

## Tecnologías utilizadas 

- React
- Vite
- JavaScript

## Cómo ejecutarlo

Cloná el repositorio e instalá las dependencias:

\`\`\`bash
git clone https://github.com/maaxilopp/FoodApp-Dwym.git
cd FoodApp-Dwym
npm install
npm run dev
\`\`\`

Luego abrí el navegador en la URL que te muestra la terminal

## Componentes

- **App** → maneja el estado de las cantidades y coordina todo
- **Producto** → representa cada tarjeta de comida con sus controles
- **Cuenta** → muestra el detalle del pedido, el total y permite remover ítems

---


