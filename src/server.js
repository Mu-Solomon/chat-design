import axios from 'axios';
// const axios = require('axios');

const apiKey = 'AIzaSyBworzmTW6hCKjvP79W29hSsJUMBph0L94';
const apiEndpoint = 'https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=' + apiKey;

// Replace the following message with your actual request payload

const message = {
  prompt: {
    text: 'Give me 6 lines of saying good morning in a special way',
  },
};

// Make a POST request to the Google Cloud AI Language API
axios.post(apiEndpoint, message, {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => {
    // Access the response data as needed
    console.log('AI Response:', response.data);
    // You can perform further actions with the AI response here
  })
  .catch(error => {
    // Handle errors
    console.error('Error making API request:', error.message);
  });
