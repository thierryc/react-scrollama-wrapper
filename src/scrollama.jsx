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
      threshold = 4,
      once = false,
      parent = undefined
    } = this.props

    this.scroller
      .setup({
        step: this.steps,
        offset,
        progress: progress ? 1 : 0,
        debug: debug ? 1 : 0,
        threshold,
        once,
        parent,
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
    const { children, ...primitiveProps } = this.props
    return (
      <div {...primitiveProps}>
        <ScrollamaContext.Provider value={(ref) => this.setupRef(ref)}>
          {children}
        </ScrollamaContext.Provider>
      </div>
    )
  }
}

export default Scrollama
