import {Component} from 'react'
import FaqItem from '../FaqItem/index'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div>
        <div>
          <h1>FAQs</h1>
          <ul>
            {faqsList.map(eachItem => (
              <FaqItem key={eachItem.id} details={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
