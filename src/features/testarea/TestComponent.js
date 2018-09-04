import React, {Component} from 'react'
import Script from 'react-load-script'
import {connect} from 'react-redux'
import PlacesAutoComplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';

const mapState = (state) => ({
    data: state.test.data
})


class TestComponent extends Component {
    state ={
      adress: '',
      scriptLoaded: false
    }

    handleScriptLoad = () =>{
      this.setState({scriptLoaded: true})
    }

    handleFormSubmit = (event) =>{
      event.preventDefault()
    }

    onChange = (adress) => this.setState({adress});

    render() {
        const inputProps = {
          value: this.state.adress,
          onChange: this.onChange,
        }

        return (
            <div>
                <Script
                  url='https://maps.googleapis.com/maps/api/js?key=AIzaSyAJQ1owy9pWe1tiSU6jsQfPkrpl8FzUk7M&libraries=places'
                  onLoad={this.handleScriptLoad} />
                <h1>Test Area</h1>
                <h3>The answer is: {this.props.data}</h3>
                <br/><br/>
                <form>
                  {this.state.scriptLoaded &&
                  <PlacesAutoComplete inputProps={inputProps} />}
                  <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(mapState)(TestComponent)
