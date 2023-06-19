import './styles/style.css'
import gsap from 'gsap'
import * as THREE from 'three'
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from 'gsap/all';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { DrawSVGPlugin } from 'gsap/all';


gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother, DrawSVGPlugin);
function loader() {

    // smooth scroll
    document.addEventListener('DOMContentLoaded', () => {
      let smoother = ScrollSmoother.create({
      wrapper: '.smooth-wrapper',
      content: '.smooth-content',
      smooth: 1,
      smoothTouch: 0.1,
      effects: true
    });

    smoother.effects('.slider--img', { speed: 'auto' });
  })


/**
 * Loaders
 */



const button = document.querySelector(".button");

ScrollTrigger.matchMedia({
	
  // large
  "(min-width: 992px)": function() {

    // CURSOR 

    gsap.to (".cursor", {
      display: "flex", 
    })
    
  
    const cursor = document.querySelector('.cursor');
    
  
    gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50,
    });
    
  
  
    document.addEventListener('pointermove', movecursor);
    function movecursor(e) {
        gsap.to(cursor, {
            duration: 0.3,
            x: e.clientX,
            y: e.clientY,
        }); 
      }    


    // button loader
      
    button.addEventListener("click", function () {
      gsap.to(".button", {
          opacity: 0,
          y: -40, 
          duration: 1,
          ease: "expo.inOut",
          display: 'none'
      })
    
      gsap.to(".txt__loading-wrapper > div", {
          x:"50vw",
          ease: "expo.inOut",
          duration: 1,
          delay: 1,
          stagger: 0.1,
      });
  
      gsap.to(".txt__loading-wrapper", {
          y: "-80vh",
          scale: 4.5,
          rotate: -90,
          duration: 3,
          ease: "expo.inOut",
          delay: 1.5,
      });
  
      gsap.to('.p--loader', {
          opacity: 1,
          duration: 1,
          ease: "expo.inOut",
          delay: 3,
      });
  
      gsap.to(".txt__loading-wrapper > div", {
          x: "-200%",
          ease: "expo.inOut",
          duration: 4,
          delay: 3.5,
          stagger: 0.1,
      });
      
      gsap.to(".section.is--loader", {
          opacity: 0,
          display: "none",
          delay: 7
      });
  
  
  /**
   * Hero
   */
  
  // Anim h1
  var tl = gsap.timeline(),
  mySplitText = new SplitText(".h1--hero", { type: "words,chars" }),
  chars = mySplitText.chars; //an array of all the divs that wrap each character
  
  gsap.set(".h1--hero", { perspective: 400});
  
  tl.from(chars, {
    duration: 0.8,
    delay: 8,
    opacity: 0,
    y: 5,
    stagger: 0.1
  });
  
  // Anim paragraphe
  
  gsap.fromTo('.hero__hour-wrapper', 
  {opacity:0, y: "1rem"}, {opacity:1, y:0, duration: 0.6, delay: 8.4, ease: "expo.inOut"});
  
  gsap.fromTo('.hero__available-wrapper', 
  {opacity:0, y: "1rem"}, {opacity:1, y:0, duration: 0.6, delay: 8.9, ease: "expo.inOut"});
  
  })
},
  // medium
  "(min-width: 480px) and (max-width: 991px)": function() {
    button.addEventListener("click", function () {
      gsap.to(".button", {
          opacity: 0,
          y: -40, 
          duration: 1,
          ease: "expo.inOut",
          display: 'none'
      })
    
      gsap.to(".txt__loading-wrapper > div", {
          x:"50vw",
          ease: "expo.inOut",
          duration: 1,
          delay: 1,
          stagger: 0.1,
      });
  
      gsap.to(".txt__loading-wrapper", {
          y: "-80vh",
          scale: 4.5,
          rotate: -90,
          duration: 3,
          ease: "expo.inOut",
          delay: 1.5,
      });
  
      gsap.to('.p--loader', {
          opacity: 1,
          duration: 1,
          ease: "expo.inOut",
          delay: 3,
      });
  
      gsap.to(".txt__loading-wrapper > div", {
          x: "-200%",
          ease: "expo.inOut",
          duration: 4,
          delay: 3.5,
          stagger: 0.1,
      });
      
      gsap.to(".section.is--loader", {
          opacity: 0,
          display: "none",
          delay: 7
      });
  
  
  /**
   * Hero
   */
  
  // Anim h1
  var tl = gsap.timeline(),
  mySplitText = new SplitText(".h1--hero", { type: "words,chars" }),
  chars = mySplitText.chars; //an array of all the divs that wrap each character
  
  gsap.set(".h1--hero", { perspective: 400});
  
  tl.from(chars, {
    duration: 0.8,
    delay: 8,
    opacity: 0,
    y: 5,
    stagger: 0.1
  });
  
  // Anim paragraphe
  
  gsap.fromTo('.hero__hour-wrapper', 
  {opacity:0, y: "1rem"}, {opacity:1, y:0, duration: 0.6, delay: 8.4, ease: "expo.inOut"});
  
  gsap.fromTo('.hero__available-wrapper', 
  {opacity:0, y: "1rem"}, {opacity:1, y:0, duration: 0.6, delay: 8.9, ease: "expo.inOut"});
  
  })
},
  // small
  "(max-width: 480px)": function() {
    button.addEventListener("click", function () {
      gsap.to(".button", {
          opacity: 0,
          y: -40, 
          duration: 1,
          ease: "expo.inOut",
          display: 'none'
      })
    
      gsap.to(".txt__loading-wrapper > div", {
          x:"40vw",
          ease: "expo.inOut",
          duration: 1,
          delay: 1,
          stagger: 0.1,
      });
  
      gsap.to(".txt__loading-wrapper", {
          y: "-80vh",
          scale: 1.8,
          rotate: -90,
          duration: 3,
          ease: "expo.inOut",
          delay: 1.5,
      });
  
      gsap.to('.p--loader', {
          opacity: 1,
          duration: 1,
          ease: "expo.inOut",
          delay: 3,
      });
  
      gsap.to(".txt__loading-wrapper > div", {
          x: "-1200%",
          ease: "expo.inOut",
          duration: 4,
          delay: 3.5,
          stagger: 0.1,
      });
      
      gsap.to(".section.is--loader", {
          opacity: 0,
          display: "none",
          delay: 7
      });
  
  
  /**
   * Hero
   */
  
  // Anim h1
  var tl = gsap.timeline(),
  mySplitText = new SplitText(".h1--hero", { type: "words,chars" }),
  chars = mySplitText.chars; //an array of all the divs that wrap each character
  
  gsap.set(".h1--hero", { perspective: 400});
  
  tl.from(chars, {
    duration: 0.8,
    delay: 8,
    opacity: 0,
    y: 5,
    stagger: 0.1
  });
  
  // Anim paragraphe
  
  gsap.fromTo('.hero__hour-wrapper', 
  {opacity:0, y: "1rem"}, {opacity:1, y:0, duration: 0.6, delay: 8.4, ease: "expo.inOut"});
  
  gsap.fromTo('.hero__available-wrapper', 
  {opacity:0, y: "1rem"}, {opacity:1, y:0, duration: 0.6, delay: 8.9, ease: "expo.inOut"});
  
  })
},
})


