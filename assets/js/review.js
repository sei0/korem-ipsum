// Review Generation Script

// ========================================
// Review Templates Data
// ========================================

const REVIEW_INTROS = [
    "고민하다가 {상품} 구매했는데 정말 만족스러워요.",
    "친구 추천으로 {상품} 받아보고 기대 이상이에요.",
    "평소에 관심 있었던 {상품} 사용해봤는데 좋네요.",
    "이번에 할인해서 {상품} 구매했어요.",
    "생각보다 배송이 빨라서 {상품} 빠르게 잘 받았습니다.",
    "리뷰 보고 구매한 {상품} 주문했는데 너무 마음에 들어요.",
    "처음 써보는 {상품}인데 써보니까 괜찮은 것 같아요.",
    "오랜만에 쇼핑했는데 드디어 {상품} 받았어요!",
    "여러 제품 비교해보다가 선택한 {상품} 구매 후기 남겨요.",
    "기대 안 하고 주문했는데 {상품} 생각보다 훨씬 좋아요.",
    "필요해서 급하게 주문한 {상품}인데 정말 잘 샀어요.",
    "후기 좋길래 믿고 구매한 {상품}이에요.",
    "오래 고민하다가 결정한 {상품} 배송 받았습니다.",
    "처음엔 망설였는데 {상품} 받아보니 후회 없네요."
];

const REVIEW_BODY_SENTENCES = {
    quality: [
        "품질이 정말 좋아서 오래 쓸 수 있을 것 같아요.",
        "생각보다 퀄리티가 훨씬 훌륭해서 놀랐어요.",
        "마감 처리가 꼼꼼하게 되어 있어서 완성도가 높네요.",
        "만듦새가 탄탄하고 튼튼해서 믿음이 가요.",
        "품질 면에서 만족스럽고 가격 대비 아주 좋습니다.",
        "내구성이 좋아 보이고 오래 사용해도 문제없을 것 같아요.",
        "재질이 튼튼하고 견고해서 안심하고 쓸 수 있어요.",
        "퀄리티 대비 가격이 착해서 가성비가 정말 좋네요.",
        "실제로 만져보니 품질이 기대 이상으로 훌륭했어요.",
        "세부적인 마감까지 신경 쓴 티가 나서 마음에 들어요."
    ],
    design: [
        "디자인이 예쁘고 세련돼서 어디에 두어도 잘 어울려요.",
        "색상이 사진과 똑같고 실물이 더 예뻐서 만족스러워요.",
        "스타일이 마음에 들고 트렌디해서 자주 사용하게 돼요.",
        "실물이 더 이쁘고 고급스러워 보여서 기대 이상이에요.",
        "디테일이 살아있고 완성도 높은 디자인이라 감탄했어요.",
        "깔끔한 디자인에 모던한 느낌이 있어서 정말 마음에 들어요.",
        "색감이 정말 예쁘고 조화롭게 잘 어우러져 있어요.",
        "고급스러워 보이고 세련된 느낌이 있어서 선물용으로도 좋을 것 같아요.",
        "심플하면서도 감각적인 디자인이라 질리지 않을 것 같아요.",
        "제품 사진보다 실물이 더 예뻐서 개봉하자마자 감탄했어요."
    ],
    value: [
        "가격 대비 정말 좋아서 주변 사람들한테 추천하고 싶어요.",
        "이 가격에 이 퀄리티면 최고라고 생각하고 바로 재구매했어요.",
        "가성비 좋아서 여러 개 더 구매할까 고민 중이에요.",
        "합리적인 가격에 품질까지 좋아서 만족스러운 쇼핑이었어요.",
        "가격이 착해서 부담 없이 구매했는데 기대 이상이네요.",
        "가성비 갑이라는 표현이 딱 어울리는 제품인 것 같아요.",
        "이 가격 맞나 싶을 정도로 좋아서 다른 제품도 구경 중이에요.",
        "가격 부담 없이 구매했는데 퀄리티가 훨씬 좋아서 놀랐어요.",
        "비싼 브랜드 제품 부럽지 않을 만큼 가성비가 뛰어나요.",
        "가격도 저렴하고 품질도 좋아서 정말 알뜰한 쇼핑 한 것 같아요."
    ],
    usage: [
        "사용하기 편리하고 직관적이어서 누구나 쉽게 쓸 수 있어요.",
        "실용적이고 좋아서 일상생활에서 정말 유용하게 활용하고 있어요.",
        "일상에서 유용하게 쓰고 있고 생활이 한결 편해졌어요.",
        "쓰면 쓸수록 만족스럽고 점점 더 애착이 가는 제품이에요.",
        "활용도가 높아서 여러 용도로 다양하게 사용할 수 있어요.",
        "사용감이 좋아서 매일 쓰게 되고 없으면 불편할 것 같아요.",
        "편하게 잘 쓰고 있고 생각보다 훨씬 실용적이에요.",
        "기능이 알차고 필요한 것들이 다 있어서 효율적으로 사용 중이에요.",
        "처음 사용할 때부터 편리해서 금방 익숙해질 수 있었어요.",
        "사용 방법이 간단하면서도 성능은 뛰어나서 만족스러워요."
    ],
    delivery: [
        "배송도 빠르고 포장도 깔끔해서 받자마자 기분이 좋았어요.",
        "배송이 진짜 빨라서 주문한 지 얼마 안 됐는데 벌써 도착했어요.",
        "포장 상태가 완벽하고 제품 보호가 잘 되어 있어서 안심이었어요.",
        "배송 기사님도 친절하시고 배송 과정 전체가 만족스러웠어요.",
        "배송이 생각보다 빨랐고 택배 상태도 깨끗해서 좋았어요.",
        "포장을 정말 꼼꼼하게 해주셔서 제품이 안전하게 도착했어요.",
        "배송 과정도 만족스럽고 실시간 추적이 가능해서 편리했어요.",
        "빠른 배송 덕분에 필요할 때 바로 받을 수 있어서 감사해요.",
        "배송 기간이 짧아서 급하게 필요했는데 제때 받을 수 있었어요.",
        "포장이 이중으로 되어 있어서 배송 중 손상 걱정이 전혀 없었어요."
    ],
    satisfaction: [
        "전반적으로 만족하고 기대했던 것 이상의 제품을 받은 것 같아요.",
        "기대했던 것보다 훨씬 좋아서 구매하길 정말 잘했다고 생각해요.",
        "구매 잘한 것 같고 오래오래 애용할 수 있을 것 같아요.",
        "살 만한 가치가 충분히 있고 돈이 아깝지 않은 제품이에요.",
        "후회 없는 선택이었고 처음부터 이걸 살걸 그랬어요.",
        "정말 잘 샀다는 생각이 들고 주변에도 적극 추천하고 있어요.",
        "만족스러운 제품이라 다른 색상이나 모델도 구매하고 싶어요.",
        "기대 이상의 품질과 서비스에 완전히 만족하고 있어요.",
        "이 정도 퀄리티면 더 비싸게 팔아도 될 것 같은데 가격도 착하네요.",
        "모든 면에서 만족스럽고 오랜만에 정말 잘 산 것 같아요."
    ]
};

