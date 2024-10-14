import React, { useState, useEffect } from 'react';
import './Tasks.css'; // Import the CSS file

const Tasks = () => {
  const [sheetData, setSheetData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS74sj2a6caFKBrh_RlceUAgAt6ofuUe7ifOI9UzJiGoUjcZvZOy71nIkpIArW0DqGzjTCQSifI7jFb/pub?gid=2036873794&single=true&output=csv';

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.text();
        const rows = data.split('\n').map(row => row.split(','));
        setSheetData(rows);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {sheetData[0]?.map((cell, index) => (
              <th key={index}>{cell}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sheetData.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='alert alert-danger mt-5'>
        <a href='https://docs.google.com/spreadsheets/d/1tHdI9I7e2bcUQki6RPW-p9dFlyyUhXi-D11Ea2vUcPw/edit?usp=sharing'>
        <h1>
        This is the sheet Link
        </h1>
        </a>
      </div>
    </div>
  );
};

export default Tasks;
