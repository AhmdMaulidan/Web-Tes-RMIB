<?php
// src/actions/save_test.php

ini_set('display_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

$db_config_path = __DIR__ . '/../../config/db.php';
if (!file_exists($db_config_path)) {
    echo json_encode(['success' => false, 'message' => 'File konfigurasi database tidak ditemukan.']);
    exit;
}
require_once $db_config_path;

if (!isset($conn) || $conn->connect_error) {
    echo json_encode(['success' => false, 'message' => 'Gagal terhubung ke database: ' . ($conn->connect_error ?? 'Variabel $conn tidak ada.')]);
    exit;
}

$json_data = file_get_contents('php://input');
$data = json_decode($json_data);

if (!$data || !isset($data->userName) || !isset($data->rmibProfile)) {
    echo json_encode([
        'success' => false,
        'message' => 'Data input tidak valid atau tidak lengkap.',
        'receivedData' => $data
    ]);
    exit;
}

$userName = $data->userName;
$userAge = $data->userAge;
$userGender = $data->userGender;
$userSchool = $data->userSchool;

$isoDate = $data->testDate;
$dateTime = new DateTime($isoDate);
$testDate = $dateTime->format('Y-m-d H:i:s');

$rmibProfile = json_encode($data->rmibProfile);
$rawScoresTable = json_encode($data->rawScoresTable);
$favoriteJobs = json_encode($data->favoriteJobsInput);

$sql = "INSERT INTO test_results (user_name, user_age, user_gender, user_school, test_date, rmib_profile, raw_scores_table, favorite_jobs) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

if ($stmt === false) {
    echo json_encode(['success' => false, 'message' => 'Gagal mempersiapkan statement SQL: ' . $conn->error]);
    exit;
}

$stmt->bind_param("sissssss", $userName, $userAge, $userGender, $userSchool, $testDate, $rmibProfile, $rawScoresTable, $favoriteJobs);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Hasil tes berhasil disimpan.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Gagal mengeksekusi statement: ' . $stmt->error]);
}

$stmt->close();
$conn->close();