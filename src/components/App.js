import React from 'react';
import User from './User';
import axios from 'axios';
import Loading from './Loading';



class App extends React.Component{
state={data: [], loading: true};
componentDidMount = async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response.data);
    this.setState({data: response.data, loading:false});
}

    deleteCard=(e)=>{
    const items = this.state.data.filter(item => item.id !== e);
    this.setState({ data: items })   
}

updateCard=(n,e,p,w,iid)=>{

console.log(iid);
const items = this.state.data.filter(item => {
    if(item.id===iid){
        console.log(item);
        item.name=n;
        item.email=e;
        item.phone=p;
        item.website=w;
        console.log(item)
        
    }
    return item;
});

console.log(items);
this.setState({ data: [...items] })  
}



    render(){
        if(this.state.loading){
            return <Loading />;
        }
        return(
            <div>
                <User data={this.state.data} item={this.deleteCard}  updateCard={this.updateCard}/>
            </div>
        );
    }
}

export default App;
