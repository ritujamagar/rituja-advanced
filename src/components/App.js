import React from 'react';
import User from './User';
import axios from 'axios';
import Loading from './Loading';



class App extends React.Component{
state={data: [], loading: true};
componentDidMount = async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    // console.log(response.data);
    this.setState({data: response.data, loading:false});
}

removeItem=(item1)=>{
    //console.log(item1)
    // const items = this.state.data.filter(item => {
    //     return item !== test;
    // })
    console.log(this.state.data)
    const newList = this.state.data.filter(test =>{
        return test !== item1
        
        //console.log(test)
    })
   
    this.setState({
        data: [...newList]
    })  
    console.log(this.state.data);

}




    render(){
        console.log(this.state.data);
        if(this.state.loading){
            return <Loading />;
        }
        return(
            <div>
                <User people={this.state.data} removeItem={this.removeItem}  updateCard={this.updateCard}/>
            </div>
        );
    }
}

export default App;
