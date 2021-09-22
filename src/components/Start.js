

function Start() {

    return(
        <section>
        <h1 className="p-6 mx-auto font-extrabold">Вітаю, Я - Printec Chatbot.</h1>
        <p className="">Для індентифікації відправте мені, будь ласка, серійний номер вашого терміналу.</p>
        <p>Нижче можно завантажити інструкцію користування чатботом.👇</p>
        <div className="flex p-2 border rounded-full">
                       <span class="flex-row">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                               <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd"></path>
                             </svg>
                           </span>
                       <a href="https://www.printecgroup.com/" class="text-black font-bold"><span>Інструкція.pdf</span></a>
         </div>
      </section>
    )
}
export default Start;