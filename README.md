# BolaBranca14
App para aprendizado simulando a garagem de uma empresa de ônibus 

 - O desafio é criar o sistema backend simulando uma garagem de uma empresa de ônibus 

## Requisitos:
 - Desenvolver uma API RESTful que implemente as operações CRUD (Create, Read, Update, Delete).
 
 - A API deve ser integrada com um banco de dados 
  
 - A API deve ser desenvolvida usando uma dessas linguagens de programação Node.js.

## Escopo:
 - A API deve suportar as seguintes operações CRUD:

[POST] /onibus : Criar um ônibus, deve permitir que um usuário crie um novo onibus, fornecendo as informações básicas, como carroceria, marca, ano, placa, descrição, categoria.

[POST] /onibus/linha : Ônibus Linha deve premitir o usuário informar que o veículo está em alguma linha no momento, fornecendo o número do veículo, data e hora da saída e hora da possível chegada.

[GET] /onibus : Listar todos os ônibus sob propriedade da empresa, deve permitir que um usuário liste todos os veículos.

[GET] /onibus/{id} : Listar onibus, apenas um veículo específico, fornecendo o ID {número} mesmo.

[PUT] /onibus/{id} : Atualizar um ônibus, deve permitir que um usuário atualize as informações de um ônibus existente, fornecendo o ID {numero} do veículo e as informações a serem atualizadas.

[DELETE] /onibus/{id}: Excluir um veículo da tabela de ônibus, deve permitir que um usuário exclua um veículo existente, fornecendo o ID {número} do mesmo.

[GET] /onibus/disponiveis : Listar veículos disponíveis para a linha, essa operação deve retornar uma lista de todos os veículos que estão disponíveis para sair a linha.

[GET] /onibus/linha :Listar veículos que estão na rua, essa operação deve retornar uma lista de todos os veículos que estão na linha.
