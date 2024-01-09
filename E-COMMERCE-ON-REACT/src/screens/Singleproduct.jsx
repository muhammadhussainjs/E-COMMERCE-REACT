import  React, {useEffect , useState}  from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from '../components/Card'

const Singleproduct = ({id}) => {
    const [data, setData] = useState(null)
    
    const param = useParams()
    useEffect(()=>{

        axios.get(`https://fakestoreapi.com/products/${param.id}`)
        .then((res)=>{
            console.log(res.data);
            setData(res.data)
        
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
  return (
    <>
    <div className='text-center flex justify-center mt-24'>
    {data ? <Card  src={data.image} description={data.description} title={data.title} showBtn={false} />: <h1>Loading...</h1>
}
</div>
    </>
  )
}

export default Singleproduct