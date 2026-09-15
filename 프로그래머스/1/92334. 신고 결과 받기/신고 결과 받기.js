function solution(id_list, report, k) {
    const answer = [];
    const uniqueReports = new Set(report); // 중복된 신고 기록 제거
    const reportCount = new Map();   // 신고당한 사람 → 횟수
    const reportedBy = new Map();    // 신고한 사람 → 신고한 목록
    const banned = new Set();        // 정지된 사람

    uniqueReports.forEach((entry) => {
        const [reporter, target] = entry.split(' ')

        const count = reportCount.get(target) || 0;
        reportCount.set(target, count + 1)

        const list = reportedBy.get(reporter) || [];
        list.push(target);
        reportedBy.set(reporter, list);
    })

    for (const [name, count] of reportCount) {
        if (count >= k) banned.add(name);
    }

    id_list.forEach((id) => {
        const targets = reportedBy.get(id) || [];
        answer.push(targets.filter((name) => banned.has(name)).length)
    })

    return answer;
}