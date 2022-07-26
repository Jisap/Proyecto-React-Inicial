
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css'


export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart()

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={ {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        } }>

            { products.map( product => (
              <ProductCard                                     // Aquí se emite un evento, cuando se incrementa o decrementa la cantidad de un producto en ProductButtons
                key={product.id}                               // El evento esta definido en el useProduct() --> onChange({ count: newValue, product })        
                product= { product }                           // onChange se ejecutara cuando se cambie la cantidad de un producto
                className="bg-dark"                            // y ejecutara la función onProductCountChange con los argumentos count y product del evento
                onChange={(e) => onProductCountChange(e)}      // También se podría poner onChange={onProductCountChange}
                value={ shoppingCart[product.id]?.count || 0 } // El valor del counter es el count del producto en el carrito de compras
              >                                             
                    <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                    <ProductTitle className="text-white" />
                    <ProductButtons className="custom-buttons"/>
                  </ProductCard>
              ))
            }    
        </div>

        <div className="shopping-cart">

            {
              Object.entries(shoppingCart).map( ([key, product]) => ( //Se recorre el carrito de compras y se crea una lista de productos

                <ProductCard
                  key={ key }
                  product={ product }
                  className="bg-dark"
                  style={{ width: '100px'}}
                  onChange={(e) => onProductCountChange(e)}
                  value={ product.count } // El value contiene el contador del producto
                >
                  <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                  <ProductButtons
                    className="custom-buttons"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  />
                </ProductCard>

               ))
            }


            

            
        </div>    

    </div>
  )
}
