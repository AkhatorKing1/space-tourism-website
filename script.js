(() => {
    const hamburger = document.querySelector('.hamburger')
    const close = document.querySelector('.close')
    const nav = document.querySelector('nav')
    const blurDiv = document.querySelector('.blur-div')
    const container = document.querySelector('.container')
    const homeExplore = document.querySelector('.home-explore')

    // $(window).resize(function() {
    //     if ($(window).width() >=768) {
    //         location.reload();
    //      }
    //  });
    
    let displaySwitch = "OFF"
    function displayNav() {
        if(nav.style.display === "block") {
            nav.style.display = "none";
            displaySwitch = "OFF"
            console.log(displaySwitch)

        }
        else {
            nav.style.display = "block";
            displaySwitch = "ON"
            console.log(displaySwitch)
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

    const newDiv = document.createElement("div")
    $(newDiv).css({"background": "transparent", "width": "100vw", "height": "100vh", "position": "fixed", "opacity": "0.1"})
    container.appendChild(newDiv)
    container.removeChild(newDiv)

    hamburger.addEventListener('click', () => {
        displayNav();
        displayBlurDiv();
        container.insertBefore(newDiv, container.childNodes[0])
        hamburger.style.display = "none"
    })

    close.addEventListener('click', () => {
        displayNav();
        displayBlurDiv();
        container.removeChild(newDiv);
        hamburger.style.display = "flex"
    })

    function removeNav() {
        newDiv.addEventListener('click', () => {
            if ($(window).width() <768  && displaySwitch === "ON") {
                nav.style.display = "none"
                blurDiv.style.display = "none";
                hamburger.style.display = "flex"
                container.removeChild(newDiv)
                displaySwitch = "OFF"
                console.log("clicked")
            }

            // homeExplore.addEventListener('click', () => {
            //     if ($(window).width() <768  && displaySwitch === "ON") {
            //         nav.style.display = "none"
            //         console.log("clicked again")
            //     }
            // })
        })
        
    }

    removeNav()

    const newNav = document.querySelector('.new-nav')
    const memberPosition = document.querySelector('#member-position')
    const navAndInfo = document.querySelector('.nav-and-info')
    const techType = document.querySelector('.tech-type')
    const techTypeImg = document.querySelector('#tech-type-img')
    const info = document.querySelector(".info")
    const crewImg = document.querySelector(".crew-image")

    console.log($('.nav-and-info').children()[0])

    console.log($('div.new-nav')[0])

    if($('.nav-and-info').children()[0] !== $("div.new-nav")[0]) {
        console.log(true)
        function moveUp() {
            navAndInfo ? navAndInfo.insertBefore(newNav, memberPosition) && console.log('crew') : techType.insertBefore(newNav, techTypeImg) && console.log('tech');
        }

        $(window).resize(function() {
            if ($(window).width() <768) {
                moveUp()
            } 
            else {
                if(techType) {techType.insertBefore(newNav, info)}
                else {navAndInfo.appendChild(newNav)}
            }
         });
    
        if ($(window).width() <768) {
            moveUp()
        }
        else {
            if(techType) {techType.insertBefore(newNav, info)}
            else {navAndInfo.appendChild(newNav)}
        }
        
    } else (console.log(false))

    
    if (techType) {
        function moveDown() {
            techType.insertBefore(newNav, techTypeImg) && console.log('navDown');
        }
    
        $(window).resize(function() {
            if ($(window).width() >=768 && $(window).width() <992) {
                moveDown()
            }
            });
    
        if ($(window).width() >=768 && $(window).width() <992) {
            moveDown()
        }
    } else (console.log('no .tech-type'))

    function blurMargin() {
        $(window).resize(function() {
            if ($(window).width() >=768) {
                $(blurDiv).css({"margin-left": "0"})
                nav.style.display = "block"
                blurDiv.style.display = "flex"
                hamburger.style.display = "none"
                if(container.childNodes[container.childNodes.length - 1] === $("div")) {
                    container.removeChild(newDiv);
                } else {return}
            }
            else {
                $(blurDiv).css({"margin-left": "calc(100% - 254px)"})
                nav.style.display = "none"
                blurDiv.style.display = "none"
                hamburger.style.display = "flex"
                // container.insertBefore(newDiv, container.childNodes[0])
            }
        });
    
        if ($(window).width() >=768) {
            $(blurDiv).css({"margin-left": "0"})
            nav.style.display = "block"
            blurDiv.style.display = "flex"
            hamburger.style.display = "none"
            if(container.childNodes[container.childNodes.length - 1] === $("div")) {
                container.removeChild(newDiv);
            } else {return}
            // container.removeChild(newDiv);
        }
        else {
            $(blurDiv).css({"margin-left": "calc(100% - 254px)"})
            nav.style.display = "none"
            blurDiv.style.display = "none"
            hamburger.style.display = "flex"
        }
    }

    console.log(container.childNodes[container.childNodes.length - 1])

    blurMargin()
})()