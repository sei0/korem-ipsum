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

// DOM 요소
const charCountInput = document.getElementById('charCount');
const generateBtn = document.getElementById('generateBtn');
const outputText = document.getElementById('outputText');
const currentCharCount = document.getElementById('currentCharCount');
const copyBtn = document.getElementById('copyBtn');
const toast = document.getElementById('toast');

// 글자 수 업데이트
function updateCharCount() {
    const count = outputText.value.length;
    currentCharCount.textContent = count;
}

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

    const loremText = generateKoreanLoremIpsum(targetLength);
    outputText.value = loremText;
    updateCharCount();
});

// 복사 버튼 클릭
copyBtn.addEventListener('click', async () => {
    if (!outputText.value) {
        alert('복사할 텍스트가 없습니다. 먼저 생성해주세요.');
        return;
    }

    try {
        await navigator.clipboard.writeText(outputText.value);
        showToast();
    } catch (err) {
        // Fallback 복사 방법
        outputText.select();
        document.execCommand('copy');
        showToast();
    }
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
