import React,{Component} from 'react';

class App extends Component{
    state = {
        name : "Pablo Escobar"
    }
    onDonChange = (donName) => {
        this.setState({name : donName})
    }
}
