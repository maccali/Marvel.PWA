## Instruções de setup

- Instale o NVM, gerenciador de versões do node  (https://github.com/coreybutler/nvm-windows/releases)

- Usando o nvm intale a versão v14.17.6 ou posrterior no node

`nvm install 14.17.6`
`nvm use 14.17.6`

- Install o YARN, gerenciado de pacotes do node 

`npm install --global yarn`

- Clone o projeto do repositório

- Instale o projeto executando

`yarn`

- Copie o arquivo ".env.example" para ".env" e coloque as credenciais de teste local

DATABASE_URL="mongodb+srv://guimaccali:Kf6sjeHSXNa9atrA@cluster0.pvmntov.mongodb.net/?retryWrites=true&w=majority"
SHADOW_DATABASE_URL="mongodb+srv://guimaccali:FVLdMeJK8P4CRZXr@cluster0.7h5t9pj.mongodb.net/?retryWrites=true&w=majority"
JWT_KEY="minha_chave_secreta"


GOOGLE_CLIENT_ID="976905194347-3k4lsv6nd4ct3if0m61hlahggs8q8cjq.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET_ID="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"

GITHUB_CLIENT_ID="bb620eb0cd97edbbabc6"
GITHUB_CLIENT_SECRET_ID="741c5fd1b11ca15763e6845f5796ac56440aca0d"

FACEBOOK_CLIENT_ID="3544434702454183"
FACEBOOK_CLIENT_SECRET_ID="90477b736c97543d5494976aa393f118"

NEXTAUTH_URL="http://localhost:4242"

NEXTAUTH_SECRET="bible gun of god 4242"

- Execute o progeto com o comando 

`yarn dev`

- O projeto estará rodando no link 

`http://localhost:4242`