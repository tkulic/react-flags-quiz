const generateRandomIndex = (countries) => (Math.floor(Math.random() * countries.length))

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function confettiEnd(confetti) {
    confetti({
        particleCount: 150,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#bb0000', '#ffffff']
    });
    confetti({
        particleCount: 150,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#bb0000', '#ffffff']
    });
}

export { generateRandomIndex, shuffle, confettiEnd }