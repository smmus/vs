window.onload = () => {
    
    console.log("[Document Loaded]");
    let video_el = document.getElementById('main_video');

    function videoSpeed(up = 1, n = .1, f = 1) {

        console.log('[Speed Change:', n, ']');

        if (document.querySelector('video').playbackRate < .1) {
            alert('fuck off idiot!!');
            return;
        }


        if (up) {
            document.querySelectorAll('video').forEach(e => e.playbackRate = (e.playbackRate + n).toFixed(f));

        } else {
            document.querySelectorAll('video').forEach(e => e.playbackRate = (e.playbackRate - n).toFixed(f));
        }

        let new_play_back_rate = document.querySelector('video').playbackRate;

        console.log('[Speed :', new_play_back_rate, ']');
        document.getElementById('video_speed').innerHTML = document.querySelector('video').playbackRate
    }


    function videoForward(seconds = 5) {
        console.log('[videoForward:', seconds, ']');
        document.querySelectorAll('video').forEach(e => e.currentTime += seconds);
        console.log('[currentTime :', document.querySelector('video').currentTime, ']');
    }

    function videoBackward(seconds = 5) {
        console.log('[videoBackward:', seconds, ']');
        document.querySelectorAll('video').forEach(e => e.currentTime -= seconds);
        console.log('[currentTime :', document.querySelector('video').currentTime, ']');
    }


    function fileItemOnchange() {
        console.log('[file changed]');



        //hide and seek dom elements
        document.querySelector('.main div').style.display = "none";
        video_el.style.display = "";

        //create blob and play
        var files = fileItem.files;
        var file = files[0];
        var urlBlob = URL.createObjectURL(file);
        // video.src = url;
        document.getElementsByTagName('source')[0].src = urlBlob;

        // load nd play
        video_el.load();
        video_el.onloadeddata = function () {
            video_el.play();
        }

        document.getElementById("nav-toggle").click()
    }


    function browseVideoLink(){
        console.log('[FUNCTION browseVideoLink]');
        console.log(document.getElementById("video_link_input").value);
        
        location.search = `?v=${document.getElementById("video_link_input").value}`;
    }
    
    
    
    
    
    
    
    
    
    // event listener to speed control button
    document.getElementById('video_speed_down').onclick = () => videoSpeed(0);
    document.getElementById('video_speed_up').onclick = () => videoSpeed();
    
    // local video blob file
    var fileItem = document.getElementById('local_video_file_input');
    
    fileItem.onchange = fileItemOnchange;
    
    // event browse video link button
    document.getElementById("browseVideoLink").onclick = browseVideoLink;

    
    // ------------- if provided any link via url ---------------------
    console.log(location.search);
    if(location.search){
        
        console.log(location.search.substring(3));

        //hide and seek dom elements
        document.querySelector('.main div').style.display = "none";
        video_el.style.display = "";

        document.querySelector("video source").src = location.search.substring(3);

        // load nd play
        video_el.load();
        video_el.onloadeddata = function () {
            video_el.play();
        }

        return;
    }
    // ------------- if provided any link via url ---------------------







    
    
    // display none/block based on link provided or not
    // if (window.location.search != "") { //matlab kuch to hei :')

    //     //FUCKING VIDEO STUFFFFF
    //     console.log("[FUCKING VIDEO STUFFFFF]");

    //     //hide and seek dom elements
    //     document.querySelector('.main div').style.display = "none";
    //     document.querySelector('.main video').style.display = "";

    //     //get video link and play mf asap

    //     // removing ?v=
    //     let video_link = window.location.search.substring(3);
    //     console.log("[video_link]", video_link);

    //     document.querySelector('video source').src = video_link;





    // } else {
    //     //VIDEO LINK STUFFFF
    //     console.log("[VIDEO LINK STUFFFF]")


    //     document.getElementById("go_mc").onclick = e => {
    //         console.log("[go_mc button clicked]")

    //         if (!document.getElementById('video_input').value) {
    //             alert("Fuck U, Idiot");
    //             return;
    //         }


    //         console.log('[going mf]');
    //         console.log("[location]", window.location)

    //         if (window.location.pathname.includes('index')) {
    //             console.log('[index.html]');
    //             window.location.href = window.location.href.replace("index.html", `player.html?v=${document.getElementById('video_input').value}`);
    //             return;
    //         }
    //         window.location.href += `player.html?v=${document.getElementById('video_input').value}`;
    //         // window.location.search = `?v=${document.getElementById('video_input').value}`;


    //     }
    // }






    // document.querySelector('body').onclick = e => {
    //     console.log(e.target)
    //     console.log(e.target.id)

    //     if (e.target.id == "go_mc" && document.getElementById('video_input').value != ""){

    //     }
    // }



}