# K6 - Tranning

## Instalação

### MacOS

- Usando [Homebrew](https://brew.sh/)

```
brew install k6
```

### Windows

Se você usar o Gerente de pacotes de [chocolatey](https://chocolatey.org/) você pode instalar o pacote k6 não oficial com:

```
choco install k6
```

Se você usar o [Gerenciador de pacotes do Window](https://github.com/microsoft/winget-cli), instale os pacotes oficiais dos manifestos k6 ([criado pela comunidade](https://github.com/microsoft/winget-pkgs/tree/master/manifests/k/k6/k6)):

```
winget install k6
```

### Linux

#### Debian/Ubuntu

```
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list

sudo apt-get update

sudo apt-get install k6
```

#### Fedora/CentOS

Using dnf (or yum on older versions):

```
sudo dnf install https://dl.k6.io/rpm/repo.rpm

sudo dnf install k6
```

## Dicas

- Fazer os testes funcionais depois dos testes de performance para verifica a integridade da aplicação e saber se não houve algum problema com banco de dados ou outro item da aplicacão.
- Verifique sempre os requisitos não funcionais para que você saiba quanto tempo a sua aplicação deve responder a uma ação especifica do sistema (pergunte ao Product owner ou na hora da planning/refinamento)
- Caso for trabalhar com automação de testes é necessário entender um pouco mais sobre REDES (requisicoes isoladas e por ai vai...) [link de alguns itens no k6](https://k6.io/docs/using-k6/k6-options/reference/)
- Ler o sylabus de testes de performance/carga/etc... [link](https://bcr.bstqb.org.br/docs/syllabus_ct_pt_1.0br.pdf)

## Explicando o resultado dos testes do K6 impressos no terminal

### **Relatório de resumo do início do teste**

```
execution: local
  script: path/to/script.js
  output: -

scenarios: (100.00%) 1 scenario, 50 max VUs, 5m30s max duration (incl. graceful stop):
        * default: Up to 50 looping VUs for 5m0s over 3 stages (gracefulRampDown: 30s, gracefulStop: 30s)
```

- **execution(execução):** `local` mostra o modo de execução k6 (local ou nuvem).
- **output(saída):** `-` é o saída dos resultados dos testes granulares. Por padrão, nenhuma saída é usada, apenas o agregado Resumo do fim do teste é mostrado.
- **script:** `path/to/script.js` mostra o nome do arquivo de script que está sendo executado.
- **scenarios(Cenários)**:... é um resumo do Cenários que será executado nesta execução de teste e algumas informações de visão geral:
- (100.00%) é o usado segmento de execução
  - **50 max VUs** nos diz até quantos VUs (usuários virtuais) será usado em todos os cenários.
  - **duration(Duração)** máxima de 5m30s é o tempo máximo que o script vai levar para executar, incluindo qualquer parada graciosa vezes.
  - **default(padrão):** ... descreve o único cenário para este teste. Neste caso, é um cenário com um ramping VUs executor, especificado através do Estágios opção de atalho em vez de usar o Cenários opção de forma longa.

### **Relatório de resumo do fim do teste**

```
checks.........................: 100.00% ✓ 1512      ✗ 0   
     data_received..................: 15 MB   107 kB/s
     data_sent......................: 170 kB  1.2 kB/s
     http_req_blocked...............: avg=6.54ms   min=1µs      med=6µs      max=620.36ms p(90)=13µs     p(95)=16µs   
     http_req_connecting............: avg=3.29ms   min=0s       med=0s       max=396.07ms p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=192.42ms min=164.66ms med=172.7ms  max=1.49s    p(90)=203.34ms p(95)=291.5ms
       { expected_response:true }...: avg=192.42ms min=164.66ms med=172.7ms  max=1.49s    p(90)=203.34ms p(95)=291.5ms
     http_req_failed................: 0.00%   ✓ 0         ✗ 1512
     http_req_receiving.............: avg=4.55ms   min=14µs     med=1.34ms   max=767.89ms p(90)=6.74ms   p(95)=9.4ms  
     http_req_sending...............: avg=31.15µs  min=3µs      med=27µs     max=995µs    p(90)=54µs     p(95)=61.44µs
     http_req_tls_handshaking.......: avg=3.23ms   min=0s       med=0s       max=348.55ms p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=187.83ms min=161.34ms med=170.18ms max=1.49s    p(90)=198.66ms p(95)=225.9ms
     http_reqs......................: 1512    10.780054/s
     iteration_duration.............: avg=1.19s    min=1.16s    med=1.17s    max=2.49s    p(90)=1.2s     p(95)=1.35s  
     iterations.....................: 1512    10.780054/s
     vus............................: 1       min=1       max=20
     vus_max........................: 20      min=20      max=20
```

O resumo de teste fornece uma visão geral dos resultados dos testes.

[Verificar a documentação de cada campo impresso no terminal](https://k6.io/docs/using-k6/metrics/)


## Projetos 

- **Integrando com o azure devops (test plan):**
  - [Projeto](https://dev.azure.com/GTRekter/_git/Training) e [Teste de carga com DevOps Azure e k6](https://medium.com/microsoftazure/load-testing-with-azure-devops-and-k6-839be039b68a)