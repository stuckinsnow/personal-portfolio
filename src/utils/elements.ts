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




