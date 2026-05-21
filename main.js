let quiz1 = ;
const button = document.getElementById('m_button');
function create_quiz (){
  var rdm1 = Math.round(Math.random());
  var rdm5 = Math.round(Math.random());
  var rdm3 = Math.round(Math.random());
  var rdm6 = Math.round(Math.random());
  if (rdm1 == "1"){
    if (rdm5 == "1"){
      var rdm2 = Math.floor( Math.random() * 99) + 1;
      var quiz1 = "-√" + rdm2;
    };else{
      var rdm2 = Math.floor( Math.random() * 99) + 1;
      var quiz1 = "√" + rdm2;
    };
  }; else {
    var rdm2 = Math.floor( Math.random() * 99) + 1;
    let quiz1 = rdm2;
  };
  if (rdm3 == "1"){
    if (rdm6 == "1"){
      var rdm4 = Math.floor( Math.random() * 99) + 1;
      var quiz2 = "-√" + rdm4;
    };else{
      var rdm4 = Math.floor( Math.random() * 99) + 1;
      var quiz2 = "√" + rdm4;
    }
  }; else {
    var rdm4 = Math.floor( Math.random() * 99) + 1;
    var quiz2 = rdm4;
  };
};
function button_push1 (){
  if (button.textContent == "スタート！"){
    document.getElementById('<button').innerHTML = '<button id="<button">右が大</button>'
    document.getElementById('>button').innerHTML = '<button id=">butoon">左が大</button>'
    document.getElementById('m_button').innerHTML = '<button id="m_button" hidden></button>'
    create_quiz();
    document.getElementById('quiz').innerHTML = `    <section id="quiz">
      <h2　id="text1">JavaScript式√どっちが大きい?</h2>
      <h2 id="text2">${quiz1}　${quiz2}</h2>
    </section>`
  };else if(button.textContent == "次の問題へ"){
    document.getElementById('<button').innerHTML = '<button id="<button">右が大</button>'
    document.getElementById('>button').innerHTML = '<button id=">butoon">左が大</button>'
    document.getElementById('m_button').innerHTML = '<button id="m_button" hidden></button>'
    create_quiz();
    document.getElementById('quiz').innerHTML = `    <section id="quiz">
      <h2　id="text1">JavaScript式√どっちが大きい?</h2>
      <h2 id="text2">${quiz1}　${quiz2}</h2>
    </section>`
  };
};
function button_push2 (){
  if (if (quiz1.indexOf('√') == -1){
    if (q1 < q2)
  };else if{
    
  }
}
