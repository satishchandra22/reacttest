
import './App.css';

function App() {
  return (
    <div className="App">
       <div id='s1'></div>
       <h2 id='s2'>WHO WE ARE</h2>
       <div id='para'>
       <p>We offer customized and cost-effective solutions to meet your unique needs through delivering superior quality services and customer satisfaction. <br/>

Our team of qualified and experienced personal research on the process to find ways and means of value-addition to the client. Our management team brings together considerable talent and experience in a variety of fields. Extensive exposure to the workings of international markets helps us gain clarity into the global perspectives of our customers.<br/> 

 We believe in quality outputs, meeting deadlines, and high customer satisfaction by implementing our policies and unmatched management style in a harmonious work environment.</p>
       </div>
       <div id='s3'>
        <div id='s3c1'>Lets Get in Toch</div>
        <div id='s3c2'>
          <form>
            <label htmlFor='name'>Name</label><br/>
            <input type='text' id='name' required placeholder='Enter your name' className='input'/><br/><br/>
            <label htmlFor='mail'>Email</label><br/>
            <input type='text' id='mail' required placeholder='Enter your email' className='input'/><br/><br/>
            <label htmlFor='mob'>Mobile Number</label><br/>
            <input type='number' id='mob' required placeholder='Enter your mobile number' className='input'/><br/><br/>
            <button id='sub'>Submit</button>
          </form>
        </div>
       </div>
       <div id='foot'></div>
    </div>
  );
}

export default App;
