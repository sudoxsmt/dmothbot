function check_monster() {
  var map_id = document.getElementById("map_id");
  if (map_id.value == useMap) {
    if (ifItemExpire) {
      // Function check Drop Item expire or not
      var char = document.getElementById("myCharacter");
      if (char && get_elements_by_inner("Drop Item").length == 0) {
        setTimeout(check_monster, 0);
      } else setTimeout(walk, 0);
      // if True stop running
      // if false running again
    } else setTimeout(walk, 0);
  } else {
    setTimeout(check_monster, 0);
  }
}

async function walk() {
  var mapid_2 = document.getElementById("map_id");
  if (mapid_2.value == useMap) {
    if (r > roundBeforeRefresh) {
      location.reload();
    }
    var othername = document.getElementById("popup-other-character");
    if (othername) othername.remove();
    var char = document.getElementById("myCharacter");
    var fight = document.getElementById("vs-area");
    if (char) {
      document
        .querySelectorAll("[id*=iconOtherCharacter]")
        .forEach((e) => e.parentNode.removeChild(e));
      if (showBarExtra) {
        if (document.querySelector(".map-bar-expextra")) {
          document.querySelector("#level .txtColorYello").innerHTML =
            document.querySelector("#level .txtColorYello").innerHTML +
            "/" +
            parseInt(
              document
                .querySelector(".map-bar-expextra")
                .innerHTML.toString()
                .replace(/\D/g, "")
            ) /
              10 **
                (document
                  .querySelector(".map-bar-expextra")
                  .innerHTML.toString()
                  .replace(/\D/g, "").length -
                  2);
        }
      }
      var active_date = new Date();
      if (active_date.getTime() - start_date.getTime() > 190000) {
        location.reload();
      } else {
        x = 0;
        //console.log("Walk active_1");
        fight = document.getElementById("vs-area");
        if (fight) {
          x = 1;
          setTimeout(monsterDetect, 0);
          return;
        } else if (x != 1) {
          click(getPointOfMap(useMap, 1, "x"), getPointOfMap(useMap, 1, "y"));
          await wait(delayWalk);
          fight = document.getElementById("vs-area");
          if (fight) {
            x = 1;
            setTimeout(monsterDetect, 0);
            return;
          } else await wait(delayWalk);
        }
        fight = document.getElementById("vs-area");
        if (fight) {
          x = 1;
          //console.log("mon detect");
          setTimeout(monsterDetect, 0);
          return;
        }
        //console.log("Walk active_2");
        else if (x != 1) {
          click(getPointOfMap(useMap, 2, "x"), getPointOfMap(useMap, 2, "y"));
          await wait(delayWalk);
          fight = document.getElementById("vs-area");
          if (fight) {
            x = 1;
            setTimeout(monsterDetect, 0);
            return;
          } else await wait(delayWalk);
        }
        fight = document.getElementById("vs-area");
        if (fight) {
          x = 1;
          //console.log("mon detect");
          setTimeout(monsterDetect, 0);
          return;
        }
        //console.log("Walk active_3");
        else if (x != 1) {
          click(getPointOfMap(useMap, 3, "x"), getPointOfMap(useMap, 3, "y"));
          await wait(delayWalk);
          fight = document.getElementById("vs-area");
          if (fight) {
            x = 1;
            setTimeout(monsterDetect, 0);
            return;
          } else await wait(delayWalk);
        }
        fight = document.getElementById("vs-area");
        if (fight) {
          x = 1;
          //console.log("mon detect");
          setTimeout(monsterDetect, 0);
          return;
        }
        //console.log("Walk active_4");
        else if (x != 1) {
          click(getPointOfMap(useMap, 4, "x"), getPointOfMap(useMap, 4, "y"));
          await wait(delayWalk);
          fight = document.getElementById("vs-area");
          if (fight) {
            x = 1;
            setTimeout(monsterDetect, 0);
            return;
          } else await wait(delayWalk);
        }
        fight = document.getElementById("vs-area");
        if (fight) {
          x = 1;
          //console.log("mon detect");
          setTimeout(monsterDetect, 0);
          return;
        }
        //console.log("Walk active_6");
        else if (x != 1) {
          click(getPointOfMap(useMap, 5, "x"), getPointOfMap(useMap, 5, "y"));
          await wait(delayWalk);
          r++;
        }
        setTimeout(walk, 0);
      }
    } else if (fight) {
      //console.log("mon detect");
      setTimeout(monsterDetect, 0);
    } else {
      setTimeout(walk, 0);
    }
  } else {
    setTimeout(check_monster, 0);
  }
}

