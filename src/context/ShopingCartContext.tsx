import { createContext, ReactNode, useContext, useState , useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {db} from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore';
type ShoppingCartProviderProps = {
    children: ReactNode
}
type StoreItems = {
  id:number 
  name: string
  price : number
  imgUrl: string
}
type ShopingCartContext = {
   openCart: () => void ;
    closeCart: () => void ;
    openMenu: () => void ;
    closeMenu: () => void ;
    getItemQuantity: (id: number) => number ;
    increaseCartQuantity: (id: number) => void  ;
    decreaseCartQuantity: (id: number) => void ;
    removeFromCart: (id: number) => void  ;
    cartQuantity:number ;
    cartItems : CartItem[] ;
    storeItems : StoreItems[]
    isCartOpen : boolean ;
     isMenuBarOpen : boolean ;


}
type CartItem = {
    id : number 
    quantity : number 
    
}
 const ShoppingCartContext = createContext({} as ShopingCartContext)
export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false)
    const [cartItems , setCartItems] =  useLocalStorage<CartItem[]>("shopping-cart" ,[]) 
    const [storeItems , setStoreItems] = useState<StoreItems[]>([])
    const storeItemRef = collection(db,"store")
    
    const openCart = () => setIsCartOpen(true)
    const closeCart = () => setIsCartOpen(false)
    const openMenu = () => setIsMenuBarOpen(true) 
    const closeMenu = () => setIsMenuBarOpen(false) 

    const getStoreItem = async () => {
      try{
          const   data     = await getDocs(storeItemRef)
          const filteredData = data.docs.map((doc) => {
            const data = doc.data();
            return {
              id: Number(doc.id),
              name: data.name || 'Baser kavery',
              price: data.price || 0,
              imgUrl: data.imgUrl || '',
            };
          }) ;
      setStoreItems(filteredData)

      }
      catch (err) {
        console.error(err)
      }
}
    const cartQuantity = cartItems.reduce((quantity ,item) =>  item.quantity + quantity , 0)
    const  getItemQuantity     = (id:number)    => {
         return cartItems.find(item => item.id === id)?.quantity || 0 ; 
    } 
    const increaseCartQuantity = (id : number)  => {
       setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })

    }
    const decreaseCartQuantity = (id : number)  => {
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id)?.quantity === 1) {
               return currItems.filter(item => item.id !== id)
            } 
            else {
               return currItems.map(item => {
                   if(item.id === id){
                       return {...item , quantity : item.quantity - 1}
                   }
                   else  {
                     return item
                     
                    
                   }
               })
            }
        })
   }
    const removeFromCart       = (id:number)    => {
    setCartItems(cartItems => {
        return cartItems.filter(item => item.id !== id)
    })
}
    
useEffect(() => {
  getStoreItem()
  },[])

return (
        <ShoppingCartContext.Provider   value={
               {   openCart,
                    closeCart,
                    openMenu,
                    closeMenu,
                    getItemQuantity,
                    increaseCartQuantity,
                    decreaseCartQuantity,
                    removeFromCart ,
                    cartItems,
                    cartQuantity ,
                    storeItems,
                    isCartOpen ,
                    isMenuBarOpen
                    

               }
        }>
             {children}
        </ShoppingCartContext.Provider>





           
)}