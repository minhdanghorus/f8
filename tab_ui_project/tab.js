const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

tabs.forEach((tab, index) => {
  const pane = panes[index];

  const line = $(".tabs .line");

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.width = this.offsetWidth + "px";
    line.style.left = this.offsetLeft + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});
