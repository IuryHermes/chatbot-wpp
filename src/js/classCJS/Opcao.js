const { getURL, makeRequest } = require('../configCJS/http.js');

class Opcao {

    async findById(id) {
        try {
            const response = await makeRequest(getURL(`opcao/${id}`), 'GET');
            return response;
        } catch (error) {
            console.error('Erro ao receber o conteúdo:', error);
        }
    }

    async findByMenuId(menuId) {
        try {
            const response = await makeRequest(getURL(`opcao/?menuId=${menuId}`), 'GET');
            return response;
        } catch (error) {
            console.error('Erro ao receber o conteúdo:', error);
        }
    }

    async  getOpcaoDescription(menuId) {
        try {
            const descricaoOpcao = await this.findByMenuId(menuId);
            let opcoesText = 'Opções disponíveis:\n';
            descricaoOpcao.forEach(opcao => {
                opcoesText += `${opcao.id} ${opcao.descricao}\n`;
            });
            return opcoesText;
        } catch (error) {
            console.error('Erro ao buscar as opções do menu:', error);
            return 'Erro ao carregar opções.';
        }
    }

}

module.exports = { Opcao };
