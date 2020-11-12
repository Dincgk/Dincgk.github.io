const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
	  {
        name: 'Waiting',
        artist: 'Unknown Brain ',
        url: 'http://music.163.com/song/media/outer/url?id=1330207408.mp3',
        cover: '/images/fengmian.png',
      },
     
    ]
});
