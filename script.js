function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = window.document.getElementById('txtano');
    var res = window.document.querySelector('div#res');

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('Verifique os dados e tente novamente');
    } else {
        var fsex = document.getElementsByName('sexo');
        var idade = ano - Number(fAno.value);
        var img = document.createElement('img')
        img.setAttribute('id','foto');
        var genero;
        
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', './img/h1.png');
            } else if (idade < 21) {
                img.setAttribute('src', './img/h2.png');
            } else if (idade < 50) {
                img.setAttribute('src', './img/h3.png');
            } else {
                img.setAttribute('src', './img/h4.png');
            }
        } else if (fsex[1].checked){
            genero = 'Mulher';
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', './img/m1.png');
            } else if (idade < 21) {
                img.setAttribute('src', './img/m2.png');
            } else if (idade < 50) {
                img.setAttribute('src', './img/m3.png');
            } else {
                img.setAttribute('src', './img/m4.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}