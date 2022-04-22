import './index.css'
import { useEffect, useReducer} from "react";
import { useParams } from "react-router-dom";
import Wins from '../Wins';
const Teamdetails=()=>{
    const [state, setState] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {loading: true, bannerImg:"",latestData:[],recentMatchs:[]}
      )
      const id = useParams().id
    
      useEffect(() => {
          async function fetchDetails (){
                const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
                const data = await response.json()
                console.log(data)
                const updatedbanner=data.team_banner_url
                const newMatch=data.latest_match_details
                const updatedMatch={
                    competingTeam:newMatch.competing_team,
                    competingteamLogo:newMatch.competing_team_logo,
                    date:newMatch.date,
                    firstInnings:newMatch.first_innings,
                    id:newMatch.id,
                    manoftheMatch:newMatch.man_of_the_match,
                    matchStatus:newMatch.match_status,
                    result:newMatch.result,
                    secondInnings:newMatch.second_innings,
                    umpires:newMatch.umpires,
                    venue:newMatch.venue
                }
                let newrecentMatches=data.recent_matches
                let updatedrecentmathces=newrecentMatches.map(item=>({
                    newCompetingTeam:item.competing_team,
                    teamLogo:item.competing_team_logo,
                    wonResult:item.result,
                    newMatchstatus:item.match_status,
                    newId:item.id
                }))

                // console.log(newrecentMatches)
                setState({bannerImg:updatedbanner,latestData:updatedMatch,recentMatchs:updatedrecentmathces})
          }
          fetchDetails()
      },[id])
    const{bannerImg,latestData,recentMatchs}=state
    console.log(recentMatchs)
    const{competingTeam,competingteamLogo,date,firstInnings,manoftheMatch,result,secondInnings,umpires,venue}=latestData
    return(
        <div className='main-container extended'>
            <img className='banner-main' src={bannerImg} alt='banner'/> 
            <h1 className='latest-match-head'>Latest Matches</h1>
            <div className='main-competing-container'>
                <div className='competing-container'>
                    <div>
                        <h1>{competingTeam}</h1>
                        <h2>{date}</h2>
                        <p>{venue}</p>
                        <p>{result}</p>
                    </div>
                    <img className='logo-image-team' src={competingteamLogo} alt="competingteam_logo"/>
                </div>
                <h3>First Innings</h3>
                <p>{firstInnings}</p>
                <h3>Second Innings</h3>
                <p>{secondInnings}</p>
                <h3>Man Of The Match</h3>
                <p>{manoftheMatch}</p>
                <h3>Umpires</h3>
                <p>{umpires}</p>
            </div>
            <ul className='teams-ul-main-container'>
                {recentMatchs.map(each=>(
                    <Wins keys={each.id} matchDetails={each}/>
                ))}
            </ul>
        </div>
    )
}
export default Teamdetails