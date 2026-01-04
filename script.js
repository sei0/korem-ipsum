// ============================================
// 가짜 문장 생성용 데이터
// ============================================

// 접속사 배열
const CONJUNCTIONS = [
    '그리고', '하지만', '그러나', '또한', '따라서',
    '즉', '예를 들어', '반면에', '게다가', '다만',
    '왜냐하면', '그래서', '물론', '특히', '실제로',
    '한편', '더욱이', '이처럼', '그럼에도', '결국'
];

// 짧은 문장 템플릿 (20-30자)
const SHORT_TEMPLATES = [
    "{N}이(가) 적용됩니다.",
    "{N}을(를) 확인하세요.",
    "{N}이(가) 저장되었습니다.",
    "{N} 설정이 완료되었습니다.",
    "{N}을(를) 선택할 수 있습니다.",
    "{N}이(가) 필요합니다.",
    "{N}을(를) 추천합니다.",
    "{N}이(가) 중요합니다.",
    "{N}을(를) 고려해야 합니다.",
    "{N}이(가) 포함됩니다.",
    "{N}을(를) 지원합니다.",
    "{N}이(가) 가능합니다.",
    "{N}은(는) 기본값입니다.",
    "{N}을(를) 제공합니다.",
    "{N}이(가) 향상됩니다."
];

// 중간 문장 템플릿 (40-60자)
const MEDIUM_TEMPLATES = [
    "{N}은(는) {N}을(를) 통해 {N}에 영향을 미칩니다.",
    "{N}을(를) 설정하면 {N}이(가) 자동으로 업데이트됩니다.",
    "{N}은(는) {N}과(와) 함께 사용할 때 효과적입니다.",
    "{N}을(를) 활성화하면 {N}이(가) 즉시 반영됩니다.",
    "{N}은(는) {N}의 핵심 요소로 작동합니다.",
    "{N}을(를) 변경하면 {N}에서 확인할 수 있습니다.",
    "{N}은(는) {N} 기준으로 측정됩니다.",
    "{N}이(가) {N}에 따라 다르게 표시될 수 있습니다.",
    "{N}을(를) 선택하면 {N} 옵션이 나타납니다.",
    "{N}은(는) {N}을(를) 기반으로 동작합니다.",
    "{N}을(를) 사용하면 {N}이(가) 개선됩니다.",
    "{N}은(는) {N}의 중요한 부분을 담당합니다.",
    "{N}이(가) {N}과(와) 연동되어 작동합니다.",
    "{N}을(를) 조정하면 {N}이(가) 변경됩니다.",
    "{N}은(는) {N}에서 필수적으로 요구됩니다.",
    "{N}을(를) 분석하면 {N}을(를) 파악할 수 있습니다.",
    "{N}은(는) {N}을(를) 효율적으로 관리합니다.",
    "{N}이(가) {N}과(와) 상호작용하며 진행됩니다.",
    "{N}을(를) 최적화하면 {N}이(가) 향상됩니다.",
    "{N}은(는) {N}의 품질을 결정하는 요소입니다."
];

// 긴 문장 템플릿 (70-100자+)
const LONG_TEMPLATES = [
    "{N}은(는) {N}의 핵심 요소로서 {N}을(를) 효과적으로 관리할 수 있도록 도와주며, 특히 {N}과(와) 관련된 작업에서 매우 유용합니다.",
    "{N}을(를) 활성화하면 {N}이(가) 즉시 반영되지만, {N}은(는) 별도의 설정이 필요하므로 주의해야 합니다.",
    "{N}은(는) {N}과(와) 긴밀하게 연결되어 있어 {N}을(를) 변경할 경우 {N}에도 영향을 미칠 수 있습니다.",
    "{N}을(를) 통해 {N}을(를) 분석하고 {N}을(를) 개선할 수 있으며, 이는 전반적인 {N} 향상으로 이어집니다.",
    "{N}은(는) 다양한 {N}을(를) 지원하며, 각각의 {N}은(는) 서로 다른 특성을 가지고 있어 상황에 맞게 선택해야 합니다.",
    "{N}이(가) 제대로 작동하려면 {N}이(가) 올바르게 설정되어 있어야 하며, {N}도 함께 확인하는 것이 좋습니다.",
    "{N}을(를) 최적화하는 과정에서 {N}을(를) 고려해야 하고, 동시에 {N}과(와)의 균형도 유지해야 합니다.",
    "{N}은(는) {N}을(를) 기반으로 동작하기 때문에 {N}의 변화는 곧 {N}의 변화를 의미합니다.",
    "{N}을(를) 효율적으로 사용하기 위해서는 {N}을(를) 이해하고 {N}과(와) 함께 활용하는 것이 중요합니다.",
    "{N}이(가) {N}에 미치는 영향은 매우 크며, 따라서 {N}을(를) 신중하게 결정하고 {N}을(를) 지속적으로 모니터링해야 합니다."
];

