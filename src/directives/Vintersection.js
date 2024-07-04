

export default {
  mounted(el,binding){


const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "100px",
  threshold: 1.0,
};

const callback = (entries, observer) => {
  if (entries[0].isIntersecting ) {
    binding.value()
  }
};

const observer = new IntersectionObserver(callback, options);
observer.observe(el);
  },
  name:'intersection'
}

// && this.page < this.totalPages