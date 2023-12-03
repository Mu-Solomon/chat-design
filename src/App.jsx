import './App.css'
import { useState } from 'react';
import axios from 'axios';

export default function App() {

  const apiKey = 'AIzaSyBworzmTW6hCKjvP79W29hSsJUMBph0L94';


  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  // const [aiResponse, setAiResponse] = useState(null);
  const handleMessage = (e) => {
    setMessage(e.target.value);
  }

  const handleGenerateText = () => {
    setMessage('');
    const apiEndpoint = `https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=${apiKey}`;

    // Prepare the message object with the user-entered prompt
    const userMessage = {
      prompt: {
        text: message,
      },
    };

    // setConversation([...conversation, { type: 'user', text: userMessage }]);

    setConversation(prevConversation => [...prevConversation, { type: 'user', text: userMessage }]);


    axios.post(apiEndpoint, userMessage, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        const regex = /(?:solomon|muyonjo)/i;

        // Check if the message includes the specified words
        if (regex.test(userMessage.prompt.text)) {
          // Respond with a specific message
          setConversation(prevConversation => [...prevConversation, { type: 'ai', text: { prompt: { text: "Yes, he is a webmaster and fullstack developer" } } }]);
        } else { // Update state with the AI response
          const aiResponse = response.data.candidates[0].output;
          // setAiResponse(response.data.candidates[0].output);
          // setConversation([...conversation, { type: 'ai', text: { prompt: { text: aiResponse } } }]);

          setConversation(prevConversation => [...prevConversation, { type: 'ai', text: { prompt: { text: aiResponse } } }]);

        }

      })
      .catch(error => {
        // Handle errors
        console.error('Error making API request:', error.message);
      });
    conversation.map(item => console.log(item.text.prompt.text));

  }

  const sendMessage = () => {

  }

  const renderMessage = (text, type) => {
    if (type === 'ai') {
      const formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

      // Replace \n with newline character
      const finalText = formattedText.replace(/\\n/g, '<br>');
      return (
        <div dangerouslySetInnerHTML={{ __html: finalText }} />
      );
    }
  }

  return (
    <div className='max-w-sm mx-auto my-3 min-h-screen shadow-2xl rounded-lg flex flex-col'>
      <section id='header' className='bg-gradient-to-br from-myCustomBlue to-myCustomCyan py-6 rounded-t-lg'>
        <div className='flex justify-center items-center h-full'>
          <img src="https://i.postimg.cc/9fWfK65Y/chatbot.png" alt="Bot image" className='w-20' />
          <h2 className='p-4 text-white text-3xl'>Hi there! 🫵</h2>
        </div>
      </section>
      <section className='wave-container flex justify-start self-start w-full'>
        <span className='w-2 h-2 ml-5 mt-2 rounded-full bg-green-500'></span>
        <p className='text-white text-sm pb-8 ml-2'>Always online. Muyonjo Solomon</p>
      </section>

      <section id='conversation' className='max-h-96 overflow-y-auto'>


        <div className='flex justify-start ml-4'>
          <span className='bot-reply text-left p-2 rounded-3xl text-sm  max-w-xs border border-[#00b6ff]'>With God's grace, I proudly present this AI, a result of effort and faith. Developed by Muyonjo Solomon, acknowledging divine inspiration in every line of code.</span>

        </div>

        {conversation.map((item, index) => (
          <div key={index}>
            {item.type === 'user' ? (
              <div className='flex justify-end my-4 mr-2'>
                <span className='user-msg bg-gradient-to-br from-myCustomBlue to-myCustomCyan text-white p-4 rounded-3xl text-sm max-w-xs'>
                  {item.text.prompt.text}
                </span>
              </div>
            ) : (
              <div className='flex justify-start ml-4'>
                <span className='bot-reply text-left p-2 rounded-3xl text-sm max-w-xs border border-[#00b6ff]'>
                  {renderMessage(item.text.prompt.text, item.type)}
                </span>
              </div>
            )}
          </div>
        ))}





      </section>
      {/* <hr className='mb-4' /> */}
      <section id='input-message' className='flex justify-center mt-auto border-t'>
        <textarea type='text' placeholder='Enter your message here' value={message} className='mx-2 outline-none flex-initial resize-none  w-10/12 text-sm' onChange={handleMessage} />
        <button className='p-4 rounded-full bg-gradient-to-br from-myCustomBlue to-myCustomCyan text-white ml-2 mr-2 w-12 h-12' onClick={handleGenerateText}>
          <img src="https://i.postimg.cc/qM3RCkjw/send-message.png" alt='Send' className='w-4 h-4' />
        </button>
      </section>
    </div>

  )
}
