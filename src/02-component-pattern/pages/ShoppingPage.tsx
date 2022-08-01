
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/products';


const product = products[0]

export const ShoppingPage = () => {

  

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
                  
        <ProductCard                                     
          key={ product.id }                                      
          product= { product }  // Producto que se va a mostrar                          
         
          initialValues={{      // Definimos el initialValues para el productCard -> ProductCard
            count: 4,
            maxCount: 10
          }}                              
        >
          { 
            ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => ( // Se renderiza unos componentes a traves de una función que recibe un objeto con los valores generados en el productCard
              <>
                  <ProductImage />
                  <ProductTitle  />
                  <ProductButtons />
              </>
            )
          }                                             
        </ProductCard>
              
               
    </div>

        

    
  )
}
