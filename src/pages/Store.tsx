import React, {FC , useState , useEffect} from 'react'
import { StoreItem } from '../components';
import {db} from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore';
type StoreItemProps = {
  id:number 
  name: string
  price : number
  imgUrl: string
}[]
const Store:FC = () =>  {
  const [storeItem , setStoreItem] = useState<StoreItemProps>([])
  const storeItemRef = collection(db,"store")
  useEffect(() => {
    const getStoreItem = async () => {
          try{
              const   data     = await getDocs(storeItemRef)
              const filteredData = data.docs.map((doc) => {
                const data = doc.data();
                return {
                  id: Number(doc.id),
                  name: data.name || '',
                  price: data.price || 0,
                  imgUrl: data.imgUrl || '',
                };
              }) ;
          setStoreItem(filteredData)

          }
          catch (err) {
            console.error(err)
          }
    }
    getStoreItem()
  },[])
  return (
    <div className='lg:w-[1240px] h-[120vh] 
     flex flex-wrap justify-center items-start gap-7 
     m-auto mt-[7rem] px-6 py-20 
      bg-gradient-to-r from-[#e4fdf2] to-[#e7e8e8]
    '>
    {storeItem.map(item => { 
      return <div>
            <StoreItem  key={item.id} {...item} />


        
        </div>
})} 
    </div>
  )
}

export default  Store ;