import React from 'react'
import PropTypes from 'prop-types'
import DetailFooter from './DetailFooter/Index'
import './Index.scss'
import '../../../../styles/core.scss'

class LayOut extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      is_Show: true
    }
  }
  render () {
    const { location, children } = this.props
    return (
      <div className='wrap'>
        <div className='core-layout__viewport'>
          {children}
        </div>
        {this.state.is_Show ? <DetailFooter location={location} /> : null }
      </div>
    )
  }
  componentDidMount () {
    const { pathname } = this.props.location
    if (pathname === '/wx/detail/basic' || pathname === '/wx/detail/list' || pathname === '/wx/detail/map' || pathname === '/wx/detail/edit' || pathname === '/wx/detail/warn') {
      this.setState({
        is_Show: true
      })
    } else {
      this.setState({
        is_Show: false
      })
    }
  }

  componentWillReceiveProps (nextProps) {
    const { pathname } = this.props.location
    const nextPath = nextProps.location.pathname
    if (pathname !== nextPath) {
      if (nextPath === '/wx/detail/basic' || nextPath === '/wx/detail/list' || nextPath === '/wx/detail/map' || nextPath === '/wx/detail/edit' || nextPath === '/wx/detail/warn') {
        this.setState({
          is_Show: true
        })
      } else {
        this.setState({
          is_Show: false
        })
      }
    }
  }

}

LayOut.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
}

export default LayOut
