(() => {
  "use strict";
  var e = {
    d: (t, o) => {
      for (var n in o)
        e.o(o, n) &&
          !e.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: o[n] });
    },
    o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  };
  e.d({}, { A: () => d });
  class t {
    constructor(e, t = new Date(), o = !1, n = !1, s = !1, r = !1, a = !1) {
      (this.id = crypto.randomUUID()),
        (this.taskName = e),
        (this.date = t),
        (this.lineThrough = s),
        (this.bold = o),
        (this.showDate = n),
        (this.complete = r),
        (this.priority = a);
    }
    isPriority() {
      this.priority = !this.priority;
    }
  }
  const o = () => document.getElementById("add-btn"),
    n = () => document.getElementById("input-text"),
    s = new (class {
      constructor() {
        if ("undefined" != typeof window && window.localStorage) {
          const e = localStorage.getItem("todos");
          if (e) {
            const t = JSON.parse(e);
            this.todos = t.map((e) => ({ ...e, date: new Date(e.date) }));
          } else this.todos = [];
        } else this.todos = [];
      }
      save() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
      add(e) {
        return this.todos.push(e), this.save(), e;
      }
      remove(e) {
        return (
          (this.todos = this.todos.filter((t) => t.id !== e)),
          this.save(),
          this.todos
        );
      }
      showDate() {
        const e = this.todos.find((e) => (e.id = id));
        e && ((e.showDate = !e.showDate), this.save());
      }
      toggleLineThrough(e) {
        const t = this.todos.find((t) => t.id === e);
        return t && (t.lineThrough = !t.lineThrough), this.save(), t;
      }
      toggleComplete(e) {
        const t = this.todos.find((t) => t.id === e);
        return t && (t.complete = !t.complete), this.save(), t;
      }
      getTodos() {
        return [...this.todos];
      }
    })(),
    r = () => {
      const e = n().value.trim();
      if (!e) return;
      const o = new t(e);
      s.add(o), (n().value = ""), d();
    };
  "undefined" != typeof window &&
    (o().addEventListener("click", r),
    n().addEventListener("keypress", (e) => {
      "Enter" === e.key && r();
    }));
  const a = () => {
    const e = document.querySelector(".list-container");
    (e.innerHTML = ""),
      s.getTodos().forEach((t) => {
        const o = document.createElement("li");
        (o.className =
          "flex flex-col px-4 py-2 mb-2 border rounded-lg border-neutral-300"),
          (o.id = "todo-container");
        const n = document.createElement("div");
        (n.className = ""), o.appendChild(n);
        const r = document.createElement("hr");
        (r.className = "mt-2 border border-neutral-200"), o.appendChild(r);
        const d = document.createElement("div");
        (d.className = "flex items-center justify-between w-full gap-2 pt-2"),
          o.appendChild(d);
        const i = document.createElement("span");
        (i.textContent = t.taskName),
          (i.className = t.lineThrough
            ? "line-through text-sm flex-1 min-w-0 break-words"
            : "flex-1 text-sm min-w-0 break-words"),
          t.bold && i.classList.add("font-bold"),
          n.appendChild(i);
        const l = document.createElement("span");
        (l.textContent = t.showDate
          ? ((e) =>
              e.date.toLocaleString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              }))(t)
          : "View date"),
          (l.className = "text-xs cursor-pointer"),
          l.addEventListener("click", (e) => {
            e.stopPropagation(), (t.showDate = !t.showDate), s.save(), a();
          }),
          d.appendChild(l);
        const c = document.createElement("div");
        (c.className = "flex gap-2"), d.appendChild(c);
        const h = document.createElement("button");
        (h.innerHTML =
          '<svg class="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">\n    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5h4.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0-7H6m2 7h6.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0 0H6"/>\n    </svg>'),
          (h.className =
            "rounded-lg cursor-pointer btn btn-sm border-neutral-300"),
          h.addEventListener("click", (e) => {
            e.stopPropagation(), (t.bold = !t.bold), s.save(), a();
          }),
          h.classList.add("disableable"),
          c.appendChild(h);
        const u = document.createElement("button");
        (u.innerHTML =
          '<svg class="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">\n    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>\n    </svg>'),
          (u.className =
            "rounded-lg cursor-pointer btn btn-sm border-neutral-300"),
          u.addEventListener("click", (e) => {
            e.stopPropagation();
            const o = document.createElement("input");
            (o.className =
              "w-full text-sm text-red-600 rounded outline-none focus:ring-0"),
              (o.value = i.textContent),
              i.replaceWith(o),
              o.focus(),
              window.addEventListener("click", (e) => {
                o.contains(e.target) || ((t.taskName = o.value), s.save(), a());
              }),
              o.addEventListener("keydown", (e) => {
                ("Enter" !== e.key && "Escape" !== e.key) ||
                  ((t.taskName = o.value), s.save(), a());
              });
          }),
          u.classList.add("disableable"),
          c.appendChild(u);
        const m = document.createElement("button");
        (m.innerHTML =
          '<svg class="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">\n    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6.2V5h12v1.2M7 19h6m.2-14-1.677 6.523M9.6 19l1.029-4M5 5l6.523 6.523M19 19l-7.477-7.477"/>\n    </svg>'),
          (m.className =
            "rounded-lg cursor-pointer btn btn-sm border-neutral-300"),
          m.addEventListener("click", (e) => {
            e.stopPropagation(), s.toggleLineThrough(t.id), a();
          }),
          m.classList.add("disableable"),
          c.appendChild(m);
        const p = document.createElement("button");
        (p.innerHTML =
          '<svg class="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">\n    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>\n    </svg>'),
          (p.className =
            "rounded-lg cursor-pointer btn btn-sm border-neutral-300"),
          p.addEventListener("click", (e) => {
            e.stopPropagation(), (t.complete = !t.complete), s.save(), a();
          }),
          c.appendChild(p);
        const g = document.createElement("button");
        (g.innerHTML =
          '<svg class="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">\n    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>\n    </svg>'),
          (g.className =
            "rounded-lg cursor-pointer btn btn-sm border-neutral-300"),
          g.addEventListener("click", (e) => {
            e.stopPropagation(), s.remove(t.id), a();
          }),
          c.appendChild(g),
          t.complete
            ? (o.classList.add("opacity-50"),
              o.querySelectorAll(".disableable").forEach((e) => {
                (e.disabled = !0), e.classList.add("cursor-not-allowed");
              }))
            : o.querySelectorAll(".disableable").forEach((e) => {
                (e.disabled = !1),
                  e.classList.remove("opacity-50", "cursor-not-allowed");
              }),
          e.appendChild(o);
      });
  };
  "undefined" != typeof window &&
    window.addEventListener("DOMContentLoaded", () => {
      a(), console.table(s.getTodos());
    });
  const d = a;
})();
