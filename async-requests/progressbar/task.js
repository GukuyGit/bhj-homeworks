const load = document.querySelector('#progress');
const send = document.querySelector('#send');

send.addEventListener("click", (event) => {
    const dataForm = new FormData(document.getElementById('form'));
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.upload.onprogress = function(event) {
        load.value = event.loaded / event.total;
    };
    xhr.send(dataForm);
    event.preventDefault();
});