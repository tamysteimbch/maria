import React, { Component } from 'react';
 
class Menu extends Component {
  render() {
    return (
        <div className="inline-flex flex-col space-y-40 items-start justify-start pl-12 pr-16 pt-20 pb-14 bg-gray-600 bg-opacity-50 rounded-3xl" style="width: 681px; height: 1918px;">
            <div className="flex flex-col space-y-6 items-center justify-end" style="width: 449px; height: 181px;">
                <p className="text-8xl font-extrabold text-white">Maria</p>
                <p className="text-3xl text-gray-400">Bem-vinda, professora Flávia!</p>
            </div>
            <div className="flex space-x-5 items-center justify-end py-9 px-16 bg-blue-900 shadow border rounded-3xl border-blue-600" style="width: 521px; height: 120px;">
                <img className="w-11 h-9 rounded-lg" src="https://via.placeholder.com/42.5261116027832x38"/>
                <p className="text-4xl font-extrabold text-white">Criar nova prova</p>
            </div>
            <div className="inline-flex space-x-12 items-center justify-end w-80 h-12">
                <div className="w-10 h-11 bg-white rounded-lg"/>
                <p className="text-4xl font-extrabold text-white">Minha conta</p>
            </div>
            <div className="inline-flex space-x-12 items-center justify-end w-80 h-12">
                <div className="w-10 h-5/6 bg-white rounded-lg"/>
                <p className="text-4xl font-extrabold text-white">Turmas</p>
                <div className="w-5 h-1/5 bg-white rounded-full"/>
            </div>
            <div className="flex flex-col space-y-16 items-center justify-end" style="width: 481px; height: 413px;">
                <p className="text-3xl text-gray-300">Outros</p>
                <div className="inline-flex space-x-6 items-center justify-end pr-7" style="width: 478px; height: 70px;">
                    <div className="w-10 h-10 bg-white rounded-lg"/>
                    <p className="text-4xl font-extrabold text-white">Mensagens</p>
                    <div className="w-20 h-full bg-gray-800 rounded-full"/>
                    <p className="text-4xl font-extrabold text-white">4</p>
                </div>
                <div className="inline-flex space-x-14 items-center justify-end" style="width: 479px; height: 48px;">
                    <div className="w-12 h-5/6 bg-white rounded-lg"/>
                    <p className="text-4xl font-extrabold text-white">Banco de questões</p>
                </div>
                <div className="inline-flex space-x-4 items-center justify-end pr-7" style="width: 473px; height: 70px;">
                    <div className="w-9 h-1/2 bg-white rounded-lg"/>
                    <p className="text-4xl font-extrabold text-white">Notificações</p>
                    <div className="w-20 h-full bg-gray-800 rounded-full"/>
                    <p className="text-4xl font-extrabold text-white">3</p>
                </div>
            </div>
            <div className="inline-flex space-x-9 items-end justify-end pr-5" style="width: 540px; height: 147px;">
                <img className="w-40 h-full rounded-full" src="https://via.placeholder.com/161x147"/>
                <p className="text-5xl font-extrabold text-white">Flávia</p>
                <div className="w-20 h-1/3 bg-black rounded-full"/>
                <p className="w-9 h-11 text-4xl font-extrabold text-white">...</p>
            </div>
        </div>
    );
  }
}
 
export default Menu;