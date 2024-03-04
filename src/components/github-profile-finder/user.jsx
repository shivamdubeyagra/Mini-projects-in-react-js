
export default function User({user}){
    const {avatar_url,followers,following, public_repos, url,name,login} = user;
    return (
        <div className="user">
            <div>
                
                <img src={avatar_url} className="avatar" alt="User" />
                <p>{name}</p>
                <p>{login}</p>
                <p>{followers}</p>
                <p>{following}</p>
                <p>{public_repos}</p>
                <p>{url}</p>

            </div>
            <div>
                <a href={`https://github.com/${login}` } target="_blank">{name || login}</a>
            </div>
        </div>
    )
}