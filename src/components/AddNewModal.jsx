import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import { Form, Input, Modal, Radio } from 'antd';

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new equipment"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="category"
          label="Category"
          rules={[
            {
              required: true,
              message: 'Please input the category of the equipment!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const AddNewModal = (props) => {
    
  // const [visible, setVisible] = useState(false);
    
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    };

  return (
    <div>
      <CollectionCreateForm
        visible={props.modalState}
        onCreate={onCreate}
        onCancel={props.handleCloseModal}
      />
    </div>
  );
};

export default AddNewModal;