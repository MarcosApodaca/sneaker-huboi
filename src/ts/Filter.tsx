
import { useState } from 'react';

export interface Productos {
  href: string;
  img: string;
  title: string;
  marca: string;
  tipo: string;
  tallas: string;
  precio: string;
}


const ProductCard = ({ href, img, title, tipo, marca, tallas, precio }: Productos) => {
  return (
    <li className="card">
      <a href={href}>
        <div className="card-img mb-3 w-[21rem] h-[27rem] bg-slate-200">
          <img className="my-24 w-80" src={img} alt="imagen" />
        </div>
      </a>
      <h4>{title}</h4>
      <p>{tipo}</p>
      <p>{marca}</p>
      <p>{tallas}</p>
      <p className="precio">{precio}</p>
    </li>
  );
};

const ProductFilter = ({ products }: { products: Productos[] }) => {
  const [filterMarca, setFilterMarca] = useState('');
  const [filterTipo, setFilterTipo] = useState('');

  const handleMarcaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterMarca(event.target.value); 
  };

  const handleTipoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterTipo(event.target.value);
  };
  

  const filteredProducts = products.filter(product =>  {
    // const marcaMatch = 
    if (filterMarca === '' || product.marca.toLocaleLowerCase() === filterMarca.toLocaleLowerCase()){
      return true
    } else {
      return false
    }
    // const tipoMatch = filterTipo === '' || product.tipo === filterTipo;
   
  });

  const handleChange = (event:any) => {
    console.log("dd");
    
    setFilterMarca(event.target.value);
  };

  console.log('Renderizando productos:', filteredProducts);
  return (
    <div>
      
      <label>
        Filtrar por marca:
        <select value={filterMarca} onChange={handleMarcaChange}>
          <option value="">Todos</option>
          <option value="nike">nike</option>
          <option value="adidas">adidas</option>
        </select>
      </label>

      <label>
        Filtrar por tipo:
        <select value={filterTipo} onChange={handleTipoChange}>
          <option value="">Todos</option>
          <option value="zapatilla">Zapatilla</option>
          <option value="sudadera">Sudadera</option>
          <option value="camiseta">Camiseta</option>
          <option value="chandal">Chandal</option>
        </select>
      </label>

      <ul>
        
        {filteredProducts.map(product => (
          <ProductCard key={product.href} {...product} />
        ))}
      </ul>
    </div>
  );
};

export { ProductFilter };