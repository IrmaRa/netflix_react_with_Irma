import React from 'react'

class ActorSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: ''
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFirstNameChange(event){
    this.setState({firstName: event.target.value})
  }

  handleLastNameChange(event){
    this.setState({lastName: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    const fName = this.state.firstName.trim()
    const lName = this.state.lastName.trim()
    if(!fName || !lName) return
    this.props.submitActor({firstName: fName, lastName: lName})
    this.setState({firstName: "", lastName: ""})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='First name'
          value={this.state.firstName}
          onChange={this.handleFirstNameChange}
        />
        <input
          type='text'
          placeholder='Last name'
          value={this.state.lastName}
          onChange={this.handleLastNameChange}
        />
        <input
          type='submit'
          value='Submit'
        />
      </form>
    )
  }
}

export default ActorSelector
