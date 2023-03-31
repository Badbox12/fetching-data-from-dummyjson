
import axios from 'axios'
import React, {useState, useEffect} from 'react'

const Product = () => {
    const baseURL = 'https://dummyjson.com/products/'
    const [product, setProduct] = useState(null)
    
    useEffect(()=>{
        axios.get(baseURL).then( 
            (res) => { 
                console.log(res.data)
              setProduct(res.data.products)
            }         
        );
    },[])
    if(!product) return null;
  return (
    <div className='mt-40 w-full h-[500vh]'>
        <div className='flex flex-wrap gap-10'>
        {
            product.map((pro)=>(
                <div key={pro.id} className=' w-[400px] h-[400px] border border-green-500'>
                    {/* <h1>{pro.id}</h1> */}
                    
                    <img src={pro.thumbnail} alt={pro.title} className='object-cover h-[350px] w-[400px] transition duration-300 ease-in-out hover:scale-105' />   
                    <h1 className='block'>{pro.title}</h1>            
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Product