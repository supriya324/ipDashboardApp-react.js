import './index.css'

import {Component} from 'react'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {dashboardData: []}

  componentDidMount() {
    this.getDashboardLists()
  }

  getDashboardLists = async () => {
    const response = await fetch(`https://apis.ccbp.in/ipl`)
    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
      name: eachItem.name,
    }))
    this.setState({dashboardData: updatedData})
  }

  render() {
    const {dashboardData} = this.state
    return (
      <div className="dashboard-container">
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-image"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="list">
          {dashboardData.map(eachItem => (
            <TeamCard key={eachItem.id} dashboardData={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
