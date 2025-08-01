import { Util } from "@nuka9510/js-util";

class Index {
  constructor() {
    this.onValueEmptyCheckClick = this.onValueEmptyCheckClick.bind(this);

    this.init();
  }

  init() {
    document.querySelectorAll('[data-action="value-empty-check-click"]').forEach((...arg) => { arg[0].addEventListener('click', this.onValueEmptyCheckClick); });
  }

  onValueEmptyCheckClick(ev) {
    const value = document.querySelector('[data-name="value"]'),
    result = document.querySelector('[data-name="result"]');

    if (Util.empty(value.value)) {
      result.innerHTML = 'true';
    } else { result.innerHTML = 'false'; }
  }

}

new Index();