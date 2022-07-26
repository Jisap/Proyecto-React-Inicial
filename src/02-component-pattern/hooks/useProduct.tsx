import { useEffect, useRef, useState } from 'react'
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs{                                       // Interface para los argumentos del hook
  product:Product;
  onChange?: (args:onChangeArgs) => void;                       // Los argumentos del onChange son el count y el product
  value?: number;
}

export const useProduct = ( { onChange, product, value = 0 }:useProductArgs ) => { // Este hook incrementa o decrementa la cantidad de un producto y ejecuta la función onChange cuando se cambie la cantidad

    const [counter, setCounter] = useState( value );            // El valor inicial del counter es el value
    
    const isControlled = useRef( !!onChange );                  // Si onChange existe (true), entonces isControlled es true

    const increaseBy = (value: number) => {                     

      //Control props
      if( isControlled.current ){                               // Si onChange existe (true), entonces se ejecuta la función onChange(count:value, product)
        return onChange!({ count:value, product });             // El count solo mostrará el valor +1 o -1 que se le pase a la función increaseBy en productButtons
      }                                                         // onChange -> onProductCountChange -> shoppingCart -> value -> counter 

      //Sin control props
      //const newValue = Math.max( counter + value, 0);           // newValue es el valor máximo entre 0 y el valor actual + el valor que se le pasa
      //setCounter( newValue );                                   // El valor actual se actualiza con el nuevo valor
      //onChange && onChange({ count: newValue, product });       // Si existe la función onChange se ejecuta con el count y el producto
    }

    useEffect(() => {
      setCounter( value );                                    // El valor actual se actualiza con el valor que se le pasa
    }, [value]);

  return (
    { counter, increaseBy }
  )
}// Resumiendo useProduct establece un valor al counter ligado al un value que depende del shoppingCart y este a su ves de increaseBy
