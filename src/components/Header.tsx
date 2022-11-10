import React, { Component } from 'react';
 
class Header extends Component {
  render() {
    return(
        <div className="relative" style="width: 2233px; height: 384px;">
            <div className="inline-flex flex-col space-y-14 items-start justify-end w-96 h-48 absolute left-0 top-0">
                <p className="w-full h-24 text-8xl font-extrabold text-white">Provas</p>
                <p className="text-4xl font-medium text-gray-300">50 provas criadas</p>
            </div>
            <div className="w-36 h-12 absolute" style="left: 4px; top: 249px;">
                <div className="flex items-center justify-center flex-1 h-full pl-6 pr-5 pt-1 pb-1.5 bg-blue-900 rounded-full">
                    <p className="text-3xl font-medium text-white">Todos</p>
                </div>
            </div>
            <div className="w-36 h-12 absolute" style="left: 182px; top: 249px;">
                <div className="flex items-center justify-center flex-1 h-full pl-7 pr-6 pt-1 pb-1.5 bg-gray-600 bg-opacity-50 rounded-full">
                    <p className="text-3xl font-medium text-white">Turma</p>
                </div>
            </div>
            <div className="w-44 h-12 absolute" style="left: 374px; top: 249px;">
                <div className="flex items-center justify-center flex-1 h-full px-3 pt-1 pb-1.5 bg-gray-600 bg-opacity-50 rounded-full">
                    <p className="text-3xl font-medium text-white">Conteúdo</p>
                </div>
            </div>
            <div className="w-44 h-12 absolute" style="left: 591px; top: 249px;">
                <div className="flex items-center justify-center flex-1 h-full px-8 pt-1 pb-1.5 bg-gray-600 bg-opacity-50 rounded-full">
                    <p className="text-3xl font-medium text-white">Período</p>
                </div>
            </div>
            <div className="absolute" style="width: 525px; height: 83px; left: 1644px; top: 22px;">
                <div className="flex space-x-4 items-center justify-end px-12 py-4 bg-blue-900 rounded-3xl" style="width: 525px; height: 83px;">
                    <div className="w-9 h-9 bg-white rounded-lg"/>
                    <p className="text-4xl font-bold text-white">Adicionar questões</p>
                </div>
            </div>
            <div className="inline-flex space-x-5 items-center justify-end absolute" style="width: 507px; height: 52px; left: 1726px; top: 247px;">
                <p className="text-4xl font-bold text-gray-300">Ordernar por:</p>
                <div className="flex space-x-10 items-end justify-end w-56 h-12 py-0.5 pl-12 pr-7 bg-gray-600 bg-opacity-50 rounded-full">
                    <p className="text-4xl font-semibold text-white">Data</p>
                    <div className="w-5 h-1/5 bg-white rounded-full"/>
                </div>
            </div>
            <div className="inline-flex space-x-4 items-center justify-end absolute" style="width: 428px; height: 48px; left: 1157px; top: 40px;">
                <div className="w-7 h-8 bg-white rounded-lg"/>
                <p className="text-4xl font-bold text-white">Conectar aplicativo</p>
            </div>
            <div className="absolute" style="width: 1697px; height: 32px; left: 18px; top: 352px;">
                <div className="flex items-center justify-start pl-6 pr-96 pt-4 pb-3 bg-gray-600 bg-opacity-50 rounded-full" style="width: 1697px; height: 32px;">
                    <div className="border-2 border-white" style="width: 771.01px; height: 1px;"/>
                </div>
            </div>
        </div>)
  }
}
 
export default Header;