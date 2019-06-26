import React from 'react';
import './UserCard.css';
import CollectionCreateForm from './CollectionCreateFrom';

import {Card,Icon,Col,Dropdown,Menu,message} from 'antd';



const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd memu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

class UserCard extends React.Component{
    
    state={theme:'',name:this.props.data.name, phone:this.props.data.phone,website:this.props.data.website, email:this.props.data.email,visible: false, selectedid:''};

    style={background:"none", outline:"none", border:"none"};
    imagesrc=`https://avatars.dicebear.com/v2/avataaars/${this.props.data.username}.svg?options[mood][]=happy`;

    showModal = () => {
      this.setState({ visible: true });
    };
  
    handleCancel = () => {
      this.setState({ visible: false });
    };
  
    handleCreate = () => {
      const  form  = this.formRef.props.form;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }
  
        console.log('Received values of form: ', values);
        form.resetFields();
        this.setState({ visible: false , name:values.name, email:values.email, phone:values.phone, website:values.website  });
       
      });
      //console.log(this.state.name);
    };
  
  
    saveFormRef = formRef => {
      this.formRef = formRef;
    };

    handleClick=()=>{
      this.state.theme ===''? this.setState({theme:'filled'}): this.setState({theme:''});
    }


     
    
  

    

    render(){
        
      //console.log(this.state.name);
         
        return(
            <div>
            <Col  xs={24} sm={24}  md={12} lg= {8} xl={6} >
            <Card className="ant-card"
            cover={ 
              <img alt="example" src={this.imagesrc} style={{backgroundColor:"#f5f5f5"}}/>
            }
            actions={
            [<button style={this.style} onClick={this.handleClick} className="button"><Icon type="heart" theme={this.state.theme} style={{fontSize:"20px", color:"#ff0000"}} 
            />
            </button>, 
            <button style={this.style} className="button"><Icon type="edit" style={{fontSize:"20px"}} onClick={this.showModal} /></button>, 
            <button style={this.style} className="button"><Icon type="delete" theme="filled" style={{fontSize:"20px"}} 
            onClick={()=>this.props.removeItem(this.props.data)}/></button>,
            <button style={this.style} className="button"><Icon type="eye" style={{fontSize:"20px"}} />
            <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              Hover me, Click menu item <Icon type="down" />
            </a>
          </Dropdown></button>]}
           >
          <div>
              <h3>{this.state.name}</h3>
              <div className="content">
                  <Icon type="mail" style={{fontSize:"18px", marginRight:"10px"}}/> {this.state.email}
              </div>
              <div className="content">
                  <Icon type="phone" style={{fontSize:"18px", marginRight:"10px"}}/> {this.state.phone}
              </div>
              <div className="content">
                  <Icon type="global" style={{fontSize:"18px", marginRight:"10px"}}/> http://{this.state.website}
              </div>
          </div>
          </Card>
       
        </Col>
        <CollectionCreateForm
        wrappedComponentRef={this.saveFormRef}
                  visible={this.state.visible}
                  onCancel={this.handleCancel}
                  onCreate={this.handleCreate}
                  name={this.state.name}
                  phone={this.state.phone}
                  website={this.state.website}
                  email={this.state.email}
        />
  
        </div>
        
          
        );

    
    }
}

export default UserCard;