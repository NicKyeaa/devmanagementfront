import React, { useState, useEffect } from 'react';
import axios from "axios"
import AddNewModal from './AddNewModal';
// import 'antd/dist/antd.min.css';
import { Table, Button, Space, notification } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons'

// Success notification when equipment is added
const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Equipment added successfully',
      description:
        'You have successfully added your equipment',
    });
};

const DataTable = () => {

  const [dataTable, setDataTable] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [showAddNewModal, setShowAddNewModal] = useState(false);
  
  // Fetch data function
  const fetchData = async () => { 
    const result = await axios.get('http://localhost:3500/equipment/');
    result.data.forEach(el => { 
      el.key = el._id
    });
    setDataTable(result.data);
  };


  // Fetching the data from the backend
  useEffect(() => {
    try {
      fetchData();
    } catch (e) {
      console.log(e)
    }
   }, []);


  // Add new Modal 
  const handleAddNewModal = () => {
    setShowAddNewModal(true);
  };

  const handleCloseModal = () => {
    setShowAddNewModal(false);
  };
  // Add new modal END
  
  // When new equipment is created. This functions is passed down to modal as prop
  const onCreate = async (values) => {
    console.log('Received values of form: ', values);
    try {
      // Post the data to DB and then fetch the new data from database
      await axios.post('http://localhost:3500/equipment/', values);
      fetchData();
      openNotificationWithIcon('success');
    } catch (e) {
      openNotificationWithIcon('error');
    }
  };


  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'type',
    });
  };

  const columns = [
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
      ],
      filteredValue: filteredInfo.category || null,
      filterSearch: true,
      onFilter: (value, record) => record.category.includes(value),
      sorter: (a, b) => a.category.length - b.category.length,
      sortOrder: sortedInfo.columnKey === 'category' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      sorter: (a, b) => a.type - b.type,
      sortOrder: sortedInfo.columnKey === 'type' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Model',
      dataIndex: 'model',
      key: 'model',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Serial Number',
      dataIndex: 'serialNumber',
      key: 'serialNumber',
      ellipsis: true
    },
    {
      title: 'Inventory Number',
      dataIndex: 'inventoryNumber',
      key: 'inventoryNumber',
      ellipsis: true
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      ellipsis: true
    },
    {
      title: 'Date of Purchase',
      dataIndex: 'dateOfPurchase',
      key: 'dateOfPurchase',
      elipsis: true
    },
    {
      title: 'Warranty',
      dataIndex: 'warrantyDate',
      key: 'warrantyDate',
      elipsis: true
    }
  ];
  return (
    <>
      <Space
        style={{
          marginBottom: 16,
        }}
      >
        <Button
          type="primary"
          icon={<PlusSquareOutlined />}
          onClick={handleAddNewModal}
          stlye={{ marginBottom: 16 }}
        >
          Add
        </Button>
        <AddNewModal modalState={showAddNewModal} closeModal={handleCloseModal} onCreate={onCreate}/>
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} dataSource={dataTable} scroll={{ y: 470 }} onChange={handleChange} />
    </>
  );
};

export default DataTable;