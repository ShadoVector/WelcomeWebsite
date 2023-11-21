import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = ({ userEmail }) => {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [apiCalled, setApiCalled] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userEmail && !apiCalled) {
          const response = await axios.post('http://127.0.0.1:8000/collect-email/', {
            email: userEmail,
          });

          // Check if the response status is 200 (OK)
          if (response.status === 200) {
            const responseData = response.data;

            // Check if the expected 'message' property exists in the response data
            if (responseData && responseData.message) {
              setMessage(responseData.message);
              setApiCalled(true);
            } else {
              setError('Invalid data structure received from the server');
            }
          } else {
            setError('Unexpected response from the server');
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching data.');
      }
    };

    fetchData();
  }, [userEmail, apiCalled]);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : message ? (
        <p>{message}</p>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default MyComponent;
