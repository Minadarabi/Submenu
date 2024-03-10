import { useState } from "react"
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


export const ItemMenu = ({item}) => {
    const [isOpen , setIsOpen] = useState(false)
  return (
    <>
    <li>
        
        <a href={item.to}>{item.label}</a>
        {!!item.children && (!isOpen ? <FaPlus className="plus" onClick={() => setIsOpen(true)} /> : <FaMinus className="minus" onClick={() => setIsOpen(false)} />) }
        
        {(isOpen && !!item.children) && (<ul>
            {item.children.map((child , index)=>{
                return <ItemMenu key={index} item={child} />
            })}
        </ul>)}
    </li>
    </>
  )
}
