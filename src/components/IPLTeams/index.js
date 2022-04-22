import './index.css'
import { Link } from 'react-router-dom'
const IPLTeams=props=>{
    const{teamDetails}=props
    const{name,imageUrl,id}=teamDetails
    return(
        <Link to={`ipl/${id}`} className="link-container">
            <li>
                <div className='teams-container'>
                    <img className='image-sec' src={imageUrl} alt="team-images"/>
                    <h3 className='team-name'>{name}</h3>
                </div>
            </li>
        </Link>
       
    )
}
export default IPLTeams