gsap.from('#header', { duration: .8, y: '-100%', ease: 'power1'})

gsap.from('.logo-move', { duration: 2, y: '-100%', delay: 1, ease: 'bounce'} )

gsap.from('#mobile', { duration: 2, opacity: 0, delay: 1} )

gsap.from('#hero', {duration: 2, x: '-100%', ease: 'bounce', delay: 1})

gsap.fromTo('.super', {opacity: 0, scale: 0, rotation: 720}, {duration: 1, delay: 3, opacity: 1, scale: 1, rotation: 0})