// button.addEventListener("click", function () {
//     gsap.to(".button", {
//         opacity: 0,
//         y: -40, 
//         duration: 1,
//         ease: "expo.inOut",
//         display: 'none'
//     })
  
//     gsap.to(".txt__loading-wrapper > div", {
//         x:"50vw",
//         ease: "expo.inOut",
//         duration: 1,
//         delay: 1,
//         stagger: 0.1,
//     });

//     gsap.to(".txt__loading-wrapper", {
//         y: "-80vh",
//         scale: 4.5,
//         rotate: -90,
//         duration: 3,
//         ease: "expo.inOut",
//         delay: 1.5,
//     });

//     gsap.to('.p--loader', {
//         opacity: 1,
//         duration: 1,
//         ease: "expo.inOut",
//         delay: 3,
//     });

//     gsap.to(".txt__loading-wrapper > div", {
//         x: "-200%",
//         ease: "expo.inOut",
//         duration: 4,
//         delay: 3.5,
//         stagger: 0.1,
//     });
    
//     gsap.to(".section.is--loader", {
//         opacity: 0,
//         display: "none",
//         delay: 7
//     });


// /**
//  * Hero
//  */

// // Anim h1
// var tl = gsap.timeline(),
// mySplitText = new SplitText(".h1--hero", { type: "words,chars" }),
// chars = mySplitText.chars; //an array of all the divs that wrap each character

