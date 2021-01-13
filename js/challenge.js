

document.addEventListener('DOMContentLoaded', () => {
    array = [];
    counter_run();
    document.getElementById("minus").addEventListener("click", minus);
    document.getElementById("plus").addEventListener("click", plus);
    document.getElementById('heart').addEventListener('click', heart);
    document.getElementById("pause").addEventListener("click", pause_resume);
    document.getElementById("comment-form").addEventListener("submit", comment);
});

function comment(event) {
  event.preventDefault();
  form_tag = document.getElementById("list");
  p_tag = document.createElement("p")
  form_tag.appendChild(p_tag)
  p_tag.innerText = event.target["comment-input"].value;
  // document.getElementById("comment-form").reset();
}
function counter_run() {
  
    setInterval(function () {
      if (document.getElementById("pause").innerText === "pause") {
      let time = parseInt(document.getElementById("counter").innerText);
      document.getElementById("counter").innerText = (time + 1).toString();
      }
    }, 1000);
  
}

function minus(event) {
  event.preventDefault();
  let time = parseInt(document.getElementById("counter").innerText);
  document.getElementById("counter").innerText = (time - 1).toString();
}


function plus(event) {
  event.preventDefault();
  let time = parseInt(document.getElementById("counter").innerText);
  document.getElementById("counter").innerText = (time + 1).toString();
}

function heart(event) {
  event.preventDefault();
    let time = document.getElementById("counter").innerText;
    if (array[time]) {
      array[time] += 1;
      document.getElementById(
        time
      ).innerText = `${time} has been liked ${array[time]} time`;
    } else {
      ul_tag = document.querySelector(".likes");
      li_tag = document.createElement("li");
      li_tag.id = time;
      ul_tag.appendChild(li_tag);
      array[time] = 1;
      li_tag.innerText = `${time} has been liked 1 time`;
    }
}

function pause_resume(event) {
  event.preventDefault();
  if (document.getElementById('pause').innerText === "pause") {
    document.getElementById('pause').innerText = "resume"
    document.getElementById("minus").disabled = true;
    document.getElementById("plus").disabled = true;
    document.getElementById("heart").disabled = true;
  } else {
    document.getElementById('pause').innerText = "pause"
    document.getElementById("minus").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("heart").disabled = false;
  }
}