import React   from 'react';
import 'antd/dist/antd.min.css';
import {
  Form,
  Input,
  Modal,
  Select,
  Switch,
  DatePicker
} from 'antd';

const { RangePicker } = DatePicker;

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
              message: 'Please select the category of the equipment!',
            },
          ]}
        >
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="type"
          label="Type"
          rules={[
            {
              required: true,
              message: 'Please select the type of the equipment'
            }
          ]}
        >
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="model"
          label="Model"
          rules={[
            {
              required: true,
              message: 'Please select the model of the equipment'
            }
          ]}
        >
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="serialNumber"
          label="Serial Number"
          rules={[
            {
              required: true,
              message: 'Please input the serial number of the equipment'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="inventoryNumber"
          label="Inventory Number"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="location"
          label="Location"
        >
          <Input />
        </Form.Item>
        <Form.Item label="Warranty">
          <RangePicker
            format="DD-MM-YYYY"
          />
        </Form.Item>
        <Form.Item>
          <Switch
            checkedChildren={'Active'}
            unCheckedChildren={'Inactive'}
            defaultChecked
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const AddNewModal = (props) => {
    
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    };

  return (
    <div>
      <CollectionCreateForm
        visible={props.modalState}
        onCreate={onCreate}
        onCancel={props.closeModal}
      />
    </div>
  );
};

export default AddNewModal;