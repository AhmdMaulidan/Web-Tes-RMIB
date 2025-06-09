document.addEventListener('DOMContentLoaded', () => {
    const screens = {
        dashboard: document.getElementById('dashboard-screen'),
        history: document.getElementById('history-screen'),
        form: document.getElementById('form-screen'),
        test: document.getElementById('test-screen'),
        freetext: document.getElementById('freetext-screen'),
        loading: document.getElementById('loading-screen'),
        results: document.getElementById('results-screen'),
    };

    const sidebar = document.getElementById('app-sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    const navLinks = {
        dashboard: document.getElementById('nav-dashboard'),
        history: document.getElementById('nav-history'),
    };

    const userForm = document.getElementById('user-form');
    const jobList = document.getElementById('job-list');
    const buttons = {
        dashboardStart: document.getElementById('dashboard-start-btn'),
        start: document.getElementById('start-btn'),
        prev: document.getElementById('prev-btn'),
        next: document.getElementById('next-btn'),
        submit: document.getElementById('submit-btn'),
        restart: document.getElementById('restart-btn'),
        clearHistory: document.getElementById('clear-history-btn'),
    };

    const jobData = { 'laki-laki': [{ code: 'A', jobs: ['Petani', 'Insinyur sipil', 'Akuntan', 'Ilmiawan', 'Manager penjualan', 'Seniman', 'Wartawan', 'Pianis konser', 'Guru sekolah dasar', 'Manager bank', 'Tukang kayu', 'Dokter'] }, { code: 'B', jobs: ['Ahli pembuat alat-alat', 'Ahli statistik', 'Insinyur kimia industri', 'Penyiar radio', 'Artis profesional', 'Pengarang', 'Dirigen orkestra', 'Psikolog pendidikan', 'Sekretaris perusahaan', 'Ahli bangunan', 'Ahli bedah', 'Ahli kehutanan'] }, { code: 'C', jobs: ['Auditor', 'Ahli Meteorologi', 'Salesman', 'Arsitek', 'Penulis drama', 'Komponis', 'Kepala sekolah', 'Pegawai pemerintah daerah', 'Ahli meubel', 'Dokter hewan', 'Juru ukur tanah', 'Tukang bubut'] }, { code: 'D', jobs: ['Ahli biologi', 'Agen biro periklanan', 'Dekorator interior', 'Ahli sejarah', 'Kritikus musik', 'Pekerja sosial', 'Pegawai asuransi', 'Tukang cat', 'Apoteker', 'Penjelajah', 'Tukang listrik', 'Penilai pajak pendapatan'] }, { code: 'E', jobs: ['Petugas wawancara', 'Perancang perhiasan', 'Ahli perpustakaan', 'Guru musik', 'Pembina rohani', 'Petugas arsip', 'Tukang batu', 'Dokter gigi', 'Prospektor', 'Montir', 'Guru ilmu pasti', 'Ahli pertanian'] }, { code: 'F', jobs: ['Pemotret', 'Penulis majalah', 'Pemain orgel (organ)', 'Organisasi pramuka', 'Petugas pengiriman barang', 'Petugas mesin perkayuan', 'Ahli kacamata', 'Ahli sortir kulit', 'Instalator', 'Pembantu kasir bank', 'Ahli botani', 'Pedagang keliling'] }, { code: 'G', jobs: ['Kritikus buku', 'Ahli pustaka musik', 'Pejabat klub remaja', 'Pegawai kantor', 'Tukang plester tembok', 'Ahli rontgent', 'Nelayan', 'Pembuat arloji', 'Kasir', 'Ahli astronomi', 'Juru lelang', 'Penata panggung'] }, { code: 'H', jobs: ['Pemimpin band', 'Ahli penyuluh jabatan', 'Pegawai pos', 'Tukang ledeng', 'Ahli fisioterapi', 'Sopir angkutan', 'Montir radio', 'Juru bayar', 'Ahli geologi', 'Petugas hub. Masyarakat', 'Penata etalase', 'Penulis sandiwara radio'] }, { code: 'I', jobs: ['Petugas kesejahteraan sosial', 'Petugas ekspedisi surat', 'Tukang sepatu', 'Paramedik / mantri kesehatan', 'Petani tanaman hias', 'Tukang las', 'Petugas pajak', 'Asisten laboratorium', 'Salesman asuransi', 'Perancang motif tekstil', 'Penyair', 'Pramuniaga toko musik'] },], 'perempuan': [{ code: 'A', jobs: ['Pekerjaan pertanian', 'Sopir kendaraan militer', 'Akuntan', 'Ilmiawati', 'Penjual hasil-hasil mode', 'Seniwati', 'Wartawati', 'Pianis konser', 'Guru sekolah dasar', 'Sekretaris pribadi', 'Modiste', 'Dokter'] }, { code: 'B', jobs: ['Petugas perakitan alat', 'Pegawai urusan gaji', 'Insinyur kimia industri', 'Penyiar radio', 'Artis profesional', 'Pengarang', 'Pemain musik orkestra', 'Psikolog pendidikan', 'Juru ketik', 'Pembuat pot keramik', 'Ahli bedah', 'Guru pendidikan olahraga'] }, { code: 'C', jobs: ['Auditor', 'Ahli meteorologi', 'Salesgirl', 'Guru kesenian', 'Penulis drama', 'Komponis', 'Kepala yayasan sosial', 'Resepsionis', 'Penata rambut', 'Dokter hewan', 'Pramugari', 'Operator mesin rajut'] }, { code: 'D', jobs: ['Ahli biologi', 'Agen biro periklanan', 'Dekorator interior', 'Ahli sejarah', 'Kritikus musik', 'Pekerja sosial', 'Penulis steno', 'Penjilid buku', 'Apoteker', 'Ahli pertanaman', 'Petugas pompa bensin', 'Petugas mesin hitung'] }, { code: 'E', jobs: ['Petugas wawancara', 'Perancang pakaian', 'Ahli perpustakaan', 'Guru musik', 'Penyebar agama', 'Petugas arsip', 'Tukang bungkus cokelat', 'Pelatih rehabilitasi pasien', 'Pembina keolahragaan', 'Ahli reparasi jam', 'Guru ilmu pasti', 'Ahli pertanian'] }, { code: 'F', jobs: ['Pemotret', 'Penulis majalah', 'Pemain orgel (organ)', 'Petugas palang merah', 'Pegawai bank', 'Pengurus kerumahtanggaan', 'Perawat', 'Peternak', 'Ahli gosok lensa', 'Kasir', 'Ahli botani', 'Pedagang keliling'] }, { code: 'G', jobs: ['Kritikus buku', 'Ahli pustaka musik', 'Pejabat klub remaja', 'Pegawai kantor', 'Tukang binatu', 'Ahli rontgent', 'Petani bunga', 'Operator mesin sulam', 'Ahli tata buku', 'Ahli astronomi', 'Peraga alat kosmetika', 'Penata panggung'] }, { code: 'H', jobs: ['Pemain musik band', 'Ahli penyuluh jabatan', 'Pegawai kantorpos', 'Penjahit', 'Ahli fisioterapi', 'Peternak ayam', 'Ahli reparasi permata', 'Juru bayar', 'Ahli geologi', 'Petugas hub. Masyarakat', 'Penata etalase', 'Penulis sandiwara radio'] }, { code: 'I', jobs: ['Petugas kesejahteraan sosial', 'Petugas arsip', 'Juru masak', 'Perawat orang2 tua', 'Tukang kebun', 'Operator mesin kaos kaki', 'Petugas pajak', 'Asisten laboratorium', 'Peraga barang2/bahan', 'Perancang motif tekstil', 'Penyair', 'Pramuniaga toko musik'] },] };
    const rmibProfileData = { A: { name: 'Outdoor', description: 'Minat pada pekerjaan di luar ruangan, aktivitas fisik, dan lingkungan alam.', examples: 'Petani, Ahli kehutanan, Juru ukur tanah, Tukang batu, Tukang kebun, Petani tanaman hias, Petani bunga, Peternak, Peternak ayam, Nelayan' }, B: { name: 'Mechanical', description: 'Minat pada pekerjaan yang melibatkan mesin, perkakas, dan peralatan mekanik.', examples: 'Sopir kendaraan militer, Tukang kayu, Tukang bubut, Operator mesin rajut, Petugas mesin perkayuan, Operator mesin sulam, Operator mesin kaos kaki, Montir, Montir radio, Tukang las, Tukang listrik, Tukang plester tembok, Tukang ledeng, Tukang sepatu, Tukang cat, Tukang bungkus cokelat, Tukang binatu' }, C: { name: 'Computational', description: 'Minat pada pekerjaan yang berhubungan dengan angka, perhitungan, dan analisis data.', examples: 'Akuntan, Ahli statistik, Auditor, Petugas urusan gaji, Penilai pajak pendapatan, Petugas pajak, Petugas mesin hitung, Petugas pajak, Juru bayar' }, D: { name: 'Scientific', description: 'Minat pada penelitian, penyelidikan ilmiah, dan pemecahan masalah secara analitis.', examples: 'Ilmiawan, Insinyur sipil, Insinyur kimia industri, Ahli meteorologi, Ahli biologi, Ahli botani, Ahli pertanian, Ahli pertanaman, Ahli rontgent, Ahli geologi, Ahli astronomi, Ahli fisioterapi, Ahli penyuluh jabatan, Ahli reparasi jam, Ahli reparasi permata, Ahli gosok lensa, Ahli kacamata, Ahli meubel, Ahli sejarah, Ahli tata buku, Ahli pustaka musik, Ahli perpustakaan, Ahli sortasi kulit' }, E: { name: 'Persuasive', description: 'Minat pada pekerjaan yang melibatkan pengaruh, persuasi, dan interaksi dengan orang lain untuk mencapai tujuan.', examples: 'Manager penjualan, Salesman, Salesgirl, Salesman asuransi, Manager bank, Penyiar radio, Pramugari, Agen biro periklanan, Pengurus kerumahtanggaan, Penjilid buku, Petugas wawancara, Petugas hub. Masyarakat, Petugas ekspedisi surat, Penata etalase, Penata panggung, Penulis sandiwara radio, Petugas kesejahteraan sosial, Pegawai asuransi, Pramuniaga toko musik, Penata rambut' }, F: { name: 'Artistic', description: 'Minat pada ekspresi kreatif, estetika, dan keindahan dalam berbagai bentuk seni.', examples: 'Seniman, Modiste, Artis profesional, Arsitek, Dekorator interior, Kritikus musik, Penata rambut, Penulis drama, Komponis, Penulis sandiwara radio, Penyair, Penulis majalah, Kritikus buku, Perancang pakaian, Perancang motif tekstil, Peraga alat kosmetika, Penata panggung, Pemimpin band, Pemotret, Pemain musik band, Pemain orgel (organ), Organisasi pramuka' }, G: { name: 'Literary', description: 'Minat pada pekerjaan yang berhubungan dengan membaca, menulis, dan penggunaan bahasa.', examples: 'Wartawan, Wartawati, Pengarang, Penulis drama, Penulis majalah, Penulis sandiwara radio, Penulis steno, Penulis sandiwara radio, Penulis majalah, Penulis sandiwara radio, Penyair, Penulis majalah, Penulis sandiwara radio' }, H: { name: 'Musical', description: 'Minat yang kuat pada musik, baik dalam pertunjukan, komposisi, maupun apresiasi.', examples: 'Pianis konser, Dirigen orkestra, Komponis, Kritikus musik, Pemain musik orkestra, Pemain musik band, Ahli pustaka musik, Pemimpin band' }, I: { name: 'Social Service', description: 'Minat untuk membantu, melayani, dan menolong orang lain.', examples: 'Guru sekolah dasar, Psikolog pendidikan, Kepala yayasan sosial, Guru pendidikan olahraga, Guru kesenian, Guru musik, Pembina rohani, Petugas arsip, Petugas palang merah, Petugas kesejahteraan sosial, Pembina keolahragaan, Pelatih rehabilitasi pasien, Penyebar agama, Perawat, Paramedik / mantri kesehatan, Perawat orang2 tua, Petugas pengiriman barang, Petugas pengiriman barang, Pegawai kantor, Pegawai pemerintah daerah, Pegawai pos, Pegawai kantorpos, Pengurus kerumahtanggaan, Pegawai bank' }, J: { name: 'Clerical', description: 'Minat pada pekerjaan yang terorganisir, detail, dan melibatkan tugas-tugas administratif.', examples: 'Sekretaris pribadi, Juru ketik, Pegawai pemerintah daerah, Resepsionis, Petugas arsip, Penata etalase, Juru bayar, Pembantu kasir bank, Kasir, Juru lelang, Penata panggung, Juru masak, Kasir' }, K: { name: 'Practical', description: 'Minat pada pekerjaan praktis, nyata, dan menghasilkan sesuatu yang konkret.', examples: 'Ahli pembuat alat-alat, Petugas perakitan alat, Tukang kayu, Tukang bubut, Pembuat pot keramik, Petugas mesin perkayuan, Penata rambut, Tukang listrik, Tukang cat, Tukang plester tembok, Tukang las, Tukang sepatu, Tukang ledeng, Tukang bungkus cokelat, Tukang kebun, Tukang binatu, Juru ukur tanah, Petugas pompa bensin, Pembuat arloji, Ahli reparasi jam, Ahli gosok lensa, Ahli reparasi permata, Penjahit, Ahli meubel' }, L: { name: 'Medical', description: 'Minat yang kuat pada bidang kedokteran dan perawatan kesehatan.', examples: 'Dokter, Ahli bedah, Dokter hewan, Apoteker, Perawat, Paramedik / mantri kesehatan, Ahli fisioterapi, Perawat orang2 tua' } };
    const rmibKey = { 'A': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'], 'B': ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'A'], 'C': ['C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'A', 'B'], 'D': ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'A', 'B', 'C'], 'E': ['E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'A', 'B', 'C', 'D'], 'F': ['F', 'G', 'H', 'I', 'J', 'K', 'L', 'A', 'B', 'C', 'D', 'E'], 'G': ['G', 'H', 'I', 'J', 'K', 'L', 'A', 'B', 'C', 'D', 'E', 'F'], 'H': ['H', 'I', 'J', 'K', 'L', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 'I': ['I', 'J', 'K', 'L', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], };

    let currentUser = {};
    let currentGroupIndex = 0;
    let userRankings = {};
    let chartInstance;
    let currentJobList = [];

    const showScreen = (screenId) => {
        Object.values(screens).forEach(screen => screen.classList.add('hidden'));
        if (screens[screenId]) {
            screens[screenId].classList.remove('hidden');
        }
    };

    const setActiveSidebarLink = (activeId) => {
        Object.values(navLinks).forEach(link => {
            link.classList.remove('sidebar-link-active');
        });
        if (navLinks[activeId]) {
            navLinks[activeId].classList.add('sidebar-link-active');
        }
    };

    const resetTestState = () => {
        currentUser = {};
        currentGroupIndex = 0;
        userRankings = {};
        if (chartInstance) chartInstance.destroy();
        userForm.reset();
        document.getElementById('freetext-form').reset();
    };

    const displayDashboard = async () => {
        const welcomeMsgEl = document.getElementById('dashboard-welcome-message');
        try {
            const history = await getTestHistory(); // Menggunakan await
            if (history.length > 0 && history[0].userName) {
                welcomeMsgEl.textContent = `Selamat Datang Kembali, ${history[0].userName}!`;
            } else {
                welcomeMsgEl.textContent = 'Selamat Datang!';
            }
        } catch (error) {
            console.error("Gagal memuat dashboard:", error);
            welcomeMsgEl.textContent = 'Selamat Datang!'; 
        }
        showScreen('dashboard');
        setActiveSidebarLink('dashboard');
    };

    const displayHistoryList = async () => {
        const container = document.getElementById('history-list-container');
        container.innerHTML = '<p class="text-slate-400 text-center py-4">Memuat riwayat...</p>'; // Loading state
        showScreen('history');
        setActiveSidebarLink('history');

        try {
            const history = await getTestHistory();
            container.innerHTML = ''; 

            if (history.length === 0) {
                container.innerHTML = '<p class="text-slate-400 text-center py-4">Belum ada riwayat tes yang tersimpan.</p>';
            } else {
                history.forEach(entry => {
                    const item = document.createElement('div');
                    item.className = 'p-5 mb-2 bg-slate-700 rounded-lg shadow-md border border-slate-600 hover:bg-slate-600 cursor-pointer transition-colors duration-150 flex justify-between items-center';
                    item.innerHTML = `
                        <div>
                            <div class="font-semibold text-sky-400">${entry.userName}</div>
                            <div class="text-sm text-slate-400 mt-1">
                                Tes pada: ${new Date(entry.testDate).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
                    `;
                    item.setAttribute('data-testid', entry.testId); 
                    item.addEventListener('click', handleHistoryItemClick);
                    container.appendChild(item);
                });
            }
        } catch (error) {
            console.error("Gagal memuat riwayat:", error);
            container.innerHTML = '<p class="text-red-400 text-center py-4">Gagal memuat riwayat tes. Silakan coba lagi.</p>';
        }
    };
    
    const handleHistoryItemClick = async (event) => {
        const testId = event.currentTarget.getAttribute('data-testid');
        try {
            const history = await getTestHistory();
            const historicalResult = history.find(entry => String(entry.testId) === String(testId));

            if (historicalResult && historicalResult.rmibProfile) {
                currentUser.name = historicalResult.userName;
                currentUser.age = historicalResult.userAge;
                currentUser.gender = historicalResult.userGender;
                currentUser.school = historicalResult.userSchool;
                currentUser.favoriteJobs = historicalResult.favoriteJobsInput;
                currentUser.testDate = historicalResult.testDate;

                displayResults(historicalResult.rmibProfile, historicalResult.rawScoresTable || {});
            } else {
                console.error("Tidak dapat menemukan riwayat untuk ID:", testId);
                alert("Gagal memuat detail riwayat tes. Data mungkin tidak lengkap.");
            }
        } catch (error) {
             console.error("Error saat memproses klik riwayat:", error);
             alert("Terjadi kesalahan saat memuat data riwayat.");
        }
    };

    const getTestHistory = async () => {
        try {
            const response = await fetch('src/actions/get_history.php');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (e) {
            console.error("Error saat mengambil riwayat dari server:", e);
            return []; 
        }
    };
    
    const saveTestToHistory = async (newEntry) => {
        try {
            const response = await fetch('src/actions/save_test.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newEntry),
            });
            const result = await response.json();
            if (!result.success) {
                console.error('Gagal menyimpan ke database:', result.message);
                alert('Peringatan: Hasil tes gagal disimpan ke database. Hasil hanya akan ditampilkan saat ini.');
            }
        } catch (e) {
            console.error("Error saat menyimpan tes ke server:", e);
            alert('Peringatan: Terjadi kesalahan jaringan. Hasil tes mungkin tidak tersimpan.');
        }
    };

    const clearHistory = async () => {
        if (confirm("Apakah Anda yakin ingin menghapus semua riwayat tes? Tindakan ini tidak dapat diurungkan.")) {
            try {
                const response = await fetch('src/actions/clear_history.php', {
                    method: 'POST' 
                });
                const result = await response.json();
                if (result.success) {
                    displayHistoryList();
                } else {
                     alert("Gagal membersihkan riwayat: " + result.message);
                }
            } catch (e) {
                console.error("Gagal menghapus riwayat:", e);
                alert("Terjadi kesalahan saat mencoba menghapus riwayat.");
            }
        }
    };
    
    const startTest = () => {
        const name = document.getElementById('name').value.trim();
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const school = document.getElementById('school').value.trim();

        if (name && age && gender && school) {
            currentUser = { name, age, gender, school };
            currentJobList = jobData[currentUser.gender];
            currentGroupIndex = 0;
            userRankings = {};
            displayGroup(currentGroupIndex);
        } else {
            alert('Mohon lengkapi semua data diri.');
        }
    };

    const updateRankNumbers = (listElement) => {
        const items = listElement.querySelectorAll('li');
        items.forEach((item, index) => {
            const rankSpan = item.querySelector('.rank-number');
            if (rankSpan) {
                rankSpan.textContent = index + 1;
            }
        });
    };

    const displayGroup = (index) => {
        if (index < 0 || index >= currentJobList.length) return;
        const group = currentJobList[index];
        document.getElementById('test-group-title').textContent = `Kelompok ${group.code}`;
        document.getElementById('test-group-instruction').textContent = "Seret dan lepas (drag & drop) pekerjaan untuk mengurutkannya. Peringkat 1 (paling atas) adalah yang paling Anda sukai.";
        jobList.innerHTML = '';
        const jobsToDisplay = userRankings[group.code] ? userRankings[group.code] : group.jobs;
        jobsToDisplay.forEach((jobText) => {
            const li = document.createElement('li');
            li.dataset.jobText = jobText;
            li.className = 'bg-slate-700 text-slate-200 p-3 rounded-lg shadow-sm border border-slate-600 flex items-center';
            li.draggable = true;
            li.innerHTML = `
                <span class="rank-number font-bold text-slate-400 w-8 text-center text-lg"></span>
                <span class="job-text flex-grow px-2">${jobText}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-500 cursor-move" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            `;
            addDragEvents(li);
            jobList.appendChild(li);
        });
        updateRankNumbers(jobList);
        document.getElementById('progress-bar').style.width = `${((index + 1) / currentJobList.length) * 100}%`;
        showScreen('test');
    };

    let draggedItem = null;

    function addDragEvents(item) {
        item.addEventListener('dragstart', () => {
            draggedItem = item;
            setTimeout(() => item.style.opacity = '0.5', 0);
        });
        item.addEventListener('dragend', () => {
            setTimeout(() => {
                if (draggedItem) {
                    draggedItem.style.opacity = '1';
                }
                draggedItem = null;
                updateRankNumbers(jobList);
            }, 0);
        });
        item.addEventListener('dragover', e => {
            e.preventDefault();
            const afterElement = getDragAfterElement(jobList, e.clientY);
            const allItems = [...jobList.querySelectorAll('li:not(.dragging)')];
            allItems.forEach(it => it.classList.remove('drag-source-enter'));
            if (afterElement == null) {
                if (jobList.lastChild !== draggedItem) jobList.appendChild(draggedItem);
            } else {
                if (afterElement !== draggedItem) {
                    afterElement.classList.add('drag-source-enter');
                    jobList.insertBefore(draggedItem, afterElement);
                }
            }
        });
    }

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('li:not(.dragging)')];
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    const saveCurrentRankings = () => {
        const groupCode = currentJobList[currentGroupIndex].code;
        const rankedJobs = [...jobList.querySelectorAll('li')].map(li => li.dataset.jobText);
        userRankings[groupCode] = rankedJobs;
    };

    const calculateResults = () => {
        const scores = {};
        const rawScoresTable = {};
        Object.keys(rmibProfileData).forEach(k => {
            scores[k] = 0;
            rawScoresTable[k] = {};
        });
        for (const groupCode in userRankings) {
            const rankedJobs = userRankings[groupCode];
            const originalJobs = jobData[currentUser.gender].find(g => g.code === groupCode).jobs;
            const keyMapping = rmibKey[groupCode];
            if (!originalJobs || !keyMapping) continue;
            rankedJobs.forEach((job, rankIndex) => {
                const originalIndex = originalJobs.indexOf(job);
                if (originalIndex !== -1) {
                    const profileCode = keyMapping[originalIndex];
                    const score = rankIndex + 1;
                    scores[profileCode] += score;
                    rawScoresTable[profileCode][groupCode] = score;
                }
            });
        }
        const finalProfile = Object.entries(scores).map(([code, score]) => ({
            code: code,
            name: rmibProfileData[code].name,
            description: rmibProfileData[code].description,
            examples: rmibProfileData[code].examples,
            score: score
        })).sort((a, b) => a.score - b.score);
        finalProfile.forEach((item, index) => item.rank = index + 1);
        return { finalProfile, rawScoresTable };
    };

    const displayResults = (profile, rawScoresTable) => {
        const ctx = document.getElementById('results-chart').getContext('2d');
        const detailsContainer = document.getElementById('results-details');
        const scoringTableContainer = document.getElementById('scoring-table-container');
        const resultsNameEl = document.getElementById('results-for-name');
        const testDate = currentUser.testDate ? new Date(currentUser.testDate) : new Date();
        const formattedDate = testDate.toLocaleDateString('id-ID', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
        resultsNameEl.innerHTML = `Disusun untuk ${currentUser.name || 'Anda'} (${currentUser.age || '?'} tahun)
                                     <br>
                                     <span class="text-sm">Tes diselesaikan pada: ${formattedDate}</span>`;
        if (chartInstance) {
            chartInstance.destroy();
        }
        const maxPossibleScore = Object.keys(userRankings).length * 12;
        const chartData = profile.map(p => maxPossibleScore - p.score);
        chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: profile.map(p => p.name),
                datasets: [{
                    label: 'Tingkat Minat',
                    data: chartData,
                    backgroundColor: 'rgba(59, 130, 246, 0.8)',
                    borderColor: 'rgba(96, 165, 250, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false, indexAxis: 'y',
                scales: { x: { beginAtZero: true, grid: { color: '#475569' }, ticks: { color: '#cbd5e1' } }, y: { grid: { color: '#475569' }, ticks: { color: '#cbd5e1' } } },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#1e293b', titleColor: '#e2e8f0', bodyColor: '#cbd5e1',
                        callbacks: {
                            label: function (context) {
                                let label = context.dataset.label || '';
                                if (label) { label += ': '; }
                                const originalScore = profile[context.dataIndex].score;
                                label += `Skor ${originalScore} (Lebih rendah lebih baik)`;
                                return label;
                            }
                        }
                    }
                }
            }
        });

        detailsContainer.innerHTML = '';
        const topThree = profile.slice(0, 3);
        topThree.forEach(item => {
            const div = document.createElement('div');
            div.className = 'bg-slate-700 p-5 rounded-lg border border-slate-600';
            div.innerHTML = `<h3 class="text-xl font-bold text-sky-400">${item.rank}. ${item.name} (Skor: ${item.score})</h3><p class="mt-2 text-slate-300">${item.description}</p><p class="mt-3 text-sm text-slate-400"><strong>Contoh Pekerjaan:</strong> ${item.examples}</p>`;
            detailsContainer.appendChild(div);
        });

        if (currentUser.favoriteJobs && currentUser.favoriteJobs.length > 0) {
            const favJobsContainer = document.createElement('div');
            favJobsContainer.className = 'bg-slate-700 p-5 rounded-lg border border-slate-600';
            favJobsContainer.innerHTML = `<h3 class="text-xl font-bold text-sky-400 mb-3">Pekerjaan yang Paling Anda Inginkan</h3><ul class="list-disc list-inside space-y-1 text-slate-300">${currentUser.favoriteJobs.map(job => `<li>${job}</li>`).join('')}</ul>`;
            detailsContainer.appendChild(favJobsContainer);
        }

        if (rawScoresTable && Object.keys(rawScoresTable).length > 0) {
            const profileAbbr = { 'A': 'out', 'B': 'me', 'C': 'comp', 'D': 'sci', 'E': 'prs', 'F': 'aesth', 'G': 'lit', 'H': 'mus', 'I': 's.s', 'J': 'cler', 'K': 'prac', 'L': 'med' };
            const profileOrder = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
            const groupOrder = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
            let tableHtml = `<div class="bg-slate-700 p-4 rounded-lg text-slate-100 mt-10 shadow-lg"><div class="text-center font-bold mb-4"><p class="text-lg">BIRO PSIKOLOGI</p><p class="text-lg">TABEL PEMERIKSAAN LEMBAR JAWABAN</p><p>The Rothwel-Miller Interest Blank (RMIB)</p></div><div class="mt-4 mb-4 flex items-center"><span class="font-bold mr-2">Nama:</span><span class="flex-grow border-b-2 border-slate-400 p-1">${currentUser.name || ''}</span></div><table class="w-full border-collapse border-black text-center text-xs sm:text-sm"><thead><tr class="bg-orange-500 text-black font-bold"><th class="border border-black p-1 sm:p-2 bg-sky-300 text-black"></th>${groupOrder.map(g => `<th class="border border-black p-1 sm:p-2">${g}</th>`).join('')}<th class="border border-black p-1 sm:p-2">Total</th><th class="border border-black p-1 sm:p-2 bg-yellow-400">Ranking</th></tr></thead><tbody>`;
            let columnTotals = {};
            groupOrder.forEach(g => columnTotals[g] = 0);
            const profileMap = new Map(profile.map(p => [p.code, p]));
            profileOrder.forEach(pCode => {
                const profileData = profileMap.get(pCode);
                const totalScore = profileData ? profileData.score : 0;
                const rank = profileData ? profileData.rank : '-';
                tableHtml += `<tr><td class="border border-black p-1 sm:p-2 bg-sky-300 text-black font-bold">${profileAbbr[pCode]}</td>`;
                groupOrder.forEach(gCode => {
                    const score = (rawScoresTable[pCode] && rawScoresTable[pCode][gCode] !== undefined) ? rawScoresTable[pCode][gCode] : ' ';
                    tableHtml += `<td class="border border-black p-1 sm:p-2">${score}</td>`;
                    if (typeof score === 'number') { columnTotals[gCode] += score; }
                });
                tableHtml += `<td class="border border-black p-1 sm:p-2 bg-orange-500 font-bold">${totalScore}</td><td class="border border-black p-1 sm:p-2 bg-yellow-400 font-bold">${rank}</td></tr>`;
            });
            tableHtml += `</tbody><tfoot class="text-black font-bold"><tr class="bg-yellow-400"><td class="border border-black p-1 sm:p-2 text-center">Total</td>`;
            groupOrder.forEach(gCode => { tableHtml += `<td class="border border-black p-1 sm:p-2 text-center">${columnTotals[gCode]}</td>`; });
            const isSumCorrect = Object.keys(userRankings).every(key => columnTotals[key] === 78);
            tableHtml += `<td class="border border-black p-1 sm:p-2 bg-orange-500"></td><td class="border border-black p-1 sm:p-2 text-center text-red-600">${!isSumCorrect ? 'SALAH' : ''}</td></tr><tr class="bg-yellow-400"><td class="border border-black p-1 sm:p-2"></td>`;
            groupOrder.forEach(() => { tableHtml += `<td class="border border-black p-1 sm:p-2 text-center">CEK</td>`; });
            tableHtml += `
            <td class="border border-black p-1 sm:p-2 bg-orange-500"></td><td class="border border-black p-1 sm:p-2"></td></tr></tfoot></table></div>`;
                    scoringTableContainer.innerHTML = tableHtml;
                } else {
                    scoringTableContainer.innerHTML = '';
                }

        showScreen('results');
        setActiveSidebarLink(null);
    };

    // Event Listeners
    sidebarToggle.addEventListener('click', () => { sidebar.classList.toggle('-translate-x-full'); sidebarOverlay.classList.toggle('hidden'); });
    sidebarOverlay.addEventListener('click', () => { sidebar.classList.add('-translate-x-full'); sidebarOverlay.classList.add('hidden'); });
    navLinks.dashboard.addEventListener('click', (e) => { e.preventDefault(); displayDashboard(); });
    navLinks.history.addEventListener('click', (e) => { e.preventDefault(); displayHistoryList(); });
    buttons.clearHistory.addEventListener('click', clearHistory);
    buttons.dashboardStart.addEventListener('click', () => { resetTestState(); showScreen('form'); setActiveSidebarLink(null); });
    userForm.addEventListener('submit', (e) => { e.preventDefault(); startTest(); });
    buttons.next.addEventListener('click', () => {
        saveCurrentRankings();
        if (currentGroupIndex < currentJobList.length - 1) {
            currentGroupIndex++; displayGroup(currentGroupIndex);
        } else { showScreen('freetext'); }
    });
    buttons.prev.addEventListener('click', () => {
        if (currentGroupIndex > 0) {
            saveCurrentRankings(); currentGroupIndex--; displayGroup(currentGroupIndex);
        }
    });

    buttons.submit.addEventListener('click', async () => {
        currentUser.favoriteJobs = [
            document.getElementById('fav-job-1').value.trim(),
            document.getElementById('fav-job-2').value.trim(),
            document.getElementById('fav-job-3').value.trim(),
        ].filter(j => j);

        showScreen('loading');
        
        await new Promise(resolve => setTimeout(resolve, 1500));

        const { finalProfile, rawScoresTable } = calculateResults();
        
        const testDateISO = new Date().toISOString();
        
        const newHistoryEntry = {
            userName: currentUser.name, 
            userAge: currentUser.age, 
            userGender: currentUser.gender, 
            userSchool: currentUser.school,
            testDate: testDateISO,
            rmibProfile: finalProfile, 
            rawScoresTable: rawScoresTable, 
            favoriteJobsInput: currentUser.favoriteJobs
        };

        await saveTestToHistory(newHistoryEntry);
        
        currentUser.testDate = testDateISO;
        displayResults(finalProfile, rawScoresTable);
    });

    buttons.restart.addEventListener('click', () => { resetTestState(); displayDashboard(); });
    
    displayDashboard();
});