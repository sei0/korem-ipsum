// ============================================
// Korem Ipsum - Figma Plugin
// 한글 더미 텍스트 생성기
// ============================================

// ============================================
// 가짜 문장 생성용 데이터
// ============================================

const CONJUNCTIONS = [
    '그리고', '하지만', '그러나', '또한', '따라서',
    '즉', '예를 들어', '반면에', '게다가', '다만',
    '왜냐하면', '그래서', '물론', '특히', '실제로',
    '한편', '더욱이', '이처럼', '그럼에도', '결국'
];

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

const PREFIXES = [
    "미","재","준","비","상","하","공","복","선","후","단","다","고","저","신","구","대","소","유","무",
    "시","장","방","과","효","목","이","결","의","가","계","전","실",
    "전","성","기","수","개","운","마"
];

const MIDS = [
    "도","정","합","보","준","결","연","동","분","류","환","산","검","증","축","확","변","환","역","적",
    "참","조","필","터","표","준","설","문","항","목","단","계","흐","름","력","량","집","합","조","절",
    "감","지","원","인","자","무","효","기","반","영","역","성","진","행","범","위","소","대","중","경",
    "차","균","편","산","점","관","리","전","후","접","속","환","림","임","차","고","저","상","하","관",
    "연","보","완","료","곡","선","형","태","제","어","적","합","화","전","달","룰","로","그","래","트",
    "픽","션","키","캡","드","폼","필","드","토","글","배","치","린","크","업","로","드","싱","킹",
    "간","법","식","용","인","과","미","리","내","외","체","향","태","치","건","경","험","색",
    "안","전","서","수","유","작","현","피","본","취","교","학","습","활","력","장","소","간",
    "략","과","획","표","석","선","영","매","품","가","비","익","손","장","고","객","무","직",
    "책","임","업","적","원","평","심","토","론","의","안","건","서","양","질","측","사","당"
];

const SUFFIXES = [
    "값","율","량","성","도","화","형","안","제","권","항","단","표","력","식","태","점","축","선",
    "순","법","규","룰","키","픽","션","폼","토","글","칙","모","델","뷰","트","링","니","티","스","업","원",
    "법","식","과","인","물","용","기","차","도","시","간","소","색","향","미","감","질","체",
    "략","획","표","적","과","익","비","가","품","무","직","원","장","부","서","안","건","제"
];

const FORBIDDEN_WORDS = ["씨발", "병신", "개새", "지랄", "애플", "구글", "삼성", "서울", "부산"];

// ============================================
// 한글 음절 생성용 데이터
// ============================================

const INITIALS = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const MEDIALS = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
const FINALS = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

// 빈도별 인덱스
const INITIAL_COMMON_INDICES = [0, 2, 3, 5, 6, 7, 9, 11, 12];
const INITIAL_UNCOMMON_INDICES = [14, 15, 16, 17, 18];
const INITIAL_RARE_INDICES = [1, 4, 8, 10, 13];

const MEDIAL_COMMON_INDICES = [0, 4, 20];
const MEDIAL_MEDIUM_INDICES = [5];
const MEDIAL_SEMI_COMMON_INDICES = [1, 2, 6, 18];
const MEDIAL_UNCOMMON_INDICES = [8, 9, 10, 11, 12, 13, 14, 15, 16, 19];
const MEDIAL_RARE_INDICES = [3, 7, 17];

const FINAL_NONE = [0];
const FINAL_ALLOWED_INDICES = [1, 4, 17, 20];
const FINAL_UNCOMMON_INDICES = [7, 8, 16, 19, 21];
const FINAL_RARE_INDICES = [22, 23, 24, 25, 26];
const FINAL_DOUBLE_INDICES = [2, 3, 5, 6, 9, 10, 11, 12, 13, 14, 15, 18];

// ============================================
// 음절 생성 함수
// ============================================

