 function getProductsInBasket() {
   let generalPrice = document.getElementById('generalPrice');
  generalPrice.innerHTML = '0';
  let btns = document.body.querySelectorAll('.count');
  let generalCount = document.getElementById('generalCount');
  for (var i = 0; i < btns.length; i++) {
    btns[i] = 'count' + i;
    let plus = btns[i].children[2];
    let minus = btns[i].children[0];
    let counter = btns[i].children[1];
    let priceProductParent = btns[i].nextElementSibling.children[0];
    let count = 0;
    let totalPriceItem = document.createElement('div');
    totalPriceItem.innerHTML = '000';
    totalPriceItem.classList.toggle('count__total-price')
    let createPriceItem = btns[i].appendChild(totalPriceItem);
    plus.onclick = function getPlus() {
      let total = 0;
      count++;
      counter.innerHTML = count;
      generalCount.innerHTML++;
      localStorage.setItem('count', generalCount.innerHTML);
      totalPriceItem.innerHTML = counter.innerHTML * priceProductParent.innerHTML;

      function sum() {
        let arr = document.querySelectorAll('.count__total-price');
        let result = 0;
        for (let key in arr) {
          if (!isNaN(arr[key].innerHTML)) {
            result = result + +arr[key].innerHTML;
            generalPrice.innerHTML = result;
          };
          generalPrice.innerHTML = result + +price;
          localStorage.setItem('sum', generalPrice.innerHTML);
        }
      }
      sum()
    }
    minus.onclick = function getMinus() {
      let total = 0;
      count--;
      if (count < 0 || generalCount.innerHTML == 0) {
        count++;
        generalCount.innerHTML++;
      }
      counter.innerHTML = count;
      generalCount.innerHTML--;
      localStorage.setItem('count', generalCount.innerHTML);
      totalPriceItem.innerHTML = counter.innerHTML * priceProductParent.innerHTML;

      function sum() {
        let arr = document.querySelectorAll('.count__total-price');
        let result = 0;
        for (let key in arr) {
          if (!isNaN(arr[key].innerHTML)) {
            result = result + +arr[key].innerHTML;
            generalPrice.innerHTML = result;
          };
          generalPrice.innerHTML = result + +price;
          localStorage.setItem('sum', generalPrice.innerHTML);
        }
      }
      sum()
    }
  }
}
getProductsInBasket()
