const startBtn = document.getElementById('start-btn');
const backBtn = document.getElementById('back-btn');
const home = document.getElementById('start-page');
const game = document.getElementById('game');
const gameBox = document.getElementById('game-box');
const startText = document.getElementById('start-text');
const gameTitle = document.getElementById('game-title');
const diceBtn = document.getElementById('dice-btn');
const themeDisplay = document.getElementById('theme-display');
const storyText = document.getElementById('story-text');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const choicesDiv = document.getElementById('choices');
const evaluationDiv = document.getElementById('evaluation');

function adjustMainPadding() {
  const headerHeight = document.querySelector('header').offsetHeight;
  document.querySelector('main').style.paddingTop = headerHeight + 'px';
}

window.addEventListener('load', adjustMainPadding);
window.addEventListener('resize', adjustMainPadding);

function adjustMainLayout() {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const headerHeight = header.offsetHeight;

  document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
  main.style.paddingTop = `${headerHeight}px`;
}

window.addEventListener('load', adjustMainLayout);
window.addEventListener('resize', adjustMainLayout);

document.getElementById('start-btn').addEventListener('click', () => {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('game').style.display = 'flex'; 
});

startBtn.addEventListener('click', () => {
  home.style.display = 'none';
  game.style.display = 'flex';
});

backBtn.addEventListener('click', () => {
  game.style.display = 'none';
  home.style.display = 'flex';
});

const themes = ["Pesan Terakhir", "Langkah Kecil, Dampak Besar", "Rekaman yang Terhapus", "Notifikasi Terakhir", "Hijau atau Abu-Abu"];
const story = {
    "Pesan Terakhir": "Kamu sedang menyutradarai sebuah short film bertema “perpisahan diam-diam.” Tokoh utama baru saja kehilangan sahabatnya dan ingin menyampaikan pesan terakhir lewat video.",
    "Langkah Kecil, Dampak Besar": "Kamu sedang membuat dokumenter pendek berdurasi 5 menit tentang warga di kota kecil yang perlahan mengubah lingkungannya jadi lebih hijau. Film ini bertujuan untuk menyentuh penonton dan mendorong mereka ikut bergerak.",
    "Rekaman yang Terhapus": "Kamu ditugaskan membuat film pendek bergenre thriller investigasi. Ceritanya tentang seorang jurnalis muda yang menemukan rekaman video lama berisi bukti penting dari kasus besar yang ditutup-tutupi. Kamu harus menentukan cara menyusun adegan untuk memancing rasa penasaran dan perlahan mengungkap misteri.",
    "Notifikasi Terakhir": "Seorang remaja aktif di media sosial tiba-tiba kehilangan akses ke akunnya setelah mengalami konflik dengan sahabatnya. Cerita berfokus pada bagaimana media sosial membentuk (dan kadang merusak) koneksi emosional.", 
    "Hijau atau Abu-Abu": "Seorang siswa SMA menemukan bahwa perusahaan besar sponsor event sekolahnya ternyata melakukan pencemaran lingkungan. Ia dilema: apakah akan membongkarnya atau tetap diam demi kepentingan sekolah."
};

