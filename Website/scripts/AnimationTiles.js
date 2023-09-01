function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element_show');
      }
    });
}
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.container, .flex_left, .flex_center, .flex_right');
  for (let elm of elements) {
    observer.observe(elm);
}