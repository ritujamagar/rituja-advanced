import React from 'react';
import UserCard from './UserCard';


const User = (props) =>{
    const data = props.data.map((info) => {
        return <UserCard data={info} e={info.id} item={props.item} updateCard={props.updateCard}/>
    });
    return <div className="ant-row">{data}</div>;
    };
   

export default User;