function calculateIDR() {
  var usdEl = document.querySelector('.MarketInfo_market-num_1lAXs');
  var ul = document.querySelector('.MarketInfo_market-info_3lkUj');

  if (ul && usdEl) {
    var usdVal = usdEl.innerHTML;
    var usdNum = usdVal.split(' ')[0];
    var usd = parseFloat(usdNum.replace(',', ''));
    var idr = usd * 14285;

    if (ul.children.length === 4) {
      var li = document.createElement('li');
      li.innerHTML = `<li><h4 class="MarketInfo_market-stat_2xWig"><span class="MarketInfo_market-num_1lAXs">${idr.toLocaleString()} IDR</span><span class="MarketInfo_market-descr_2lp4B">Last trade price</span></h4></li>`;
      ul.appendChild(li);
    } else {
      ul.childNodes[4].innerHTML = `<li><h4 class="MarketInfo_market-stat_2xWig"><span class="MarketInfo_market-num_1lAXs">${idr.toLocaleString()} IDR</span><span class="MarketInfo_market-descr_2lp4B">Last trade price</span></h4></li>`;
    }
  }
}

setInterval(function() {
  calculateIDR();
}, 500);
