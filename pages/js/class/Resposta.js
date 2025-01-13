import { getURL, makeRequest } from '../config/http.js';

export class Resposta {
    menuId;
    opcaoId;
    descricao;

    async create() {
        const data = {
            menuId: this.menuId,
            opcaoId: this.opcaoId,
            descricao: this.descricao
        }
        return await makeRequest(getURL('resposta'), 'POST', data);
    }

    async findById(id) {
        try {
            const response = await makeRequest(getURL(`resposta/${id}`), 'GET');
            return response;
        } catch (error) {
            console.error('Erro ao receber o conteúdo:', error);
        }
    }

    async findByMenuId(menuId) {
        try {
            const response = await makeRequest(getURL(`resposta/?menuId=${menuId}`), 'GET');
            return response;
        } catch (error) {
            console.error('Erro ao receber o conteúdo:', error);
        }
    }

    async findByOpcaoId(opcaoId) {
        try {
            const response = await makeRequest(getURL(`resposta/?opcaoId=${opcaoId}`), 'GET');
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
            const response = await makeRequest(getURL(`resposta/${id}`), 'PUT', data);
            return response;
        } catch (error) {
            console.error('Erro ao atualizar o conteúdo:', error);
        }
    }

    async deleteById(id) {
        try {
            const response = await makeRequest(getURL(`resposta/${id}`), 'DELETE');
            return response;
        } catch (error) {
            console.error('Erro ao deletar o conteúdo:', error);
        }
    }
}
