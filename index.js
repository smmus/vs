window.onload = () => {

    console.log("[Document Loaded]");

    //player speed code
    let video_element = document.querySelector('video');
    let speed_input = document.getElementById('speed_input');

    speed_input.value = video_element.playbackRate;

    document.getElementById('player_speed').onclick = e => {


        let target_id = e.target;

        console.log("target_id", target_id);
        console.log("[playbackRate]", video_element.playbackRate);
        if (e.target.id == "speed_up") {
            video_element.playbackRate += .2;
            speed_input.value = video_element.playbackRate;
        } else if (e.target.id == "speed_down") {
            video_element.playbackRate -= .2;
            speed_input.value = video_element.playbackRate;
        }
    }

    // display none/block based on link provided or not
    if (window.location.search != "") { //matlab kuch to hei :')

        //FUCKING VIDEO STUFFFFF
        console.log("[FUCKING VIDEO STUFFFFF]");

        //hide and seek dom elements
        document.querySelector('.main div').style.display = "none";
        document.querySelector('.main video').style.display = "";

        //get video link and play mf asap

        // removing ?v=
        let video_link = window.location.search.substring(3);
        console.log("[video_link]", video_link);

        document.querySelector('video source').src = video_link;

        



    } else {
        //VIDEO LINK STUFFFF
        console.log("[VIDEO LINK STUFFFF]")


        document.getElementById("go_mc").onclick = e => {
            console.log("[go_mc button clicked]")

            if (!document.getElementById('video_input').value) {
                alert("Fuck U, Idiot");
                return;
            }


            console.log('[going mf]');
            console.log("[location]", window.location)

            if (window.location.pathname.includes('index')) {
                console.log('[index.html]');
                window.location.href = window.location.href.replace("index.html", `player.html?v=${document.getElementById('video_input').value}`);
                return;
            }
            window.location.href += `player.html?v=${document.getElementById('video_input').value}`;
            // window.location.search = `?v=${document.getElementById('video_input').value}`;


        }

        // local video blob file
        var video = document.getElementsByTagName('video')[0];
        var fileItem = document.getElementById('video_input_local');

        fileItem.onchange = () => { //not onChange fuck
            console.log('[file changed');

            //hide and seek dom elements
            // document.querySelector('.main div').style.display = "none";
            document.querySelector('.main video').style.display = "";

            var files = fileItem.files;
            var file = files[0];
            var urlBlob = URL.createObjectURL(file);
            // video.src = url;
            document.getElementsByTagName('source')[0].src = urlBlob;
            video.load();
            video.onloadeddata = function () {
                video.play();
            }
        }
    }






    // document.querySelector('body').onclick = e => {
    //     console.log(e.target)
    //     console.log(e.target.id)

    //     if (e.target.id == "go_mc" && document.getElementById('video_input').value != ""){

    //     }
    // }



}