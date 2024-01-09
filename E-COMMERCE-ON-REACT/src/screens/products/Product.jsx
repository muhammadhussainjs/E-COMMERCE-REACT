import  React,  {useEffect , useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Card from '../../components/Card'

const Product = () => {
    const param = useParams()
    console.log(param);
    const [data, setData] = useState([])
    useEffect(()=>{

        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            console.log(res.data);
            setData(res.data)
            console.log(setData(res.data));
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
  return (
    <>
    <div className='text-center flex gap-6 flex-wrap justify-evenly mt-12'>
    {data.length > 0  ? data.map((item)=>{
       return <Card key={item.id}  title={item.title} src={item.image} description={item.description} id={item.id} />

    }): <h1 className='text-center mt-5 font-bold'>Loading...</h1>}
    </div>
    </>
  )
}

export default Product