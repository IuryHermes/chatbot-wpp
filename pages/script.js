
import {QrCode} from './js/class/QrCode.js';
import { Menu } from './js/class/Menu.js';
import { Resposta } from './js/class/Resposta.js';
import { Opcao } from './js/class/Opcao.js';

document.addEventListener('DOMContentLoaded', async () => {

    const qrCode = new QrCode();
    const menu = new Menu();
    const resposta = new Resposta();
    const opcao = new Opcao();
    const qrCodeDiv = document.getElementById('qrCode');

    document.getElementById('geraQrCode').addEventListener('click', function() {
        qrCode.findById().then((response) => {
            qrCodeDiv.innerHTML = `<img src="${response.descricao}" alt="QR Code">`;
        });
    });
    const menuData = await resposta.findByOpcaoId(1);
    console.log(menuData);

});