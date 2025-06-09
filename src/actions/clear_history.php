<?php
// src/actions/clear_history.php

require_once __DIR__ . '/../../config/db.php';

header('Content-Type: application/json');

$sql = "TRUNCATE TABLE test_results";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true, 'message' => 'Riwayat berhasil dibersihkan.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Gagal membersihkan riwayat: ' . $conn->error]);
}

$conn->close();