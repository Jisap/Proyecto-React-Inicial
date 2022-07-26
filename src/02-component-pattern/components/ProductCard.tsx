import { createContext, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {                            // Interface para las Props del ProductCard
  product: Product;                                     // Producto que se va a mostrar   
  children?: ReactElement | ReactElement[];             // Elementos que se van a mostrar dentro del ProductCard
  className?: string;                                   // Clase que se va a aplicar al ProductCard
  style?: React.CSSProperties;                          // Estilos que se van a aplicar al ProductCard
  onChange?: (args: onChangeArgs) => void;              // Función que se va a ejecutar cuando se cambie la cantidad de producto
  value?: number;
}

export const ProductCard = ({ children, product, className, style, onChange, value }: Props ) => {

  const { counter, increaseBy } = useProduct({ onChange, product, value }); // Este hook recibe una función onChange y devuelve un objeto con dos propiedades: counter y increaseBy  
                                                                            // onChange es la función que se va a ejecutar cuando se cambie la cantidad de producto 
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


