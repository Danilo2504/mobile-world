export function classList(classes) {
  return classes.filter(Boolean).join(' ');
}

export function toggleClass(condition, className, defaultClass = '') {
  return condition ? className : defaultClass;
}