// 가짜 명사 생성용 음절 리스트
const PREFIXES = [
    // 기존 기술 용어
    "미","재","준","비","상","하","공","복","선","후","단","다","고","저","신","구","대","소","유","무",
    // 일상어 추가
    "시","장","방","과","효","목","이","결","의","가","계","전","실",
    // 비즈니스 용어
    "전","성","기","수","개","운","마"
];

const MIDS = [
    // 기존 기술 용어
    "도","정","합","보","준","결","연","동","분","류","환","산","검","증","축","확","변","환","역","적",
    "참","조","필","터","표","준","설","문","항","목","단","계","흐","름","력","량","집","합","조","절",
    "감","지","원","인","자","무","효","기","반","영","역","성","진","행","범","위","소","대","중","경",
    "차","균","편","산","점","관","리","전","후","접","속","환","림","임","차","고","저","상","하","관",
    "연","보","완","료","곡","선","형","태","제","어","적","합","화","전","달","룰","로","그","래","트",
    "픽","션","키","캡","드","폼","필","드","토","글","배","치","린","크","업","로","드","싱","킹",
    // 일상어 추가
    "간","법","식","용","인","과","미","리","내","외","체","향","태","치","건","경","험","색",
    "안","전","서","수","유","작","현","피","본","취","교","학","습","활","력","장","소","간",
    // 비즈니스 용어
    "략","과","획","표","석","선","영","매","품","가","비","익","손","장","고","객","무","직",
    "책","임","업","적","원","평","심","토","론","의","안","건","서","양","질","측","사","당"
];

const SUFFIXES = [
    // 기존 기술 용어
    "값","율","량","성","도","화","형","안","제","권","항","단","표","력","식","태","점","축","선",
    "순","법","규","룰","키","픽","션","폼","토","글","칙","모","델","뷰","트","링","니","티","스","업","원",
    // 일상어 추가
    "법","식","과","인","물","용","기","차","도","시","간","소","색","향","미","감","질","체",
    // 비즈니스 용어
    "략","획","표","적","과","익","비","가","품","무","직","원","장","부","서","안","건","제"
];

// 금칙어 필터 (간단한 예시)
const FORBIDDEN_WORDS = ["씨발", "병신", "개새", "지랄", "애플", "구글", "삼성", "서울", "부산"];

// ============================================
// 기본 로렘입숨 생성용 데이터
// ============================================

// 한글 유니코드 표준 순서대로 정의
// 초성 (19개) - 유니코드 표준 순서
const INITIALS = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
// 중성 (21개) - 유니코드 표준 순서
const MEDIALS = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
// 종성 (28개) - 유니코드 표준 순서
const FINALS = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

// 빈도별 인덱스 정의
// 초성: 자주 사용하는 자음 (높은 빈도)
const INITIAL_COMMON_INDICES = [0, 2, 3, 5, 6, 7, 9, 11, 12]; // ㄱ,ㄴ,ㄷ,ㄹ,ㅁ,ㅂ,ㅅ,ㅇ,ㅈ
// 초성: 격음/거센소리 (낮은 빈도)
const INITIAL_UNCOMMON_INDICES = [14, 15, 16, 17, 18]; // ㅊ,ㅋ,ㅌ,ㅍ,ㅎ
// 초성: 쌍자음/된소리 (매우 낮은 빈도)
const INITIAL_RARE_INDICES = [1, 4, 8, 10, 13]; // ㄲ,ㄸ,ㅃ,ㅆ,ㅉ

// 중성: 가장 자주 사용하는 단순 모음 (높은 빈도) - ㅏ, ㅓ, ㅣ가 가장 기본
const MEDIAL_COMMON_INDICES = [0, 4, 20]; // ㅏ, ㅓ, ㅣ
// 중성: 중간 빈도 모음
const MEDIAL_MEDIUM_INDICES = [5]; // ㅔ
// 중성: 약간 덜 사용하는 단순 모음 (중간 빈도)
const MEDIAL_SEMI_COMMON_INDICES = [1, 2, 6, 18]; // ㅐ, ㅑ, ㅕ, ㅡ
// 중성: 복합 모음 (낮은 빈도)
const MEDIAL_UNCOMMON_INDICES = [8, 9, 10, 11, 12, 13, 14, 15, 16, 19]; // ㅗ, ㅘ, ㅙ, ㅚ, ㅛ, ㅜ, ㅝ, ㅞ, ㅟ, ㅢ
// 중성: 희귀 모음 (매우 낮은 빈도)
const MEDIAL_RARE_INDICES = [3, 7, 17]; // ㅒ, ㅖ, ㅠ

