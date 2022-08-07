import http from 'k6/http';
import { sleep } from 'k6';

/**
 * O 'options' é usado para informar os dados iniciais para a execução dos seus testes de performande/carga./etc...
 * Podemos falar que ele é o nosso beforeTest() do K6
 */

export const options = {
    vus: 10, // virtual users --> Com mais de um usuário virtual
    duration: '30s', // Duração de 30 segundos
};

export default function () {
    http.get('http://test.k6.io');
    sleep(1);
}

/**
 * Retorno da execução do teste no terminal
 * 
 * > k6@1.0.0 test-03
> k6 run ./k6-scripts/test-03.js


          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: ./k6-scripts/test-03.js
     output: -

  scenarios: (100.00%) 1 scenario, 10 max VUs, 1m0s max duration (incl. graceful stop):
           * default: 10 looping VUs for 30s (gracefulStop: 30s)


running (0m31.3s), 00/10 VUs, 219 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  30s

     data_received..................: 2.6 MB 85 kB/s
     data_sent......................: 48 kB  1.5 kB/s
     http_req_blocked...............: avg=13.12ms  min=1µs      med=4µs      max=365.39ms p(90)=11.3µs   p(95)=17.19µs 
     http_req_connecting............: avg=7.65ms   min=0s       med=0s       max=169.88ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=190.04ms min=160.4ms  med=170.3ms  max=1.18s    p(90)=223.4ms  p(95)=333.52ms
       { expected_response:true }...: avg=190.04ms min=160.4ms  med=170.3ms  max=1.18s    p(90)=223.4ms  p(95)=333.52ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 438 
     http_req_receiving.............: avg=8.6ms    min=12µs     med=56µs     max=188.63ms p(90)=233.6µs  p(95)=33.01ms 
     http_req_sending...............: avg=21.46µs  min=3µs      med=16µs     max=326µs    p(90)=38µs     p(95)=50.14µs 
     http_req_tls_handshaking.......: avg=4.39ms   min=0s       med=0s       max=199.92ms p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=181.42ms min=160.34ms med=169.56ms max=1s       p(90)=196.45ms p(95)=224.43ms
     http_reqs......................: 438    13.994072/s
     iteration_duration.............: avg=1.4s     min=1.32s    med=1.34s    max=2.34s    p(90)=1.51s    p(95)=1.81s   
     iterations.....................: 219    6.997036/s
     vus............................: 2      min=2       max=10
     vus_max........................: 10     min=10      max=10
 */