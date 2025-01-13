const { getURL, makeRequest } = require('../configCJS/http.js');

class Menu {

    async findById(id) {
        try {
            const response = await makeRequest(getURL(`menu/${id}`), 'GET');
            return response;
        } catch (error) {
            console.error('Erro ao receber o conteúdo:', error);
        }
    }
    async  getMenuDescription(id) {
        try {
            const descricaoMenu = await this.findById(id);
            return descricaoMenu ? descricaoMenu.descricao : "Menu não encontrado";
        } catch (error) {
            console.error('Erro ao buscar a descrição do menu:', error);
            return "Erro ao carregar menu.";
        }
    }
}

module.exports = { Menu };
