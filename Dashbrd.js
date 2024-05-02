import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tdlist from './Tdlist';

const Dashbrd = () => {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://127.0.0.1:8000/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setTodoItems(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <Tdlist todoItems={todoItems} />
    </div>
  );
};

export default Dashbrd;
