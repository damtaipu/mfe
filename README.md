## Micro Frontend com Module Federation

Este repositório traz um exemplo funcional de Microfrontend. Disponibilizando dois projetos isolados criados com Angular Framework (login-wks / root-wks) que se comunicam utilizando ModuleFederation. 

**Projeto root**:
root-wks

**Projeto remoto**:
login-wks


##### COMANDO PARA CRIAR O MFE EM ANGULAR

1º GERA O WORKSPACE VAZIO para o projeto root ou remoto:

`ng new name-workspace --create-application false`

2º GERAR UMA NOVA APLICAÇÃO

`ng generate application name-app`

3º INSTALAR O MODULE FEDERATION

`npm install @angular-architects/module-federation`

4º CONFIGURAR O MODULE FEDERATION NA APLICAÇÃO

`ng add @angular-architects/module-federation --project name-app --port 8000`


