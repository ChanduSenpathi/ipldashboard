import './index.css'
import { Component } from 'react'
import IPLTeams from '../IPLTeams'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'


class Home extends Component{
    state={IPLteams:[],isLoading:true}
    componentDidMount=async()=>{
        let response=await fetch('https://apis.ccbp.in/ipl')
        let data=await response.json()
        // console.log(data)
        let alldata=data.teams
        let newData=await alldata.map(item => ({
                id:item.id,
                name:item.name,
                imageUrl:item.team_image_url
        }));
        this.setState({IPLteams:newData,isLoading:false})
    }

    render(){
        const{IPLteams,isLoading}=this.state
        return(
            <div className='main-container'>
                <div className='logo-container'>
                    <img className='logo-image' src='https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png' alt='logo'/>
                    <h1 className='logo-info'>IPL DashBoard</h1>
                </div>
                <ul className='ul-team-container'>
                    {isLoading?
                    <div className='loader-container'>
                        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
                    </div>
                    :(IPLteams.map(each=>(<IPLTeams key={each.id} teamDetails={each}/>)))}
                </ul>
            </div>
        )
    }
}
export default Home