function getWeightedInitialIndex() {
    const random = Math.random();
    if (random < 0.98) {
        return INITIAL_COMMON_INDICES[Math.floor(Math.random() * INITIAL_COMMON_INDICES.length)];
    } else if (random < 0.99) {
        return INITIAL_UNCOMMON_INDICES[Math.floor(Math.random() * INITIAL_UNCOMMON_INDICES.length)];
    } else {
        return INITIAL_RARE_INDICES[Math.floor(Math.random() * INITIAL_RARE_INDICES.length)];
    }
}

function getWeightedMedialIndex() {
    const random = Math.random();
    if (random < 0.80) {
        return MEDIAL_COMMON_INDICES[Math.floor(Math.random() * MEDIAL_COMMON_INDICES.length)];
    } else if (random < 0.95) {
        return MEDIAL_MEDIUM_INDICES[0];
    } else if (random < 0.98) {
        return MEDIAL_SEMI_COMMON_INDICES[Math.floor(Math.random() * MEDIAL_SEMI_COMMON_INDICES.length)];
    } else if (random < 0.99) {
        return MEDIAL_UNCOMMON_INDICES[Math.floor(Math.random() * MEDIAL_UNCOMMON_INDICES.length)];
    } else {
        return MEDIAL_RARE_INDICES[Math.floor(Math.random() * MEDIAL_RARE_INDICES.length)];
    }
}

function getWeightedFinalIndex() {
    const random = Math.random();
    if (random < 0.85) {
        return FINAL_NONE[0];
    }
    const finalRandom = Math.random();
    if (finalRandom < 0.20) {
        return 1;  // ㄱ
    } else if (finalRandom < 0.50) {
        return 4;  // ㄴ
    } else if (finalRandom < 0.70) {
        return 17; // ㅂ
    } else {
        return 20; // ㅇ
    }
}

function generateKoreanSyllable() {
    const initialIndex = getWeightedInitialIndex();
    const medialIndex = getWeightedMedialIndex();
    let finalIndex = getWeightedFinalIndex();

    // 부자연스러운 조합 방지
    if (MEDIAL_RARE_INDICES.includes(medialIndex) && finalIndex !== 0) {
        finalIndex = 0;
    }
    if (MEDIAL_UNCOMMON_INDICES.includes(medialIndex) && finalIndex !== 0) {
        if (Math.random() > 0.01) finalIndex = 0;
    }
    if (MEDIAL_SEMI_COMMON_INDICES.includes(medialIndex) && finalIndex !== 0) {
        if (Math.random() > 0.01 ||
            FINAL_UNCOMMON_INDICES.includes(finalIndex) ||
            FINAL_RARE_INDICES.includes(finalIndex) ||
            FINAL_DOUBLE_INDICES.includes(finalIndex)) {
            finalIndex = 0;
        }
    }
    if (INITIAL_RARE_INDICES.includes(initialIndex) &&
        (FINAL_UNCOMMON_INDICES.includes(finalIndex) || FINAL_RARE_INDICES.includes(finalIndex) || FINAL_DOUBLE_INDICES.includes(finalIndex))) {
        finalIndex = 0;
    }
    if (INITIAL_UNCOMMON_INDICES.includes(initialIndex) &&
        (FINAL_RARE_INDICES.includes(finalIndex) || FINAL_DOUBLE_INDICES.includes(finalIndex))) {
        finalIndex = 0;
    }

    const unicode = 0xAC00 + (initialIndex * 21 * 28) + (medialIndex * 28) + finalIndex;
    return String.fromCharCode(unicode);
}

// ============================================
// 단어 & 명사 생성
// ============================================

