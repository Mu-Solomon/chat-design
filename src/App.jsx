import './App.css'

export default function App() {
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
        <p className='text-white text-sm pb-8 ml-2'>Always online.</p>
      </section>

      <section id='conversation' className='max-h-96 overflow-y-auto'>




        <div className='flex justify-end my-4 mr-2'><span className='user-msg bg-gradient-to-br from-myCustomBlue  to-myCustomCyan text-white  p-4 rounded-3xl text-sm  max-w-xs'>Hello, please help me with my and then what happens!</span>
        </div>
        <div className='flex justify-start ml-4'>
          <span className='bot-reply text-left p-2 rounded-3xl text-sm  max-w-xs border border-[#00b6ff]'>Hi, how can I assist you today?</span>

        </div>

        <div className='flex justify-end my-4 mr-2'><span className='user-msg bg-gradient-to-br from-myCustomBlue  to-myCustomCyan text-white  p-4 rounded-3xl text-sm  max-w-xs'> Do you know the experience of having fun!</span>
        </div>

        <div className='flex justify-start ml-4 my-4'>
          <span className='bot-reply text-left p-2 rounded-3xl text-sm  max-w-xs border border-[#00b6ff]'> You can also combine the border utility classes with other Tailwind CSS classes to further customize the appearance of your elements. For instance, to add margin and padding to the element, you would use the following code: </span>

        </div>
        <div className='flex justify-end my-4 mr-2'><span className='user-msg bg-gradient-to-br from-myCustomBlue  to-myCustomCyan text-white  p-4 rounded-3xl text-sm  max-w-xs'> Have you ever been in love!</span>
        </div>

        <div className='flex justify-start ml-4 my-4'>
          <span className='bot-reply text-left p-2 rounded-3xl text-sm  max-w-xs border border-[#00b6ff]'> I can't open or access external links, including the one you provided. However, if you have specific questions or if there's a particular topic you're interested in, feel free to ask, and I'll do my best to help! If you have a summary or specific points from the article that you'd like more information on or discussed, feel free to share those as well.</span>

        </div>






      </section>
      {/* <hr className='mb-4' /> */}
      <section id='input-message' className='flex justify-center mt-auto border-t'>
        <textarea type='text' placeholder='Enter your message here' className='mx-2 outline-none flex-initial resize-none  w-10/12 text-sm' />
        <button className='p-4 rounded-full bg-gradient-to-br from-myCustomBlue to-myCustomCyan text-white ml-2 mr-2 w-12 h-12'>
          <img src="https://i.postimg.cc/qM3RCkjw/send-message.png" alt='Send' className='w-4 h-4' />
        </button>
      </section>
    </div>

  )
}
