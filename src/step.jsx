import React from "react"
import { ScrollamaContext } from "./scrollama-context"

class Step extends React.Component {
  static contextType = ScrollamaContext

  constructor(props) {
    super(props)
    this.stepRef = React.createRef()
    this.remove = null
  }

  componentDidMount() {
    this.remove = this.context(this.stepRef)
  }

  componentWillUnmount() {
    this.remove()
  }

  render() {
    const { children, ...primitiveProps } = this.props
    return (
      <div ref={this.stepRef} {...primitiveProps}>
        {children}
      </div>
    )
  }
}

export default Step
