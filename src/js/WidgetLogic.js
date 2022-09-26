export default class WidgetLogic {
  proto() {
    clearTimeout();
    const yyy = setTimeout(() => {
      const value = document.querySelector('input');
      console.log(value.value);
    }, 5000);

    return yyy;
  }
}
