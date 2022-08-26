import React, { useState, useEffect } from 'react';
import axios from "axios"
import AddNewModal from './AddNewModal';
import 'antd/dist/antd.min.css';
import { Table, Button, Space } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons'

// Temporary for loop for data table
const data = [];
for (let i = 0; i < 1000; i++) {
    data.push({
      key: i.toString(),
      category: `PC ${i}`,
      type: 'CK',
      model: 'HN',
      serialNumber: `SER ${i}`,
      inventoryNumber: `INV ${i+100}`,
      location: `London Park no. ${i}`,
      dateOfPurchase: '2015',
      warrantyDate: '2015-2021',
      remarks: 'ipsem islur',
      equipmentStatus: true
    })
};

const DataTable = () => {

  const [dataTemp, setDataTemp] = useState('default');
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [showAddNewModal, setShowAddNewModal] = useState(false);
  
  // Fetching the data from the backend
  useEffect(() => {
    const fetchData = async () => { 
      const result = await axios.get('http://localhost:3500/equipment/');
      setDataTemp(result.data);
      console.log(dataTemp);
      console.log(data);
    };
    try {
      fetchData();
    } catch (e) {
      console.log(e)
    }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);


  // Add new Modal 
  const handleAddNewModal = () => {
    setShowAddNewModal(true);
  };

  const handleCloseModal = () => {
    setShowAddNewModal(false);
  };
  // Add new modal END

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
        <AddNewModal modalState={showAddNewModal} closeModal={handleCloseModal} />
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} dataSource={data} scroll={{ y: 470 }} onChange={handleChange} />
    </>
  );
};

export default DataTable;