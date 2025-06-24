export function classList(classes) {
  return classes.filter(Boolean).join(' ');
}