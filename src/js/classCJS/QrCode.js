const qrcode = require('qrcode');
const { getURL, makeRequest } = require('../configCJS/http.js');

class QrCode {
    constructor() {
        this.id = 1;
        this.descricao = '';
    }

    // Função para gerar o QR Code
    async generateQRCode(data) {
        try {
            // Gera o QR Code como uma string base64
            const qrCodeData = await qrcode.toDataURL(data); // ou qrcode.toString(data)
            this.descricao = qrCodeData;  // Atribui o QR code gerado à descrição
        } catch (error) {
            console.error('Erro ao gerar o QR Code:', error);
        }
    }

    async updateById() {
        try {
            const data = {
                id: this.id,
                descricao: this.descricao,
            };

            const response = await makeRequest(getURL(`qrcode/${this.id}`), 'PUT', data);
            return response;
        } catch (error) {
            console.error('Erro ao atualizar o conteúdo:', error);
        }
    }
}

module.exports = { QrCode };
