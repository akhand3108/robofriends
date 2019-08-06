import React from 'react';
import Cardlist from '../Components/Cardlist';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
import './App.css';


class App extends React.Component{

    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    onSearchChange = (event)=>{
        this.setState({searchField: event.target.value});
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots:users}));
    }
   

    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        if(this.state.robots.length === 0){
            return<h1>Loading</h1>
        } else{
            return (
            
                <div className='tc'>
                    <h1 id='robohead' className='f2'>ROBOFRIENDS</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <Cardlist robots={filteredRobots}/>
                    </Scroll>
                </div>
                
            )
        }  
    } 
} 
export default App;