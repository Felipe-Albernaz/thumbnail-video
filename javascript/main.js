const form = document.querySelector('form');
const input_url = document.querySelector('form input[type=text]');

form.addEventListener('submit', function(evento){
    evento.preventDefault();
    const url_text = input_url.value;

    if(url_text.indexOf('https://youtu.be/') != -1){
        const url_code =  url_text.split('/');
        const url_end = "https://i3.ytimg.com/vi/"+url_code[3]+"/maxresdefault.jpg";
        document.querySelector('.img-thumbnail').setAttribute('src', url_end);
    }
    if(url_text.indexOf('https://www.youtube.com/watch?v=') != -1){
        const url_code = url_text.split('=');
        const url_end = "https://i3.ytimg.com/vi/"+url_code[1]+"/maxresdefault.jpg";
        document.querySelector('.img-thumbnail').setAttribute('src', url_end);
    }

    input_url.value = "";
});
