<?php

// Get POST data

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //Get POST data
    $type = filter_var($_POST['selector'], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
    $evidence = filter_var($_POST['evidence'], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
    $abuseDetails = filter_var($_POST['abusedetails'], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
    $ticketLink = filter_var($_POST['ticketlink'], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
    $delayDetails = filter_var($_POST['delaydetails'], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
} else {
    // nothing
}


//TODO: logic to organize data based on selector and form email


