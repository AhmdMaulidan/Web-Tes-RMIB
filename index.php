<?php
//akses melalui : http://localhost/rmib-app/
require_once 'templates/header.php';
require_once 'templates/sidebar.php';
?>

<main id="main-content" class="flex-1 p-4 sm:p-6 md:p-10 transition-all duration-300">
    <button id="sidebar-toggle" class="md:hidden p-2 bg-blue-600 text-white rounded-md mb-4 fixed top-4 left-4 z-40">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
    </button>

    <div id="dashboard-screen" class="hidden">
        <div class="max-w-4xl mx-auto bg-slate-800 p-8 rounded-2xl shadow-lg">
            <h1 id="dashboard-welcome-message" class="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
                Selamat Datang!</h1>
            <div class="bg-slate-700 border-l-4 border-sky-500 p-6 rounded-r-lg mb-8 text-left">
                <h2 class="text-xl font-semibold text-sky-400 mb-3">Tentang Tes Minat RMIB</h2>
                <p class="text-slate-300 leading-relaxed">
                    Aplikasi ini akan membantu Anda memahami minat pekerjaan Anda berdasarkan metode
                    Rothwell-Miller Interest Blank (RMIB).
                    Anda akan diminta untuk mengurutkan daftar pekerjaan dalam berbagai kelompok berdasarkan
                    preferensi pribadi Anda,
                    memberikan gambaran mengenai area-area pekerjaan yang paling sesuai dengan minat Anda.
                </p>
            </div>
            <button id="dashboard-start-btn"
                class="w-full sm:w-auto bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Mulai Tes Baru
            </button>
        </div>
    </div>

    <div id="history-screen" class="hidden">
        <div class="max-w-4xl mx-auto bg-slate-800 p-8 rounded-2xl shadow-lg">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-3xl font-bold text-slate-100">Riwayat Tes</h1>
                <button id="clear-history-btn"
                    class="text-sm text-red-500 hover:text-red-400 font-medium transition-colors">Bersihkan
                    Riwayat</button>
            </div>
            <div id="history-list-container" class="space-y-4">
            </div>
        </div>
    </div>

    <div id="form-screen" class="hidden max-w-lg mx-auto bg-slate-800 p-8 rounded-2xl shadow-lg">
        <h1 class="text-2xl font-bold text-center mb-6 text-slate-100">Informasi Diri</h1>
        <form id="user-form">
            <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-slate-300 mb-1">Nama Lengkap</label>
                <input type="text" id="name" name="name"
                    class="w-full px-3 py-2 bg-slate-700 border border-slate-600 text-slate-200 placeholder-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required>
            </div>
            <div class="mb-4">
                <label for="age" class="block text-sm font-medium text-slate-300 mb-1">Usia</label>
                <input type="number" id="age" name="age"
                    class="w-full px-3 py-2 bg-slate-700 border border-slate-600 text-slate-200 placeholder-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required>
            </div>
            <div class="mb-4">
                <label for="gender" class="block text-sm font-medium text-slate-300 mb-1">Jenis Kelamin</label>
                <select id="gender" name="gender"
                    class="w-full px-3 py-2 bg-slate-700 border border-slate-600 text-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required>
                    <option value="" class="bg-slate-700 text-white">Pilih Jenis Kelamin</option>
                    <option value="laki-laki" class="bg-slate-700 text-white">Laki-laki</option>
                    <option value="perempuan" class="bg-slate-700 text-white">Perempuan</option>
                </select>
            </div>
            <div class="mb-6">
                <label for="school" class="block text-sm font-medium text-slate-300 mb-1">Pendidikan/Sekolah
                    Terakhir</label>
                <input type="text" id="school" name="school"
                    class="w-full px-3 py-2 bg-slate-700 border border-slate-600 text-slate-200 placeholder-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required>
            </div>
            <button type="submit" id="start-btn"
                class="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">Lanjutkan</button>
        </form>
    </div>

    <div id="test-screen" class="hidden max-w-2xl mx-auto">
        <div class="bg-slate-800 p-8 rounded-2xl shadow-lg">
            <div class="text-center mb-6">
                <h2 id="test-group-title" class="text-2xl font-bold text-slate-100">Kelompok A</h2>
                <p id="test-group-instruction" class="text-slate-400 mt-2">Seret dan lepas (drag & drop)
                    pekerjaan untuk mengurutkannya. Peringkat 1 (paling atas) adalah yang paling Anda sukai.</p>
                <div class="w-full bg-slate-700 rounded-full h-2.5 mt-4">
                    <div id="progress-bar" class="bg-blue-600 h-2.5 rounded-full" style="width: 0%"></div>
                </div>
            </div>
            <ul id="job-list" class="space-y-3">
            </ul>
        </div>
        <div class="flex justify-between mt-6">
            <button id="prev-btn"
                class="bg-slate-600 text-slate-200 font-bold py-2 px-6 rounded-lg hover:bg-slate-500 transition-colors">Kembali</button>
            <button id="next-btn"
                class="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">Lanjut</button>
        </div>
    </div>

    <div id="freetext-screen" class="hidden max-w-lg mx-auto bg-slate-800 p-8 rounded-2xl shadow-lg">
        <h1 class="text-2xl font-bold text-center mb-2 text-slate-100">Pekerjaan
            yang Paling Anda Inginkan</h1>
        <p class="text-slate-400 text-center mb-6">Tuliskan 3 jenis pekerjaan yang paling Anda cita-citakan atau
            sukai, tidak harus dari daftar sebelumnya.</p>
        <form id="freetext-form">
            <div class="mb-4">
                <input type="text" id="fav-job-1" placeholder="Pekerjaan favorit 1"
                    class="w-full px-3 py-2 bg-slate-700 border border-slate-600 text-slate-200 placeholder-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div class="mb-4">
                <input type="text" id="fav-job-2" placeholder="Pekerjaan favorit 2"
                    class="w-full px-3 py-2 bg-slate-700 border border-slate-600 text-slate-200 placeholder-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div class="mb-6">
                <input type="text" id="fav-job-3" placeholder="Pekerjaan favorit 3"
                    class="w-full px-3 py-2 bg-slate-700 border border-slate-600 text-slate-200 placeholder-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <button type="button" id="submit-btn"
                class="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">Lihat
                Hasil Analisis</button>
        </form>
    </div>

    <div id="loading-screen" class="hidden text-center">
        <div class="flex justify-center items-center h-64">
            <svg class="animate-spin -ml-1 mr-3 h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                </circle>
                <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
            </svg>
            <p class="text-xl font-semibold text-slate-300">Menganalisis hasil...</p>
        </div>
    </div>
    <div id="results-screen" class="hidden max-w-4xl mx-auto">
        <div class="bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg">
            <h1 class="text-2xl sm:text-3xl font-bold text-center mb-2 text-slate-100">Hasil Analisis Minat Anda
            </h1>
            <p id="results-for-name" class="text-center text-slate-400 mb-5"></p>
            <div class="chart-container mb-3">
                <canvas id="results-chart"></canvas>
            </div>
            <div id="scoring-table-container" class="mt-0 mb-5 overflow-x-auto">
            </div>
            <div id="results-details" class="space-y-6">
            </div>
            <div class="text-center mt-10">
                <button id="restart-btn"
                    class="w-full sm:w-auto bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">Kembali
                    ke Dashboard</button>
            </div>
        </div>
    </div>

</main>

<?php
require_once 'templates/footer.php';
?>