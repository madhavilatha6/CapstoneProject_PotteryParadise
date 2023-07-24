import { useEffect, useState } from 'react';
import './Product.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../Redux/ProductReducer/action';

function Products(){
    const  [search,setSearch]=useState("");
    const dispatch = useDispatch()
    const productData = useSelector(state => state.product.productData)

    console.log(productData)

    useEffect(() =>{
        dispatch (getAllProduct())
    }, [])

    return(
        <div className="color">
                   

                    <div className='searchPart'> 
                        <input placeholder='Search' className='search' onChange={(e)=>{setSearch(e.target.value)}}/>
                        <button className='searchLogo'>Search</button>
                    </div>
                    <div className="array">
                    <div>
                        <select className='sorting'>
                            <option>Sort By Price</option>
                            <option>Low to High</option>
                            <option>High to Low</option>
                        </select>
                        <div className='categorybox'>
                        <p className='font'>Categaries</p>
                        <hr></hr>
                        <p>Cooking pots</p>
                        <hr></hr>
                        <p>Hanging bells</p>
                        <hr></hr>
                        <p>Pudding sets</p>
                        <hr></hr>
                        <p>Flower Pots</p>
                        <hr></hr>
                        <p>Design pots</p>
                        </div>
                    </div> 
                {
                    productData.filter((item)=>{
                        if(item.product_name.toLowerCase().includes(search.toLowerCase())){
                            return item;
                        }

                    }).map(({product_image ,product_name,product_price})=>
                    <div className='display'>
                        <div>
                            <img src={product_image} alt='no image'/>
                        </div>
                        <h4>{product_name}</h4>
                        <h4>{product_price}</h4>
                    </div>
                    )
                }
                </div>
        </div>
    )
}

export default Products;

