<?php
  $result = exec("ps -U www-data | grep node");
  $pid = explode("?", $result);

  if ($pid[0] > 1) {
    exec("kill " . $pid[0]);
  }
?>