// 종성: 받침 없음 (높은 빈도)
const FINAL_NONE = [0]; // 받침 없음

// 종성: 허용된 받침만 (ㅇ, ㅂ, ㄱ, ㄴ)
const FINAL_ALLOWED_INDICES = [1, 4, 17, 20]; // ㄱ, ㄴ, ㅂ, ㅇ

// 종성: 사용하지 않는 받침 (완전 제거)
const FINAL_UNCOMMON_INDICES = [7, 8, 16, 19, 21]; // ㄷ, ㄹ, ㅁ, ㅅ, ㅈ (사용 안함)
const FINAL_RARE_INDICES = [22, 23, 24, 25, 26]; // ㅊ, ㅋ, ㅌ, ㅍ, ㅎ (사용 안함)
const FINAL_DOUBLE_INDICES = [2, 3, 5, 6, 9, 10, 11, 12, 13, 14, 15, 18]; // 쌍받침 (사용 안함)

// 하위 호환성을 위해 FINAL_COMMON_INDICES도 동일하게 설정
const FINAL_COMMON_INDICES = FINAL_ALLOWED_INDICES;

// 초성 선택 (일반 자음 98%, 격음 1%, 쌍자음 1%)
function getWeightedInitialIndex() {
    const random = Math.random();

    if (random < 0.98) {
        // 98% 일반 자음
        return INITIAL_COMMON_INDICES[Math.floor(Math.random() * INITIAL_COMMON_INDICES.length)];
    } else if (random < 0.99) {
        // 1% 격음
        return INITIAL_UNCOMMON_INDICES[Math.floor(Math.random() * INITIAL_UNCOMMON_INDICES.length)];
    } else {
        // 1% 쌍자음
        return INITIAL_RARE_INDICES[Math.floor(Math.random() * INITIAL_RARE_INDICES.length)];
    }
}

// 중성 선택 (ㅏㅓㅣ 80%, ㅔ 15%, ㅐㅑㅕㅡ 3%, 복합 모음 1%, 희귀 모음 1%)
function getWeightedMedialIndex() {
    const random = Math.random();

    if (random < 0.80) {
        // 80% 기본 단순 모음 (ㅏ, ㅓ, ㅣ)
        return MEDIAL_COMMON_INDICES[Math.floor(Math.random() * MEDIAL_COMMON_INDICES.length)];
    } else if (random < 0.95) {
        // 15% 중간 빈도 (ㅔ)
        return MEDIAL_MEDIUM_INDICES[0];
    } else if (random < 0.98) {
        // 3% 덜 쓰는 단순 모음 (ㅐ, ㅑ, ㅕ, ㅡ)
        return MEDIAL_SEMI_COMMON_INDICES[Math.floor(Math.random() * MEDIAL_SEMI_COMMON_INDICES.length)];
    } else if (random < 0.99) {
        // 1% 복합 모음
        return MEDIAL_UNCOMMON_INDICES[Math.floor(Math.random() * MEDIAL_UNCOMMON_INDICES.length)];
    } else {
        // 1% 희귀 모음
        return MEDIAL_RARE_INDICES[Math.floor(Math.random() * MEDIAL_RARE_INDICES.length)];
    }
}

// 종성 선택 (받침 없음 85%, 허용된 받침만 15%)
function getWeightedFinalIndex() {
    const random = Math.random();

    // 85% 확률로 받침 없음
    if (random < 0.85) {
        return FINAL_NONE[0];
    }

    // 15% 확률로 허용된 받침 (ㄱ, ㄴ, ㅂ, ㅇ) - 균형있게 분배
    const finalRandom = Math.random();
    // ㄴ, ㅇ이 조금 더 자주 나오도록 (각 30%), ㄱ, ㅂ은 각 20%
    if (finalRandom < 0.20) {
        return 1; // ㄱ
    } else if (finalRandom < 0.50) {
        return 4; // ㄴ
    } else if (finalRandom < 0.70) {
        return 17; // ㅂ
    } else {
        return 20; // ㅇ
    }
}

