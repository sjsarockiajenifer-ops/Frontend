const ProductCard=({ProductName,Price,Category,Availability})=>{
    return(
<div>
    <h3>ProductName:{ProductName}</h3>
    <p>Price:₹{Price}</p>
    <p>Category:{Category}</p>
    <p>Availability:{Availability}</p>
</div>
    )
}
export default ProductCard;