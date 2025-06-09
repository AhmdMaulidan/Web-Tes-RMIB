<?php
// templates/header.php
?>
<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplikasi Interaktif Tes Minat RMIB (Dark Mode)</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
    body {
        font-family: 'Inter', sans-serif;
    }

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    .chart-container {
        position: relative;
        width: 100%;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        height: 40vh;
        max-height: 500px;
    }

    .sidebar-link-active {
        background-color: #0f172a;
        color: #e2e8f0;
        font-weight: 600;
    }

    .drag-source-enter {
        border-top: 2px solid #3b82f6;
    }
    </style>
</head>

<body class="bg-slate-900 text-slate-300">
    <div class="flex min-h-screen">