// const button = document.querySelector('.btn');
// button.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(button.checkValidity());
//   console.log(button);
// });

class Popover {
  constructor(str) {
    if (typeof str === 'string') {
      this.element = document.querySelector(`.${str}`);
    } else {
      this.element = document.querySelector(`.${str.toString()}`);
    }
    this.parent = this.element.parentNode;
  }

  addPopover() {
    this.element.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(this.parent);
      this.parent.classList.add('relative');
      const popover = document.querySelector('.popover');
      popover.querySelector('.popover-header').textContent = this.element.dataset.title;
      popover.querySelector('.popover-body').textContent = this.element.dataset.content;
      popover.classList.toggle('hidden');
      // if (this.element.getAttribute('aria-describedby')) {
      //   console.log(this.element.getAttribute('aria-describedby'));
      //   this.element.removeAttribute('aria-describedby');
      // } else {
      //   this.element.setAttribute('aria-describedby', 'popover');
      // }
      // const { content, title } = this.element.dataset;
      // console.log(content, title);
      // this.element.classList.toggle('popover');
    });
    // const popover = document.createElement('div');
    // popover.classList.add('popover');
    // popover.classList.add('hidden');
    // popover.title = title;
    // popover.textContent = content;
    // this.element.after(popover);
  }

  showPopover() {
    this.element.addEventListener('click', (e) => {
      e.preventDefault();
      // console.log(e);
      // this.element.showPopover();
      console.log('RECM');
      const popover = document.querySelector('.popover');
      // if (!popover) {
      //   this.element.addPopover();
      // }
      console.log(popover);
      popover.classList.toggle('hidden');
    });
  }
}

const button = new Popover('btn');
console.log(button);
button.addPopover();
// button.showPopover();

// button.addEventListener('click', (e) => {
//   // e.preventDefault();
//   console.log(e);
//   button.showPopover();
// });
