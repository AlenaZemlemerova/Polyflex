//intersection Observer API

//настройки
let options = {
    root: null,
    rootMargin: '5px',
    threshold: 0.5
}

//функция обратного вызова
let callback = function(entries, observer) {
    entries.forEach(entry => {
        //если элемент является наблюдателем
        if (entry.isIntersecting) {
            console.log('find, entry');
            //добавим класс active к нему
            entry.target.classList.add('active');
            //отпишемся от наблюдения
            observer.unobserve(entry.target);
        }
    })
}

//наблюдатель
let observer = new IntersectionObserver(callback, options);

//определяем элементы, за которыми наблюдаем
let targets = document.querySelectorAll('.anim')
targets.forEach(target => {
    observer.observe(target);
});