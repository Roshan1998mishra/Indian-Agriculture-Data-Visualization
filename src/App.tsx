import { MantineProvider } from '@mantine/core';
import TableComponent from './Components/TableComponent';
import BarChart from './Components/BarChart';

const App = () => {
  return (
    <MantineProvider>
      <div style={{ padding: '20px' }}>
        <h1>Indian Agriculture Data Visualization</h1>
        <TableComponent />
        <BarChart />
      </div>
    </MantineProvider>
  );
};

export default App;
