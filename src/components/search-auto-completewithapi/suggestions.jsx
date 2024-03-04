

export default function  Suggestion({data}){
    return (
        <div>
            <ul>
                {
                    data && data.length ?
                    data.map((item,index)=> <li key={index}>{item}</li>):null
                }
            </ul>
        </div>
    )
}