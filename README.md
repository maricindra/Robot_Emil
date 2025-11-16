# Site:https://maricindra.github.io/Robot_Emil
---------------------------------------------------
# ENGLISH | Lading Page 3D Responsive
# The final Result of the Project:
<img width="1828" height="930" alt="image" src="https://github.com/user-attachments/assets/e318c3d4-c79d-4b4e-87ba-572f307db767" />
<img width="1616" height="918" alt="image" src="https://github.com/user-attachments/assets/38c4a4e6-30bd-4579-8052-9a67a47aac81" />


# In the begin of Project:
<img width="1751" height="889" alt="image" src="https://github.com/user-attachments/assets/20f23119-85c5-45d7-88e7-a4e403b869a3" />

<img width="1884" height="1076" alt="image" src="https://github.com/user-attachments/assets/cf613594-29c2-462b-8cd6-13cbdf70d952" />


Tools:
- Tailwind CSS	     - CSS Framework configured for responsive designs.
- React	             - Encapsulated structure for code reusability (Component-Based UI Library).
- JavaScript	       - Programming Language is responsible for handling all application logic, state, and conditional visibility for elements across different devices.
- AOS	               - Library that adds visual effects (animations) to page elements as the user scrolls (moves up and down the page).
- Spline	           - Tool for creating 3D objects.
- Boxicons	         - Library for importing vector icons into the project.
- Typed              - Library of write animation visual effect.
------------------------------------------
Terminal git bash commands:
First, make the path:
-
0.0 mkdir Robot_emil                                           ( Make the folder)  
0.1 CD Robot_emil                                             ( Into Robot_emil folder )
-
1. npm install                                               ( Install modules of node.js library )
2. npm create vite@latest ./                                ( Make the vite project in the last version )
3. npm install -D tailwindcss postcss autoprefixer         ( Install Tailwind and postcss settings for all types of browsers )
4. npx tailwindcss init -p                  ( initialize the tailwind structure )
5. npm install boxicons                     ( Install icons to the project )
6. npm install @splinetool/react-spline     ( Install 3d settings in your project)
7. npm install --save aos@next    or        yarn add aos@next
8. npm install typed.js           or        yarn add typed.js
9. npm run dev ( Turn on the Server for tests)
10. npm run deploy ( Turn on the server to production)
------------------------------------------------
Deploy settings to GitHub page, firstly, you need to include in your package.json:
"Homepage":"https://github.com/YourGitProfile/Name_of_your_repository.git"
"predeploy":"npm run build"
"deploy":"gh-pages -d dist"
------------------------------------------------
# PT BR | Lading Page 3D Responsivo
Ferramentas:
- Tailwind css -  Framework de Estilos configurado para designs responsivos.
- React - Estrutura encapsulada para a reutilização do código.
- Javascript - Configurações de botões específicos para a visibilidade de diferentes tipos de dispositivos.
- AOS - biblioteca que adiciona efeitos visuais (animações) aos elementos da página à medida que o usuário movimenta o  scroll do mouse.
- Spline - Para criação do Objeto 3D.
- Boxicons - Biblioteca para Baixar icones vetorias no Projeto: https://v2.boxicons.com/usage
- Typed    - Biblioteca para incluir no visual o efeito de digitação.
-------------------------------
Principais comandos usados
0.0	mkdir Robot_emil	(Cria a pasta/diretório Robot_emil)
0.1	cd Robot_emil	(Entra na pasta Robot_emil)
-
1.	npm install	(Instala os módulos da biblioteca Node.js, conforme o package.json).
2.	npm create vite@latest ./	 (Cria o projeto Vite na versão mais recente, no diretório atual ./).
3.	npm install -D tailwindcss postcss autoprefixer	(Instala o Tailwind CSS e as configurações do PostCSS para suporte e compatibilidade para todos os tipos de navegadores).
4.	npx tailwindcss init -p	(Inicializa a estrutura do Tailwind, criando os arquivos de configuração tailwind.config.js e postcss.config.js).
5.	npm install boxicons	(Instala a biblioteca de ícones Boxicons no projeto).
6.	npm install @splinetool/react-spline	(Instala a biblioteca oficial do Spline para configurar e exibir elementos 3D no React).
7.	npm install --save aos@next	(Instala a biblioteca AOS (Animate On Scroll) para animações de rolagem).
8.	npm install typed.js     ou      yarn add typed.js
9.	npm run dev	(Liga o servidor de desenvolvimento para testes em tempo real.)
10.	npm run deploy	(Usado para fazer o deploy. Preparando o código para produção, se estiver configurado no package.json).
------------------------------
Configurações Para deploy no Git hub Page:
Primeiramente você precisa incluir em seu Arquivo Package.json:
"Homepage":""https://github.com/SeuPerfilGit/Nome_do_seu_repositorio.git""
"predeploy":"npm run build"
"deploy":"gh-pages -d dist"
