import React, {useState,useEffect} from 'react'
import IMG from '../Images/ElizabethVine.png'
import IMG1 from '../Images/purepng1.png'
import IMG2 from '../Images/gallery-7.jpg'
import './Store.css'
import axios from 'axios'



 const url='http://127.0.0.1:8000/product/'
function Store() {

  const[product,setProduct]=useState([])

  useEffect(() =>{
    axios
    .get(url)
    .then(res =>{
      console.log(res)
      setProduct(res.data)
    })

    .catch(err =>{
      console.log(err)
    })
  }, [])


  return (
    <div>
     
        <div className="container my-5">
            <div className="row">
            { product.map((products)=>(


                <div className="col-md-4" key={products.id}>

                  <div className="card text-center">
                    <img src={products.image} alt="" className='card-img-center' />
                    <div className="card-body">
                      <div className="card-title">
                        <h1>{products.name}</h1>
                      </div>
                      <div className="card-text">
                        <p>{products.description}</p>
                        <p>{products.price}</p>
                      </div>
                    </div>
                  </div>

                </div>
                ))
            }
            </div>
        </div>

    </div>
  )
}

export default Store