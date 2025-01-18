// import React from 'react';
import { Table } from '@mantine/core';
import agricultureData from '../data/agriculture-data.json';

const TableComponent = () => {
  const tableData = Object.entries(agricultureData).map(([year, crops]) => {
    const cropsArray = Object.entries(crops).map(([crop, value]) => ({
      crop,
      value: value || 0, // Missing values ko 0 treat karein
    }));

    const maxCrop = cropsArray.reduce((a, b) => (a.value > b.value ? a : b));
    const minCrop = cropsArray.reduce((a, b) => (a.value < b.value ? a : b));

    return { year, maxCrop: maxCrop.crop, minCrop: minCrop.crop };
  });

  return (
    <Table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Maximum Production Crop</th>
          <th>Minimum Production Crop</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(({ year, maxCrop, minCrop }) => (
          <tr key={year}>
            <td>{year}</td>
            <td>{maxCrop}</td>
            <td>{minCrop}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
