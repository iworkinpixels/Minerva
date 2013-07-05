<?
	include('includes/meekrodb.2.2.class.php');
	session_start();
	
	if(!isset($_SESSION['qcorrect'])) $_SESSION['qcorrect'] = 0;
	if(!isset($_SESSION['qtotal'])) $_SESSION['qtotal'] = 0;

	if(isset($_GET['q']) && isset($_GET['a']) && ($_GET['q'] > 0 && $_GET['a'] == 'a' || $_GET['a'] == 'b' || $_GET['a'] == 'c' || $_GET['a'] == 'd')) {
		// Find out if they were correct.
		$last_id = $_GET['q'];	
		$last_question = DB::queryFirstRow("SELECT * FROM questions WHERE id = %i", $last_id);
		// Award points if they were
		if ($_GET['a'] == $last_question['correct_answer']) {
			$_SESSION['qcorrect'] += 1;
		}
		$_SESSION['qtotal'] += 1;
	}

	$question_data = DB::queryFirstRow("SELECT * FROM questions ORDER BY RAND() LIMIT 1");

	$questions_total = $_SESSION['qtotal'] ? $_SESSION['qtotal'] : 0;
	$questions_correct = $_SESSION['qcorrect'] ? $_SESSION['qcorrect'] : 0;
	$questions_percent = (int)(($questions_correct / ($questions_total + 0.001)) * 100) + 1;

	$id = $question_data['id'];
	$question = $question_data['question'];
	$a = $question_data['a'];
	$b = $question_data['b'];
	$c = $question_data['c'];
	$d = $question_data['d'];
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="css/screen.css">
        <script src="js/jquery-2.0.3.min.js"></script>
		<script src="js/main.js"></script>
	</head>
    <body>
			<div id="main-container">
				<div id="score">CURRENT SCORE: <span id="correct-questions"><?=$questions_correct?></span> out of <span id="total-questions"><?=$questions_total?></span>&nbsp;(<?=$questions_percent?>%)</div>
				<div id="question"><?=$question?></div>
				<ul id="answers">
					<li class="answer"><a id="answer-a" href="index.php?q=<?=$id?>&a=a"><h2>A:</h2><?=$a?></a></li>
					<li class="answer"><a id="answer-b" href="index.php?q=<?=$id?>&a=b"><h2>B:</h2><?=$b?></a></li>
					<li class="answer"><a id="answer-c" href="index.php?q=<?=$id?>&a=c"><h2>C:</h2><?=$c?></a></li>
					<li class="answer"><a id="answer-d" href="index.php?q=<?=$id?>&a=d"><h2>D:</h2><?=$d?></a></li>
				</ul>
			</div>
	</body>
</html>
