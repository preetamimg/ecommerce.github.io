
  // preloader
  $(window).on('load', function () {
    setTimeout(function () {
        $('.loader').fadeOut('active');
    }, 100);
  });

// header js
if(document.querySelector('.Header')) {
  let subCategoryLis = document.querySelectorAll('.subCategoryLi');
  let innerCatBoxs = document.querySelectorAll('.innerCatBox');
  subCategoryLis.forEach(subCategoryLi => {
      subCategoryLi.addEventListener('mouseover', (e) => {
          for(i=0; i<subCategoryLis.length; i++){
              subCategoryLis[i].classList.remove('active')
          }
          for(i=0; i<innerCatBoxs.length; i++){
              innerCatBoxs[i].classList.remove('active')
          }
          let a = e.currentTarget.getAttribute("cat-sec");
          let b = document.getElementById(a);
          b.classList.add('active');
          e.currentTarget.classList.add('active')
      })
  })
}


// footer current year
if(document.querySelector('.webFooter')) {
  let footerYear = document.querySelector('#footerYear');
  footerYear.innerHTML = new Date().getFullYear();
}

// add to cart button
if(document.querySelector('.cartBtns')) {
  const cartButtons = document.querySelectorAll('.cart-button');
  cartButtons.forEach(button => {
    button.addEventListener('click', cartClick);
  });
  function cartClick() {
    let button = this;
    button.classList.add('clicked');
  }
}

// product preview carousel
if(document.querySelector('.productPreviewModal')) {
  var swiper1 = new Swiper(".productthumbCarousel", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".productPrevCarousel", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper1,
    },
  });
}

// product Category carousel
if(document.querySelector('.categorySection')) {
var swiper5 = new Swiper(".productCategorySlider", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});
}


// home page
if(document.querySelector('[page-name=homePage]')) {// hero carousel js
  var swiper = new Swiper(".heroSwiper", {
      spaceBetween: 30,
      effect: "fade",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    });
  
      // mobile category slider
      var swiper = new Swiper(".mobCategorySlider", {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 8,
        breakpoints: {
          0: {
            slidesPerView: 5,
          },
          500: {
            slidesPerView: 6,
          },
          600: {
            slidesPerView: 7,
          },
          700: {
            slidesPerView: 8,
          },
          800: {
            slidesPerView: 9,
          },
          900: {
            slidesPerView: 10,
          },
        },
      });
}



// product detail page
if(document.querySelector('[page-name=productDetailPage]')) {
  // product preview
  let previewImgThumbs = document.querySelectorAll('.previewImgThumb');
  let imgForPreview = document.querySelector('.imgForPreview');
  let vidClickSlide = document.querySelector('.vidClickSlide');
  let productPreviewImgSide = document.querySelector('.productPreviewImgSide');

  previewImgThumbs.forEach(previewImgThumb => {
  previewImgThumb.addEventListener('mouseover', (e)=> {
      imgForPreview.src = e.currentTarget.src
      productPreviewImgSide.classList.remove('videoPreviewOn')
      productPreviewImgSide.classList.add('imgPreviewOn')
  })
  })
  vidClickSlide.addEventListener('mouseover', (e)=> {
      productPreviewImgSide.classList.add('videoPreviewOn')
      productPreviewImgSide.classList.remove('imgPreviewOn')
  })
}




// product category page
if(document.querySelector('[page-name=productCategoryPage]')) {
  // view change buttons
  const productCategoryPage = document.querySelector('.productCategoryPage')
  const listViewRow = document.querySelector('.listViewRow')
  const viewBtns = document.querySelectorAll('.viewBtn');
  viewBtns.forEach(viewBtn =>{
    viewBtn.addEventListener('click', (e)=> {
      for (i=0; i<viewBtns.length; i++){
        viewBtns[i].classList.remove('active')
      }
      e.currentTarget.classList.add('active')
      if(e.currentTarget.classList.contains('listViewBtn')){
        productCategoryPage.classList.add('listviewactive')
        listViewRow.classList.remove('row-cols-xl-4' , 'row-cols-lg-3', 'row-cols-md-3', 'row-cols-2')
        listViewRow.classList.add('row-cols-xl-2' , 'row-cols-lg-2', 'row-cols-md-2', 'row-cols-1')
      }
      else {
        productCategoryPage.classList.remove('listviewactive')
        listViewRow.classList.add('row-cols-xl-4' , 'row-cols-lg-3', 'row-cols-md-3', 'row-cols-2')
        listViewRow.classList.remove('row-cols-xl-2' , 'row-cols-lg-2', 'row-cols-md-2', 'row-cols-1')
      }
    })
  })



  // mobile filter bar
  const filterBtn = document.querySelector('.filterBtn');
  const sidebarWrapper = document.querySelector('.sidebarWrapper');
  const bodyScrollPart = document.querySelector('#bodyScrollPart');
  const filterClose = document.querySelector('#filterClose');


  filterBtn.addEventListener('click', ()=> {
    sidebarWrapper.classList.toggle('showFilterBar')
    bodyScrollPart.classList.toggle('stopBodyScroll')
  })

  filterClose.addEventListener('click', ()=> {
    sidebarWrapper.classList.toggle('showFilterBar')
    bodyScrollPart.classList.toggle('stopBodyScroll')
  })


  // sort by select
  $(document).ready(function() {
    $('.sortBySelect').select2({
      minimumResultsForSearch: Infinity
    });
  });
}











  // login form validation
(() => {
  // 'use strict'
  const LoginForm = document.querySelectorAll('.loginForm');
  let loginBtn = document.querySelector('.loginBtn')
  let formInputs = [];
  let formInputValue = {
      email: '',
      password: ''
    }
  Array.from(LoginForm).forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault()
      event.stopPropagation()
      if (form.checkValidity()) {
          loginBtn.classList.add('show', 'disabled')
          console.log(form.value)
      }
      form.classList.add('was-validated')
    }, false)
  //   for(i=0; i<LoginForm[0].length; i++) {
  //     if(LoginForm[0][i].getAttribute('name')) {
  //       formInputs.push(LoginForm[0][i])
  //     }
  //   }
  //   formInputs.forEach(formInput => { 
  //     formInput.addEventListener('input', e => {
  //     formInputValue = ({...formInputValue, [e.currentTarget.name]: e.currentTarget.value });
  //         console.log(formInputValue)    
  //   })
  // })

})



  // let b = [];
  // let d = {
  //   email: '',
  //   password: ''
  // }
  // for(i=0; i<LoginForm[0].length; i++) {
  //   if(LoginForm[0][i].getAttribute('name')) {
  //     d = ({...d, [LoginForm[0][i].name]: LoginForm[0][i].value });
  //     console.log(LoginForm[0][i].value,d)
  //   }
  // }
  // b.forEach(c => {
  //   c.addEventListener('input', (e)=> {
  //     d = ({...d, [e.currentTarget.name]: e.currentTarget.value });
  //     console.log(d.email)
  //   })
  // })





    // register form validation
    const registerForm = document.querySelectorAll('.registerForm');
    let registerBtn = document.querySelector('.registerBtn')
    Array.from(registerForm).forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault()
        event.stopPropagation()
        if (form.checkValidity()) {
            registerBtn.classList.add('show', 'disabled')
        }
  
        form.classList.add('was-validated')
      }, false)
    })
})()








