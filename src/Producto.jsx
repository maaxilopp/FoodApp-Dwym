// Archivo para el componente Producto, que se encargará de renderizar la información de cada producto y los botones para sumar y restar la cantidad.
// Luego, en el archivo App.jsx, se importará este componente y se utilizará para renderizar cada producto en lugar de tener todo el código dentro del componente App.

function Producto({ producto, cantidad, onSumar, onRestar }) {
  return (
    <div className="tarjeta">
      <div className="icono">{producto.icon}</div>
      <h2>{producto.nombre}</h2>
      <p className="precio">${producto.precio}</p>
      <p className="stock">Stock: {producto.stock - cantidad}</p>
      <div className="controles">
        <button onClick={onRestar}>-</button>
        <span className="cantidad">{cantidad}</span>
        <button onClick={onSumar}>+</button>
      </div>
    </div>
  );
}

export default Producto; // utilizo export default porque solo hay un componente en este archivo, el componente Producto, en caso de que hubiera más componentes, se podría utilizar export { Producto, ...}
