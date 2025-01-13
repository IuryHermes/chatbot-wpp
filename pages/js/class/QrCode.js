import { getURL, makeRequest } from '../config/http.js';

export class QrCode {

    id = 1;
    descricao;

    async findById(id = 1) {
        try {
            const response = await makeRequest(getURL(`qrcode/${id}`), 'GET');
            return response;
        } catch (error) {
            console.error('Erro ao buscar conteúdo:', error);
        }
    }
}
