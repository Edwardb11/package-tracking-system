import React, { useState } from "react";
import UserFinalForms from "./UserFinalForms";

function PackageForms() {
  const [viewForm, setViewForm] = useState(false);
  const handleAdd = () => {
    setViewForm(!viewForm);
  };
  return (
    <>
      <div className="max-w-2xl mx-auto bg-white p-16">
        <form>
          <div className="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
              <label
                htmlFor="nombre"
                className="block mb-2 text-sm font-semibold px-1 text-gray-900 dark:text-gray-900"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ej:Computadora"
                required
              />
            </div>
            <div>
              <label
                htmlFor="tipo"
                className="block mb-2 text-sm font-semibold px-1 text-gray-900 dark:text-gray-900"
              >
                Tipo de paquete
              </label>
              <select
                id="tipo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option disabled>Selecione</option>
                <option value="1" selected>
                  Alimentación
                </option>
                <option value="2">Hogar y electrodoméstico</option>
                <option value="3">Bebidas</option>
                <option value="4">Cuidado Personal y Belleza</option>
                <option value="5">Limpieza</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="cantidad"
                className="block mb-2 text-sm font-semibold px-1 text-gray-900 dark:text-gray-900"
              >
                Cantidad (LB)
              </label>
              <input
                type="text"
                id="cantidad"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ej:10"
                required
              />
            </div>
            <div>
              <label
                htmlFor="peso"
                className="block mb-2 text-sm font-semibold px-1 text-gray-900 dark:text-gray-900"
              >
                Peso (LB)
              </label>
              <input
                type="number"
                name="peso"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ej:10"
                required
              />
            </div>
          </div>

          <div>
            <p className="text-sm text-justify mb-2 mt-6">
              Registra un usuario final.
            </p>

            <button
              type="button"
              onClick={handleAdd}
              className="text-white mb-6 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              {!viewForm ? "Agregar usuario" : "Cerrar"}
            </button>
          </div>
          {viewForm ? (
<UserFinalForms/>
          ) : (
            <div>
              <p className="text-sm text-justify mb-2">
                ¿Habías agregado a alguien anteriormente? Seleccionalo{" "}
              </p>
              <label
                htmlFor="user_final"
                className="block mb-2 text-sm font-semibold px-1 text-gray-900 dark:text-gray-900"
              >
                Usuario final
              </label>
              <select
                id="tipo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option disabled>Selecione</option>
                <option value="1" selected>
                  No tienes personas agregadas
                </option>
                <option value="2">Una persona</option>
              </select>
            </div>
          )}
          <button
            type="submit"
            className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Agregar paquete
          </button>
        </form>
      </div>
    </>
  );
}

export default PackageForms;
