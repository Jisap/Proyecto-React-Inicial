
import { createContext, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {                            // Interface para las Props del ProductCard
  product: Product;                                     // Producto que se va a mostrar   
  children?: ReactElement | ReactElement[];             // Elementos que se van a mostrar dentro del ProductCard
  className?: string;                                   // Clase que se va a aplicar al ProductCard
  style?: React.CSSProperties;                           // Estilos que se van a aplicar al ProductCard
}

export const ProductCard = ({ children, product, className, style }: Props ) => {

  const { counter, increaseBy } = useProduct()

  return (
    <Provider value={{
        counter, increaseBy, product
    }}>
        <div className={ `${ styles.productCard } ${ className }` }
             style={ style }
        >

            { children }
                
        </div>
    </Provider>
  )
}


