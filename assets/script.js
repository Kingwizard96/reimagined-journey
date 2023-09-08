// set the target element that will be collapsed or expanded (eg. navbar menu)
const $targetEl = document.getElementById('button');

// optionally set a trigger element (eg. a button, hamburger icon)
const $triggerEl = document.getElementById('button');

// optional options with default values and callback functions
const options = {
  onCollapse: () => {
      console.log('element has been collapsed')
  },
  onExpand: () => {
      console.log('element has been expanded')
  },
  onToggle: () => {
      console.log('element has been toggled')
  }
};