import React from "react"
import { ScrollamaContext } from "./scrollama-context"
import scrollama from "scrollama"

class Scrollama extends React.Component {
  static contextType = ScrollamaContext

  constructor(props) {
    super(props)
    this.scroller = scrollama()
    this.steps = []
  }

  setupRef(ref) {
    this.steps.push(ref.current)
    return () => {
      this.steps.splice(this.steps.indexOf(ref.current), 1)
    }
  }

  componentDidMount() {
    const {
      offset = 0.5,
      progress = false,
      debug = false,
      onStepEnter = () => {},
      onStepExit = () => {},
      onStepProgress = () => {},
    } = this.props

    this.scroller
      .setup({
        step: this.steps,
        offset,
        progress,
        debug,
      })
      .onStepEnter((response) => {
        onStepEnter(response)
      })
      .onStepExit((response) => {
        onStepExit(response)
      })
      .onStepProgress((response) => {
        onStepProgress(response)
      })

    window.addEventListener("resize", this.scroller.resize)
  }
  componentWillUnmount() {
    this.scroller.destroy()
    window.removeEventListener("resize", this.scroller.resize)
  }

  render() {
    const { children, style = {}, className = '' } = this.props
    return (
      <div style={style} className={className}>
        <ScrollamaContext.Provider value={(ref) => this.setupRef(ref)}>
          {children}
        </ScrollamaContext.Provider>
      </div>
    )
  }
}

export default Scrollama
