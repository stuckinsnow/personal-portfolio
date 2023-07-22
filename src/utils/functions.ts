import { useEffect, useState } from "react";

export const useDocumentTitle = (title: string): void => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export const useToggleClass = (initialState: boolean = false): [boolean, () => void, boolean, (value: boolean) => void] => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);
  const [isHamburgerClicked, setIsHamburgerClicked] = useState<boolean>(false);

  const toggleClass = () => {
    setIsOpen(!isOpen);
    if (isHamburgerClicked) {
      setIsHamburgerClicked(false);
    }
  };

  return [isOpen, toggleClass, isHamburgerClicked, setIsHamburgerClicked];
};

export function animateLetters(className: string): void {
  function applyRandomTransform(letter: HTMLElement) {
    if (!letter.dataset.randomX || !letter.dataset.randomY) {
      letter.dataset.randomX = String((Math.floor(Math.random() * 21) - 10) / 20);
      letter.dataset.randomY = String((Math.floor(Math.random() * 21) - 10) / 10);
    }

    letter.style.transform = `translateX(${letter.dataset.randomX}rem) translateY(${letter.dataset.randomY}rem)`;
  }

  function removeRandomTransform(letter: HTMLElement) {
    letter.style.transform = 'none';
  }

  const links = document.querySelectorAll<HTMLElement>(className);

  links.forEach((link) => {
    const text = link.textContent;
    if (text) {
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
    }
  });
}