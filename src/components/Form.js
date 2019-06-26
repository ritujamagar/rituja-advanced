import React from 'react';
import {
    Form,
    Input,
    AutoComplete,
  } from 'antd';

  
  const AutoCompleteOption = AutoComplete.Option;

  
  class RegistrationForm extends React.Component {
    constructor(props){
      super(props);
      this.state={
        confirmDirty: false,
        autoCompleteResult: [],
        submitButtonToggle:true, 
        name:'', email:'',website:'',phone:'',
      };
     
    }
    

  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
  
    handleWebsiteChange = value => {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.setState({ autoCompleteResult });
    };

    // handleChange=e=>{
      
    //   if(e){
    //     this.setState({
    //     name:e.target.value,
    //     phone:e.target.value,
    //     website:e.target.value,
    //     email:e.target.value,
    //     })
    //     }
    //     console.log(this.state.name);
       
    //   }
      // onFormSubmit=(e)=>{
      //   e.preventDefault();
      //   console.log(this.state.name)
      // }


   
      

    

    render() {
      const { getFieldDecorator } = this.props.form;
      const { autoCompleteResult } = this.state;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      
      
  
      const websiteOptions = autoCompleteResult.map(website => (
        <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
      ));

      

      this.props.getData(this.state.name,this.state.email,this.state.phone,this.state.website);
  


        console.log(this.state.website);

      return (
        
        <Form {...formItemLayout} onSubmit={this.handleSubmit.bind(this)}>

          <Form.Item label="Name" >
            {getFieldDecorator('name', {
              initialValue:this.props.data.name,
              rules: [{ required: true, message: 'Please input your Name!' }],
            })(<Input style={{ width: '100%' }} onChange={(e)=>{
              this.setState({name:e.target.value})
            }} />)}
          </Form.Item>

          

          <Form.Item label="E-mail">
            {getFieldDecorator('email', {
              initialValue:this.props.data.email,
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input style={{ width: '100%' }} onChange={(e)=>{
              this.setState({email:e.target.value})
            }} />)}
          </Form.Item>
         
          <Form.Item label="Phone Number">
            {getFieldDecorator('phone', {
              initialValue:this.props.data.phone,
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(<Input  style={{ width: '100%' }} onChange={(e)=>{
              this.setState({phone:e.target.value})
            }}/>)}
          </Form.Item>
          
          
          
          <Form.Item label="Website">
            {getFieldDecorator('website', {
              initialValue:this.props.data.website,
              rules: [{ required: true, message: 'Please input website!' }],
            })(<Input  style={{ width: '100%' }} onChange={(e)=>{
              this.setState({website:e.target.value})
            }}/>)}
          </Form.Item>
        
          
          
         
        </Form>
      );
    }
  }
  
  const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
  
export default WrappedRegistrationForm;