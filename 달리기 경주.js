function solution(players, callings) {
   
    // 선수 이름을 키로, 현재 순위를 값으로 갖는 맵 생성
    const playerIndexMap = new Map();
    for (let i = 0; i < players.length; i++) {
        playerIndexMap.set(players[i], i);
    }

    // callings 배열을 순회하며 추월 상황 처리
    callings.forEach(calling => {
        const currentIdx = playerIndexMap.get(calling);

        if (currentIdx > 0) {
            const previousPlayer = players[currentIdx - 1];

            // 선수들의 순위 업데이트
            players[currentIdx - 1] = calling;
            players[currentIdx] = previousPlayer;

            // 맵에 저장된 순위 업데이트
            playerIndexMap.set(calling, currentIdx - 1);
            playerIndexMap.set(previousPlayer, currentIdx);
        }
    });

    return players;
}
