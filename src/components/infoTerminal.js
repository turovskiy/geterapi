import React, { useState } from 'react';
import axios from 'axios';


function Info() {
	const [serial, setSerial] = useState('');
	const [terminalID, setTerminalID] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

        const headers = {
           
        'Access-Control-Allow-Origin': 'same-origin',
    'Authorization': 'Basic Y2hhdC1CMHQ6NWVIaFY5VDIzYw==', 
    'Content-Type': 'application/json'
  }
	
        const data = JSON.stringify({
            "modelName": "InfoTerminal",
            "calledMethod": "allSection",
            "serial": serial,
            "terminalID": terminalID
          });
// https://cors-anywhere.herokuapp.com/services.ua.printecgroup.com/tobo/IMS/api.nsf/MainAPIHelper
// https://services.ua.printecgroup.com/tobo/IMS/api.nsf/MainAPIHelper
		axios
			.post(
				'https://services.ua.printecgroup.com/tobo/IMS/api.nsf/MainAPIHelper',
				data, {
                    headers: headers
                  }
			)
			.then((response) => {
				console.log(response);
			});
	};

	return (
		<>
					<label>Cерійний номер</label>
					<input
						placeholder="Введіть серійний номер" 
                        className="relative w-full px-3 py-3 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        onChange={(e) => setSerial(e.target.value)}
					/>
				    <label>ID номер  терміналу</label>
					<input
						placeholder="Введіть ID  терміналу" 
                        class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"               
						onChange={(e) => setTerminalID(e.target.value)}
					/>
			

				<button onClick={handleSubmit}
                        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none"
                        type="button">
					Submit
				</button>
		</>
	);
}

export default Info;
