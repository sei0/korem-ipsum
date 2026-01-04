// ============================================
// 가짜 문장 생성용 데이터
// ============================================

// UI 카피형 템플릿 50개
const SENTENCE_TEMPLATES = [
    "{N} 설정은 {N}에서 확인할 수 있습니다.",
    "{N}을(를) 변경하면 {N}이(가) 즉시 반영됩니다.",
    "{N}은(는) {N} 기준으로 적용됩니다.",
    "{N}을(를) 선택하면 {N} 옵션이 표시됩니다.",
    "{N}은(는) 기본값으로 설정되어 있습니다.",
    "{N} 항목을 추가하면 {N}이(가) 자동으로 갱신됩니다.",
    "{N}을(를) 저장하면 {N} 기록이 생성됩니다.",
    "{N} 기능은 {N}에서 사용할 수 있습니다.",
    "{N}을(를) 활성화하면 {N}이(가) 적용됩니다.",
    "{N}은(는) {N}에 따라 다르게 표시될 수 있습니다.",
    "{N} 정보는 {N}에서만 확인 가능합니다.",
    "{N} 변경 사항은 잠시 후 적용됩니다.",
    "{N}이(가) 저장되었습니다.",
    "{N} 설정이 적용되었습니다.",
    "{N} 업데이트가 완료되었습니다.",
    "{N}이(가) 정상적으로 처리되었습니다.",
    "{N}이(가) 생성되었습니다.",
    "{N}이(가) 삭제되었습니다.",
    "{N}이(가) 변경되었습니다.",
    "{N}이(가) 동기화되었습니다.",
    "{N} 처리 중 문제가 발생했습니다.",
    "{N}을(를) 불러올 수 없습니다.",
    "{N}이(가) 유효하지 않습니다.",
    "{N}이(가) 누락되었습니다.",
    "{N} 형식이 올바르지 않습니다.",
    "{N}이(가) 이미 존재합니다.",
    "{N} 권한이 없습니다.",
    "{N} 연결이 끊어졌습니다.",
    "{N}을(를) 저장할 수 없습니다.",
    "{N}이(가) 잠시 후 다시 시도해주세요.",
    "{N}이(가) 제한되었습니다.",
    "{N} 상태를 확인해주세요.",
    "{N}을(를) 변경하면 {N}에 영향을 줄 수 있습니다.",
    "{N}은(는) 되돌릴 수 없습니다.",
    "{N}이(가) 적용되지 않을 수 있습니다.",
    "{N}을(를) 삭제하면 관련 {N}도 함께 제거됩니다.",
    "{N}을(를) 계속 진행하시겠습니까?",
    "{N}이(가) 오래 걸릴 수 있습니다.",
    "{N}을(를) 확인한 후 진행해주세요.",
    "{N}이(가) 일부만 저장될 수 있습니다.",
    "{N}을(를) 입력해주세요.",
    "{N}을(를) 선택해주세요.",
    "{N}을(를) 추가해주세요.",
    "{N}을(를) 다시 시도해주세요.",
    "{N}을(를) 확인해주세요.",
    "{N}을(를) 업데이트해주세요.",
    "{N}을(를) 저장해주세요.",
    "{N}을(를) 새로고침해주세요.",
    "{N}을(를) 설정해주세요.",
    "{N}을(를) 연결해주세요."
];

// 가짜 명사 생성용 음절 리스트
const PREFIXES = ["미","재","준","비","상","하","공","복","선","후","단","다","고","저","신","구","대","소","유","무"];
const MIDS = ["도","정","합","보","준","결","연","동","분","류","환","산","검","증","축","확","변","환","역","적","참","조","필","터","표","준","설","문","항","목","단","계","흐","름","력","량","집","합","조","절","감","지","원","인","자","무","효","기","반","영","역","성","진","행","범","위","소","대","중","경","차","균","편","산","점","관","리","전","후","접","속","환","림","임","차","고","저","상","하","관","연","보","완","료","곡","선","형","태","제","어","적","합","화","전","달","룰","로","그","래","트","픽","션","키","캡","드","폼","필","드","토","글","배","치","린","크","업","로","드","싱","킹"];
const SUFFIXES = ["값","율","량","성","도","화","형","안","제","권","항","단","표","력","식","태","점","축","선","순","법","규","룰","키","픽","션","폼","토","글","칙","모","델","뷰","트","링","니","티","스","업","원"];

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

// 조사 붙이기 (은/는, 이/가, 을/를)
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
    }
    return noun;
}

// 템플릿에서 {N} 슬롯 치환
function fillTemplate(template) {
    return template.replace(/\{N\}/g, () => {
        const noun = generateFakeNoun();
        // 조사 패턴 감지 및 처리
        return noun;
    }).replace(/(\S+)(은\(는\)|이\(가\)|을\(를\))/g, (match, noun, particle) => {
        return attachParticle(noun, particle);
    });
}

// 가짜 문장 생성
function generateFakeSentence() {
    const template = SENTENCE_TEMPLATES[Math.floor(Math.random() * SENTENCE_TEMPLATES.length)];
    return fillTemplate(template);
}

// 가짜 문장 로렘입숨 생성
function generateFakeSentenceLoremIpsum(targetLength) {
    let text = '';

    while (text.length < targetLength) {
        const sentence = generateFakeSentence();
        text += sentence + ' ';
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
