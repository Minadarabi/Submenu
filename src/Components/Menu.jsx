import { ItemMenu  } from "./ItemMenu"
import {menuData } from "./data"
import "./style.css"

export const Menu = () => {
  return (
    <>
    <ul className="menu-container">
        {menuData.map((item , index)=>{
            return <ItemMenu key={index} item={item}/>
        })}
    </ul>
    </>
    
  )
}
