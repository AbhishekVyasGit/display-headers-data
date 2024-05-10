import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [headerData, setHeaderData] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/submit', { phonenumber: phoneNumber });
      setHeaderData(response.data);  // headers received from the backend
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div>
      <h1>Phone Number Submission</h1>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      {headerData && (
        <div>
          <h2>Received Header Data</h2>
          <p>{JSON.stringify(headerData, null, 2)}</p>
        </div>
      )}
    </div>
  );
};

export default App;
