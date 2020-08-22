sudo apt install redis-server
sudo systemctl status redis
//Para inicializar o redis: redis-cli

Para testar o redis: 
1° -> Inserir o Usuario
2° -> Buscar Usuario uma vez, no console.log no node vai aparecer que foi chamado do MongoDB,
3 segundos depois quando buscar novamente o usuario cadastrado ele vai aparecer que foi pelo redis,
se esperar mais 10 a 15 segundos, e fizer a requisição novamente ele vai voltar a ser chamado pelo mongo

Postman Endpoint 
Post :localhost:3000/user/create
{
  "AutheticationToken": {
    "Username": "USUARIO_INTEGRACOES",
    "Password": "MXM123",
    "EnvironmentName": "MXM"
  },
  "Data": {
    "InterfacedoCliente": [
      {
        "SequenciadoRegistro": 1,
        "Codigo": "76430438007770",
        "TipodePessoa": "J",
        "Nome": "Yan Matheus",
        "CPFouCNPJ": "76430438007770",
        "NomeFantansia": "Bar do Ze",
        "TipodoLocaldoIndicadordeInscricaoEstadual": "9",
        "Inscricao": "",
        "InscricaoMunicipal": "02939412",
        "InscricaoSuframa": "019324812394",
        "OrgaoExpeditor": "SSPSP",
        "DatadaExpedicao": "01/02/2018",
        "DatadeNascimento": "08/06/1978",
        "CodigodaNacionalidade": "BRA",
        "EstadoCivil": "Casado",
        "Profissao": "Gerente de Projetos",
        "CodigodoGrupo": "01",
        "CodigodoPais": "BRA",
        "Cep": "04311080",
        "Endereco": "Rua São Paulo, 500",
        "NumerodoEndereco": "46789",
        "ComplementodoEndereco": "",
        "Bairro": "Bela Vista",
        "Uf": "SP",
        "Cidade": "São Paulo",
        "Email": "bardoze@baresbrasil.com.br",
        "Telefone": "1132842611",
        "CodigodaCidade": "",
        "Ativo": "A",
        "DatadoCadastro": "20/04/2019",
        "DatadeAtualizacao": "20/04/2019",
        "DatadeInativacao": "20/04/2019",
        "Pais": "Brasil",
        "InterfaceContaCorrentedoCliente": [
          {
            "SequenciadaConta": 1,
            "CodigodoCliente": "76430438007770",
            "CodigodaContaCorrente": "001",
            "CodigodoBanco": "341",
            "NomedoBanco": "Itaú",
            "AgenciadoBanco": "0740",
            "NomedaAgencia": "Agência rua Tutóia",
            "EnderecodaAgencia": "Rua Tutóia, 1160",
            "BairrodaAgencia": "Bairro Paraíso",
            "CidadedaAgencia": "São Paulo",
            "UFdaAgencia": "SP",
            "CepdaAgencia": "04007-005",
            "NumerodaContaBancaria": "62535-9",
            "TipodeConta": "C",
            "Competencia": "Jan",
            "OperacaodeIntegracao": "0"
          }
        ],
        "InterfaceEnderecodoCliente": [
          {
            "SequenciaClienteEndereco": "1",
            "CodigoEnderecoAlternativo": "A01",
            "DescricaoEnderecoAlternativo": "Endereço de cobrança",
            "NomeCliente": "Yan Matheus EPP",
            "EnderecoAlernativo": "Rua Rio de Janeiro",
            "Numero": "220",
            "Complemento": "AP 201A",
            "Bairro": "Lapa",
            "Cidade": "Rio de Janeiro",
            "UFAlternativo": "RJ",
            "CEPAlternativo": "21010800",
            "TelefoneAlternativo": "219423111121",
            "CNPJAlternativo": "26782341859",
            "InscricaoEstadualAlternativo": "123847263",
            "CodigoRegiaoAlternativo": "006",
            "EmailAlternativo": "bardozezinho@bardoze.com.br",
            "InscricaoMunicipalAlternativo": "8374750384",
            "InscricaoSUFRAMAAlternativo": "89218384712",
            "CodigoCidadeIBGEAlternativo": "3550308",
            "CodigoPaisIBGEAlternativo": "BRA",
            "TipoLocalIndicadorInscricaoEstadualAlternativo": "1",
            "OperacaodeIntegracaoAlternativo": "0"
          }
        ],
        "InterfaceContabildoCliente": [
          {
            "CodigoCliente": "76430438007770",
            "CodigoEmpresa": "01",
            "CodigoFilial": "01",
            "CodigoMoeda": "R",
            "NumeroContaContabil": "10102",
            "NumeroContaContabilAntecipacao": "40101",
            "OperacaodeIntegracao": "0",
            "InterfaceGrupoRecebimentodoCliente": [
              {
                "CodigoCliente": "76430438007770",
                "CodigoEmpresa": "01",
                "CodigoFilial": "01",
                "CodigoMoeda": "R",
                "CodigoGrupoRecebimento": "310053",
                "CodigoImpostoIRRF": "1708",
                "CodigoImpostoINSS": "INSS",
                "CodigoImpostoISS": "ISS",
                "CodigoImpostoPIS": "PIS",
                "CodigoImpostoCOFINS": "COFI",
                "CodigoImpostoContribuicaoSocial": "CSLL",
                "IndicadorGrupoPrincipal": "S",
                "IdentificadorTipoServico": "1",
                "CodigoAtividadeEconomica": "64"
              }
            ]
          }
        ]
      }
    ]
  }
}


GET
localhost:3000/user
