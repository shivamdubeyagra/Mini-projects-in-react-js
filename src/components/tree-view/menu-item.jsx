import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus,FaPlus } from "react-icons/fa";
import './styles.css';

export default function MenuItem ({item}){

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});


    function handleToggleChildren(getCurrentlabel){
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentlabel]:!displayCurrentChildren[getCurrentlabel],
        });
    }
    // console.log(displayCurrentChildren);
    return (
        <li>
           <div style={{display:'flex', gap:'20px'}}>
           <p>{item.label}</p>
           {item && item.children && item.children.length > 0 ? <span onClick={()=>handleToggleChildren(item.label)}>{displayCurrentChildren[item.label]? <FaMinus color="white"/>:<FaPlus color="white"/>}</span>:null}
           </div>
            {
                item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
                <MenuList  list={item.children}/>: null
            }
        </li>
    )
}