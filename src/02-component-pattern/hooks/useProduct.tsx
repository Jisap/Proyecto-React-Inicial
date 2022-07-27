import { useEffect, useRef, useState } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs{                                       // Interface para los argumentos del hook
  product:Product;
  onChange?: (args:onChangeArgs) => void;                       // Los argumentos del onChange son el count y el product
  value?: number;
  initialValues?: InitialValues                                 // Desde ProductCart se le pasan los valores iniciales que son el count y el maxCount
}

export const useProduct = ( { onChange, product, value = 0, initialValues }:useProductArgs ) => { // Este hook incrementa o decrementa la cantidad de un producto 

    const [counter, setCounter] = useState<number>( initialValues?.count || value );            // El valor inicial del counter es el initialValues o el value
    
    const isMounted = useRef(false);                              // Con useRef podemos crear un valor mutable que existe durante la vida útil de la instancia del componente.
                                                                  // Con este valor controlaremos el useEffect que actualiza el estado del counter
    const increaseBy = (value: number) => {                     
      
      let newValue = Math.max( counter + value, 0);               // newValue es el valor máximo entre 0 y el valor actual + el valor que se le pasa

      if( initialValues?.maxCount ){                              // Si hay un valor máximo para el counter
        newValue = Math.min( newValue, initialValues.maxCount );  // newValue es el valor mínimo entre el valor actual + el valor que se le pasa y el valor máximo
      }
      setCounter( newValue );                                     // El valor actual se actualiza con el nuevo valor
      onChange && onChange({ count: newValue, product });         // Si existe la función onChange se ejecuta con el count y el producto
    
    }

    const reset = () => {
      setCounter( initialValues?.count || value );
      
    }

    useEffect(() => {
      if ( !isMounted.current ) return;                       // Si el componente no está montado, no se ejecuta nada
      else isMounted.current = true;                          // Si el componente está montado, se cambia el valor de isMounted a true
      setCounter( value );                                    // Si si está montado el valor actual se actualiza con el valor que se le pasa
    }, [value]);



  return (
    { 
      counter,
      increaseBy,
      maxCount: initialValues?.maxCount,
      isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter, // Si hay un valor máximo para el counter y el valor actual es igual al valor máximo, se devuelve true
      reset
    }
  )
}// Resumiendo useProduct establece un valor al counter ligado al un value que depende del shoppingCart y este a su ves de increaseBy
