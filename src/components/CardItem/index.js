import './index.css'

const CardItem = props => {
  const {cardList} = props
  const {id, title, description, imgUrl, className} = cardList

  return (
    <li className={className}>
      <div className="textContainer">
        <h1 className="heading">{title}</h1>
        <p className="paragraph">{description}</p>
      </div>
      <div className="img-container">
        <img src={imgUrl} className="img" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
