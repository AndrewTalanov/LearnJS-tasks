// Задача 7

function getSecondsToday() {

    let now = new Date();
    let next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let diff = next - now;

    return Math.round(diff / 1000);
}

console.log( getSecondsToday() );