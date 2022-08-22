import React from 'react';
import 'antd/dist/antd.min.css';
import {
  Form,
  Input,
  Modal,
  Select,
  Switch,
  DatePicker,
  notification,
  Col,
  Row
} from 'antd';

const { RangePicker } = DatePicker;

// Success notification when equipment is added
const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Equipment added successfully',
      description:
        'You have successfully added your equipment',
    });
};

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new equipment"
      style={{
        top: '2%',
      }}
      width={1000}
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
        {/* Category of the equipment */}
        <Row gutter={8}>
          <Col span={8}>
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
            </Col>
          {/* Type of the equipment */}
          <Col span={8}>
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
          </Col>
          {/* Model of the equipment */}
          <Col span={8}>
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
          </Col>
        </Row>
        {/* Serial number of the equipment */}
        <Row gutter={12}>
          <Col span={12}>
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
          </Col>
          {/* Inventory Number of the equipment */}
          <Col span={12}>
            <Form.Item
              name="inventoryNumber"
              label="Inventory Number"
            >
              <Input />
            </Form.Item>
            </Col>
        </Row>
        {/* Location of the equipment */}
        <Form.Item
          name="location"
          label="Location"
        >
          <Input />
        </Form.Item>
        <Row gutter={12}>
          {/* Date Of Purchase */}
          <Col span={12}>
            <Form.Item
              name="dateOfPurchase"
              label="Date of Purchase"
            >
              <DatePicker />
            </Form.Item>
          </Col>
          {/* Warranty of the equipment */}
          <Col span={12}>
            <Form.Item label="Warranty" name="warrantyDate">
              <RangePicker
                format="DD-MM-YYYY"
              />
            </Form.Item>
          </Col>
        </Row>
        {/* Remarks */}
        <Form.Item label="Remarks" name="remarks">
          <Input.TextArea />
        </Form.Item>
        {/* Status of the equipment */}
        <Form.Item label="Equipment Active" name="statusEquipment" valuePropName="checked">
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
    openNotificationWithIcon('success');
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