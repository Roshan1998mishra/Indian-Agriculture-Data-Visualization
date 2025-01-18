import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import agricultureData from '../data/agriculture-data.json';

const BarChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const cropYields: { [crop: string]: number[] } = {};

    
    Object.entries(agricultureData).forEach(([year, crops]) => {
      Object.entries(crops).forEach(([crop, value]) => {

        const yieldValue = isNaN(value) ? 0 : value || 0;

        if (!cropYields[crop]) cropYields[crop] = [];
        cropYields[crop].push(yieldValue);
      });
    });

    
    const averageYields = Object.entries(cropYields).map(([crop, values]) => ({
      crop,
      average: values.reduce((a, b) => a + b, 0) / values.length,
    }));

    const chart = echarts.init(chartRef.current);

    chart.setOption({
      xAxis: {
        type: 'category',
        data: averageYields.map((item) => item.crop),
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: averageYields.map((item) => item.average),
          type: 'bar',
        },
      ],
    });

    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: 400 }} />;
};

export default BarChart;
