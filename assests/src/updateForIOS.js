const isIOS = () => {    
    var ua = navigator.userAgent;

    if (ua.includes("iPhone") || ua.includes("iPad") || ua.includes("iPod")) {
        return true
    }

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
    if (!isIOS()) {
        console.log("Not IOS")
        return
    }
    

    banner.style.backgroundAttachment = "scroll";
    audience.style.backgroundAttachment = "scroll";
    video.style.backgroundAttachment = "scroll";
    journey.style.backgroundAttachment = "scroll";
}

export {updateForIOS}