import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {                            // Interface para las Props del ProductCard
  product: Product;                                     // Producto que se va a mostrar   
  className?: string;                                   // Clase que se va a aplicar al ProductCard
  style?: React.CSSProperties;                          // Estilos que se van a aplicar al ProductCard
  onChange?: (args: onChangeArgs) => void;              // Función que se va a ejecutar cuando se cambie la cantidad de producto
  value?: number;
  initialValues?: InitialValues                         // Valores iniciales para el counter
  children: (args: ProductCardHandlers) => JSX.Element; // Función que se va a ejecutar para mostrar los elementos que se le pasan como children        
}                                                        

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props ) => { // Props del ProductCard desde el shoppingCart

  const { 
    counter, 
    increaseBy, 
    maxCount, 
    isMaxCountReached, 
    reset } = useProduct({ onChange, product, value, initialValues }); // Este hook usa las props de productCart y devuelve un objeto con valores
                                                                       // y funciones para usar en los children a través de un provider.
  return (
    <Provider value={{
        counter, increaseBy, product, maxCount
    }}>
        <div className={ `${ styles.productCard } ${ className }` }
             style={ style }
        >

            { children({
                  count: counter,
                  isMaxCountReached, 
                  maxCount: initialValues?.maxCount,
                  product, 
                  increaseBy, 
                  reset
            }) }
                
        </div>
    </Provider>
  )
}


