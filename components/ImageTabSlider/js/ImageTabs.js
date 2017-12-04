class TabLink {
  constructor(element, parent) {
    this.element = element;// attach dom element to object
    this.element.addEventListener('click', (event) => {
        event.preventDefault();
        parent.displayItem.querySelector('img').src = element.querySelector('img').src;
    });
  }
}

class ImageTabs {
  constructor(imageTabSet) {
    this.imageTabSet = imageTabSet;
    this.imageTabThumbnails = this.imageTabSet.querySelectorAll(".ImageTabs__thumbnail");
    this.imageTabThumbnails = Array.from(this.imageTabThumbnails).map((thumbnail) => {
        
        if( thumbnail.classList.contains('ImageTabs__thumbnail-displayItem')) {
            this.displayItem = thumbnail;
        } else {
            return new TabLink(thumbnail, this);
        }
    });
    this.tabSetInterval = window.setInterval(()=>{
        this.imageTabThumbnails[Math.floor(Math.random() * (this.imageTabThumbnails.length -1)) + 1].element.click();
        }, 1000 * (Math.floor(Math.random() * (this.imageTabThumbnails.length -1)) + 3) );
  } 
}

let imageTabs = document.querySelectorAll(".ImageTabs");
imageTabs = Array.from(imageTabs).map(imageTabs => new ImageTabs(imageTabs));