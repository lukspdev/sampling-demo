var candid=new Array(180);
for(var z=0; z<180; z++) {
  candid[z]=z+1;
}

function randSample(n, start) {
  var r = 1+Math.floor(Math.random()*(n-start))+start;
  if(candid[r] != 0) {
    candid[r]=0
    return r
  }
  return randSample(n, start);
};

function sampleCase(n, start) {
  var rand='c'+randSample(n, start);
  var c=document.getElementById(rand);
  return c;
};

function altCol(c) {
  var color=c.className.slice(-1);
  switch(color) {
    case '1':
      c.style.borderColor="blue";
      break;
    case '2':
      c.style.borderColor="green";
      break;
    default:
      c.style.borderColor="red";
      break;
  };
};

function css(c) {
  c.style.borderStyle="dotted";
  c.style.borderWidth="6px";
  altCol(c);
  c.style.width="48px";
  c.style.height="48px";
};

function rand() {
  var c=sampleCase(180, 0);
  css(c);
};

function act() {
  for(var i=0; i<36; i++) {
    rand();
  };
};

function randStr(n) {
  var c=sampleCase(60*(n+1), 60*n);
  css(c);
};

function str() {
  for(var i=0; i<3; i++) {
    for(var j=0; j<12; j++) {
      randStr(i);
    }
  }
};

function randGap() {
  return Math.floor(Math.random()*6)+3;
};

function sys() {
  var gap=randGap();
  var su=randGap();
  var id, c;
  for(var i=su-gap; i<=180; i += gap) {
    id='c'+i;
    c=document.getElementById(id);
    css(c);
  }
};

function mts() {
  var gap=randGap();
  var su=randGap();
  var id, c;
  for(var r=0; r<3; r++) {
    for(var i=su-gap; i<=60*(r+1); i += gap) {
      id='c'+i;
      c=document.getElementById(id);
      css(c);
    }
    su += 60;
  }
}

function clu() {
  var n=Math.floor(Math.random()*3);
  console.log(n);
  var c;
  for(var i=60*n+1; i<=60*(n+1); i++) {
    id='c'+i;
    c=document.getElementById(id);
    css(c);
  }
}
