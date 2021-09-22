import './index.css';
import Inpt from './components/Inpt';
import Inpt2 from './components/Inpt2';
import Start from './components/Start';
import Modal from './components/Modal';
import Info from './components/infoTerminal';
function App() {

  return (
  <div class="m-4 p-6 rounded-lg shadow-2xl justify-center max-w-4xl mx-auto bg-gray-100 h-scree">
 <Start />
     <Inpt/>
   <section>
    <Inpt2 /> 
  
   </section>

     <Modal />
     <Info />

  </div>
     )
  }
     export default App;