const scenes = {
    "Pesan Terakhir": [
    {
        question: "Angle kamera apa yang kamu pilih untuk membuka adegan?",
        choices: [
        "Wide shot dari atas, menunjukkan kota malam yang sepi",
        "Close-up wajah tokoh utama yang sedang duduk di kamar gelap",
        "Shot rekaman video dari ponsel sang sahabat yang tersisa"
        ],
        evaluation: [
        "Opening dengan wide shot dari atas, menunjukkan kota malam yang sepi, memberikan suasana sunyi dan kesepian. Bagus untuk membuka secara atmosferik, tapi terasa agak jauh dari tokoh.",
        "Opening dengan close-up wajah tokoh utama yang sedang duduk di kamar gelap langsung membawa emosi penonton ke karakter utama, intim dan kuat secara dramatis.",
        "Opening dengan shot rekaman video dari ponsel sang sahabat yang tersisa terasa unik dan langsung membangun misteri yang mengajak penonton menebak hubungan mereka."
        ]
    },
    {
        question: "Saat tokoh utama mulai berbicara ke kamera, gaya apa yang kamu pilih?",
        choices: [
        "Kamera tetap statis selama monolog",
        "Kamera perlahan bergerak maju (dolly in) saat ia berbicara",
        "Kamera handheld sedikit goyah, seperti diambil sendiri oleh tokohnya"
        ],
        evaluation: [
        "Gaya kamera tetap statis selama monolog menunjukkan kontrol dan ketenangan, tapi berisiko terasa datar jika monolog panjang.",
        "Gaya kamera perlahan bergerak maju (dolly in) saat ia berbicara memperkuat intensitas emosional secara perlahan yang efektif untuk menarik empati.",
        "Gaya kamera handheld sedikit goyah, seperti diambil sendiri oleh tokohnya membuat monolog terasa sangat personal dan raw, cocok jika kamu ingin kesan dokumenter."
        ]
    },
    {
        question: "Kapan kamu menyisipkan kilas balik hubungan mereka?",
        choices: [
        "Langsung setelah satu kalimat emosional selesai",
        "Di tengah monolog saat tokoh berhenti sejenak",
        "Di akhir setelah tokoh selesai bicara"
        ],
        evaluation: [
        "Kilas balik disisipkan langsung setelah satu kalimat emosional selesai menyisipkan emosi dengan cepat tapi bisa terasa mendadak dan mengganggu alur naratif jika tidak halus transisinya.",
        "Kilas balik dimunculkan di tengah monolog saat tokoh berhenti sejenak memberi kesan alami seolah kenangan itu benar-benar muncul spontan, memperkuat keterhubungan emosional.",
        "Kilas balik muncul di akhir setelah tokoh selesai bicara, memberi efek teatrikal dan menjadikannya sebagai 'puncak perasaan' yang bisa memperkuat dampak visual dan pesan emosional."
        ]
    },
    {
        question: "Bagaimana mengakhiri adegan ini?",
        choices: [
        "Kamera perlahan menjauh saat tokoh tersenyum kecil",
        "Cut to black saat air matanya jatuh",
        "Gambar freeze saat dia menatap ke kamera"
        ],
        evaluation: [
        "Kamera perlahan menjauh saat tokoh tersenyum kecil memberikan rasa lega dan penyembuhan, menciptakan penutupan yang tenang dan penuh harapan.",
        "Cut to black saat air matanya jatuh memberi kesan dramatis dan mengejutkan, menekankan rasa kehilangan sebagai klimaks cerita.",
        "Gambar freeze saat dia menatap ke kamera, menciptakan kesan kuat seolah tokoh menyampaikan pesan langsung pada penonton, efektif untuk mendorong refleksi."
        ]
    }
    ], 

    "Langkah Kecil, Dampak Besar": [
    {
        question: "Bagaimana kamu memulai dokumentermu?",
        choices: [
        "Drone shot kota kering dari atas",
        "Video lama taman yang kini hilang",
        "Close-up tangan menanam bibit + narasi"
        ],
        evaluation: [
        "Opening dengan drone shot kota kering dari atas memberikan visual luas, bagus untuk konteks, tapi emosinya kurang dekat.",
        "Opening dengan video lama taman yang kini hilang membangkitkan rasa kehilangan, kuat secara emosional.",
        "Opening dengan close-up tangan menanam bibit + narasi memberikan kesan intim dan menyentuh, cocok untuk mengajak penonton merasa terlibat."
        ]
    },
    {
        question: "Bagaimana mengenalkan warga penggerak?",
        choices: [
        "Wawancara formal di ruang tamu",
        "Ikuti tokoh saat berkegiatan",
        "Narasi tokoh + montase kegiatannya"
        ],
        evaluation: [
        "Mengenalkan tokoh kunci melalui wawancara formal di ruang tamu memberi informasi jelas tapi terasa berjarak dan kurang emosional dibanding pembukaan yang sudah personal.",
        "Mengenalkan tokoh kunci dengan mengikuti tokoh saat berkegiatan membuat penonton merasa terlibat langsung dan melanjutkan nuansa hangat dari awal cerita.",
        "Mengenalkan tokoh kunci melalui narasi tokoh + montase kegiatannya menarik secara visual tapi membangun koneksi emosional yang lebih lemah karena terasa terlalu disusun."
        ]
    },
    {
        question: "Bagaimana menggambarkan perubahan lingkungan?",
        choices: [
        "Time-lapse pembangunan taman",
        "Shot panjang diskusi warga",
        "Gabungan footage dokumenter + video warga"
        ],
        evaluation: [
        "Menunjukkan perubahan dengan time-lapse pembangunan taman efektif secara visual tapi terasa datar secara emosional jika tidak diimbangi dengan sentuhan personal.",
        "Menunjukkan perubahan dengan shot panjang diskusi warga menunjukkan proses nyata dan kolaborasi, menguatkan tema keterlibatan warga dari langkah sebelumnya.",
        "Menunjukkan perubahan dengan gabungan footage dokumenter + video warga menghadirkan kesan perubahan yang hidup dan dimiliki bersama, memperluas perspektif cerita."
        ]
    },
    {
        question: "Bagaimana kamu menutup dokumentermu?",
        choices: [
        "Anak-anak bermain di taman baru",
        "Tokoh utama di depan rumah",
        "Kamera mundur dari warga kerja bakti"
        ],
        evaluation: [
        "Cerita ditutup dengan anak-anak bermain di taman baru merupakan penutup yang penuh harapan dan menunjukkan hasil nyata dari perjalanan yang telah dibangun sejak awal.",
        "Cerita ditutup dengan tokoh utama di depan rumah mengembalikan fokus ke individu dengan emosional kuat, tapi sedikit melemahkan pesan kolektifnya.",
        "Cerita ditutup dengan kamera mundur dari warga kerja bakti mamera mundur dari warga kerja bakti"
        ]
    }
    ], 

"Rekaman yang Terhapus": [
    {
        question: "Bagaimana kamu memulai film ini?",
        choices: [
        "Layar hitam, suara rekaman rusak, muncul gambar terganggu",
        "Close-up wajah jurnalis saat membuka laptop",
        "Shot kantor berita kosong, suara jam berdetak"
        ],
        evaluation: [
        "Film dimulai dengan layar hitam, suara rekaman rusak, dan muncul gambar terganggu yang membangun atmosfer misterius yang kuat, namun membutuhkan konteks cepat agar tidak membingungkan",
        "Film dimulai dengan close up wajah jurnalis saat membuka laptop sehingga membawa penonton langsung ke karakter, yang menciptakan koneksi emosional sejak awal",
        "Film dimulai dengan shot kantor berita kosong, suara jam berdetak yang semakin efektif membangun suasana tegang, meski agak lambat dalam memperkenalkan konflik utama" 
        ]
    },
    {
        question: "Saat jurnalis menemukan rekaman misterius, bagaimana kamu menampilkannya?",
        choices: [
        "Split-screen wajah jurnalis dan layar rekaman",
        "Fokus penuh ke layar laptop",
        "POV jurnalis saat melihat video"
        ],
        evaluation: [
        "Saat jurnalis menemukan rekaman misterius, angle kamera akan split screen wajah jurnalis serta layar rekaman, yang dimana akan menampilkan emosi dan informasi secara bersamaan, tpi visualnya bisa terasa padat jika tidak diatur hati-hati",
        "Saat jurnalis menemukan rekaman misterius, shot akan fokus penuh ke layar laptop sehingga dapat menyampaikan isi bukti dengan jelas, meskipun kurang dramatis secara visual",
        "Saat jurnalis menemukan rekaman misterius, shot akan menampilkan POV jurnalis saat melihat video sehingga memberi pengalaman yang imersif, namun bisa membingungkan tanpa visual pendukung yang kuat"
        ]
    },
    {
        question: "Saat jurnalis menyelidiki lebih jauh, bagaimana kamu memperlihatkan prosesnya?",
        choices: [
        "Montase riset cepat (arsip, papan tulis, wawancara)",
        "Kamera mengikuti jurnalis di koridor gelap",
        "Wawancara narasumber yang menghindar, diselingi ekspresi jurnalis"
        ],
        evaluation: [
        "Saat jurnalis menyelidiki lebih jauh, footage akan menampilkan montase riset cepat (arsip, papan tulis, wawancara) yang menunjukkan perkembangan investasi dengan cepat, tetapi mungkin kurang menekan sisi emosional",
        "Saat jurnalis menyelidiki lebih jauh, kamera akan mengikuti jurnalis di koridor gelap yang menambah ketegangan secara atmosferik, meskipun ritmenya terasa lebih lambat",
        "Saat jurnalis menyelidiki lebih jauh, narasumber yang diwawancarai menghindari sambil diselingi ekspresi jurnalis, yang dimana menciptakan konflik emosional yang kuat sekaligus memajukan alur cerita"
        ]
    },
    {
        question: "Bagaimana kamu menutup cerita ini secara menggugah?",
        choices: [
        "Jurnalis menatap kamera, berkata satu kalimat, fade to black",
        "Rekaman final diputar utuh, disertai narasi",
        "Kamera menjauh dari jurnalis yang mengirim bukti diam-diam"
        ],
        evaluation: [
        "Sebagai penutup, jurnalis akan menatap kamera sambil berkata satu kalimat dan kemudian fade to black. Simpel dan sangat kuas secara emosional dan cocok untuk penutup yang menggugah",
        "Sebagai penutup, rekaman final akan diputar utuh, diserta narasi yang dimana menjawab semua pertanyaan penonton dengan tuntas, namun terasa lebih konvensional",
        "Sebagai penutup, kamera akan menjauh dari jurnalis yang mengirim bukti diam-diam, menjadi penutup yang subtil dan meninggalkan rasa penasaran dan sangat cocok untuk genre investigasi"
        ]
    }
    ],
    
    "Notifikasi Terakhir": [
    {
        question: "Bagaimana kamu membuka film dan memberi petunjuk konflik?",
        choices: [
        "Shot layar ponsel penuh notifikasi, lalu zoom out ke wajah kosong tokoh utama",
        "Dialog dua sahabat yang tampak awkward dan tegang",
        "Montase postingan menyindir, musik tenang namun menusuk"
        ],
        evaluation: [
        "Film diawali dengan menunjukkan konflik melalui shot layar ponsel penuh notifikasi, lalu zoom out ke wajah kosong tokoh utama. Shot ini cocok untuk menggambarkan overload digital, tapi belum memberi koneksi emosional langsung.",
        "Film diawali dengan dialog dua sahabat yang tampak awkward dan tegang, membangun rasa penasaran secara natural yang ideal untuk konflik hubungan.",
        "Film diawali dengan montase postingan menyindir, musik tenang namun menusuk, menunjukkan pendekatan simbolis yang kuat, tapi bisa membingungkan tanpa konteks awal."
        ]
    },
    {
        question: "Setelah akun diambil alih atau diblokir, bagaimana tokoh utama bereaksi?",
        choices: [
        "Duduk diam di kamar dengan layar menyala",
        "Panik login, lalu berhenti di ekspresi putus asa",
        "Split screen: dirinya dan feed yang terus berjalan"
        ],
        evaluation: [
        "Tokoh utama bereaksi dengan duduk diam di kamar dengan layar menyala setelah akun diretas sangat menggambarkan emosi tokoh, meskipun dalam diam.",
        "Tokoh utama bereaksi dengan panik login, lalu berhenti di ekspresi putus asa menunjukkan reaksi emosional yang intens dan mudah dimengerti penonton.",
        "Tokoh utama bereaksi sambil menampilkan dirinya dan feed yang terus berjalan dengan split screen. Menarik secara visual dan menyampaikan rasa terputus, tapi sedikit bergaya eksperimental"
        ]
    },
    {
        question: "Bagaimana kamu menggambarkan proses perubahan atau refleksi tokoh?",
        choices: [
        "Narasi internal saat ia menonton video lama",
        "Menulis pesan yang tak dikirim",
        "Berinteraksi dengan adik/orangtua tanpa ponsel"
        ],
        evaluation: [
        "Perubahan tokoh ditampilkan melalui narasi internal saat ia menonton video lama sangat reflektif dan menyentuh, walau klise jika tidak ditulis kuat.",
        "Perubahan tokoh ditampilkan dengan tokoh menulis pesan yang tak dikirim merupakan aksi sederhana tapi bermakna, memperlihatkan konflik batin.",
        "Perubahan tokoh yang ditunjukkan dengan berinteraksi dengan adik/orangtua tanpa ponsel membawa konteks eksternal yang menyejukkan dan memberi arah baru."
        ]
    },
    {
        question: "Bagaimana kamu menutup film agar penonton merasakan dampak emosionalnya?k",
        choices: [
        "Menonaktifkan notifikasi dan letakkan ponsel",
        "Tulis ulang akun dengan teks: “mulai lagi, untuk diriku sendiri",
        "Menguatkan tema pemulihan diri dengan pernyataan eksplisit"
        ],
        evaluation: [
        "Menutup film dengan scene menonaktifkan notafikasi dan meletakkan ponsel, sebagai simbol sederhana yang kuat, tapi agak antiklimaks",
        "Menutup film dengan scene menulis ulang akun yang semakin menguatkan tema pemulihan diri dengan pernyataan eksplisit",
        "Menutup film dengan scene jalan keluar rumah tanpa ponsel, lihat sekitar  yang menampilkan ending terbuka yang memberi harapan tanpa kata-kata"
        ]
    }
    ],

    "Hijau atau Abu-Abu": [
    {
        question: "Bagaimana kamu memulai cerita dan memperkenalkan konfliknya?",
        choices: [
        "Montase poster acara lingkungan dan klip berita pencemaran sungai di dekat sekolah, menunjukkan kontras antara citra hijau dan realitas yang kelabu",
        "Tokoh mewawancarai perwakilan perusahaan sponsor acara, lalu menangkap pernyataan ambigu yang mencurigakan, menanam rasa penasaran",
        "Obrolan ringan siswa saat makan siang tentang acara lingkungan, diselingi kabar investigasi pencemaran yang belum ramai dibicarakan"
        ],
        evaluation: [
        "Film dimulai dengan montase poster acara lingkungan dan klip berita pencemaran sungai yang membuka cerita secara sinematik dan menyisipkan konflik dengan halus",
        "Film dimulai dengan tokoh yang mewawancarai perwakilan perusahaan sponsor acara, yang dimana efektif membangun keterikatan penonton dengan tokoh utama dan konflik yang akan dipecahkan",
        "Film dimulai dengan obrolan ringan siswa saat makan siang yang dimana realistis dan alami serta cocok untuk membangun ritme narasi yang terstruktur"
        ]
    },
    {
        question: "Apa yang dilakukan tokoh utama setelah menyadari fakta ini?",
        choices: [
        "Menulis cuitan kritis di forum anonim sekolah, berharap orang lain sadar tanpa harus membuka identitasnya",
        "Datang ke guru pembina OSIS untuk menceritakan temuannya, meminta saran dan menimbang langkah selanjutnya",
        "Diam-diam memotret dan merekam bukti pelanggaran, merencanakan langkah dengan hati-hati sebelum isu ini dibuka ke publik"
        ],
        evaluation: [
        "Tokoh utama menulis cuitan kritis di forum anonim sekolah yang memberi ruang eksplorasi aman dan ketegangan psikologis",
        "Tokoh utama datang ke pembina OSIS untuk menceritakan semuanya yang menunjukkan respons normatif sekaligus memperlithkan dilema prosedur dan sistem yang terkadang membatasi perubahan",
        "Tokoh utama diam diam memotret dan merekam bukti pelanggaran serta merencanakan semua langkah dengan hati hati yang menunjukkan tokoh utama penuh dengan perhitungan dan teliti"
        ]
    },
    {
        question: "Bagaimana ia menghadapi reaksi lingkungan setelah isu mulai terdengar?",
        choices: [
        "Teman dekatnya menegur, terjadi debat emosional tentang risiko dan dampak jika informasi ini benar-benar disebarkan",
        "Tokoh diundang rapat OSIS dan pihak sekolah, ditekan untuk kompromi demi “citra baik” sekolah dan acara",
        "Postingan di media sosial menjadi viral, muncul dukungan tapi juga kecaman, membuat tokoh berada dalam tekanan sosial yang nyata"
        ],
        evaluation: [
        "Menghadirkan konflik personal dengan teman dekatnya memicu empati penonton serta tekanan sosial yang dirasakan remaja",
        "Menghadirkan dilema moral tentang integritas dan keberanian melawan arus dengan ditunjukkan oleh tokoh utama yang ditekan demi citra baik sekolah",
        "Menghadirkan realita sekarang dimana postingan yang menjadi viral menggambarkan kekuatan dan resiko media sosial sebagai alat perjuangan dalam menghadapi isu-isu"
        ]
    },
    {
        question: "Bagaimana cerita ditutup dan posisi tokoh utama?",
        choices: [
        "Menutup cerita dengan menulis artikel investagi menunjukkan pertumbuhan karakter dan keberanian menghadapi konsekuensi",
        "Menutup cerita dengan mundur dari acara sekolah menghadirkan solusi kolaboratif yang kecil tapi nyata",
        "Menutup cerita dengan membagi selebaran berisi fakta-fakta isu lingkungan sebagai suatu simbolis dan visual untuk meninggalkan pesan yang membekas"
        ],
        evaluation: [
        "Menutup cerita dengan menulis artikel investagi",
        "Menutup cerita dengan mundur dari acara sekolah menghadirkan solusi kolaboratif yang kecil tapi nyata",
        "Menutup cerita dengan membagi selebaran berisi fakta-fakta isu lingkungan sebagai suatu simbolis dan visual untuk meninggalkan pesan yang membekas"
        ]
    }
    ],
};

