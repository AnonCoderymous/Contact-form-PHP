<?php
	$file = fopen("Data.txt", "a");
	foreach ($_POST as $key => $value) {
		fwrite($file, $key." = ".$value);
		fwrite($file, "\n");
	}
	fwrite($file, "\n\n");
	fclose($file);
?>