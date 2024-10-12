document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.querySelector('.dynamic');
    const roles = ['3D Artist', 'Content Writer', 'Web Developer', 'Programmer'];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const delayBetween = 2000;

    function type() {
        const currentRole = roles[index];
        if (isDeleting) {
            dynamicText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % roles.length;
                setTimeout(type, 500);
            } 
            else {
                setTimeout(type, deletingSpeed);
            }
        } 
        
        else {
            dynamicText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(type, delayBetween);
            } 
            else {
                setTimeout(type, typingSpeed);
            }
        }
    }

    type();
});

var copy = document.querySelector(".tools-icon").cloneNode(true);
document.querySelector(".tools").appendChild(copy);