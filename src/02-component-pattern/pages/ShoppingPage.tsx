
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css'

const product = products[0]

export const ShoppingPage = () => {

  

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
                  
        <ProductCard                                     
          key={ product.id }                                      
          product= { product }  // Producto que se va a mostrar                          
          className="bg-dark"   // Clase que se aplica 
          initialValues={{      // Definimos el initialValues para el productCard -> ProductCard
            count: 4,
            maxCount: 10
          }}                              
        >
          { 
            ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => ( // Se renderiza unos componentes a traves de una función que recibe un objeto con los valores generados en el productCard
              <>
                  <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                  <ProductTitle className="text-white" />
                  <ProductButtons className="custom-buttons"/>
              
                  <button onClick={reset}>Reset</button>
                  <button onClick={ () => increaseBy(-2) }>-2</button>
                  {
                  (!isMaxCountReached && <button onClick={ () => increaseBy(+2) }>+2</button>)
                  }
                  
                  <span>{ count } - { maxCount }</span>
              </>
            )
          }                                             
        </ProductCard>
              
               
    </div>

        

    
  )
}
