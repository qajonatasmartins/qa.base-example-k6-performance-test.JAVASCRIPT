import http from 'k6/http'
import { check } from 'k6'

export default function () {
    const url = 'https://test.k6.io/login.php',
        payload = JSON.stringify({
            redir: 1,
            csrftoken: 'NzM1MzYxNTUw',
            login: 'aaa',
            password: 'bbb'
        }),
        params = {
            headers: {
                'Content-Type': 'text/html;charset=UTF-8'
            }
        },

        res = http.post(url, payload, params)

    //console.log(res)

    check(res, {
        'response code was 403': (res) => res.status == 403,
    });
}


/**
 * Retorno da execução do teste no terminal
 * 
 * > k6@1.0.0 test-login-01
> k6 run ./k6-scripts/login/test-login-01.js


          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: ./k6-scripts/login/test-login-01.js
     output: -

  scenarios: (100.00%) 1 scenario, 1 max VUs, 10m30s max duration (incl. graceful stop):
           * default: 1 iterations for each of 1 VUs (maxDuration: 10m0s, gracefulStop: 30s)


running (00m00.6s), 0/1 VUs, 1 complete and 0 interrupted iterations
default ✓ [======================================] 1 VUs  00m00.6s/10m0s  1/1 iters, 1 per VU

     ✓ response code was 403

     checks.....................: 100.00% ✓ 1        ✗ 0
     data_received..............: 5.9 kB  10 kB/s
     data_sent..................: 576 B   979 B/s
     http_req_blocked...........: avg=394.85ms min=394.85ms med=394.85ms max=394.85ms p(90)=394.85ms p(95)=394.85ms
     http_req_connecting........: avg=175.91ms min=175.91ms med=175.91ms max=175.91ms p(90)=175.91ms p(95)=175.91ms
     http_req_duration..........: avg=188.09ms min=188.09ms med=188.09ms max=188.09ms p(90)=188.09ms p(95)=188.09ms
     http_req_failed............: 100.00% ✓ 1        ✗ 0
     http_req_receiving.........: avg=107µs    min=107µs    med=107µs    max=107µs    p(90)=107µs    p(95)=107µs   
     http_req_sending...........: avg=76µs     min=76µs     med=76µs     max=76µs     p(90)=76µs     p(95)=76µs    
     http_req_tls_handshaking...: avg=216.02ms min=216.02ms med=216.02ms max=216.02ms p(90)=216.02ms p(95)=216.02ms
     http_req_waiting...........: avg=187.9ms  min=187.9ms  med=187.9ms  max=187.9ms  p(90)=187.9ms  p(95)=187.9ms 
     http_reqs..................: 1       1.700284/s
     iteration_duration.........: avg=584.77ms min=584.77ms med=584.77ms max=584.77ms p(90)=584.77ms p(95)=584.77ms
     iterations.................: 1       1.700284/s
 */