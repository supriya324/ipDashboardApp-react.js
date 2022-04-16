// Write your code here
import './index.css'

const TeamCard = props => {
  const {dashboardData} = props
  const {teamImageUrl, name} = dashboardData

  return (
    <li className="list-container">
      <div className="dash">
        <div className="item-container">
          <img src={teamImageUrl} alt={`${name}`} className="dashboard-image" />
          <h1 className="item-heading"> {name}</h1>
        </div>
      </div>
    </li>
  )
}
export default TeamCard
