<?php
  $result = exec("ps -U www-data | grep node");
  $pid = explode("?", $result);

  if ($pid[0] > 1) {
    exec("kill " . $pid[0]);
  }

  exec("node \"/home/pi/Desktop/Goodnight Routine/noisemachine.js\" on");
  exec("node \"/home/pi/Desktop/Goodnight Routine/Goodnight.js\"");
?>
