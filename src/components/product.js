import {Link} from 'react-router-dom';

function Product(props){
    const {prod,showbutton}=props
    return(<>
    <div className="card" >
  <img src={prod.image} className="card-img-top" alt={prod.title}/>
  <div className="card-body">
    <h5 className="card-title">{prod.title}</h5>
    <p className="card-text">{prod.description}</p>
    <p>price:{prod.price}$</p>
    {showbutton&& <Link className="btn btn-primary" to={`/product/${prod.id}`}>Details</Link>}
    
  </div>
</div>
    </>);
}
export default Product;