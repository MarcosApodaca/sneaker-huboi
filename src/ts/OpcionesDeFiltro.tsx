import React from 'react';

export interface Productos {
  id: number;
  href: string;
  img: string;
  title: string;
  marca: string;
  tipo: string;
  tallas: string;
  precio: string;
}

interface OrdenCardProps {
  productos: Productos;
}


const OrdenCard: React.FC<OrdenCardProps> = ({ productos }) => {
  return (
    <div className="orden-card bg-white/60 w-60 p-3 m-3 rounded-md shadow-md md:w-1/3">
      <img src={productos.img}/>
        <p><strong>Profesional:</strong> {productos.title}</p>
        <p><strong>Precio:</strong> {productos.precio}</p>
        <p><strong>Fecha:</strong> {productos.tallas}</p>
        <p className='mt-5'><strong>Descripcion</strong> <br/> {productos.marca}</p>
    </div>
  );
};

export default OrdenCard;