// 쌍받침 제거 (더 이상 사용 안함)
function getWeightedFinalIndexWithDouble() {
    // 단순히 일반 종성 선택만 사용
    return getWeightedFinalIndex();
}

// 한글 음절 생성 함수
function generateKoreanSyllable() {
    const initialIndex = getWeightedInitialIndex(); // 일반 자음 89%, 격음 10%, 쌍자음 1%
    const medialIndex = getWeightedMedialIndex(); // 기본 모음 79%, ㅐㅑㅕ 10%, 복합 모음 10%, 희귀 모음 1%
    let finalIndex = getWeightedFinalIndexWithDouble(); // 받침 없음 85%, 받침 있음 15% (쌍받침 0.5%)

    // 부자연스러운 조합 방지 규칙 (모든 희귀 조합 1% 이하로 통일)
    // 1. 희귀 모음(ㅒ,ㅖ,ㅠ) + 받침 -> 100% 받침 제거
    if (MEDIAL_RARE_INDICES.includes(medialIndex) && finalIndex !== 0) {
        finalIndex = 0; // 받침 제거
    }

    // 2. 복합 모음 + 받침 -> 99% 받침 제거 (1%만 허용)
    if (MEDIAL_UNCOMMON_INDICES.includes(medialIndex) && finalIndex !== 0) {
        // 복합 모음은 받침 없는 경우가 대부분 (왜, 워, 위, 외 등)
        // 극소수만 받침 허용 (1% 확률)
        if (Math.random() > 0.01) {
            finalIndex = 0;
        }
    }

    // 3. 덜 쓰는 단순 모음(ㅐ,ㅑ,ㅕ) + 받침 -> 99% 받침 제거 (1%만 허용, 자주 쓰는 받침만)
    if (MEDIAL_SEMI_COMMON_INDICES.includes(medialIndex) && finalIndex !== 0) {
        // 얘, 예, 야, 여 형태가 대부분
        // 받침 있는 경우는 1% 확률로만 허용, 복잡한 받침은 100% 제거
        if (Math.random() > 0.01 ||
            FINAL_UNCOMMON_INDICES.includes(finalIndex) ||
            FINAL_RARE_INDICES.includes(finalIndex) ||
            FINAL_DOUBLE_INDICES.includes(finalIndex)) {
            finalIndex = 0;
        }
    }

    // 4. 쌍자음 초성 + 복잡한 받침 -> 받침 제거
    if (INITIAL_RARE_INDICES.includes(initialIndex) &&
        (FINAL_UNCOMMON_INDICES.includes(finalIndex) || FINAL_RARE_INDICES.includes(finalIndex) || FINAL_DOUBLE_INDICES.includes(finalIndex))) {
        finalIndex = 0;
    }

    // 5. 격음 초성 + 복잡한 받침 -> 받침 제거
    if (INITIAL_UNCOMMON_INDICES.includes(initialIndex) &&
        (FINAL_RARE_INDICES.includes(finalIndex) || FINAL_DOUBLE_INDICES.includes(finalIndex))) {
        finalIndex = 0;
    }

    // 유니코드 조합: 0xAC00 + (초성 × 21 × 28) + (중성 × 28) + 종성
    const unicode = 0xAC00 + (initialIndex * 21 * 28) + (medialIndex * 28) + finalIndex;
    return String.fromCharCode(unicode);
}

// 가짜 한글 단어 생성 (2-3 음절)
function generateFakeWord() {
    const syllableCount = Math.floor(Math.random() * 2) + 2; // 2~3 음절
    let word = '';
    let prevSyllable = '';

    for (let i = 0; i < syllableCount; i++) {
        let syllable = generateKoreanSyllable();

        // 연속 음절 중복 방지 (같은 글자가 연속으로 나오지 않도록)
        let attempts = 0;
        while (syllable === prevSyllable && attempts < 10) {
            syllable = generateKoreanSyllable();
            attempts++;
        }

        word += syllable;
        prevSyllable = syllable;
    }
    return word;
}

// 조사 목록
const particles = ['은', '는', '이', '가', '을', '를', '의', '에', '에서', '으로', '로', '와', '과', '도'];

// 문장 종결어미
const endings = ['다.', '습니다.', '니다.', '요.', '네요.', '어요.', '죠.', '군요.', '네.'];

// 랜덤 조사 선택
function getRandomParticle() {
    return particles[Math.floor(Math.random() * particles.length)];
}

