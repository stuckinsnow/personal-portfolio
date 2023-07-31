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