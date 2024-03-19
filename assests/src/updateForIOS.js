const isIOS = () => {    
    var ua = navigator.userAgent.toLowerCase();

    var iosArray = ['iphone', 'ipod'];

    iosArray.forEach(item => {

        if (ua.indexOf(iosArray[item]) != -1)
        {
            return true
        }

    });

    return false;
}


const updateForIOS = () => {

    const banner = document.querySelector(".banner");
    const audience = document.querySelector(".audience-section");
    const video = document.querySelector(".video-section")
    const journey = document.querySelector(".journey-section")

    if (window.innerWidth > 478) {
        banner.style.backgroundAttachment = "fixed";
        audience.style.backgroundAttachment = "fixed";
        video.style.backgroundAttachment = "fixed";
        journey.style.backgroundAttachment = "fixed";

        return
    }
    // if (!isIOS()) return
    

    banner.style.backgroundAttachment = "scroll";
    audience.style.backgroundAttachment = "scroll";
    video.style.backgroundAttachment = "scroll";
    journey.style.backgroundAttachment = "scroll";
}

export {updateForIOS}