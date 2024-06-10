
function Form() {
  return (
    <div>
      <div className="bg-Apropo flex justify-center w-full h-auto mt-52 rounded-t-full">
        <form action="" className="flex flex-col justify-center gap-24 mt-64 rounded-full">
          <input
            type="text"
            name="text"
            placeholder="Nom du centre"
            className="h-14 w-96 rounded-xl pl-4"
          />
          <input type="Text" name="text" placeholder="Ville"  className="h-14 w-96 rounded-xl pl-4"/>
          <input type="text" name="text" placeholder="Fonction" className="h-14 w-96 rounded-xl pl-4" />
          <textarea  name="text" placeholder="Pourquoi-nous rejoindre?"  className="h-40 w-96 rounded-lg pl-4"/>
          <input
            type="url"
            name="url"
            placeholder="Ajouter l’URL des photos du centre"
            className="h-10 w-96 rounded-xl pl-4"
          />
          <button className="w-40 h-12 bg-[#004AAD] rounded-xl text-white font-semibold ml-28 mb-16">Je valide</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