// 랜덤 종결어미 선택
function getRandomEnding() {
    return endings[Math.floor(Math.random() * endings.length)];
}

// 문장 생성 (3-8 단어)
function generateSentence() {
    const wordCount = Math.floor(Math.random() * 6) + 3; // 3~8개 단어
    let sentence = '';

    for (let i = 0; i < wordCount; i++) {
        sentence += generateFakeWord();
        if (i < wordCount - 1) {
            sentence += getRandomParticle() + ' ';
        }
    }

    sentence += getRandomEnding();
    return sentence;
}

// 한글 로렘입숨 생성
function generateKoreanLoremIpsum(targetLength) {
    let text = '';

    while (text.length < targetLength) {
        const sentence = generateSentence();
        text += sentence + ' ';
    }

    // 목표 길이에 맞게 자르기
    return text.substring(0, targetLength).trim();
}

// ============================================
// 가짜 문장 생성 로직
// ============================================

// 가짜 명사 생성 (2-4음절, Prefix/Mid/Suffix 조합)
function generateFakeNoun() {
    const syllableCount = Math.floor(Math.random() * 3) + 2; // 2~4음절
    let noun = '';

    for (let i = 0; i < syllableCount; i++) {
        let syllable;
        if (i === 0 && Math.random() < 0.3) {
            // 30% 확률로 prefix 사용
            syllable = PREFIXES[Math.floor(Math.random() * PREFIXES.length)];
        } else if (i === syllableCount - 1 && Math.random() < 0.4) {
            // 40% 확률로 suffix 사용
            syllable = SUFFIXES[Math.floor(Math.random() * SUFFIXES.length)];
        } else {
            // mid 사용
            syllable = MIDS[Math.floor(Math.random() * MIDS.length)];
        }
        noun += syllable;
    }

    // 금칙어 필터링
    for (const forbidden of FORBIDDEN_WORDS) {
        if (noun.includes(forbidden)) {
            return generateFakeNoun(); // 재생성
        }
    }

    return noun;
}

// 조사 붙이기 (은/는, 이/가, 을/를, 과/와, 로/으로)
function attachParticle(noun, particleType) {
    const lastChar = noun[noun.length - 1];
    const lastCharCode = lastChar.charCodeAt(0) - 0xAC00;
    const hasFinal = (lastCharCode % 28) !== 0; // 받침 있는지 확인

    if (particleType === '은(는)') {
        return noun + (hasFinal ? '은' : '는');
    } else if (particleType === '이(가)') {
        return noun + (hasFinal ? '이' : '가');
    } else if (particleType === '을(를)') {
        return noun + (hasFinal ? '을' : '를');
    } else if (particleType === '과(와)') {
        return noun + (hasFinal ? '과' : '와');
    } else if (particleType === '로(으로)') {
        // ㄹ 받침일 경우 '로', 기타 받침이면 '으로', 받침 없으면 '로'
        const finalIndex = lastCharCode % 28;
        if (finalIndex === 8) { // ㄹ 받침
            return noun + '로';
        } else if (hasFinal) {
            return noun + '으로';
        } else {
            return noun + '로';
        }
    }
    return noun;
}

// 템플릿에서 {N} 슬롯 치환 (같은 명사 반복 방지)
function fillTemplate(template) {
    const usedNouns = []; // 이 문장에서 사용된 명사 추적

    return template.replace(/\{N\}/g, () => {
        let noun = generateFakeNoun();
        let attempts = 0;

        // 중복 방지: 이미 사용된 명사면 다시 생성 (최대 10번 시도)
        while (usedNouns.includes(noun) && attempts < 10) {
            noun = generateFakeNoun();
            attempts++;
        }

        usedNouns.push(noun);
        return noun;
    }).replace(/(\S+)(은\(는\)|이\(가\)|을\(를\)|과\(와\)|로\(으로\))/g, (match, noun, particle) => {
        return attachParticle(noun, particle);
    });
}

// 랜덤 접속사 선택
function getRandomConjunction() {
    return CONJUNCTIONS[Math.floor(Math.random() * CONJUNCTIONS.length)];
}

// 문장 타입별 생성 함수
function generateShortSentence() {
    const template = SHORT_TEMPLATES[Math.floor(Math.random() * SHORT_TEMPLATES.length)];
    return fillTemplate(template);
}

function generateMediumSentence() {
    const template = MEDIUM_TEMPLATES[Math.floor(Math.random() * MEDIUM_TEMPLATES.length)];
    return fillTemplate(template);
}

