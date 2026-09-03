import "./App.css";
import Producto from "./Producto";
import { useState } from "react";
import Cuenta from "./Cuenta";

// Archivo para el componente App, que se encargará de renderizar la aplicación completa, incluyendo los productos y la cuenta total.
// Luego, en el archivo index.js, se importará este componente y se renderizará en el DOM.
// En este archivo se importan los componentes Producto y Cuenta, que se encargan de renderizar la información de cada producto y la cuenta total, respectivamente.
const productos = [
  { id: 1, nombre: "Hamburguesa", precio: 100, stock: 10, icon: "🍔" },
  { id: 2, nombre: "Taco", precio: 50, stock: 10, icon: "🌮" },
  { id: 3, nombre: "Pancho", precio: 45, stock: 2, icon: "🌭" },
  { id: 4, nombre: "Wrap", precio: 100, stock: 0, icon: "🌯" },
  { id: 5, nombre: "Papas", precio: 100, stock: 20, icon: "🍟" },
  { id: 6, nombre: "Fideos", precio: 110, stock: 7, icon: "🍝" },
]; // productos a ser renderizados en la app, son los de la imagen de referencia

function App() {
  const [cantidades, setCantidades] = useState({}); // estado para almacenar las cantidades de cada producto.

  const tarjetasDeProductos = []; // tarjeta correspondiente a cada producto.
  for (const producto of productos) {
    tarjetasDeProductos.push(
      <Producto
        key={producto.id}
        producto={producto}
        cantidad={cantidades[producto.id] || 0} // cantidad del producto, si no hay cantidad, se muestra 0.
        onSumar={() =>
          setCantidades({
            ...cantidades,
            [producto.id]: Math.min(
              producto.stock,
              (cantidades[producto.id] || 0) + 1,
            ),
          })
        } // función para sumar la cantidad de un producto, se utiliza Math.min para que no se pueda superar el stock del producto.
        onRestar={() =>
          setCantidades({
            ...cantidades,
            [producto.id]: Math.max(0, (cantidades[producto.id] || 0) - 1), // función para restar la cantidad de un producto, se utiliza Math.max para que no se pueda tener una cantidad negativa.
          })
        }
      />,
    );
  }
  return (
    // renderizado de la aplicación completa, incluyendo los productos y la cuenta total.
    <div className="app">
      <h1>Food app</h1>
      <hr />
      <div className="layout">
        <div className="productos">{tarjetasDeProductos}</div>
        <Cuenta
          productos={productos}
          cantidades={cantidades}
          onRemover={(id) => setCantidades({ ...cantidades, [id]: 0 })}
        />
      </div>
    </div>
  );
}

export default App;
