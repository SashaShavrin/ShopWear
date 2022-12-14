let points = document.querySelectorAll('points');
products.addEventListener('mouseover',
  event => {
    let elem = event.target;
    let elemParent = elem.parentNode.parentNode;
    let front = elemParent.children[0];
    let back = elemParent.children[1];
    let classElem = event.target.className;
    if (elem.classList.contains("point-front")) {
      front.style.display = 'block';
      back.style.display = 'none';
    }
    if (elem.classList.contains("point-back")) {
      front.style.display = 'none';
      back.style.display = 'block';
      back.style.marginTop = '-0.5px'
    }
  }
);
