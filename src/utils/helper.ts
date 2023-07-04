const handleSound = (value: string) => {
    if (value) {
        const msg = new SpeechSynthesisUtterance(value)
        window.speechSynthesis.speak(msg)
    }
}

export {
    handleSound
}