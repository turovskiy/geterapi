import React, { useState } from 'react';

function Inpt2() {
   const [value2, setValue2] = useState('');

   return (
   <div class="mb-3 pt-0">
   <input value={value2} 
          onChange={event => setValue2(event.target.value)} 
          type="text" 
         placeholder="Введіть ID  терміналу" 
         class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
         
          />
   <p>terminalID: {value2}</p>
   </div>
   
   );

}

export default Inpt2;