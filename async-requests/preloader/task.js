const loaderProgress = document.querySelector('#loader');
const itemsList = document.querySelector('#items');
const requestUrl = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
        loaderProgress.classList.remove('loader_active');
        const valutes = data.response.Valute;
        for (let valute in valutes) {
            const item = document.createElement('div');
            item.classList.add('item');
            const itemCode = document.createElement('div');
            itemCode.classList.add('item__code');
            const itemValue = document.createElement('div');
            itemValue.classList.add('item__value');
            itemCode.textContent = valutes[valute].CharCode;
            itemValue.textContent = valutes[valute].Value;
            item.append(itemCode);
            item.append(itemValue);
            itemsList.append(item);
        }
    })
    .catch(error => console.error(error));