// gsap.set(".h1--hero", { perspective: 400});

// tl.from(chars, {
//   duration: 0.8,
//   delay: 8,
//   opacity: 0,
//   y: 5,
//   stagger: 0.1
// });

// // Anim paragraphe

// gsap.fromTo('.hero__hour-wrapper', 
// {opacity:0, y: "1rem"}, {opacity:1, y:0, duration: 0.6, delay: 8.4, ease: "expo.inOut"});

// gsap.fromTo('.hero__available-wrapper', 
// {opacity:0, y: "1rem"}, {opacity:1, y:0, duration: 0.6, delay: 8.9, ease: "expo.inOut"});

// })


// Heading out on scroll

gsap.fromTo('.hero__wrapper', {
    y: '0rem',
    opacity: 1
  }, {
    y:'-20rem', 
    duration: 0.8,
    opacity: 0,
    scrollTrigger:{
      trigger:'.is--about',
      start: 'top 50%',                    
      toggleActions: "play none none reverse",
    }
  });

/**
 * Pin section about
 */

gsap.registerPlugin(ScrollTrigger);
let st = ScrollTrigger.create({
    trigger: ".pin__wrapper",
    pin: ".is--pin",
    start: "top top",
    end: "bottom bottom",
    pinSpacing: false,
  });


// Position | Split text animation about
let aboutText = new SplitText('.p--about', {
  type: 'words'
})
     
gsap.from(aboutText.words, {
  opacity: 0.15,
  duration: 0.2,
  ease: 'none',
  stagger: 0.2,
  scrollTrigger: {
      trigger: '.p--about',
      start: "top 80%",
      end: "bot 30%",
      scrub: true,
  }
})

// section about img

gsap.fromTo('.is--two', {
  opacity: 0
}, {
  duration: 0.6,
  opacity: 1,
  scrollTrigger:{
    trigger:'.p--about',
    start: 'top 70%',                    
    toggleActions: "play none none reverse",
  }
});

gsap.fromTo('.is--one', {
  opacity: 0
}, {
  duration: 0.6,
  opacity: 1,
  scrollTrigger:{
    trigger:'.p--about',
    start: 'top 60%',                    
    toggleActions: "play none none reverse",
  }
});

gsap.fromTo('.is--three', {
  opacity: 0
}, {
  duration: 0.6,
  opacity: 1,
  scrollTrigger:{
    trigger:'.p--about',
    start: 'top 50%',                    
    toggleActions: "play none none reverse",
  }
});

gsap.fromTo('.is--four', {
  opacity: 0
}, {
  duration: 0.6,
  opacity: 1,
  scrollTrigger:{
    trigger:'.p--about',
    start: 'top 40%',                    
    toggleActions: "play none none reverse",
  }
});

// section about scale

gsap.registerPlugin(ScrollTrigger);
gsap.timeline({
    scrollTrigger: {
      trigger: ".is--about",
      pin: true,
      start: "top",
      end: "+=1500",
      scrub: true,
    },
    defaults: {
      ease: "none",
    },
  })
  .to(
    ".p--about",
    {
      scale: 8,
    },
    "start"
  )
  .to(
    ".p--about",
    {
      opacity: 0,
    },
    "start"
  )
  .to(
    ".is--one",
    {
      scale: 10,
      x: -1500,
    },
    "start"
  )
  .to(
    ".is--two",
    {
      scale: 10,
      x: -2500,
    },
    "start"
  )
  .to(
    ".is--three",
    {
      scale: 10,
      x: -2000,
    },
    "start"
  )
  .to(
    ".is--four",
    {
      scale: 10,
      x: 3000,
    },
    "start"
  )

  .to(
    ".is--about",
    {
      delay: 0.3,
      // backgroundColor: "#ffffff",
    },
    "start"
  )
  .to(
    ".project__wrapper",
    {
      delay: 0.2,
      scale: 1.2,
    },
    "start"
  )
  .to(
    ".project__wrapper",
    {
      delay: 0.4,
      opacity: 1,
    },
    "start"
  )