let selectedTheme = "";
let currentScene = [];
let currentQuestionIndex = 0;
let userChoices = [];

startBtn.onclick = () => {
    home.classList.add('fade-out');
    
    setTimeout(() => {
        home.style.display = 'none';
        game.style.display = 'block';
        
        setTimeout(() => {
            game.classList.add('fade-in');
        }, 10);
    }, 100); 
};

backBtn.onclick = () => {
  game.classList.remove('fade-in');

  setTimeout(() => {
    game.style.display = 'none';
    home.style.display = 'flex'; 
    home.classList.remove('fade-out');
  }, 100);

  resetGame();
};

gameBox.addEventListener('click', () => {
    if (startText.style.display !== 'none') {
    startText.style.display = 'none';
    gameTitle.style.display = 'none';
    diceBtn.style.display = 'inline-block';
    }
});

diceBtn.onclick = () => {
    selectedTheme = themes[Math.floor(Math.random() * themes.length)];
    document.getElementById('story-container').style.display = 'block';
    themeDisplay.textContent = selectedTheme;
    diceBtn.style.display = 'none';
    startText.style.display = 'none';
    gameTitle.style.display = 'none';

    setTimeout(() => {
        themeDisplay.style.fontSize = '1.8rem';
        storyText.textContent = '';
        typeText(story[selectedTheme], storyText, () => {
            gameBox.addEventListener('click', startScene);
        });
    }, 200);
};

