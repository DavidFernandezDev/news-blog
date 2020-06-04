<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
  header('content-type: application/json; charset=utf-8');

  $url = "http://newsapi.org/v2/top-headlines?country=us&apiKey=77fc7d5e7fe74f938feb2d1cb84aa141";
  $response = file_get_contents($url);
  $newsData = json_decode($response, true);

  return $newsData
?>