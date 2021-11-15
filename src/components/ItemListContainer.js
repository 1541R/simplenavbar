import Item from "./Item";

export default function ItemListContainer({products}) {
    
    return (
        <div className="row container">
            {
                products && 
                products.map( (product) => 
                    <Item key={product.id} 
                    title={product.title} 
                    price={product.price} 
                    description={product.description} 
                    category={product.category} 
                    image={product.image} 
                    stock={product.stock} 
                    />
                 )
            }
            
        </div>
    )
}