function startScene() {
    const existingPrompts = gameBox.querySelectorAll('.next-prompt');
    existingPrompts.forEach(p => p.remove());
    
    gameBox.removeEventListener('click', startScene);
    document.getElementById('story-container').style.display = 'none';
    questionContainer.style.display = 'block';
    
    // Ensure the selected theme exists in scenes
    if (scenes[selectedTheme]) {
        currentScene = scenes[selectedTheme];
        showQuestion();
    } else {
        console.error("No scenes defined for theme:", selectedTheme);
        // Fallback to first theme or show error
        currentScene = scenes[themes[0]];
        showQuestion();
    }
}

function showQuestion() {
    if (!currentScene || currentScene.length === 0) {
        console.error("No scenes available");
        evaluationDiv.innerHTML = "<p>Error: No questions available for this theme</p>";
        evaluationDiv.style.display = 'block';
        return;
    }

    if (currentQuestionIndex >= currentScene.length) {
        showEvaluation();
        return;
    }

    const q = currentScene[currentQuestionIndex];
    questionText.textContent = q.question;
    choicesDiv.innerHTML = '';

    q.choices.forEach((choice, i) => {
    const btn = document.createElement('button');
    btn.textContent = choice;
    btn.onclick = () => {
        userChoices.push(i);
        currentQuestionIndex++;
        showQuestion();
    };
    choicesDiv.appendChild(btn);
    });
}

