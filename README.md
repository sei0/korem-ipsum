# Korem Ipsum

A natural Korean dummy text generator for design and web development.

**Demo**: [https://sei0.github.io/korem-ipsum/](https://sei0.github.io/korem-ipsum/)

## Features

- **Natural Korean text** — Algorithm based on real Korean character frequency distribution
- **Three speech styles** — Formal (합니다체), Polite (해요체), Plain (한다체)
- **Instant generation** — 10 to 10,000 characters
- **One-click copy** — Click any card to copy to clipboard
- **Responsive** — Mobile, tablet, desktop
- **Sentence flow** — Conjunctions for natural paragraph transitions
- **Paragraph breaks** — Auto line breaks every 3–5 sentences
- **No noun repetition** — Prevents duplicate nouns within a sentence
- **Profanity filter** — Blocks forbidden words and brand names

## Tools

| Tool | Description |
|------|-------------|
| **Dummy Text** | Generate natural Korean placeholder text in 3 speech styles |
| **Review Generator** | Generate dummy product reviews for e-commerce UI testing |
| **Character Counter** | Count characters, words, bytes, sentences, paragraphs, and manuscript pages |

## Figma Plugin

Generate Korean dummy text directly inside Figma.

- Source: `figma-plugin/` directory
- Local test: Figma Desktop > Plugins > Development > Import plugin from manifest
- Select character count and speech style, then insert into selected text layer or create a new one

## Generation Rules

### Character Frequency Distribution

| Component | Distribution |
|-----------|-------------|
| **Initial consonant** | Common (ㄱ,ㄴ,ㄷ,ㄹ,ㅁ,ㅂ,ㅅ,ㅇ,ㅈ) 98% · Aspirated (ㅊ,ㅋ,ㅌ,ㅍ,ㅎ) 1% · Double (ㄲ,ㄸ,ㅃ,ㅆ,ㅉ) 1% |
| **Vowel** | Basic (ㅏ,ㅓ,ㅣ) 80% · Mid (ㅔ) 15% · Less common (ㅐ,ㅑ,ㅕ,ㅡ) 3% · Compound 1% · Rare 1% |
| **Final consonant** | None 85% · Allowed (ㄱ,ㄴ,ㅂ,ㅇ) 15% |

### Sentence Structure

- **Word length**: Weighted random, 2–3 syllables
- **Sentence length**: Short 30% · Medium 50% · Long 20%
- **Conjunctions**: 30% chance per sentence, pool of 20 conjunctions (그리고, 하지만, 따라서, etc.)
- **Paragraphs**: Auto line break every 3–5 sentences

### Particle Processing

Automatic selection based on final consonant (batchim) detection:

- 은/는, 이/가, 을/를, 과/와, 로/으로
- Special handling for ㄹ final consonant (로/으로)

### Combination Filters

- Rare/compound vowel + final consonant → 99% removed
- Aspirated/double initial + complex final → removed
- Unnatural syllable combinations auto-filtered

## Tech Stack

- HTML5 / CSS3 / Vanilla JavaScript
- [Pretendard](https://github.com/orioncactus/pretendard) font
- GitHub Pages

## License

MIT

## Contributing

Issues and PRs are welcome.

---

Made with ❤️ by sei

