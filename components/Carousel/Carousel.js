class Carousel {
  constructor(element){
    this.element = element;
    this.images = this.element.querySelectorAll('.img');
    this.currentImg = document.querySelector('.active-img');
    this.numOfImg = (this.element.querySelectorAll('.img')).length;
    this.left = this.element.querySelector('.left-button');
    this.right = this.element.querySelector('.right-button');
    
    this.left.addEventListener('click', () => this.goLeft());
    this.right.addEventListener('click', () => this.goRight());
  }
  goLeft() {
    let currentImgData = this.currentImg.dataset.tab;
    if((Number(currentImgData[currentImgData.length-1])-1)<1){
      this.newImgData = `img-${this.numOfImg}`;
    } 
    else {
      this.newImgData = `img-${Number(currentImgData[currentImgData.length-1])-1}`;
    }
    this.nextImg = this.element.querySelector(`.img[data-tab='${this.newImgData}']`);
    this.currentImg = this.nextImg
    
    this.images.forEach(image => {
      image.classList.remove('active-img');
    })
    this.currentImg.classList.add('active-img');
  }
  goRight() {
    let currentImgData = this.currentImg.dataset.tab;
    if((Number(currentImgData[currentImgData.length-1])+1)>this.numOfImg){
      this.newImgData = `img-1`;
    } 
    else {
      this.newImgData = `img-${Number(currentImgData[currentImgData.length-1])+1}`;
    }
    this.nextImg = this.element.querySelector(`.img[data-tab='${this.newImgData}']`);
    this.currentImg = this.nextImg
    
    this.images.forEach(image => {
      image.classList.remove('active-img');
    })
    this.currentImg.classList.add('active-img');
  }
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
