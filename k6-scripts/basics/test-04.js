/**
 * Estágios: rampando para cima/para baixo VUs
 * Você pode aumentar o número de VUs para cima e para baixo durante o teste. 
 * Para configurar rampas, use o options.stages como propriedade.
 */
import http from 'k6/http';
import { check, sleep } from 'k6';


/**
 * O 'options' é usado para informar os dados iniciais para a execução dos seus testes de performande/carga./etc...
 * Podemos falar que ele é o nosso beforeTest() do K6
 */

export const options = {
    stages: [ // Aqui estamos usando o stages para fazer uma rampagem das execuções dos nossos testes na aplicação
        // ramp UP - Subindo o número de VUS
        { duration: '30s', target: 20 }, // Durante 30 segundos o k6 vai iniciar de 0 VUS e ao chegar em 30 segundos ele vai obrigatoriamente ter que chegar em 20 VUS
        // ramp DOWN - Descendo o número de VUS
        { duration: '1m30s', target: 10 }, // Durante depois dos 30 segundos, ele vai ficar mais 1 minuto e 30 segundos com o k6 indo de 20 VUS e ao chegar em 1m30 segundos ele vai obrigatoriamente ter que diminuir de 20 VUS para 10 VUS ativos
        // ramp DOWN - Terminando de descer o número de VUS
        { duration: '20s', target: 0 }, // Durante mais 20s ele vai ter que ir de 10 VUS para 0 VUS obrigatoriamente.
    ],
};

export default function () {
    const res = http.get('https://httpbin.test.k6.io/');
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}

/**
 * Retorno da execução do teste no terminal
 * 
 * 
          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: ./k6-scripts/test-04.js
     output: -

  scenarios: (100.00%) 1 scenario, 20 max VUs, 2m50s max duration (incl. graceful stop):
           * default: Up to 20 looping VUs for 2m20s over 3 stages (gracefulRampDown: 30s, gracefulStop: 30s)


running (2m20.3s), 00/20 VUs, 1512 complete and 0 interrupted iterations
default ✓ [======================================] 00/20 VUs  2m20s

     ✓ status was 200

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
 */