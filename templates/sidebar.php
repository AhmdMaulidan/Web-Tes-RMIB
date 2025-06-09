<?php
// templates/sidebar.php
?>
<aside id="app-sidebar"
    class="bg-slate-800 w-64 p-5 shadow-lg fixed inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-30">
    <div class="text-center mb-10">
        <h1 class="text-2xl font-bold text-sky-300">Tes Minat RMIB</h1>
    </div>
    <nav>
        <ul class="space-y-3">
            <li>
                <a href="#" id="nav-dashboard"
                    class="flex items-center py-3 px-4 rounded-lg text-slate-300 hover:bg-slate-700 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <span>Dashboard</span>
                </a>
            </li>
            <li>
                <a href="#" id="nav-history"
                    class="flex items-center py-3 px-4 rounded-lg text-slate-300 hover:bg-slate-700 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                            clip-rule="evenodd" />
                    </svg>
                    <span>Riwayat Tes</span>
                </a>
            </li>
        </ul>
    </nav>
</aside>
<div id="sidebar-overlay" class="fixed inset-0 bg-black bg-opacity-70 z-20 hidden md:hidden"></div>