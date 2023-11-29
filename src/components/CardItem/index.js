import './index.css'

const CardItem = props => {
  const {cardList} = props
  const {id, title, description, imgUrl, className} = cardList

  return (
    <li className="{className} card ">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="img-container">
        <img src={imgUrl} className="img" alt="avatar" />
      </div>
    </li>
  )
}

export default CardItem
