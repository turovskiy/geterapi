import React, { useState } from 'react';

function Inpt() {
   const [value, setValue] = useState('');

   return (

 <div class="mb-3 pt-0">
  <input type="text" 
         placeholder="Введіть серійний номер" 
         class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
         value={value} 
         onChange={event => setValue(event.target.value)} 
      />
      <p>
         input{value}
      </p>
   </div>
   
);

}

export default Inpt;
