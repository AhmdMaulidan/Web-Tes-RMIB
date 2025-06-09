<?php
// src/actions/get_history.php

require_once __DIR__ . '/../../config/db.php';

header('Content-Type: application/json');

$history = [];
$sql = "SELECT id, user_name, user_age, user_gender, user_school, test_date, rmib_profile, raw_scores_table, favorite_jobs FROM test_results ORDER BY test_date DESC";
$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $row['rmibProfile'] = json_decode($row['rmib_profile']);
        $row['rawScoresTable'] = json_decode($row['raw_scores_table']);
        $row['favoriteJobsInput'] = json_decode($row['favorite_jobs']);

        $row['testId'] = $row['id'];
        $row['userName'] = $row['user_name'];
        $row['userAge'] = $row['user_age'];
        $row['userGender'] = $row['user_gender'];
        $row['userSchool'] = $row['user_school'];

        $dbDate = $row['test_date'];
        $dateTime = new DateTime($dbDate);
        $row['testDate'] = $dateTime->format(DateTime::ATOM);
        unset($row['id'], $row['user_name'], $row['user_age'], $row['user_gender'], $row['user_school'], $row['rmib_profile'], $row['raw_scores_table'], $row['favorite_jobs'], $row['test_date']);

        $history[] = $row;
    }
}

echo json_encode($history);

$conn->close();