async function monsterDetect() {
  if (get_elements_by_inner("เกิดข้อผิดพลาด").length > 0) {
    location.reload();
  }
  rr++;
  var fight = document.getElementById("vs-area");
  if (fight) {
    if (typeAttack == "normal") {
      var mon = document.getElementById("ico_fighting");
      if (mon) {
        // if(document.querySelector('#autoStatus').style.top == "8px" || document.querySelector('#autoStatus').style.top == ""){
        //   document.querySelector(".button3").click()
        // }
        mon.click();
      }
      setTimeout(f_nextMonster, delayAtkmon);
    } else if (typeAttack == "skill") {
      var endFight = document.getElementById("END_FIGHTING");
      var nextMonster = document.querySelector(".button-nextmonster2020");
      var backHome = document.querySelector(".button-go2home2020");
      var died = document.querySelector(".button-again2020");
      if (endFight || nextMonster || backHome || died) {
        setTimeout(f_nextMonster, delayAtkmon);
      } else {
        if (document.getElementById("charMP").value.length < 6 || parseInt(document.getElementById("turn").innerHTML) > turnToSkip || Boolean(document.getElementById('mon').nextSibling.innerHTML.match(`${nameMonSkip}.`))) {
          if (
            document.querySelector("#autoStatus").style.top == "8px" ||
            document.querySelector("#autoStatus").style.top == ""
          ) {
            document.querySelector(".button3").click();
          }
          if (document.querySelector(".skillButton-selected")) {
            document.querySelector(".skillButton-selected").click();
          }
          if (document.getElementById("ico_fighting")) {
            document.getElementById("ico_fighting").click();
          }
        } else {
          // var skill4 = document.querySelector(
          //   ".fix-pixels[onmouseover*=" + useSkill + "]"
          // );
          // if (skill4 && stateSkillMon == false) {
          //   skill4.click();
          // }
          if (parseInt(document.querySelector("#autoStatus").style.top) > 8) {
            document.querySelector(".button3").click();
          }
          if (!document.querySelector(".skillButton-selected")) {
            document.getElementById(useSkill).click();
          }
          var mon = document.getElementById("ico_fighting");
          if (mon) {
            mon.click();
          }
        }
        setTimeout(check_monster, delayAtkmon);
      }
    }
  } else setTimeout(check_monster, 0);
}

async function f_nextMonster() {
  rr = 0;
  var nextMonster = document.querySelector(".button-nextmonster2020");
  var backHome = document.querySelector(".button-go2home2020");
  var died = document.querySelector(".button-again2020");
  var treasure = document.querySelector(".button-opentreas");
  if (treasure) {
    treasure.click();
    await wait(1000);
	location.reload();
  }
  if (died) {
    died.click();
    stateSkillMon = false;
    setTimeout(check_monster, 0);
  } else if (nextMonster) {
    nextMonster.click();
    stateSkillMon = false;
    setTimeout(check_monster, 0);
  } else if (backHome) {
    stateSkillMon = false;
    setTimeout(b2home, 0);
  } else setTimeout(check_monster, 0);
}

async function b2home() {
  rr = 0;
  var backHome = document.querySelector(".button-go2home2020");
  var treasure = document.querySelector(".button-opentreas");
  if (treasure) {
    treasure.click();
    await wait(1000);
	location.reload();
  }
  if (backHome) {
    backHome.click();
    stateSkillMon = false;
    setTimeout(check_monster, 0);
  } else setTimeout(check_monster, 0);
}
