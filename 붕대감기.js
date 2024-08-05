function solution(bandage, health, attacks) {
    let answer = 0;
    let stime = 0;
    let attackstime = attacks[attacks.length - 1][0];
    const [t, x, y] = bandage;
    const attacksMap = new Map(attacks);
    let nhealth = health;

    for (let i = 0; i <= attackstime; i++) {
        const damage = attacksMap.get(i) || 0; // 공격이 없는 시간은 피해가 0
        
        // 체력 회복
        if (damage === 0) {
            stime += 1;
            nhealth += x;
        } else {
            stime = 0; // 공격이 있을 경우 회복시간 초기화
        }
        
        // 회복 시간 경과
        if (stime === t) {
            nhealth += y;
            stime = 0; // 회복 후 시간 초기화
        }
        
        // 최대 체력 제한
        if (nhealth > health) {
            nhealth = health;
        }
        
        // 공격으로 체력 감소
        nhealth -= damage;
        
        // 체력이 0 이하로 떨어지면 게임 오버
        if (nhealth <= 0) {
            return -1;
        }
    }

    return nhealth;
}
