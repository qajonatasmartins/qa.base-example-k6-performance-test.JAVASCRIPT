/**
 * https://k6.io/docs/using-k6/thresholds/
 * Thresholds:
 * Os limites são critérios de aprovação/falha para suas métricas de teste. 
 * Se uma métrica de teste não atender à expectativa definida, o limite falhará. 
 * Muitas vezes, os usuários do K6 usam o limite para codificar seus SLOs.
 */

import http from 'k6/http'

export const options = {
    thresholds: {
        http_req_failed: ['rate<0.01'], // erros http devem ser menores que 1%
        http_req_duration: ['p(95)<200'], // 95% das solicitações devem estar abaixo de 200ms
    }
}

export default function () {
    http.get('https://test-api.k6.io/public/crocodiles/1/')
}

/**
 * Retorno da execução do teste no terminal
 * 
 * > k6@1.0.0 test-thresholds-01
> k6 run ./k6-scripts/basics/thresholds/test-thresholds-01.js


          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: ./k6-scripts/basics/thresholds/test-thresholds-01.js
     output: -

  scenarios: (100.00%) 1 scenario, 1 max VUs, 10m30s max duration (incl. graceful stop):
           * default: 1 iterations for each of 1 VUs (maxDuration: 10m0s, gracefulStop: 30s)


running (00m01.0s), 0/1 VUs, 1 complete and 0 interrupted iterations
default ✓ [======================================] 1 VUs  00m01.0s/10m0s  1/1 iters, 1 per VU

     data_received..................: 5.8 kB 5.7 kB/s
     data_sent......................: 466 B  465 B/s
     http_req_blocked...............: avg=761.05ms min=761.05ms med=761.05ms max=761.05ms p(90)=761.05ms p(95)=761.05ms
     http_req_connecting............: avg=263.38ms min=263.38ms med=263.38ms max=263.38ms p(90)=263.38ms p(95)=263.38ms
   ✗ http_req_duration..............: avg=235.93ms min=235.93ms med=235.93ms max=235.93ms p(90)=235.93ms p(95)=235.93ms
       { expected_response:true }...: avg=235.93ms min=235.93ms med=235.93ms max=235.93ms p(90)=235.93ms p(95)=235.93ms
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 1  
     http_req_receiving.............: avg=429µs    min=429µs    med=429µs    max=429µs    p(90)=429µs    p(95)=429µs   
     http_req_sending...............: avg=511µs    min=511µs    med=511µs    max=511µs    p(90)=511µs    p(95)=511µs   
     http_req_tls_handshaking.......: avg=189.57ms min=189.57ms med=189.57ms max=189.57ms p(90)=189.57ms p(95)=189.57ms
     http_req_waiting...............: avg=234.99ms min=234.99ms med=234.99ms max=234.99ms p(90)=234.99ms p(95)=234.99ms
     http_reqs......................: 1      0.998682/s
     iteration_duration.............: avg=999.14ms min=999.14ms med=999.14ms max=999.14ms p(90)=999.14ms p(95)=999.14ms
     iterations.....................: 1      0.998682/s
     vus............................: 1      min=1      max=1
     vus_max........................: 1      min=1      max=1
 */