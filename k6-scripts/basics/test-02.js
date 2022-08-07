import http from 'k6/http';
import { sleep } from 'k6';
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
 * 
 * > k6@1.0.0 test-02
> k6 run ./k6-scripts/test-02.js


          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: ./k6-scripts/test-02.js
     output: -

  scenarios: (100.00%) 1 scenario, 10 max VUs, 1m0s max duration (incl. graceful stop):
           * default: 10 looping VUs for 30s (gracefulStop: 30s)


running (0m31.2s), 00/10 VUs, 218 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  30s

     data_received..................: 2.6 MB 85 kB/s
     data_sent......................: 47 kB  1.5 kB/s
     http_req_blocked...............: avg=12.74ms  min=1µs      med=3µs      max=388.84ms p(90)=10µs     p(95)=17µs    
     http_req_connecting............: avg=7.67ms   min=0s       med=0s       max=174.55ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=191.85ms min=159.64ms med=170.77ms max=768.59ms p(90)=212.39ms p(95)=338.06ms
       { expected_response:true }...: avg=191.85ms min=159.64ms med=170.77ms max=768.59ms p(90)=212.39ms p(95)=338.06ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 436 
     http_req_receiving.............: avg=9.88ms   min=13µs     med=53µs     max=603.45ms p(90)=204µs    p(95)=6.71ms  
     http_req_sending...............: avg=20.84µs  min=3µs      med=14µs     max=1.26ms   p(90)=31.5µs   p(95)=46µs    
     http_req_tls_handshaking.......: avg=5.03ms   min=0s       med=0s       max=225.77ms p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=181.94ms min=159.6ms  med=170.13ms max=620.91ms p(90)=192.27ms p(95)=215.76ms
     http_reqs......................: 436    13.963349/s
     iteration_duration.............: avg=1.41s    min=1.32s    med=1.34s    max=1.94s    p(90)=1.53s    p(95)=1.81s   
     iterations.....................: 218    6.981675/s
     vus............................: 5      min=5       max=10
     vus_max........................: 10     min=10      max=10
 */