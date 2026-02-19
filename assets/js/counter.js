document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const copyTextBtn = document.getElementById('copyTextBtn');
    const clearTextBtn = document.getElementById('clearTextBtn');
    const infoToggle = document.getElementById('infoToggle');
    const infoContent = document.getElementById('infoContent');

    const statElements = {
        totalChars: document.getElementById('totalChars'),
        charsNoSpaces: document.getElementById('charsNoSpaces'),
        wordCount: document.getElementById('wordCount'),
        byteCount: document.getElementById('byteCount'),
        sentenceCount: document.getElementById('sentenceCount'),
        paragraphCount: document.getElementById('paragraphCount'),
        manuscriptPages: document.getElementById('manuscriptPages')
    };

    function countWords(text) {
        const words = text.match(/[가-힣]+|[A-Za-z0-9]+(?:['’-][A-Za-z0-9]+)*/g);
        return words ? words.length : 0;
    }

    function countSentences(text) {
        const trimmedText = text.trim();
        if (!trimmedText) {
            return 0;
        }

        const sentenceMatches = trimmedText.match(/[^.!?]+[.!?]+/g) || [];
        const remainedText = trimmedText.replace(/[^.!?]+[.!?]+/g, '').trim();
        return sentenceMatches.length + (remainedText ? 1 : 0);
    }

    function countParagraphs(text) {
        if (!text.trim()) {
            return 0;
        }

        return text
            .split(/\n+/)
            .map((paragraph) => paragraph.trim())
            .filter(Boolean)
            .length;
    }

    function animateStatUpdate(element, value) {
        const stringValue = String(value);
        if (element.textContent === stringValue) {
            return;
        }

        element.textContent = stringValue;
        element.classList.remove('updated');
        void element.offsetWidth;
        element.classList.add('updated');

        setTimeout(() => {
            element.classList.remove('updated');
        }, 180);
    }

    function updateCounts() {
        const text = textInput.value;
        const totalChars = text.length;
        const charsNoSpaces = text.replace(/\s/g, '').length;
        const wordCount = countWords(text);
        const byteCount = new Blob([text]).size;
        const sentenceCount = countSentences(text);
        const paragraphCount = countParagraphs(text);
        const manuscriptPages = totalChars > 0 ? Math.ceil(totalChars / 200) : 0;

        animateStatUpdate(statElements.totalChars, totalChars);
        animateStatUpdate(statElements.charsNoSpaces, charsNoSpaces);
        animateStatUpdate(statElements.wordCount, wordCount);
        animateStatUpdate(statElements.byteCount, byteCount);
        animateStatUpdate(statElements.sentenceCount, sentenceCount);
        animateStatUpdate(statElements.paragraphCount, paragraphCount);
        animateStatUpdate(statElements.manuscriptPages, manuscriptPages);
    }

    async function copyText() {
        try {
            await navigator.clipboard.writeText(textInput.value);
            if (typeof showToast === 'function') {
                showToast();
            }
        } catch (error) {
            alert('클립보드 복사에 실패했습니다. 브라우저 권한을 확인해주세요.');
        }
    }

    function clearText() {
        textInput.value = '';
        updateCounts();
        textInput.focus();
    }

    textInput.addEventListener('input', updateCounts);
    copyTextBtn.addEventListener('click', copyText);
    clearTextBtn.addEventListener('click', clearText);

    if (infoToggle && infoContent) {
        infoToggle.addEventListener('click', () => {
            const isVisible = infoContent.style.display !== 'none';
            infoContent.style.display = isVisible ? 'none' : 'block';
        });
    }

    updateCounts();
});
