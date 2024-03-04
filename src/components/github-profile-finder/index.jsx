import { useEffect, useState } from "react"
import User from "./user";



export default function GitHubProfileFinder(){

    const [userName,setUserName] = useState('shivamdubeyagra')
    const [userData,setUserData] = useState(null);
    
    async function fetchGithubUserData(){
        try{
            const response = await fetch(`https://api.github.com/users/${userName}`)
            const data = await response.json()

            if(data){
                setUserData(data)
            }

        }catch(e){
            console.log(e);
        }
    }
    function handleSubmit(){
        fetchGithubUserData()
    }
    useEffect(()=>{
        fetchGithubUserData();
    },[])
    return(
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input type="text" placeholder="Search Github Username..."  value={userName} 
                onChange={(event)=>setUserName(event.target.value)}/>

                <button onClick={handleSubmit}>Search</button>
            </div>
            <div>
                {
                    userData !== null ? <User user={userData}/>:null
                }
            </div>
        </div>
    )
}