function changeImage(){
    let displayImage = document.getElementById('img1')
    if (displayImage.src.match('/img/sep_lixo.png')){
        displayImage.src = '/img/sep_lixo_marcado.png'
    }
    else{
        displayImage.src = '/img/sep_lixo.png'
    }
}
function changeImage2(){
    let displayImage = document.getElementById('img2')
    if (displayImage.src.match('/img/proprio_jardim.png')){
        displayImage.src = '/img/proprio_jardim_marcado.png'
    }
    else{
        displayImage.src = '/img/proprio_jardim.png'
    }
}