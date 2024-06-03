import React from "react";

function Formprof() {
  
  return (
    <div >
         
      <form className="flex flex-row" action="#">
       
      <div className="ml-32 space-y-16">
            <label htmlFor="preference" className="block">Vous êtes ?</label>
            <label htmlFor="nom" className="block">Nom</label>
            <label htmlFor="prenom" className="block">Prénom</label>
            <label htmlFor="pays" className="block">Pays</label>
            <label htmlFor="ville" className="block">Ville</label>
            <label htmlFor="telephone" className="block">Numéro de téléphone</label>
            <label htmlFor="email" className="block">Email</label>
            <label htmlFor="preference2" className="block">Vous préférez faire ?</label>
            <label htmlFor="experience" className="block">Années d’expérience</label>
            <label htmlFor="cv" className="block">Ajouter votre CV</label>
          </div>
          <div className="flex flex-col space-y-12 ml-56">
            <div className="flex space-x-28">
              <div>
                <input
                  type="radio"
                  id="Professeur"
                  name="preference"
                  value="Professeur"
                  className="mr-2"
               
                />
                <label htmlFor="Professeur">Professeur</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Fonctionnaire"
                  name="preference"
                  value="Fonctionnaire"
                  className="mr-2"
                 
                />
                <label htmlFor="Fonctionnaire">Fonctionnaire</label>
              </div>
            </div>
            <div className="">
              <input
                id="nom"
                className="w-96 p-2 rounded"
                type="text"
                placeholder="Nom"
              />
            </div>
            <div className="">
              <input
                id="prenom"
                className="w-96 p-2 rounded"
                type="text"
                placeholder="Prénom"
              />
            </div>
            <div className="">
              <input
                id="pays"
                className="w-96 p-2 rounded"
                type="text"
                placeholder="Pays"
              />
            </div>
            <div className="">
              <input
                id="ville"
                className="w-96 p-2 rounded"
                type="text"
                placeholder="Ville"
              />
            </div>
            <div className="">
              <input
                id="telephone"
                className="w-96 p-2 rounded"
                type="text"
                placeholder="Numéro de téléphone"
              />
            </div>
            <div className="">
              <input
                id="email"
                className="w-96 p-2 rounded"
                type="text"
                placeholder="Email"
              />
            </div>

            <div className="flex space-x-32">
              <div>
                <input
                  type="radio"
                  id="online"
                  name="preference2"
                  value="online"
                  className="mr-2"
                />
                <label htmlFor="online">En ligne</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="offline"
                  name="preference2"
                  value="offline"
                  className="mr-2"
                />
                <label htmlFor="offline">Présentiel</label>
              </div>
            </div>
            <div className="">
              <select id="experience" className="w-96 p-2 rounded">
                <option>moins de 5 ans</option>
                <option>Plus de 5 ans</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="w-96 p-2 rounded bg-white">
              <input id="cv" type="file" className="w-96" />
            </div>
            <button className="w-96 p-2 rounded bg-blue-500 text-white">
              Next
            </button>
          </div>
       
      </form>
    </div>
  );
}

export default Formprof;
