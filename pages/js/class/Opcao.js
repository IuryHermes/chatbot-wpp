import { getURL, makeRequest } from '../config/http.js';

export class Opcao {
    menuId;
    descricao;

    async create() {
        const data = {
            menuId: this.menuId,
            descricao: this.descricao
        }
        return await makeRequest(getURL('opcao'), 'POST', data);
    }

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

    async updateById(id) {
        const data = {
            menuId: this.menuId,
            descricao: this.descricao
        }
        try {
            const response = await makeRequest(getURL(`opcao/${id}`), 'PUT', data);
            return response;
        } catch (error) {
            console.error('Erro ao atualizar o conteúdo:', error);
        }
    }

    async deleteById(id) {
        try {
            const response = await makeRequest(getURL(`opcao/${id}`), 'DELETE');
            return response;
        } catch (error) {
            console.error('Erro ao deletar o conteúdo:', error);
        }
    }
}
