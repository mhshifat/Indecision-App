import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import HeaderComponent from './HeaderComponent/HeaderComponent'
import ActionComponent from './ActionComponent/ActionComponent'
import OptionComponent from './OptionComponent/OptionComponent'
import AddOptionComponent from './AddOptionComponent/AddOptionComponent'
import OptionModal from './OptionModal/OptionModal'

require('./index.css')

class IndecisionApp extends Component {
  state = {
    options: [],
    error: undefined,
    option: 'Please add an option to get started...',
    showModal: false
  }

  componentDidMount = () => {
    const options = localStorage.getItem('indecision')
    if (options) {
      const json = JSON.parse(options)
      this.setState({
        options: json
      })
    }
  }

  errorMessage = (string) => {
    this.setState({
      error: string
    })
    setInterval(() => {
      this.setState({
        error: ' '
      })
    }, 5000)
  }

  foundOption = (value) => {
    const stringValue = String(value).trim()
    const options = this.state.options
    const option = options.findIndex(option => {
      return option === stringValue
    })
    return option
  }

  removeOptionHandler = (index) => {
    const options = this.state.options
    const indexFound = options.findIndex(option => {
      return option.id === index
    })
    options.splice(indexFound, 1)
    this.setState({ options })
    const json = JSON.stringify(options)
    localStorage.setItem('indecision', json)
  }

  noOptionMessage = () => {
    return (
      <div className="container">
        <div className="noMessage">
          <center>{this.state.option}</center>
        </div>
      </div>
    )
  }

  showAllOptions = () => {
    if (this.state.options.length > 0) {
      return this.state.options.map((option) => {
        return <OptionComponent click={this.removeOptionHandler.bind(this, option.id)} key={option.id} index={option.id} title={option.title}/>
      })
    } else {
      return this.noOptionMessage()
    }
  }

  removeAllOptionHandler = () => {
    let options = this.state.options
    options = []
    this.setState({
      options: options
    })
    localStorage.setItem('indecision', options)
  }

  addOptionHandler = (e) => {
    e.preventDefault()
    let value = e.target.option.value
    if (!value) return this.errorMessage('Please fill out the option field...' )
    else if (this.foundOption(value) !== -1) return this.errorMessage('This option is already exists...')
    const options = this.state.options
    options.push({
      id: this.state.options.length + 1,
      title: e.target.option.value
    })
    this.setState({ options })
    const saveOption = JSON.stringify(this.state.options)
    localStorage.setItem('indecision', saveOption)
    e.target.option.value = " "
  }

  showModalHandler = () => {
    const state = this.state.showModal
    this.setState({
      showModal: !state
    })
  }

  firstOption = () => {
    const options = localStorage.getItem('indecision')
    if (options) {
      const json = JSON.parse(options)
      return json[0].title
    }
  }

  closeModalHandler = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        background            : '#333745',
        fontSize              : '12px',
        textAlign             : 'center'
      }
    }
    const styleCustom = {
      background:  '#8357c5',
      color: '#fff',
      padding: '5px 10px',
      borderRadius: '3px',
      marginTop: '10px',
      cursor: 'pointer'
    }
    return (
      <div>
        <HeaderComponent/>
        <ActionComponent modal={this.showModalHandler} click={this.removeAllOptionHandler} hasOption={this.state.options.length > 0}/>
        { this.showAllOptions() }       
        <AddOptionComponent submit={this.addOptionHandler}/>
        <div className="container">
          <p className="error">{this.state.error}</p>
        </div>
        <OptionModal click={this.closeModalHandler} styleCustom={styleCustom} style={customStyles} isOpen={this.state.showModal} title={this.firstOption()}/>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('root'))
registerServiceWorker()