function generateLongSentence() {
    const template = LONG_TEMPLATES[Math.floor(Math.random() * LONG_TEMPLATES.length)];
    return fillTemplate(template);
}

// 가짜 문장 생성 (문장 길이 다양화)
function generateFakeSentence() {
    const random = Math.random();

    if (random < 0.3) {
        // 30% 짧은 문장
        return generateShortSentence();
    } else if (random < 0.8) {
        // 50% 중간 문장
        return generateMediumSentence();
    } else {
        // 20% 긴 문장
        return generateLongSentence();
    }
}

// 가짜 문장 로렘입숨 생성 (접속사 연결 및 문단 구분)
function generateFakeSentenceLoremIpsum(targetLength) {
    let text = '';
    let sentenceCount = 0;

    while (text.length < targetLength) {
        const sentence = generateFakeSentence();
        text += sentence;
        sentenceCount++;

        // 문장이 목표 길이에 도달하지 않았을 때만 계속 진행
        if (text.length < targetLength) {
            // 30% 확률로 접속사로 연결, 70% 확률로 마침표 + 공백
            if (Math.random() < 0.3) {
                text += ' ' + getRandomConjunction() + ' ';
            } else {
                text += ' ';

                // 3-5문장마다 문단 구분 (랜덤하게)
                const paragraphBreak = Math.floor(Math.random() * 3) + 3; // 3~5
                if (sentenceCount % paragraphBreak === 0 && text.length < targetLength * 0.9) {
                    text += '\n';
                }
            }
        }
    }

    return text.substring(0, targetLength).trim();
}

// DOM 요소
const charCountInput = document.getElementById('charCount');
const generateBtn = document.getElementById('generateBtn');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
const output3 = document.getElementById('output3');
const toast = document.getElementById('toast');

// 생성 버튼 클릭
generateBtn.addEventListener('click', () => {
    const targetLength = parseInt(charCountInput.value) || 300;

    if (targetLength < 10) {
        alert('최소 10글자 이상 입력해주세요.');
        return;
    }

    if (targetLength > 10000) {
        alert('최대 10,000글자까지 생성 가능합니다.');
        return;
    }

    // 각 카드에 다른 가짜 문장 생성
    output1.value = generateFakeSentenceLoremIpsum(targetLength);
    output2.value = generateFakeSentenceLoremIpsum(targetLength);
    output3.value = generateFakeSentenceLoremIpsum(targetLength);
});

// overlay 클릭으로 복사
const overlays = document.querySelectorAll('.card-overlay');
overlays.forEach(overlay => {
    overlay.addEventListener('click', async () => {
        const card = overlay.parentElement;
        const targetId = card.dataset.target;
        const targetTextarea = document.getElementById(targetId);

        if (!targetTextarea.value) {
            alert('복사할 텍스트가 없습니다. 먼저 생성해주세요.');
            return;
        }

        try {
            await navigator.clipboard.writeText(targetTextarea.value);
            showToast();
        } catch (err) {
            // Fallback 복사 방법
            targetTextarea.select();
            document.execCommand('copy');
            showToast();
        }
    });
});

// copy 아이콘 버튼 클릭으로 복사
const copyIconButtons = document.querySelectorAll('.copy-icon-button');
copyIconButtons.forEach(button => {
    button.addEventListener('click', async (e) => {
        e.stopPropagation(); // 카드 클릭 이벤트 전파 방지
        const targetId = button.dataset.target;
        const targetTextarea = document.getElementById(targetId);

        if (!targetTextarea.value) {
            alert('복사할 텍스트가 없습니다. 먼저 생성해주세요.');
            return;
        }

        try {
            await navigator.clipboard.writeText(targetTextarea.value);
            showToast();
        } catch (err) {
            // Fallback 복사 방법
            targetTextarea.select();
            document.execCommand('copy');
            showToast();
        }
    });
});

// 토스트 메시지 표시
function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Enter 키로 생성
charCountInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateBtn.click();
    }
});

// 페이지 로드 시 자동 생성
window.addEventListener('load', () => {
    generateBtn.click();
});

// 정보 섹션 토글
const infoToggle = document.getElementById('infoToggle');
const infoContent = document.getElementById('infoContent');

if (infoToggle && infoContent) {
    infoToggle.addEventListener('click', () => {
        if (infoContent.style.display === 'none') {
            infoContent.style.display = 'block';
        } else {
            infoContent.style.display = 'none';
        }
    });
}