const REVIEW_CONCLUSIONS = [
    "재구매 의향 100%이고 다른 분들께도 자신있게 추천해요.",
    "주변에 추천하고 싶을 정도로 만족스러운 쇼핑이었어요.",
    "다음에 또 살 것 같고 다른 제품도 구경해볼 생각이에요.",
    "이 가격에 이 퀄리티면 강력 추천합니다!",
    "정말 만족스러운 구매였고 돈 한 푼 아깝지 않아요.",
    "구매하길 정말 잘했고 망설이지 말고 사세요!",
    "100% 추천하고 재구매 의향 있어요!",
    "재구매 예정이고 오래오래 잘 쓸게요.",
    "친구들한테 추천했더니 다들 사겠다고 하네요.",
    "또 살 거고 이미 장바구니에 담아뒀어요!",
    "고민하지 말고 바로 구매하시길 추천드려요.",
    "정말 잘 샀다는 생각밖에 안 들고 후회 없어요.",
    "여러분도 꼭 한번 사용해보시길 바라요.",
    "이런 제품 찾고 계셨다면 바로 이거예요!"
];

const CONNECTORS = ["그리고", "또한", "게다가", "특히", "또"];
const EMOTIONS = ["정말", "너무", "진짜", "완전", "아주"];

// ========================================
// Utility Functions
// ========================================

function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function shuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// ========================================
// Review Generation Logic
// ========================================

function generateRatingDistribution() {
    // All reviews are 5 stars (positive reviews only)
    return [5, 5, 5, 5, 5, 5];
}

function distributeLength(minLength, maxLength) {
    const lengths = [];
    const avgLength = (minLength + maxLength) / 2;

    for (let i = 0; i < 6; i++) {
        const variation = (Math.random() - 0.5) * 0.4; // Reduced variation from 0.6 to 0.4
        const length = Math.floor(avgLength * (1 + variation));
        lengths.push(Math.max(minLength, Math.min(maxLength, length)));
    }

    return lengths;
}