/**
 * Slider
 */

  gsap.fromTo(".p1", {
    y: '3rem',
    opacity: 0
  }, {
    y:'0rem', 
    duration: 0.8,
    opacity: 1,
    scrollTrigger:{
      trigger:'.one',
      start: 'bot 50%',                    
      toggleActions: "play none none reverse",
    }
  });
  gsap.fromTo(".p2", {
    y: '3rem',
    opacity: 0
  }, {
    y:'0rem', 
    duration: 0.8,
    opacity: 1,
    scrollTrigger:{
      trigger:'.two',
      start: 'bot 50%',                    
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".p3", {
    y: '3rem',
    opacity: 0
  }, {
    y:'0rem', 
    duration: 0.8,
    opacity: 1,
    scrollTrigger:{
      trigger:'.three',
      start: 'bot 50%',                    
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".p4", {
    y: '3rem',
    opacity: 0
  }, {
    y:'0rem', 
    duration: 0.8,
    opacity: 1,
    scrollTrigger:{
      trigger:'.four',
      start: 'bot 50%',                    
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".p5", {
    y: '3rem',
    opacity: 0
  }, {
    y:'0rem', 
    duration: 0.8,
    opacity: 1,
    scrollTrigger:{
      trigger:'.five',
      start: 'bot 50%',                    
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".p6", {
    y: '3rem',
    opacity: 0
  }, {
    y:'0rem', 
    duration: 0.8,
    opacity: 1,
    scrollTrigger:{
      trigger:'.six',
      start: 'bot 50%',                    
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".p7", {
    y: '3rem',
    opacity: 0
  }, {
    y:'0rem', 
    duration: 0.8,
    opacity: 1,
    scrollTrigger:{
      trigger:'.seven',
      start: 'bot 50%',                    
      toggleActions: "play none none reverse",
    }
  });

  // Split text contact 

  function setupSplits() {
            
    let sliderTexts = gsap.utils.toArray(".h2--contact");

    sliderTexts.forEach((sliderText) => {

    let SplitClient = new SplitText(sliderText, { type: "words" });
    let lines = SplitClient.words; //an array of all the divs that wrap each character
     
    gsap.from(lines, {
      duration: 0.4,
      opacity: 0,
      y: 10,
      ease: "none",
      stagger: 0.2,
      scrollTrigger: {
        trigger: sliderText,
        start: "top 80%",
        end: "bottom 90%",
        scrub: true,
      }
    });

  });

}

setupSplits();

//svg draw footer

gsap.fromTo(".arrow--footer", {
  drawSVG:"0%",
}, {
  drawSVG:"100%",
  duration: 1,
  scrollTrigger:{
    trigger:'.arrow--footer',
    start: 'bot 70%',                    
    toggleActions: "play none none reverse",
  }
});

gsap.fromTo(".link--mail", {
  y: '5rem',
  opacity: 0
}, {
  y:'0rem', 
  duration: 0.8,
  opacity: 1,
  scrollTrigger:{
    trigger:'.link--mail',
    start: 'bot 95%',                    
    toggleActions: "play none none reverse",
  }
});

gsap.fromTo(".link--lkd", {
  y: '5rem',
  opacity: 0
}, {
  y:'0rem', 
  duration: 0.8,
  opacity: 1,
  scrollTrigger:{
    trigger:'.link--lkd',
    start: 'bot 95%',                    
    toggleActions: "play none none reverse",
  }
});

}

export default loader