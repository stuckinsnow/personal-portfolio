import { useState } from "react";

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

// File: animateButton.ts

export const animateButton = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.currentTarget;
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
  
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
  
    target.appendChild(ripple);
  
    setTimeout(() => {
      target.removeChild(ripple);
    }, 300);
  };
  

// utils.ts
export const toggleActiveClass = (index: number, setActiveProjectIndex: Function) => {
    setActiveProjectIndex((prevIndex: number | null) => (prevIndex === index ? null : index));
};

export const handleActiveProject = (
    activeProjectRef: React.RefObject<HTMLElement>,
    activeProjectIndex: number | null
) => {
    if (activeProjectRef.current && activeProjectIndex !== null) {
        const activeDiv = activeProjectRef.current;
        const dataIndex = parseInt(activeDiv.dataset.index || '');
        if (activeProjectIndex === dataIndex) {
            // Calculate the actual height of the content and set it rather than an "auto" value--auto values don't allow transitions, and "max-height" has problems of its own e.g. if the actual height is 10rem but max-height is set to 100rem, the transition will be off for the remaining 90rem
            const height = activeDiv.scrollHeight;
            activeDiv.style.maxHeight = `${height}px`;
            activeDiv.classList.add('expanded');
        } else {
            const height: any = activeDiv.scrollHeight; // Set type to 'any'
            activeDiv.style.maxHeight = height;
            activeDiv.classList.remove('expanded');
        }
    }
}; 


 















 