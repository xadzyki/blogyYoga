const gallery = document.querySelector(".gallery");
const imgGallery = document.querySelectorAll(".cartinka")
function printObj(e){
    imgGallery.forEach((item)=>{
        item.style.width="200px"
        item.style.height="300px"
    })
    e.target.style.width = '390px';
    e.target.style.height="500px"
}
function deleatObj(e){
    imgGallery.forEach((item)=>{
        item.style.width='270px'
        item.style.height="400px"
    })
}

imgGallery.forEach((item)=>{
    item.addEventListener("mouseover", printObj);
    item.addEventListener("mouseout", deleatObj)
})
