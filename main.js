function bowlingScore(frames) {
  var frames = frames.split(" "), score = 0, roll = 0, temp, frame8 = frames[7], frame9 = frames[8], frame10 = frames[9];
  console.log(frames);
  // Frames 1 - 7
  for (var i = 0; i < 7; i++) {
    roll = 0;
    if (frames[i] == 'X'){
      if (frames[i + 1] == 'X') {
        if (frames[i + 2] == 'X') {
          score += 30;
        } else {
          temp = frames[i + 2];
          score += (20 + parseInt(temp[0]))
        }
      } else if (frames[i + 1].includes('/')) {
        score += 20;
      } else {
        temp = frames[i + 1].split('');
        roll = 10;
        roll += parseInt(temp[0]);
        roll += parseInt(temp[1]);
        score += roll;
      }
    } else if (frames[i].includes('/')) {
      temp = frames[i].split('');
      roll += 10;
      if (frames[i + 1] == 'X') {
        roll += 10;
        score += roll;
      } else {
        temp = frames[i + 1].split('');
        roll += parseInt(temp[0]);
        score += roll;
      }
    } else {
      temp = frames[i].split('');
      score += parseInt(temp[0]);
      score += parseInt(temp[1]);
    }
    console.log(score);
  }
  // Frame 8
  if (frame8 == 'X') {
    if (frame9 == 'X') {
      temp = frame10.split('')[0];
      if (temp == 'X') {
        score += 30
      } else {
        roll = 20 + parseInt(temp);
        score += roll;
      }
    } else if (frame9.includes('/')) {
      score += 20;
    } else {
      temp = frame9.split('');
      score += (10 + parseInt(temp[0]) + parseInt(temp[1]));
    }
  } else if (frame8.includes('/')) {
      roll = 10;
      if (frame9 == 'X') {
        roll += 10;
        score += roll;
      } else {
        temp = frame9.split('');
        roll += parseInt(temp[0]);
        score += roll;
      }
  } else {
      temp = frame8.split('');
      score += parseInt(temp[0]);
      score += parseInt(temp[1]); 
  }
  console.log(score);
  // Frame 9
  if (frame9 == 'X') {
    temp = frame10.split('');
    if (temp[0] == 'X') {
      if (temp[1] == 'X') {
        score += 30;
      } else {
        score += (20 + parseInt(temp[1]));
      }
    } else if (frame10.includes('/')) {
      score += 20;
    } else {
      score += (10 + parseInt(temp[0]) + parseInt(temp[1]));
    }
  } else if (frame9.includes('/')) {
    roll = 10;
    if (frame10[0] == 'X') {
      score += 20;
    } else {
      roll += parseInt(frame10[0]);
      score += roll;
    }
  } else {
    score += (parseInt(frame9[0]) + parseInt(frame9[1]));
  }
  console.log(score);
  // Frame 10
  if (frame10[0] == 'X') {
    if (frame10[1] == 'X') {
      if (frame10[2] == 'X') {
        score += 30;
      } else {
        score += (20 + parseInt(frame10[2]));
      }
    } else {
      score += (10 + parseInt(frame10[1]));
    }
  } else if (frame10[1] != '/') {
    score += (parseInt(frame10[0]) + parseInt(frame10[1]))
  } else {
    if (frame10[2] == 'X') {
      score += 20;
    } else {
      score += (10 + parseInt(frame10[2]));
    }
  }
  return score;
}