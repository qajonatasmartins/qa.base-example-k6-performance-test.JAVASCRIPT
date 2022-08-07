/**
 * Checks: https://k6.io/docs/using-k6/checks/
 */

import http from 'k6/http'
import { check } from 'k6'

export default function () {
    const res = http.post('https://test.k6.io')

    //console.log(res.body)

    check(res, {
        'Verificar se o retorno ao acessar a home é 200': (response) => response.status == 200,
        'Verificar se no body da requisicao existe o valor x': (response) => response.body.includes('Demo website for load testing')
    })

    // check(res, {
    //     'Verificar se no body da requisicao existe o valor x': (response) => response.body.includes('Demo website for load testing')
    // })
}


/**
 * Retorno da execução do teste no terminal
 * 
 * > k6@1.0.0 test-check-01
> k6 run ./k6-scripts/basics/check/test-check-01.js


          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: ./k6-scripts/basics/check/test-check-01.js
     output: -

  scenarios: (100.00%) 1 scenario, 1 max VUs, 10m30s max duration (incl. graceful stop):
           * default: 1 iterations for each of 1 VUs (maxDuration: 10m0s, gracefulStop: 30s)


running (00m00.7s), 0/1 VUs, 1 complete and 0 interrupted iterations
default ✓ [======================================] 1 VUs  00m00.7s/10m0s  1/1 iters, 1 per VU

     ✓ Verificar se o retorno ao acessar a home é 200
     ✓ Verificar se no body da requisicao existe o valor x

     checks.........................: 100.00% ✓ 2        ✗ 0
     data_received..................: 17 kB   24 kB/s
     data_sent......................: 458 B   639 B/s
     http_req_blocked...............: avg=544.13ms min=544.13ms med=544.13ms max=544.13ms p(90)=544.13ms p(95)=544.13ms
     http_req_connecting............: avg=181.52ms min=181.52ms med=181.52ms max=181.52ms p(90)=181.52ms p(95)=181.52ms
     http_req_duration..............: avg=170.98ms min=170.98ms med=170.98ms max=170.98ms p(90)=170.98ms p(95)=170.98ms
       { expected_response:true }...: avg=170.98ms min=170.98ms med=170.98ms max=170.98ms p(90)=170.98ms p(95)=170.98ms
     http_req_failed................: 0.00%   ✓ 0        ✗ 1
     http_req_receiving.............: avg=141µs    min=141µs    med=141µs    max=141µs    p(90)=141µs    p(95)=141µs   
     http_req_sending...............: avg=49µs     min=49µs     med=49µs     max=49µs     p(90)=49µs     p(95)=49µs    
     http_req_tls_handshaking.......: avg=360.95ms min=360.95ms med=360.95ms max=360.95ms p(90)=360.95ms p(95)=360.95ms
     http_req_waiting...............: avg=170.79ms min=170.79ms med=170.79ms max=170.79ms p(90)=170.79ms p(95)=170.79ms
     http_reqs......................: 1       1.395794/s
     iteration_duration.............: avg=715.48ms min=715.48ms med=715.48ms max=715.48ms p(90)=715.48ms p(95)=715.48ms
     iterations.....................: 1       1.395794/s
 */