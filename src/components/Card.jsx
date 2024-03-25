import { getBg } from "../colors/colors"
import "../styles/Card.css"

const Card = ({children, bg}) => {

    const bgColor = getBg(bg)
      
  return (
    <div className="card" style={{backgroundColor: bgColor}}>
        {children}
    </div>
  )
}

export default Card