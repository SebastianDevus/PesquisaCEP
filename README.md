# PesquisaCEP
### Exercício de dev web - Etec Adolpho Berezin - 2022 

Utilize a API pública [Postmon](https://postmon.com.br/) para preencher um formulário com o endereço associado a um CEP digitado pelo usuário.

- _Endpoint_: `https://api.postmon.com.br/v1/cep/CEPDESEJADO`
  - Exemplo com o CEP [11730-000](https://api.postmon.com.br/v1/cep/11730000), que não possui logradouro.
  - Exemplo com o CEP [05001-100](https://api.postmon.com.br/v1/cep/05001100), que possui logradouro.
    - `cidade` contém o nome da cidade;
    - `estado` contém a sigla da UF;
    - `logradouro` contém o nome do logradouro;
    - `bairro` contém o bairro;
    - `complemento` contém informações adicionais.

Libere para digitação somente os campos não preenchidos pela API, e inclua um campo para o número do logradouro.
