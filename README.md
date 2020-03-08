#### Pontos interessantes:
- yarn
- axios
- react-router-dom
- novas features ES6+

#### Link do curso:
https://skylab.rocketseat.com.br/node/curso-react-js

#### Material extra:
- Ciclo de vida do component: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

#### Anotações:
- O método render() observa o state do component. Sempre que o state é alterado, o método render() faz atualiza o virtual DOM.
- BrowserRouter: Indica que o react-router-dom será usado dentro do Browser
- Switch: Defini que somente um componente pode ser reinderizado de cada vez, ou seja, faz literalmente um switch entre as rotas
- Route: Faz uma 'conexão lógica' entre caminho e componente. O uso do atributo exact diz para o Route que o path deve ser exatamente igual a rota recebida, já que por default ele tem um comportamento diferente. Se ele receber uma rota '/string' e, além de um Route com esse path, também existir um com path = '/', ele irá navegar para o path que encontrar primeiro, podendo causar um bug na aplicação.

#### Atividades extras:
- Criar um component footer :heavy_check_mark:
- Criar um botão de voltar para home
- Criar uma feature para mostrar na tela a página atual