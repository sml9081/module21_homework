
const btn = document.querySelector('.btn');
const inputPage = document.querySelector('.input-page');
const inputLimit = document.querySelector('.input-limit');
const error = document.querySelector('.error');
const photosHolder = document.querySelector('.photos-holder');

window.addEventListener('onload', () => {
    photosHolder.innerHTML = localStorage.getItem('loadedPhotos', photosHolder.innerHTML);
    return photosHolder.innerHTML.length > 0;
})

btn.addEventListener('click', () => {
    const page = inputPage.value;
    const limit = inputLimit.value;

    if ((page < 1 || page > 10 || isNaN(page)) && (limit < 1 || limit > 10 || isNaN(limit))) {
        return error.textContent = ('Номер страницы и лимит вне диапазона от 1 до 10')
    } else
        if (page < 1 || page > 10 || isNaN(page)) {
            return error.textContent = ('Номер страницы вне диапазона от 1 до 10')
        } else
            if (limit < 1 || limit > 10 || isNaN(limit)) {
                return error.textContent = ('Лимит вне диапазона от 1 до 10')
            }

    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then((response) => response.json())
        .then((json) => {
            loadPhotos(json);
            localStorage.setItem('loadedPhotos', photosHolder.innerHTML);
        })
        .catch((reason) => {
            error.textContent = ('Не удалось загрузить по причине ' + reason);
        })
});

function loadPhotos(data) {
    let photos = String();

    data.forEach(element => {
        const photosBlock =
            `<div>
                <img>
                    src = "${element}.url"
                    style = "width: 150px; gap: 20px"
                </img>
            </div>`;
        photos += photosBlock;
    });

    photosHolder.innerHTML = photos;
};

