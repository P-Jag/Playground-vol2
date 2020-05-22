class Swiper {
  constructor() {
    this.initialY = null;
    this.initialX = null;

    document.addEventListener("touchstart", (event) => this.touchStart(event));
    document.addEventListener("touchmove", (event) => this.moveTouch(event));

    this.events = {
      SwipeUp: new Event("swipeUp"),
      SwipeDown: new Event("swipeDown"),
      SwipeLeft: new Event("swipeLeft"),
      SwipeRight: new Event("swipeRight"),
    };
  }

  touchStart(event) {
    // event.preventDefault();

    this.initialX = event.touches[0].clientX;
    this.initialY = event.touches[0].clientY;
  }

  moveTouch(event) {
    if (!this.initialX || !this.initialY) return;

    const currentX = event.touches[0].clientX;
    const currentY = event.touches[0].clientY;

    const diffX = this.initialX - currentX;
    const diffY = this.initialY - currentX;

    if (Math.abs(diffX > diffY)) {
      // x
      if (diffX > 0) {
        document.dispatchEvent(this.events.SwipeLeft);
      } else {
        document.dispatchEvent(this.events.SwipeRight);
      }
    } else {
      // y
      if (diffY > 0) {
        document.dispatchEvent(this.events.SwipeUp);
      } else {
        document.dispatchEvent(this.events.SwipeDown);
      }
    }

    this.initialX = null;
    this.initialY = null;
  }
}

new Swiper();
