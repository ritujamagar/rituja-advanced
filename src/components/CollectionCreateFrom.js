import React from 'react';
import {Modal, Form, Input } from 'antd';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(



  
 
  class extends React.Component {
    
    
    
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;

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
      

      return (
        <Modal
          visible={visible}
          title="Basic Modal"
          okText="OK"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form {...formItemLayout} >


            <Form.Item label="Name">
              {getFieldDecorator('name', {
                initialValue:this.props.name,
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(<Input onChange={(e)=>{this.setState({name:e.target.value})}} />)}
              
            </Form.Item>


            <Form.Item label="E-mail">
            {getFieldDecorator('email', {
              initialValue:this.props.email,
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
              initialValue:this.props.phone,
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(<Input  style={{ width: '100%' }} onChange={(e)=>{
              this.setState({phone:e.target.value})
            }}/>)}
          </Form.Item>
          
          
          
          <Form.Item label="Website">
            {getFieldDecorator('website', {
              initialValue:this.props.website,
              rules: [{ required: true, message: 'Please input website!' }],
            })(<Input  style={{ width: '100%' }} onChange={(e)=>{
              this.setState({website:e.target.value})
            }}/>)}
          </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);
export default CollectionCreateForm;

