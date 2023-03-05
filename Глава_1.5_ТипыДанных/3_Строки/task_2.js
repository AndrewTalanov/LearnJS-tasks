// Задача 2

const spamList = ['viagra', 'xxx'].toLowerCase();

function checkSpam(str) {

    for (let i = 0; i < spamList.length; i++) {
        return str.toLowerCase().includes(spamList[i]);        
    }
}

console.log( checkSpam('buy ViAgRA now') );