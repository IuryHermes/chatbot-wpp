const { QrCode } = require('./js/classCJS/QrCode.js');
const { Menu } = require('./js/classCJS/Menu.js');
const { Opcao } = require('./js/classCJS/Opcao.js');
const { Resposta } = require('./js/classCJS/Resposta.js');
const { Client, Buttons } = require('whatsapp-web.js');

const qrCode = new QrCode();
const client = new Client();
const menu = new Menu();
const opcao = new Opcao();
const resposta = new Resposta();
const delay = ms => new Promise(res => setTimeout(res, ms));


client.on('qr', async (qr) => {
    try {
        await qrCode.generateQRCode(qr);
        const updatedData = await qrCode.updateById();

        if (updatedData) {
            console.log('QR code atualizado com sucesso!');
        } else {
            console.log('Erro ao atualizar o QR code.');
        }
    } catch (error) {
        console.error('Erro durante o processo de QR code:', error);
    }
});

client.initialize();

client.on('message', async msg => {

    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {

        // try {
        //     let menuId = 1;
            
        //     const menuText = await menu.getMenuDescription(menuId);
        //     let opcoesText = await opcao.getOpcaoDescription(menuId);
        //     let descricaoOpcao = await opcao.findByMenuId(menuId);

        //     var ultimaDescricao = descricaoOpcao.length + 1;
        //     descricaoOpcao[ultimaDescricao] = { id : ultimaDescricao, descricao : "Finalizar Atendimento 🚪\n"};
        //     opcoesText += `${ultimaDescricao} Finalizar Atendimento 🚪\n`;

        //     if (descricaoOpcao && descricaoOpcao.length > 0) {
        //         // Cria os botões com base nas opções disponíveis
        //         const buttons = descricaoOpcao.map(opcao => ({
        //             id: opcao.id.toString(), // opcaoId como identificador do botão
        //             body: opcao.id.toString() // Número da opção como texto do botão
        //         }));

        //         const body = `${menuText}\nEscolha uma opção abaixo pelo número correspondente:\n ${opcoesText}`;
        //         const title = 'Menu Principal';
        //         const footer = 'Clique em um número para continuar';

        //         const buttonMessage = new Buttons(body, buttons, title, footer);
        //     }

        //     const chat = await msg.getChat();

        //     await delay(3000); //delay de 3 segundos
        //     await chat.sendStateTyping(); // Simulando Digitação
        //     await delay(3000); //Delay de 3 segundos

        //     const contact = await msg.getContact(); //Pegando o contato
        //     const name = contact.pushname; //Pegando o nome do contato

        //     // Enviando a mensagem com os dados extraídos

        //     await client.sendMessage(msg.from, buttonMessage); //Enviando a mensagem
        //     await delay(3000); //delay de 3 segundos
        //     await chat.sendStateTyping(); // Simulando Digitação

        // } 
        try {
            const menuId = 1;

            // Obtém o texto do menu e as opções disponíveis
            const menuText = await menu.getMenuDescription(menuId);
            const descricaoOpcoes = await opcao.findByMenuId(menuId);

            // Adiciona a opção "Finalizar Atendimento"
            descricaoOpcoes.push({ id: descricaoOpcoes.length + 1, descricao: 'Finalizar Atendimento 🚪' });

            if (descricaoOpcoes && descricaoOpcoes.length > 0) {
                // Cria os botões baseados nas opções
                const buttons = descricaoOpcoes.map(opcao => ({
                    id: opcao.id.toString(),
                    body: opcao.descricao
                }));

                // Cria a mensagem de botões
                const body = `${menuText}\nEscolha uma opção abaixo clicando no botão correspondente.`;
                const title = 'Menu Principal';
                const footer = 'Clique em um botão para continuar';
                const buttonMessage = new Buttons(body, buttons, title, footer);

                const chat = await msg.getChat();

                // Simula digitação antes de enviar a mensagem
                await delay(3000);
                await chat.sendStateTyping();
                await delay(3000);

                // Envia a mensagem com os botões
                await client.sendMessage(msg.from, buttonMessage);
                await delay(3000);
                await chat.sendStateTyping();
                await delay(3000);
            } else {
                // Caso não existam opções disponíveis
                await client.sendMessage(msg.from, 'Nenhuma opção disponível no momento.');
            }
        } catch (error) {
            console.error('Erro ao processar a mensagem:', error);
        }
    }

});
