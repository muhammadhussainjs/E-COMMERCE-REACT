import React from 'react'
import Singleproduct from '../screens/Singleproduct'
import { useNavigate } from 'react-router-dom'

const Card = ({ src , description , title , id , showBtn= true }) => {
    const navigate = useNavigate()
    function Singleproduct(){
        navigate(`/product/${id}`)


    }
        
    
  return (
    <>
    <div className=' gap-6 justify-evenly'>
   <div class="card flex w-96 bg-base-100 shadow-xl">
  <figure><img className='w-32' src={src} alt="" /></figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{description}</p>

    <div class="card-actions justify-end">
      {showBtn ? <button onClick={Singleproduct} class="btn btn-primary">Showdetail</button>: null}
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Card