function showEvaluation() {
    questionContainer.style.display = 'none';
    evaluationDiv.style.display = 'block';
    evaluationDiv.innerHTML = '<h2>Evaluasi</h2>';
    
    userChoices.forEach((choiceIndex, i) => {
        const evalText = currentScene[i].evaluation[choiceIndex];
        const p = document.createElement('p');
        p.textContent = `${evalText}`;
        evaluationDiv.appendChild(p);
    });
    
    // Add "Click to Next" prompt
    const prompt = document.createElement('div');
    prompt.className = 'next-prompt';
    prompt.textContent = 'Click to continue →';
    evaluationDiv.appendChild(prompt);
    
    // Set up click handler to move to next question or end
    evaluationDiv.addEventListener('click', function nextAfterEval() {
        evaluationDiv.style.display = 'none';
        evaluationDiv.removeEventListener('click', nextAfterEval);
        // Remove prompt
        if (prompt.parentNode) prompt.parentNode.removeChild(prompt);
        
        if (currentQuestionIndex < currentScene.length) {
            showQuestion();
        } else {
            // Game completion logic here
            resetGame();
        }
    });
}

function typeText(text, element, callback) {
    element.classList.add('visible-element'); // Add this
    let i = 0;
    const speed = 30;
    const typer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typer);
            const prompt = document.createElement('div');
            prompt.className = 'next-prompt';
            prompt.textContent = 'Click to continue →';
            prompt.classList.add('visible-element'); // Add fade
            element.parentNode.appendChild(prompt);
            callback();
        }
    }, speed);

    gameBox.addEventListener('click', function skip() {
        if (i < text.length) {
            clearInterval(typer);
            element.textContent = text;
            element.classList.add('visible-element'); // Add fade
            const prompt = document.createElement('div');
            prompt.className = 'next-prompt';
            prompt.textContent = 'Click to continue →';
            prompt.classList.add('visible-element'); // Add fade
            element.parentNode.appendChild(prompt);
            callback();
        }
        gameBox.removeEventListener('click', skip);
    });
}

function resetGame() {
    startText.style.display = 'block';
    gameTitle.style.display = 'block';
    diceBtn.style.display = 'none';
    themeDisplay.style.display = 'block';
    themeDisplay.style.fontSize = '24px';
    themeDisplay.textContent = '';
    storyText.style.display = 'block';
    storyText.textContent = '';
    questionContainer.style.display = 'none';
    evaluationDiv.style.display = 'none';
    evaluationDiv.innerHTML = '';
    currentQuestionIndex = 0;
    userChoices = [];
    document.getElementById('story-container').style.display = 'none';
    // Remove any prompts
    const prompts = document.querySelectorAll('.next-prompt');
    prompts.forEach(p => p.remove());
}