import React, { useState } from 'react';
import OrdenCard from './OpcionesDeFiltro'

interface Productos {
    id: number;
    href: string;
    img: string;
    title: string;
    marca: string;
    tipo: string;
    tallas: string;
    precio: string;
  }

interface FilterOptionsProps {
  onFilterChange: (selectedFilter: string | null) => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ onFilterChange }) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(event.target.value === 'todos' ? null : event.target.value);
  };

  return (
    <div>
      <label htmlFor="filter" className='m-2'>Filtra Marcas</label>
      <select id="filter" className='bg-white/60 w-60 p-1 m-3 rounded-md shadow-md' onChange={handleFilterChange}>
        <option value="todos">Todos</option>
        <option value="nike">Nike</option>
        <option value="adidas">Adidas</option>
      </select>
    </div>
  );
};
//--------//

interface OrdenListProps {
  orders: Productos[];
}

const OrdenList: React.FC<OrdenListProps> = ({ orders }) => {
  return (
    <div>
    {orders.map((producto) => (
      <div key={producto.id}>
        <p>
          <strong>Profesional:</strong> {producto.title}
        </p>
        <p>
          <strong>Precio:</strong> {producto.precio}
        </p>
        <p>
          <strong>Marca:</strong> {producto.marca}
        </p>
        <p className="mt-5">
          <strong>Descripción</strong> <br /> {producto.tipo}
        </p>
      </div>
    ))}
  </div>
  );
};

const JobSearchApp: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const productos: Productos[]= [
    {id:1, href:'/', img:'/jordan.png', title:'Air Jordan 1 Travis ', tipo:'zapatillas', marca:'nike', tallas:'Tallas 36/45', precio:'120€'},
    {id:2, href:'/', img:'/jordan.png', title:'Air Jordan 1 Travis ', tipo:'sudadera', marca:'adidas', tallas:'Tallas 36/45', precio:'120€'},
    {id:3, href:'/', img:'/jordan.png', title:'Air Jordan 1 Travis ', tipo:'sudadera', marca:'adidas', tallas:'Tallas 36/45', precio:'120€'}
];

  const filteredOrders = filter ? productos.filter(producto => producto.marca === filter) : productos;

  const handleFilterChange = (selectedFilter: string | null) => {
    setFilter(selectedFilter);
  };

  return (
    <div>
      <FilterOptions onFilterChange={handleFilterChange} />
      <OrdenList orders={filteredOrders} />
    </div>
  );
};

export default JobSearchApp;