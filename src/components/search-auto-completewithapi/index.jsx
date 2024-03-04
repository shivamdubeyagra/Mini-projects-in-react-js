import { useEffect, useState } from "react"
import Suggestion from "./suggestions";



export default function SearchAutoComplete(){
    const [loading,setLoading] = useState(false)
    const [users,setUsers] = useState([]);
    const [error,setError]  = useState(null)
    const [searchParam,setSearchParam] = useState('');
    const [show,setShow] = useState(false);
    const [filteredUsers,setFilteredUsers] = useState([]);

    function handleChange(event){
        const query = event.target.value.toLowerCase();
        setSearchParam(query)
        if(query.length >= 1){
            const filteredData = users && users.length ?
            users.filter((item)=> item.toLowerCase().indexOf(query)>-1): [];
            setFilteredUsers(filteredData)
            setShow(true)
        }else{
            setShow(false)
        }
    }
    async function fetchListOfUsers(){
        try{
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/users`)
            const data = await response.json();

            if(data && data.users && data.users.length){
                setUsers(data.users.map((userItem)=> userItem.firstName))
                setLoading(false)
                setError(null)
            }
        }catch(err){
            console.log(err);
            setError(err)
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchListOfUsers();
    },[])
    return (
        <div className="search-autocomplete-container">
            <input value={searchParam} type="text" placeholder="Search users Here..."
            onChange={handleChange}/>
            {show && <Suggestion data={filteredUsers}/>}
        </div>
    )
}