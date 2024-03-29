import { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';



const ItemDetail = ({id, nombre,stock, precio, img}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarAlCarrito} = useContext(CarritoContext);

  

  const manejadorCantidad = (cantidad) => {
  setAgregarCantidad(cantidad);
  
  const item = {id,nombre,precio, img};
  agregarAlCarrito(item, cantidad, );

  }
  return (
    <div className='contenedorItem'>
        <h2>nombre:{nombre}</h2>
        <h3>precio: {precio}</h3>
        <img src={img} alt={nombre} />
        <p>id: {id}</p>
        <p>stock: {stock}</p> 
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quidem, nisi libero voluptas quibusdam esse dolore vel? Maxime, excepturi. Nostrum quibusdam, atque ullam vitae eaque harum accusamus beatae dicta dignissimos!</p>

        {

        }

        { 
          agregarCantidad > 0 ? (<Link to="/cart">terminar de comprar  </Link>) : (<ItemCount inicial = {1} stock = {stock} funcionAgregar = {manejadorCantidad}/>)
        }      
    </div>
  )
}

export default ItemDetail