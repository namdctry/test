// 1.render songs;
// 2.scroll top
// 3 play/pause/seek
// 4 cd rotate
// 5 next/ prev
// 6 random
// 7 next / repeat when ended
// 8 active song
// 9 scroll active song into view
//10 play song when click


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const heading = $("header h2")
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const cd = $('.cd');
const playBtn = $('.btn-toggle-play');
const player = $('.player');
const progress = $('#progress');
const prevBtn = $('.btn-prev');
const nextBtn = $('.btn-next');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');
const song = $('.song');
const playlist = $('.playlist');
const quay = $('.quay');
const btnSpecial = $('.btn-special');
const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            name: "7711",
            singer: "Minh Đinh",
            path: "./music/7711.mp3",
            image: "https://i.ytimg.com/vi/tCeoDzdDWPs/0.jpg"
        },
        {
            name: "Xa",
            singer: "Tùng",
            path: "./music/Xa.mp3",
            image:
                "https://i.ytimg.com/vi/6DufHnGH690/0.jpg"
        },
        {
            name: "MỘT NGÀY TÔI QUÊN HẾT",
            singer: "HỨA KIM TUYỀN x CẨM VÂN x CECE TRƯƠNG",
            path:
                "./music/MotNgayToiQuenHet.mp3",
            image: "https://i.ytimg.com/vi/vWBTu-kTaW4/0.jpg"
        },
        {
            name: "Nắng",
            singer: "The Cassette",
            path: "./music/nang.mp3",
            image:
                "https://i.ytimg.com/vi/tm00NhBXafE/0.jpg"
        },
        {
            name: "Ánh Đèn Phố",
            singer: "The Cassette",
            path: "./music/AnhDenPho.mp3",
            image:
                "https://i.ytimg.com/vi/NHE_0o6wXYE/0.jpg"
        },
        {
            name: "NẾU MỘT MAI TÔI BAY LÊN TRỜI",
            singer: "TRÚC NHÂN",
            path:
                "./music/NeuMotMaiToiBayLenTroi.mp3",
            image:
                "https://i.ytimg.com/vi/V1v5mAOgTJg/0.jpg"
        },
        {
            name: "CHỜ ĐỢI CÓ ĐÁNG SỢ",
            singer: "ANDIEZ",
            path: "./music/ChoDoiCoDangSo.mp3",
            image:
                "https://i.ytimg.com/vi/oZIC9M87sLo/0.jpg"
        },
        {
            name: "Tựa Đêm Nay",
            singer: "The Cassette",
            path: "./music/TuaDemNay.mp3",
            image: "https://i.ytimg.com/vi/Px4AJUkVHL0/0.jpg"
        },
        {
            name: "Tôi Là Ai Trong Em",
            singer: "Hoàng Dũng",
            path: "./music/Toilaaitrongem.mp3",
            image:
                "https://i.ytimg.com/vi/PH61SylAQXQ/0.jpg"
        },
        {
            name: "Về Phía Mưa",
            singer: "Hoàng Dũng x Thế Bảo",
            path:
                "./music/VePhiaMua.mp3",
            image: "https://i.ytimg.com/vi/kTuIspoXRf0/0.jpg"
        },
        {
            name: "Tôi và em",
            singer: "Pink Frog",
            path: "./music/ToiVaEm.mp3",
            image:
                "https://i.ytimg.com/vi/wq5sWOUy6-Q/0.jpg"
        },
        {
            name: "NẮNG THỦY TINH",
            singer: "AVIN LU FT SUNI HẠ LINH",
            path: "./music/NangThuyTinh.mp3",
            image:
                "https://i.ytimg.com/vi/TifEE-7zKjo/0.jpg"
        },
        {
            name: "Không cần",
            singer: "the SHEEP",
            path:
                "./music/KhongCan.mp3",
            image:
                "https://i.ytimg.com/vi/afp6CrtPnJo/0.jpg"
        },
        {
            name: "bao tiền một mớ bình yên?",
            singer: "14 Casper & Bon",
            path: "./music/BaoTienMotMoBinhYen.mp3",
            image:
                "https://i.ytimg.com/vi/vVhKA9Av6vA/0.jpg"
        },
        {
            name: "CHỜ ANH NHÉ x CHỈ CÒN LẠI TÌNH YÊU",
            singer: " Hoàng Dũng ft. Bùi Anh Tuấn",
            path: "./music/MashupChoAnhNheChiConLaiTinhYeu.mp3",
            image: "https://i.ytimg.com/vi/9P_sQw9BBuE/0.jpg"
        },
        {
            name: "Người Con Gái Ta Thương",
            singer: "Hà Anh Tuấn",
            path: "./music/NguoiConGaiTaThuong.mp3",
            image:
                "https://i.ytimg.com/vi/LVQxfALfTe4/0.jpg"
        },
        {
            name: "Chuyện của mùa đông",
            singer: "Tiến Thành",
            path:
                "./music/ChuyenCuaMuaDong.mp3",
            image: "https://i.ytimg.com/vi/sYRve-chPfI/0.jpg"
        },
        {
            name: "Mùa thu cho em",
            singer: "Khum biec",
            path: "./music/Mùa thu cho em.mp3",
            image:
                "https://i.ytimg.com/vi/YxyaZE7gJLw/0.jpg"
        },
        {
            name: "có ai ở đây không?",
            singer: "Khum biec",
            path: "./music/vimotcaunoi.mp3",
            image:
                "https://i.ytimg.com/vi/ISqoTfTg8s4/0.jpg"
        },
        {
            name: "ĐÔI LỜI TÌNH CA",
            singer: "HOÀNG DŨNG",
            path:
                "./music/y2mate.com - ĐÔI LỜI TÌNH CA  HOÀNG DŨNG  OFFICIAL  MASHUP ACOUSTIC.mp3",
            image:
                "https://i.ytimg.com/vi/pm-X_mVxQDo/0.jpg"
        },
        {
            name: "VÌ MỘT CÂU NÓI",
            singer: "HOÀNG DŨNG, MÀU NƯỚC BAND",
            path: "./music/vimotcaunoi.mp3",
            image:
                "https://i.ytimg.com/vi/Ho0MobHCEgY/0.jpg"
        },
        {
            name: "Tháng Mấy Em Nhớ Anh",
            singer: "Hà Anh Tuấn",
            path: "./music/Tháng Mấy Em Nhớ Anh  Hà Anh Tuấn.mp3",
            image: "https://i.ytimg.com/vi/lxFmeBhoA1Y/0.jpg"
        },
        {
            name: "Tình Yêu Xanh Lá",
            singer: "Thịnh Suy",
            path: "./music/Tình Yêu Xanh Lá juju.mp3",
            image:
                "https://i.ytimg.com/vi/x-g1o_tkLj4/0.jpg"
        },
        {
            name: "Nếu Ngày Mai Tôi Không Trở Về",
            singer: "The Cassette",
            path:
                "./music/y2mate.com - The Cassette  Nếu Ngày Mai Tôi Không Trở Về Official Music Video.mp3",
            image: "https://i.ytimg.com/vi/pZ5C72Wtm74/0.jpg"
        },
        {
            name: "TÔI MUỐN LÀM CÁI CÂY",
            singer: "HOÀNG DŨNG",
            path: "./music/y2mate.com - TÔI MUỐN LÀM CÁI CÂY  HOÀNG DŨNG  OFFICIAL MUSIC VIDEO.mp3",
            image:
                "https://i.ytimg.com/vi/y345EnDM3oM/0.jpg"
        },
        {
            name: "Tuổi Đá Buồn",
            singer: "Hà Lê",
            path: "./music/y2mate.com - Tuổi Đá Buồn TĐB Remake  Hà Lê  Official Audio.mp3",
            image:
                "https://i.ytimg.com/vi/l2Hyp_ZdCss/0.jpg"
        },
        {
            name: "Nhớ Mùa Thu Hà Nội",
            singer: "Hà Lê",
            path:
                "./music/y2mate.com - Nhớ Mùa Thu Hà Nội NMTHN Remake  Hà Lê  Official Audio.mp3",
            image:
                "https://i.ytimg.com/vi/yJytt8T2naw/0.jpg"
        },
        {
            name: "Hạ Trắng",
            singer: "Hà Lê",
            path: "./music/y2mate.com - Hạ Trắng  Hà Lê Gameshow Sao Đại Chiến  Fanmade Lyrics Video.mp3",
            image:
                "https://i.ytimg.com/vi/4njG364lDVc/0.jpg"
        },
        {
            name: "THÁNG MẤY EM NHỚ ANH",
            singer: "Bùi Anh Tuấn",
            path: "./music/y2mate.com - THÁNG MẤY EM NHỚ ANH  Bùi Anh Tuấn lụi tim khán giả trong Live Concert HOA.mp3",
            image: "https://i.ytimg.com/vi/X3RDX0BxXkk/0.jpg"
        },
        {
            name: "Biển Nhớ",
            singer: "Hà Lê",
            path: "./music/y2mate.com - Biển Nhớ Remake  Hà Lê  Official Audio.mp3",
            image:
                "https://i.ytimg.com/vi/Eut33NJzyg8/0.jpg"
        },
        {
            name: "Những ngày đi lạc",
            singer: "Linh Cáo",
            path:
                "./music/y2mate.com - MV  Những ngày đi lạc  Linh Cáo Official.mp3",
            image: "https://i.ytimg.com/vi/0xcQcCuJc8M/0.jpg"
        },
        {
            name: "Em dạo này",
            singer: "Ngọt",
            path: "./music/https://www.youtube.com/watch?v=-6s_eRHYqVM&list=PLT9kDLJtQ_VGRCAQwaaspHb_V_pC77oY8&index=32",
            image:
                "https://i.ytimg.com/vi/-6s_eRHYqVM/0.jpg"
        },
        {
            name: "The Cassette",
            singer: "Nếu Ngày Mai Tôi Không Trở Về (Acoustic)",
            path: "./music/y2mate.com - The Cassette  Nêu Ngay Mai Tôi Không Trơ Vê Acoustic  Live at Montauk.mp3",
            image:
                "https://i.ytimg.com/vi/THdAos2pzsY/0.jpg"
        },
        {
            name: "MƯA HỒNG",
            singer: "HÀ LÊ ft. BÙI LAN HƯƠNG",
            path:
                "y2mate.com - MƯA HỒNG   HÀ LÊ ft BÙI LAN HƯƠNG MH  OFFICIAL LYRICS VIDEO.mp3",
            image:
                "https://i.ytimg.com/vi/rgjr5pu2ooQ/0.jpg"
        },
        {
            name: "NHÌN NHỮNG MÙA THU ĐI",
            singer: "MỸ ANH",
            path: "./music/y2mate.com - MỸ ANH  NHÌN NHỮNG MÙA THU ĐI.mp3",
            image:
                "https://i.ytimg.com/vi/M4bLsKj1jhI/0.jpg"
        },
        {
            name: "Nơi Tình Yêu Kết Thúc",
            singer: "Bùi Anh Tuấn",
            path: "./music/y2mate.com - Nơi Tình Yêu Kết Thúc  lyric video   Bùi Anh Tuấn.mp3",
            image: "https://i.ytimg.com/vi/4S0jwsH7WYw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD57OeyJiE6hPY-XOlgGJwMPdoniQ"
        },
        {
            name: "Diễm xưa",
            singer: "Trịnh Trung Kiên",
            path: "./music/y2mate.com - KIÊN  DIỄM XƯA GEN Z VÀ TRỊNH.mp3",
            image:
                "https://i.ytimg.com/vi/Wb75HgH7ycM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAoNsNsyUwWzghf3elR84KYGWaClQ"
        },
        {
            name: "Mơ Hồ",
            singer: "Bùi Anh Tuấn",
            path:
                "./music/y2mate.com - Mơ Hồ  Bùi Anh Tuấn  Official MV.mp3",
            image: "https://i.ytimg.com/vi/_PcSBR2vBlI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAnRtBtLdS9qxUb3Ro0AdrlGSfbkQ"
        }
    ],
    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index == this.currentIndex ? 'active' : ''}" data-index="${index}">
                <div class="thumb" style="background-image: url(${song.image})"">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })
        // console.log(htmls)
        playlist.innerHTML = htmls.join('');

    },
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex]
            }
        })
    },

    handleEvents: function () {
        const _this = this;
        const cdWidth = cd.offsetWidth;


        //xu ly CD quay / dung
        const cdThumbAnimate = cdThumb.animate([{ transform: 'rotate(360deg)' }],
            {
                duration: 10000,
                iterations: Infinity
            }
        );
        cdThumbAnimate.pause();

        // xu ly phong to/ thu nho
        document.onscroll = function () {
            const scrollTop = document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth / cdWidth

        };
        // xu ly khi click play
        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause();
            }
            else {
                audio.play();
            }
        }
        // khi song duoc play
        audio.onplay = function () {
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play();
        };
        // khi song duoc pause
        audio.onpause = function () {
            _this.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause();
        };

        // khi tien do bai hat thay doi
        audio.ontimeupdate = function () {

            // console.log(audio.duration ); 
            const progressPercent = Math.round(audio.currentTime / audio.duration * 100);
            progress.value = progressPercent;
            
        };
        // xu ly khi tua
        progress.onchange = function (e) {
            const seekTime = audio.duration / 100 * e.target.value;
            audio.currentTime = seekTime;
        };

        //khi next song
        nextBtn.onclick = function () {
            if(_this.isRandom){
                _this.playRandomSong();
            }
            else{
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();

        };
        prevBtn.onclick = function () {
            if(_this.isRandom){
                _this.playRandomSong();
            }
            else{
                _this.prevSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();

        };
        randomBtn.onclick = function () {
            _this.isRandom = !_this.isRandom;
            randomBtn.classList.toggle('active', _this.isRandom)
        };
        repeatBtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat;
            this.classList.toggle('active', _this.isRepeat);
        };

        // xy ly nextSong khi audio ended
        audio.onended = function () {
            if(_this.isRepeat){
                audio.play();
            }
            else {
                nextBtn.onclick();
            }
        };
        playlist.onclick = function (e){
            const songNode = e.target.closest(".song:not(.active)")
            if (songNode || e.target.closest(".option")) {
                if(songNode && !e.target.closest(".option")){
                    console.log(songNode.dataset.index);
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.LoadCurrentSong();
                    _this.render();
                    audio.play();
                    console.log('song')
                }
                if(e.target.closest(".option")){
                    alert('Chưa làm được :)))))')
                }
            
            }
        };
        btnSpecial.onclick = function() {
            const element = $('.troll');
            if(element){
                element.remove();
                console.log('btnSpecial')
            }
            else{
                
                btnSpecial.innerHTML += `<div class="troll"><div class = "quay"></div></div>`
                quayAnimate = $('.quay').animate([{ transform: 'rotate(360deg)' }],
                    {
                        duration: 200,
                        iterations: Infinity
                    }
                );

            }

        }
    },
    scrollToActiveSong: function () {
        setTimeout( function() {
            $('.song.active').scrollIntoView({
                behavior:'smooth',
                block: 'center',
            })
        }, 0);
    },
    LoadCurrentSong: function () {

        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path;
    },


    nextSong: function () {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.LoadCurrentSong()
    },
    prevSong: function () {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        // console.log(this.songs.length)
        this.LoadCurrentSong()
    },
    playRandomSong: function () {
        let newIndex
        do {
            newIndex = Math.round(Math.random() * this.songs.length)
        } 
        while (newIndex == this.currentIndex)
        this.currentIndex = newIndex
        this.LoadCurrentSong()
    },
    


    start: function () {
        this.defineProperties();
        this.handleEvents();
        this.LoadCurrentSong();
        this.render();
        progress.value = 0;
    }
}
app.start()

