// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="planets-app-container">
      <h1 className="heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem eachPlanet={eachPlanet} key={eachPlanet.id} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
