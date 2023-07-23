import { useEffect } from 'react';
import './Product.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../Redux/ProductReducer/action';

function Products(){

    const dispatch = useDispatch()
    const productData = useSelector(state => state.product.productData)

    console.log(productData)

    useEffect(() =>{
        dispatch (getAllProduct())
    }, [])

    return(
        <div className="color">
            <div className="categories">
                        <div className="design">
                            <img src="resources/cooking.png" alt="no image" />
                        </div>
                        <div className="flower">
                            <img src="resources/bell.png" alt="no image" />
                        </div>
                        <div className="hangingbells">
                            <img src="resources/claylapm.png" alt="no image" />
                        </div>
                        <div className="naturalpots">
                            <img src="resources/puddingset.png" alt="no image" />
                        </div>
                        <div className="animaldesign">
                            <img src="resources/design.png" alt="no image" />
                        </div>
                        <div className="animal">
                            <img src="resources/flower.png" alt="no image" />
                        </div>
                        
                    </div>
                    <div className='searchPart'> 
                        <input placeholder='Search' className='search'></input>
                        <button className='searchLogo'>Search</button>
                    </div>
                    <div id="option">
                        <select>
                            <option>Sort By Price</option>
                            <option>Low to High</option>
                            <option>High to Low</option>
                        </select>
                    </div>

                {
                    productData?.map(({product_image ,product_name,product_price})=>
                    <div className='display'>
                        <div>
                            <img src={product_image} alt='no image'/>
                        </div>
                        <h1>{product_name}</h1>
                        <h1>{product_price}</h1>
                    </div>
                    )
                }
        </div>
    )
}

export default Products;

