import { DescriptionPanel } from '../../components/descriptionPanel/DescriptionPanel'
import {
  descriptionsArray,
  titles,
  descriptions
} from '../../constants/aboutPageConsts'
import './About.css'

export function About() {
  return (
    <div>
      <div className="about-container">
        <img src="paysage-montagneux.png" alt="Un paysage montagneux" />
        {descriptionsArray.map((_, index) => (
          <div className="about-text">
            <DescriptionPanel
              title={titles[index]}
              description={descriptions[index]}
              key={index}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
