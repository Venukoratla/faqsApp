// Write your code here.
import {Component} from 'react'

class FaqItem extends Component {
  state = {buttonClicked: false}

  plusClicked = () => {
    const {buttonClicked} = this.state
    this.setState({buttonClicked: !buttonClicked})
  }

  render() {
    const {details} = this.props
    const {buttonClicked} = this.state
    const {id, questionText, answerText} = details
    const imgUrl = buttonClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = buttonClicked ? 'minus' : 'plus'
    return (
      <li key={id}>
        <h1>{questionText}</h1>
        <button type="button" onClick={this.plusClicked}>
          <img src={imgUrl} alt={altText} />
        </button>
        {buttonClicked && <p>{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
