import React from 'react';
import UserCard from './UserCard';


class User extends React.Component{
     render(){
         const User = this.props.people.map(data=>{
            return(
            <UserCard 
            key={data.id}
            data={data} 
            removeItem={this.props.removeItem} 
            updateCard={this.props.updateCard}
            />
            );

         });

    return <div className="ant-row">{User}</div>;

        }
    }
        
   

export default User;