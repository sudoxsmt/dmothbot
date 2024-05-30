//////////////////// SETUP MAP ////////////////////////////
var typeAttack = "skill"; //skill or normal
var useSkill = "skillbutton5";
var useMap = 157;
var roundBeforeRefresh = 2;
var ifItemExpire = false;
var showBarExtra = false;
var turnToSkip = 4;
var nameMonSkip = 'หมึกสะดุ้ง';
//////////////////////////////////////////////////////////

var mapPointer = document.getElementById("map_id");
if (mapPointer.value == useMap) {
  setTimeout(check_monster, 0);
} else {
  console.log("fail");
}