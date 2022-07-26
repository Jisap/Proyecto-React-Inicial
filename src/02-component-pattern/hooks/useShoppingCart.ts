import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({ //El carrito de compras es un objeto de tipo ProductInCart y contiene una      
    });                                                                                //key que es el id del producto y una propiedad count que indica la cantidad de productos del mismo 

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => { // Establece el estado del carrito

        setShoppingCart(oldShoppingCart => {

            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 }; // Producto en el carrito si ya estaba o uno nuevo según argumentos

            if (Math.max(productInCart.count + count, 0) > 0) {  // Si la cantidad de pto existente + la nueva cantidad (+/-1) es mayor a 0, entonces se actualiza el carrito
                productInCart.count += count;                       // Se suma la cantidad al producto + la cantidad que se le pasa

                return {                       // Retornamos el nuevo carrito
                    ...oldShoppingCart,         // Concatenamos el carrito anterior con el nuevo producto
                    [product.id]: productInCart // klave: valor del producto que modificamos su cantidad

                }
            }

            //Si la anterior condición no se cumple, la cantidad es 0 o menor a 0, entonces se elimina el producto del carrito

            const { [product.id]: toDelete, ...rest } = oldShoppingCart;                      //Se obtiene el producto a eliminar

            return {
                ...rest                                                                      //Se devuelve el resto del carrito
            }


            //   // Si el count del carrito = 0, se elimina el producto del carrito
            //   if (count === 0) {

            //     const { [product.id]: toDelete, ...rest } = oldShoppingCart;  //Se obtiene el producto a eliminar

            //     return{
            //       ...rest                                                     //Se devuelve el resto del carrito
            //     }
            //   }

            //   // Si el count del carrito > 0, se agrega el producto al carrito
            //   return{ 
            //     ...oldShoppingCart,                         //Se crea un nuevo objeto con el mismo contenido que el carrito de compras
            //     [product.id]: { ...product, count } }       //Se agrega el producto con su nuevo count
        })
    }

    return{
        shoppingCart,
        onProductCountChange
    }

}