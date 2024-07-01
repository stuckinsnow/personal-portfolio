export function animateLetters(className: string) {
    function applyRandomTransform(letter: HTMLElement) {
        if (!letter.dataset.randomX || !letter.dataset.randomY) {
            letter.dataset.randomX = ((Math.floor(Math.random() * 21) - 10) / 20).toString();
            letter.dataset.randomY = ((Math.floor(Math.random() * 21) - 10) / 10).toString();
        }

        letter.style.transform = `translateX(${letter.dataset.randomX}rem) translateY(${letter.dataset.randomY}rem)`;
    }

    function removeRandomTransform(letter: HTMLElement) {
        letter.style.transform = 'none';
    }

    const links = document.querySelectorAll<HTMLElement>(className);

    links.forEach((link) => {
        const text = link.textContent!;
        link.textContent = '';

        for (let i = 0; i < text.length; i++) {
            const letterSpan = document.createElement('span');
            letterSpan.classList.add('letter');
            letterSpan.textContent = text[i] === ' ' ? '\u00A0' : text[i];
            link.appendChild(letterSpan);
        }

        link.addEventListener('mouseover', () => {
            const letters = link.querySelectorAll<HTMLElement>('.letter');
            letters.forEach((letter) => {
                applyRandomTransform(letter);
            });
        });

        link.addEventListener('mouseout', () => {
            const letters = link.querySelectorAll<HTMLElement>('.letter');
            letters.forEach((letter) => {
                removeRandomTransform(letter);
            });
        });
    });
}