function generateFakeNoun() {
    const syllableCount = Math.floor(Math.random() * 3) + 2;
    let noun = '';

    for (let i = 0; i < syllableCount; i++) {
        let syllable;
        if (i === 0 && Math.random() < 0.3) {
            syllable = PREFIXES[Math.floor(Math.random() * PREFIXES.length)];
        } else if (i === syllableCount - 1 && Math.random() < 0.4) {
            syllable = SUFFIXES[Math.floor(Math.random() * SUFFIXES.length)];
        } else {
            syllable = MIDS[Math.floor(Math.random() * MIDS.length)];
        }
        noun += syllable;
    }

    for (const forbidden of FORBIDDEN_WORDS) {
        if (noun.includes(forbidden)) {
            return generateFakeNoun();
        }
    }

    return noun;
}

// ============================================
// 조사 처리
// ============================================

function attachParticle(noun, particleType) {
    const lastChar = noun[noun.length - 1];
    const lastCharCode = lastChar.charCodeAt(0) - 0xAC00;
    const hasFinal = (lastCharCode % 28) !== 0;

    if (particleType === '은(는)') {
        return noun + (hasFinal ? '은' : '는');
    } else if (particleType === '이(가)') {
        return noun + (hasFinal ? '이' : '가');
    } else if (particleType === '을(를)') {
        return noun + (hasFinal ? '을' : '를');
    } else if (particleType === '과(와)') {
        return noun + (hasFinal ? '과' : '와');
    } else if (particleType === '로(으로)') {
        const finalIndex = lastCharCode % 28;
        if (finalIndex === 8) {
            return noun + '로';
        } else if (hasFinal) {
            return noun + '으로';
        } else {
            return noun + '로';
        }
    }
    return noun;
}

// ============================================
// 템플릿 & 문장 생성
// ============================================

