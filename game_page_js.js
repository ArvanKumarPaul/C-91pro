player_1_name = localStorage.getItem("player_1_name");
player_2_name = localStorage.getItem("player_2_name");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player_1_name").innerHTML = player_1_name + " : ";
document.getElementById("player_2_name").innerHTML = player_2_name + " : ";

document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;

document.getElementById("Question_turn_player").innerHTML = player_1_name;
document.getElementById("Answer_turn_player").innerHTML = player_2_name;

function Send() {

  number_1 = document.getElementById("first_num").value;
  number_2 = document.getElementById("second_num").value;


  actual_answer = parseInt(number_1) * parseInt(number_2);

  question_number = "<h4>" + number_1 + "×" + number_2 + "</h4>";
  input_box = "<br> Answer : <input type='text' id='input_check_box'>";
  check_button = "<br><br><button class='btn btn-info' onclick='Check()'>Check</button>";
  row = question_number + input_box + check_button;
  document.getElementById("output").innerHTML = row;
  document.getElementById("first_num").innerHTML = "";
  document.getElementById("second_num").innerHTML = "";

}