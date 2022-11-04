let items = document.getElementsByClassName('items');
let item = document.getElementsByClassName('info-size');
let span = document.querySelectorAll('span');
let size = document.getElementsByClassName('size');
products.addEventListener('mouseover',
  event => {
    let attribute = event.target.dataset.test;
    let elem = document.getElementById(attribute);
    elem.onclick = function getSize() {
      if (event.target == items || event.target == size) {
        return;
      } else {
        let parent = event.target.parentNode;
        let div = parent.parentNode;
        this.children[0].innerHTML = event.target.innerHTML;
        let searchCount = div.getElementsByClassName('count');
        searchCount[0].style.display = 'flex';
      }
    }
  }
);