function fillTemplate(template) {
    const usedNouns = [];

    return template.replace(/\{N\}/g, () => {
        let noun = generateFakeNoun();
        let attempts = 0;
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

function getRandomConjunction() {
    return CONJUNCTIONS[Math.floor(Math.random() * CONJUNCTIONS.length)];
}

function generateShortSentence() {
    return fillTemplate(SHORT_TEMPLATES[Math.floor(Math.random() * SHORT_TEMPLATES.length)]);
}

function generateMediumSentence() {
    return fillTemplate(MEDIUM_TEMPLATES[Math.floor(Math.random() * MEDIUM_TEMPLATES.length)]);
}

function generateLongSentence() {
    return fillTemplate(LONG_TEMPLATES[Math.floor(Math.random() * LONG_TEMPLATES.length)]);
}

function generateFakeSentence() {
    const random = Math.random();
    if (random < 0.3) {
        return generateShortSentence();
    } else if (random < 0.8) {
        return generateMediumSentence();
    } else {
        return generateLongSentence();
    }
}

// ============================================
// 말투 변환
// ============================================

function convertTone(text, tone) {
    if (tone === 'formal') {
        return text;
    } else if (tone === 'polite') {
        return text
            .replace(/좋습니다\./g, '좋아요.')
            .replace(/좋습니다,/g, '좋아요,')
            .replace(/같습니다\./g, '같아요.')
            .replace(/같습니다,/g, '같아요,')
            .replace(/작습니다\./g, '작아요.')
            .replace(/작습니다,/g, '작아요,')
            .replace(/많습니다\./g, '많아요.')
            .replace(/많습니다,/g, '많아요,')
            .replace(/적습니다\./g, '적어요.')
            .replace(/적습니다,/g, '적어요,')
            .replace(/합니다\./g, '해요.')
            .replace(/됩니다\./g, '돼요.')
            .replace(/입니다\./g, '이에요.')
            .replace(/있습니다\./g, '있어요.')
            .replace(/없습니다\./g, '없어요.')
            .replace(/습니다\./g, '어요.')
            .replace(/하십시오\./g, '하세요.')
            .replace(/하세요\./g, '하세요.')
            .replace(/합니다,/g, '해요,')
            .replace(/됩니다,/g, '돼요,')
            .replace(/있습니다,/g, '있어요,')
            .replace(/없습니다,/g, '없어요,')
            .replace(/습니다,/g, '어요,');
    } else if (tone === 'casual') {
        return text
            .replace(/습니다\./g, '다.')
            .replace(/합니다\./g, '한다.')
            .replace(/됩니다\./g, '된다.')
            .replace(/입니다\./g, '이다.')
            .replace(/있습니다\./g, '있다.')
            .replace(/없습니다\./g, '없다.')
            .replace(/하십시오\./g, '하라.')
            .replace(/하세요\./g, '하라.')
            .replace(/합니다,/g, '한다,')
            .replace(/됩니다,/g, '된다,')
            .replace(/습니다,/g, '다,')
            .replace(/있습니다,/g, '있다,')
            .replace(/없습니다,/g, '없다,');
    }
    return text;
}

// ============================================
// 메인 생성 함수
// ============================================

function generateFakeSentenceLoremIpsum(targetLength, tone) {
    if (!tone) tone = 'formal';
    let text = '';
    let sentenceCount = 0;

    while (text.length < targetLength) {
        const sentence = generateFakeSentence();
        text += sentence;
        sentenceCount++;

        if (text.length < targetLength) {
            if (Math.random() < 0.3) {
                text += ' ' + getRandomConjunction() + ' ';
            } else {
                text += ' ';
                const paragraphBreak = Math.floor(Math.random() * 3) + 3;
                if (sentenceCount % paragraphBreak === 0 && text.length < targetLength * 0.9) {
                    text += '\n';
                }
            }
        }
    }

    text = convertTone(text, tone);
    return text.substring(0, targetLength).trim();
}

// ============================================
// Figma Plugin Integration
// ============================================

figma.showUI(__html__, { width: 340, height: 520, themeColors: true });

figma.ui.onmessage = async (msg) => {
    if (msg.type === 'generate') {
        const { charCount, tone, mode } = msg;
        const text = generateFakeSentenceLoremIpsum(charCount, tone);
        const selection = figma.currentPage.selection;

        try {
            if (mode === 'selection' && selection.length > 0) {
                // Insert into selected text nodes
                let inserted = false;
                for (const node of selection) {
                    if (node.type === 'TEXT') {
                        // Handle mixed fonts
                        const fontName = node.fontName === figma.mixed
                            ? { family: "Inter", style: "Regular" }
                            : node.fontName;
                        await figma.loadFontAsync(fontName);
                        node.characters = text;
                        inserted = true;
                    }
                }

                if (!inserted) {
                    figma.ui.postMessage({
                        type: 'error',
                        message: '선택된 텍스트 레이어가 없습니다.\n텍스트 레이어를 선택하거나 "새 텍스트 만들기" 모드를 사용하세요.'
                    });
                    return;
                }
            } else {
                // Create new text node
                const textNode = figma.createText();
                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                textNode.characters = text;
                textNode.fontSize = 16;

                // Position at viewport center
                const center = figma.viewport.center;
                textNode.x = center.x - 150;
                textNode.y = center.y - 50;

                // Set text box width for readability
                textNode.resize(400, textNode.height);
                textNode.textAutoResize = 'HEIGHT';

                figma.currentPage.selection = [textNode];
                figma.viewport.scrollAndZoomIntoView([textNode]);
            }

            figma.ui.postMessage({ type: 'success', charCount: text.length });
        } catch (error) {
            figma.ui.postMessage({
                type: 'error',
                message: '텍스트 삽입 중 오류가 발생했습니다: ' + error.message
            });
        }
    }

    if (msg.type === 'close') {
        figma.closePlugin();
    }
};

// Listen for selection changes to update UI
figma.on('selectionchange', () => {
    const selection = figma.currentPage.selection;
    const hasTextSelection = selection.some(node => node.type === 'TEXT');
    figma.ui.postMessage({
        type: 'selection-changed',
        hasTextSelection: hasTextSelection,
        selectionCount: selection.filter(n => n.type === 'TEXT').length
    });
});
