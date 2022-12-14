const student = "Алтухов Максим Иванович"; 
const test = 0.2;

function throwRandomError(percent) {
   const randomNumber = Math.floor(Math.random() * 10 + 1);
   const newPercent = percent * 10; 
   if (percent < 0 || percent > 1) {
    throw new Error('Необходимо число от 0.0 до 1.0');
   };
   if (test.toString().length > 3) {
    throw new Error('Только одна цифра поле точки!')
   };
   if (randomNumber <= newPercent) {
    throw new Error('Рандомная ошибка!');
    };
};

try {
    throwRandomError(test);
    alert('Всё в порядке, приложение работает в штатном режиме');
} catch(e) {
    alert(`Произошла ошибка, пожалуйста перезагрузите страницу. Сообщение ошибки: ${e.message}`);
}

document.getElementById("student").innerHTML = student;