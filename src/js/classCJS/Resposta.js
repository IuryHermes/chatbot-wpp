const { getURL, makeRequest } = require('../configCJS/http.js');

class Resposta {

    async findById(id) {
        try {
            const response = await makeRequest(getURL(`resposta/${id}`), 'GET');
            return response;
        } catch (error) {
            console.error('Erro ao receber o conteúdo:', error);
        }
    }

    async findByOpcaoId(opcaoId) {
        try {
            const response = await makeRequest(getURL(`resposta/?opcao=${opcaoId}`), 'GET');
            return response;
        } catch (error) {
            console.error('Erro ao receber o conteúdo:', error);
        }
    }

    async findByMenuId(menuId) {
        try {
            const response = await makeRequest(getURL(`resposta/?menu=${menuId}`), 'GET');
            return response;
        } catch (error) {
            console.error('Erro ao receber o conteúdo:', error);
        }
    }

    async  getRespostaDescription(id) {
        try {
            const descricaoResposta = await this.findById(id);
            return descricaoResposta ? descricaoResposta.descricao : "Resposta não encontrado";
        } catch (error) {
            console.error('Erro ao buscar a descrição do resposta:', error);
            return "Erro ao carregar resposta.";
        }
    }
}

module.exports = { Resposta };
