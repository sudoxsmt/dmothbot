function get_elements_by_inner(word) {
  res = [];
  elems = [...document.getElementsByTagName("div")];
  elems.forEach((elem) => {
    if (elem.outerHTML.includes(word)) {
      res.push(elem);
    }
  });
  return res;
}

function click(x, y) {
  var ev = document.createEvent("MouseEvent");
  var el = document.elementFromPoint(x, y);
  ev.initMouseEvent(
    "click",
    true /* bubble */,
    true /* cancelable */,
    window,
    null,
    0,
    0,
    x,
    y /* coordinates */,
    false,
    false,
    false,
    false /* modifier keys */,
    0 /*left*/,
    null
  );
  el.dispatchEvent(ev);
}

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}