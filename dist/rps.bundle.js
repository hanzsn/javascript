(() => {
  const e = document.querySelector(".player"),
    t = document.querySelector(".computer"),
    o = document.querySelectorAll(".playerChoices"),
    r = document.querySelector(".cRes"),
    n = document.querySelector(".pRes"),
    c = document.querySelector(".result");
  let s = 0,
    l = 0;
  const m = {
      rock: "../img/rightRock.png",
      paper: "../img/rightPaper.png",
      scissor: "../img/rightScissor.png",
    },
    a = {
      rock: "../img/leftRock.png",
      paper: "../img/leftPaper.png",
      scissor: "../img/leftScissor.png",
    };
  function i() {
    (s = 0),
      (l = 0),
      (n.textContent = 0),
      (r.textContent = 0),
      (c.textContent = "_"),
      (e.src = a.rock),
      (t.src = m.rock);
  }
  let p = !1;
  o.forEach((o) => {
    o.addEventListener("click", () => {
      if (p) return;
      let u = o.dataset.choice,
        g = (function () {
          let e = Object.keys(m),
            t = e[Math.floor(Math.random() * e.length)];
          return { name: t, src: m[t] };
        })();
      (e.src = a[u]),
        (t.src = g.src),
        (c.textContent = `player: ${u} & computer: ${g.name}`),
        u === g.name
          ? console.log("draw")
          : ("rock" === u && "scissor" === g.name) ||
            ("paper" === u && "rock" === g.name) ||
            ("scissor" === u && "paper" === g.name)
          ? ((n.textContent = ++s), console.log("player +1"))
          : ((r.textContent = ++l), console.log("computer +1")),
        (5 === s
          ? ((c.textContent = "Player Wins the Game! 🎉"),
            setTimeout(i, 2e3),
            1)
          : 5 === l &&
            ((c.textContent = "Computer Wins the Game! 🤖"),
            setTimeout(i, 2e3),
            1)) && ((p = !0), setTimeout(() => (p = !1), 2e3));
    });
  });
})();
