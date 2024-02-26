import { useState } from "react"
import Data from "./data";
import './styles.css';


export default function Accordian(){
    const [selected,setSelected] = useState(null);
    const [enableMultiSelection,setEnableMultiSelection] = useState(false)
    const [multiple,setMultiple] = useState([]);

    function handleSingleSelection (getCurrentId){
        setSelected(getCurrentId === selected ? null :getCurrentId)
    }
    function handleMultiSelection (getCurrentId){
        let copyMultiple = [...multiple];
        let findIdx = copyMultiple.indexOf(getCurrentId);
        if(findIdx === -1) copyMultiple.push(getCurrentId)
        else copyMultiple.splice(findIdx,1);
       setMultiple(copyMultiple)
    }
    return (
        <div className="wrapper">
            <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
            <div className="accordian">
                {Data && Data.length>0 ? (
                    Data.map((dataItem)=>(
                        <div className="item">
                            <div onClick={enableMultiSelection ? ()=> handleMultiSelection(dataItem.id): ()=>handleSingleSelection(dataItem.id)} className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {/* {
                               selected === dataItem.id ? (
                                <div className="content">{dataItem.answer}</div>
                               ):null 
                            } */}
                            {
                                enableMultiSelection ?
                                multiple.indexOf(dataItem.id)!==-1 &&
                                <div className="content">{dataItem.answer}</div> :
                                selected === dataItem.id  && <div className="content">{dataItem.answer}</div>
                            }
                        </div>
                    ))
                ):(
                    <div>No Data found</div>
                )}
            </div>
        </div>
    )
}