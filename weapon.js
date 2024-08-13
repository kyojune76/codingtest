function solution(number, limit, power) {
    var answer = 0;
    let f = 0;
    let j = 1;
    let cnt = 0;
    let t2 = [];

    for (let i = 1; i <= number; i++) {
        cnt = 0;

        for (j = 1; j <= i; j++) {
            if (i % j === 0) {
                cnt++;
            }
        }

        if (cnt > limit) {
            t2.push(power);
        } else {
            t2.push(cnt);
        }
    }

    answer = t2.reduce((p, n) => p + n, 0);
    return answer;
}
