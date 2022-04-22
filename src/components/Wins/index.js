import './index.css'
const Wins =props=>{
    const{matchDetails}=props
    const{teamLogo,newCompetingTeam,wonResult,newMatchstatus}=matchDetails
    return(
        <li className='teams-information'>
            <img className='teams-logos' alt='team_image' src={teamLogo}/>
            <h1 className='newcompeting-head'>{newCompetingTeam}</h1>
            <p>{wonResult}</p>
            <span className='win-status'>{newMatchstatus}</span>
        </li>
    )
}

export default Wins