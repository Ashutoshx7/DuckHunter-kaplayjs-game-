export function formatScore(score: number, nbDigits: number) {
    const scoreAsText = score.toString();
    let zerosTOAdd = 0;
    if (scoreAsText.length < nbDigits) {
        zerosTOAdd = nbDigits - scoreAsText.length;
    }
    let zeros = "";
    for (let i = 0; i < zerosTOAdd; i++) {
        zeros += '0'; // Fixed: add '0' each iteration
    }
    return zeros + String(score);
}