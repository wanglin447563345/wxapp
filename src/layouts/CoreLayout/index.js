import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../../components/Footer'
import './Index.scss'
import '../../styles/core.scss'

class CoreLayout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isShow: true
    }
  }
  render () {
    const { location, children } = this.props
    return (
      <div className='wrap'>
        <div className='core-layout__viewport'>
          {children}
        </div>
        {this.state.isShow ? <Footer location={location} /> : null }
      </div>
    )
  }
  componentDidMount () {
    const { pathname } = this.props.location
    if (pathname === '/' || pathname === '/list' || pathname === '/add' || pathname === '/help' || pathname === '/user') {
      this.setState({
        isShow: true
      })
    } else {
      this.setState({
        isShow: false
      })
    }
  }

  componentWillReceiveProps (nextProps) {
    const { pathname } = this.props.location
    const nextPath = nextProps.location.pathname
    if (pathname !== nextPath) {
      if (nextPath === '/' || nextPath === '/list' || nextPath === '/add' || nextPath === '/help' || nextPath === '/user') {
        this.setState({
          isShow: true
        })
      } else {
        this.setState({
          isShow: false
        })
      }
    }
  }

}

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
}

export default CoreLayout