function generateReview(productName, targetLength) {
    let review = "";

    // 1. Intro with product name
    const intro = pickRandom(REVIEW_INTROS).replace("{상품}", productName);
    review += intro + " ";

    // 2. Add conclusion first to know its length
    const conclusion = pickRandom(REVIEW_CONCLUSIONS);
    const reservedLength = conclusion.length + 5; // conclusion + spacing

    // 3. Add body sentences from various categories
    const categories = Object.keys(REVIEW_BODY_SENTENCES);
    const usedCategories = [];
    let sentenceCount = 0;
    const maxSentences = Math.ceil(targetLength / 15); // More generous limit

    // Keep adding sentences until we're close to target length
    while (review.length < targetLength - reservedLength && sentenceCount < maxSentences) {
        const availableCategories = categories.filter(c => !usedCategories.includes(c));

        if (availableCategories.length === 0) {
            usedCategories.length = 0;
        }

        const category = availableCategories.length > 0
            ? pickRandom(availableCategories)
            : pickRandom(categories);

        let sentence = pickRandom(REVIEW_BODY_SENTENCES[category]);

        // Add emotion occasionally (30% chance)
        if (Math.random() < 0.3) {
            const emotion = pickRandom(EMOTIONS);
            sentence = sentence.replace(/(좋아요|예뻐요|만족|훌륭|좋습니다)/, `${emotion} $1`);
        }

        // Add connector occasionally (40% chance, but not for first sentence)
        if (sentenceCount > 0 && Math.random() < 0.4) {
            sentence = pickRandom(CONNECTORS) + " " + sentence;
        }

        // Calculate remaining space
        const remainingSpace = targetLength - review.length - reservedLength;

        // Add sentence if it fits, or if we're still far from target
        if (sentence.length <= remainingSpace || remainingSpace > 80) {
            review += sentence + " ";
            usedCategories.push(category);
            sentenceCount++;
        } else {
            // Try to find a shorter sentence that fits
            let attempts = 0;
            let shorterSentence = sentence;

            while (shorterSentence.length > remainingSpace && attempts < 5) {
                const newCategory = pickRandom(categories);
                shorterSentence = pickRandom(REVIEW_BODY_SENTENCES[newCategory]);
                attempts++;
            }

            if (shorterSentence.length <= remainingSpace) {
                review += shorterSentence + " ";
                sentenceCount++;
            }

            break; // Stop if we can't fit more
        }
    }

    // 4. Add conclusion
    review += conclusion;

    return review.trim();
}

function updateStarRating(starsElement, rating) {
    const stars = starsElement.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('filled');
        } else {
            star.classList.remove('filled');
        }
    });
}

function generateAllReviews() {
    const productName = document.getElementById('productName').value.trim() || "상품";
    const reviewLength = parseInt(document.getElementById('reviewLength').value) || 100;

    // Validate input
    if (reviewLength < 10 || reviewLength > 1000) {
        alert('글자 수는 10자에서 1000자 사이로 입력해주세요.');
        return;
    }

    // Generate rating distribution
    const ratings = generateRatingDistribution();

    // Generate length distribution
    const lengths = distributeLength(reviewLength * 0.7, reviewLength * 1.3);

    // Generate and populate reviews
    for (let i = 1; i <= 6; i++) {
        const reviewText = generateReview(productName, lengths[i - 1]);
        const reviewTextarea = document.getElementById(`review${i}`);
        const reviewCard = document.querySelector(`[data-review="${i}"]`);
        const starsElement = reviewCard.querySelector('.stars');
        const charCountElement = document.getElementById(`charCount${i}`);

        reviewTextarea.value = reviewText;
        updateStarRating(starsElement, ratings[i - 1]);
        starsElement.setAttribute('data-rating', ratings[i - 1]);

        // Update character count
        charCountElement.textContent = `${reviewText.length}자`;
    }
}

// ========================================
// Event Listeners
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateReviewBtn');
    const productNameInput = document.getElementById('productName');
    const reviewLengthInput = document.getElementById('reviewLength');

    // Generate button click
    generateBtn.addEventListener('click', () => {
        generateAllReviews();
        if (typeof gtag === 'function') {
            gtag('event', 'generate_review', {
                product_name: productNameInput.value.trim() || '상품',
                review_length: parseInt(reviewLengthInput.value) || 100
            });
        }
    });

    // Enter key support
    productNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            generateAllReviews();
        }
    });

    reviewLengthInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            generateAllReviews();
        }
    });

    // Copy functionality for copy icon buttons
    document.querySelectorAll('.copy-icon-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const targetId = button.getAttribute('data-target');
            const textarea = document.getElementById(targetId);

            textarea.select();
            document.execCommand('copy');

            if (typeof showToast === 'function') {
                showToast();
            }

            if (typeof gtag === 'function') {
                gtag('event', 'copy_review', { card_id: targetId });
            }
        });
    });

    // Auto-generate on page load
    generateAllReviews();

    // Info toggle functionality
    const infoToggle = document.getElementById('infoToggle');
    const infoContent = document.getElementById('infoContent');

    if (infoToggle && infoContent) {
        infoToggle.addEventListener('click', () => {
            const isVisible = infoContent.style.display !== 'none';
            infoContent.style.display = isVisible ? 'none' : 'block';
        });
    }
});
