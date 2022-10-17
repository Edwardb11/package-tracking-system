import React from "react";
import ButtonsModal from "./ButtonsModal";

const EditRol = ({ id, setData, showModal, setShowModals }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" my-6 mx-auto w-2/4  ">
              {/*content*/}
              <div className="border-0 rounded-lg w-full   shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">ID: {id}</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div>
                    <h3 className="text-xl font-base italic">
                      Consideraciones:
                    </h3>
                    <div className="px-6 ">
                      <ol className="list-[number] ">
                        <li>No puedes editar información basica.</li>
                        <li>
                          Esta vista es especializada para ver y editar roles.
                        </li>
                      </ol>
                    </div>
                  </div>
                  <span className="font-bold pb-10">
                    NOTA: Debes darle a guardar para registrar los cambios!
                  </span>
                  <div className="pt-5 flex flex-wrap  ">
                    <table className="items-center bg-transparent w-1/2 border-collapse ">
                      <thead>
                        <tr>
                          <th className="px-6 align-middle border border-solid py-3  text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Roles
                          </th>
                          <th className="px-6 align-middle border border-solid border-blueGray-100 py-3  text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Accion
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className=" border-b text-sm text-gray-600">
                          <td className=" px-6 text-md   p-2 border-r whitespace-nowrap p-4">
                            Trabajador
                          </td>
                          <td className=" px-6 text-md   p-2 border-r whitespace-nowrap p-4">
                            <button
                              className={`font-bold uppercase  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
                           bg-red-500 text-white active:bg-red-900 text-sm 
                      }
                      `}>
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <ButtonsModal setShowModals={setShowModals} />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default EditRol;