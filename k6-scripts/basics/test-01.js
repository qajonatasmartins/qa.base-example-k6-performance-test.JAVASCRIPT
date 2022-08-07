import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    http.get('https://test.k6.io');
    sleep(1);
}

/**
 * Retorno da execução do teste no terminal
 * 
 * 
> k6@1.0.0 test-01
> k6 run ./k6-scripts/test-01.js


          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: ./k6-scripts/test-01.js
     output: -

  scenarios: (100.00%) 1 scenario, 1 max VUs, 10m30s max duration (incl. graceful stop):
           * default: 1 iterations for each of 1 VUs (maxDuration: 10m0s, gracefulStop: 30s)


running (00m01.6s), 0/1 VUs, 1 complete and 0 interrupted iterations
default ✓ [======================================] 1 VUs  00m01.6s/10m0s  1/1 iters, 1 per VU

     data_received..................: 17 kB 11 kB/s
     data_sent......................: 438 B 273 B/s
     http_req_blocked...............: avg=409.02ms min=409.02ms med=409.02ms max=409.02ms p(90)=409.02ms p(95)=409.02ms
     http_req_connecting............: avg=162.43ms min=162.43ms med=162.43ms max=162.43ms p(90)=162.43ms p(95)=162.43ms
     http_req_duration..............: avg=195.13ms min=195.13ms med=195.13ms max=195.13ms p(90)=195.13ms p(95)=195.13ms
       { expected_response:true }...: avg=195.13ms min=195.13ms med=195.13ms max=195.13ms p(90)=195.13ms p(95)=195.13ms
     http_req_failed................: 0.00% ✓ 0        ✗ 1  
     http_req_receiving.............: avg=2.19ms   min=2.19ms   med=2.19ms   max=2.19ms   p(90)=2.19ms   p(95)=2.19ms  
     http_req_sending...............: avg=162µs    min=162µs    med=162µs    max=162µs    p(90)=162µs    p(95)=162µs   
     http_req_tls_handshaking.......: avg=184.67ms min=184.67ms med=184.67ms max=184.67ms p(90)=184.67ms p(95)=184.67ms
     http_req_waiting...............: avg=192.77ms min=192.77ms med=192.77ms max=192.77ms p(90)=192.77ms p(95)=192.77ms
     http_reqs......................: 1     0.622096/s
     iteration_duration.............: avg=1.6s     min=1.6s     med=1.6s     max=1.6s     p(90)=1.6s     p(95)=1.6s    
     iterations.....................: 1     0.622096/s
     vus............................: 1     min=1      max=1
     vus_max........................: 1     min=1      max=1

 */