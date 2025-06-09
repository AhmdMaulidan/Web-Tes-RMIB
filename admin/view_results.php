<?php
// akses melalui : http://localhost/rmib-app/admin/view_results.php

require_once __DIR__ . '/../config/db.php';
?>
<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laporan Hasil Tes RMIB - Admin</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
    body {
        background-color: #1e293b;
        color: #e2e8f0;
        font-family: 'Inter', sans-serif;
    }

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');


    .data-container {
        max-height: 200px;
        overflow-y: auto;
        background-color: #0f172a;
        padding: 0.75rem;
        border-radius: 0.5rem;
        border: 1px solid #334155;
    }

    .data-container pre {
        font-size: 0.8rem;
        white-space: pre-wrap;
        word-break: break-all;
    }

    .job-list {
        list-style-position: inside;
        padding-left: 0.5rem;
    }
    </style>
</head>

<body class="p-4 sm:p-6 md:p-8">

    <div class="max-w-7xl mx-auto">
        <h1 class="text-3xl font-bold text-center mb-8 text-sky-300">Laporan Hasil Tes RMIB</h1>

        <div class="overflow-x-auto bg-slate-700 shadow-lg rounded-lg">
            <table class="w-full text-sm text-left text-slate-300">
                <thead class="text-xs text-sky-200 uppercase bg-slate-800">
                    <tr>
                        <th scope="col" class="px-6 py-3">ID</th>
                        <th scope="col" class="px-6 py-3">Nama</th>
                        <th scope="col" class="px-6 py-3">Usia</th>
                        <th scope="col" class="px-6 py-3">Gender</th>
                        <th scope="col" class="px-6 py-3">Pendidikan</th>
                        <th scope="col" class="px-6 py-3">Tgl Tes</th>
                        <th scope="col" class="px-6 py-3">Skor Mentah</th>
                        <th scope="col" class="px-6 py-3">Profil RMIB</th>
                        <th scope="col" class="px-6 py-3">Pekerjaan Favorit</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    $sql = "SELECT id, user_name, user_age, user_gender, user_school, test_date, rmib_profile, raw_scores_table, favorite_jobs FROM test_results ORDER BY test_date DESC";
                    $result = $conn->query($sql);

                    if ($result->num_rows > 0):
                        while ($row = $result->fetch_assoc()):
                    ?>
                    <tr class="border-b border-slate-600 hover:bg-slate-600">
                        <td class="px-6 py-4 font-medium"><?php echo htmlspecialchars($row['id']); ?></td>
                        <td class="px-6 py-4"><?php echo htmlspecialchars($row['user_name']); ?></td>
                        <td class="px-6 py-4"><?php echo htmlspecialchars($row['user_age']); ?></td>
                        <td class="px-6 py-4"><?php echo htmlspecialchars($row['user_gender']); ?></td>
                        <td class="px-6 py-4"><?php echo htmlspecialchars($row['user_school']); ?></td>
                        <td class="px-6 py-4">
                            <?php
                                    $date = new DateTime($row['test_date']);
                                    echo $date->format('d M Y H:i');
                                    ?>
                        </td>

                        <td class="px-6 py-4">
                            <div class="data-container">
                                <pre><?php
                                                $raw_scores = json_decode($row['raw_scores_table'], true);
                                                print_r($raw_scores);
                                                ?></pre>
                            </div>
                        </td>

                        <td class="px-6 py-4">
                            <div class="data-container">
                                <pre><?php
                                                $rmib_profile = json_decode($row['rmib_profile'], true);
                                                print_r($rmib_profile);
                                                ?></pre>
                            </div>
                        </td>

                        <td class="px-6 py-4">
                            <?php
                                    $favorite_jobs = json_decode($row['favorite_jobs'], true);
                                    if (!empty($favorite_jobs) && is_array($favorite_jobs)) {
                                        echo '<ul class="list-disc job-list">';
                                        foreach ($favorite_jobs as $job) {
                                            echo '<li>' . htmlspecialchars($job) . '</li>';
                                        }
                                        echo '</ul>';
                                    } else {
                                        echo '-';
                                    }
                                    ?>
                        </td>
                    </tr>
                    <?php
                        endwhile;
                    else:
                        ?>
                    <tr>
                        <td colspan="9" class="text-center px-6 py-4">Tidak ada data hasil tes.</td>
                    </tr>
                    <?php
                    endif;
                    $conn->close();
                    ?>
                </tbody>
            </table>
        </div>
    </div>

</body>

</html>