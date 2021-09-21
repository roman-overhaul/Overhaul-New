import * as React from 'react'
import Icon from '../components/Icons'

class BlockApproach extends React.Component {

  constructor() {
        super()
        this.state = {
          accordionIsOpen: false
        }
        this.toggleAccordion = this.toggleAccordion.bind(this)
        }

    toggleAccordion() {

        this.setState( 
            function(prevState){
                return{
                  accordionIsOpen: !prevState.accordionIsOpen
                }
            }
         )
    }
    render() {
        const { title, image, alt, content} = this.props
        return (
            <div className="block-approach">
                <div className="container row">
                    <div className="col-xs-12 col-md-3 block-approach_title">
                        <Icon name="sun"/>
                        <h2>{ title }</h2>
                        <div onClick={this.toggleAccordion} className={`close ${this.state.accordionIsOpen ? 'open' : ''}`}></div>
                    </div>
                    <div className={`block-approach_content accordion col-md-9 col-xs-12 ${this.state.accordionIsOpen ? 'open' : ''}`}>
                        <div className="block-approach_featured-image">
                            <img className="block-approach_image" src={image} alt={alt}/>
                        </div>
                        {content.map((contentItem, index) => (
                            <div className="block-approach_paragraph row" key={index}>
                                <h2 className="col-md-3">{contentItem.title}</h2>
                                <p className="col-md-9">{contentItem.paragraph}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        )
    }
}

export default BlockApproach