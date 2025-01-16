(function() {
  function clickLinks() {
    const buttons = document.querySelectorAll(".coupon-action.button-blue.sc-send-to-card-action");
    alert("Pending Coupons " + buttons.length);
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].click();
    }
  }

  let previousScrollHeight = 0;
  let scrollAttempts = 0;
  const maxScrollAttempts = 5;
  const scrollInterval = 50;
  const scrollAmount = 10000;

  const scroller = setInterval(function () {
    const body = document.body;
    const html = document.documentElement;
    const currentScrollHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    window.scrollBy(0, scrollAmount);

    if (previousScrollHeight === body.scrollHeight) {
      scrollAttempts++;
      if (scrollAttempts === maxScrollAttempts) {
        clearInterval(scroller);
        clickLinks();
      }
    } else {
      scrollAttempts = 0;
      previousScrollHeight = body.scrollHeight;
    }
  }, scrollInterval);
})();