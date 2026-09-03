// archivo para el componente Cuenta, que se encargará de renderizar la cuenta total de los productos seleccionados y los botones para remover productos de la cuenta.
// Luego, en el archivo App.jsx, se importará este componente y se utilizará para renderizar la cuenta en lugar de tener todo el código dentro del componente App.

function Cuenta({ productos, cantidades, onRemover }) {
  const total = [];
  let cuenta = 0;
  for (const producto of productos) {
    const cantidad = cantidades[producto.id] || 0;
    if (cantidad > 0) {
      cuenta += cantidad * producto.precio;
      total.push(
        <div key={producto.id} className="linea">
          <span>
            {producto.icon} x {cantidad}
          </span>
          <span>${cantidad * producto.precio}</span>
          <button className="remover" onClick={() => onRemover(producto.id)}>
            ❌
          </button>
        </div>,
      );
    }
  }
  return (
    <div className="cuenta">
      <h2>Cuenta</h2>
      {total}
      <p className="total">Total: ${cuenta}</p>
      <button id="pagar">Pagar</button>
    </div>
  );
}

export default Cuenta;
