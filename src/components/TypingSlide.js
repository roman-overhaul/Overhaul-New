import React, {Component, useRef} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class TypingSlide extends Component {

  constructor() {
    super()

    this.state = {
      revealProgress: 0,
    }

    this.slideEl = React.createRef();
  }

  componentDidMount () {
    this.scrollWatcher = ScrollTrigger.create({
      trigger: this.slideEl.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (trigger) => {
        this.setState({
          revealProgress: trigger.progress
        })
      }
    });
  }

  componentWillUnmount () {
    this.scrollWatcher.destroy()
  }

  render () {
    const textStep = 1 / (this.props.text.length - 1)
    const { revealProgress } = this.state
    return (
      <div className="fixed-slide typing-slide" ref={this.slideEl}>
        <div className="fixed-slide__clip">
          <div className="fixed-slide__inner">
            <div className="fixed-slide__content">
              <div className="container">
                <h1 className="fixed-slide__title">
                  {this.props.text.map((text, i) => {
                    const start = ((i - 1) * textStep)
                    const position = (revealProgress - start) / textStep
                    return (<span style={{ opacity: position }}> {text}</span>)
                  })}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TypingSlide
