function tobigImg(e){
    let deatail_page_big_img = document.getElementById('deatail_page_big_img');
    deatail_page_big_img.src = e.src;
}

function card_colorChang(itImg){
    let first_mamber = document.getElementById("first_mamber");
    let first_mamber2 = document.getElementById("first_mamber2");
    let first_mamber3 = document.getElementById("first_mamber3");
    let first_mamberMob = document.getElementById("first_mamberMob");
    
    first_mamber.src= itImg;
    first_mamber2.src= itImg;
    first_mamber3.src= itImg;
    first_mamberMob.src= itImg;
    alert('hello')
    
}
