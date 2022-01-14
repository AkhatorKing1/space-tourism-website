(() => {
    const hamburger = document.querySelector('.hamburger')
    const close = document.querySelector('.close')
    const nav = document.querySelector('nav')
    const blurDiv = document.querySelector('.blur-div')

    $(window).resize(function() {
        if ($(window).width() >=768) {
            location.reload();
         }
     });

    function displayNav() {
        if(nav.style.display === "block") {
            nav.style.display = "none";
        }
        else {
            nav.style.display = "block";
        }
    }

    function displayBlurDiv() {
        if(blurDiv.style.display === "flex") {
            blurDiv.style.display = "none";
        }
        else {
            blurDiv.style.display = "flex";
        }
    }

    hamburger.addEventListener('click', () => {
        displayNav();
        displayBlurDiv();
        hamburger.style.display = "none"
    })

    close.addEventListener('click', () => {
        displayNav();
        displayBlurDiv();
        hamburger.style.display = "flex"
    })

    const newNav = document.querySelector('.new-nav')
    const memberPosition = document.querySelector('#member-position')
    const navAndInfo = document.querySelector('.nav-and-info')
    function moveUp(a) {
        navAndInfo.insertBefore(newNav, a)
    } 
    $(window).resize(function() {
        if ($(window).width() <768) {
            moveUp(memberPosition)
         }
     });

    if ($(window).width() <768) {
        moveUp(memberPosition)
     }

     const vehicle = document.querySelector('.vehicle')
     const spaceport = document.querySelector('.spaceport')
     const capsule = document.querySelector('.capsule')
     const vehicleImg = document.querySelector('#vehicle-img')
     const spaceportImg = document.querySelector('#spaceport-img')
     const capsuleImg = document.querySelector('#capsule-img')
})()