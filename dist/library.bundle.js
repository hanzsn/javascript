(() => {
  const e = document.querySelector("#book-container"),
    t = document.querySelector("#book-form"),
    a =
      (document.querySelector("#submit"),
      "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg");
  class o {
    constructor(e, t, a, o, s) {
      (this.id = crypto.randomUUID()),
        (this.title = e),
        (this.author = t),
        (this.pages = a),
        (this.readStatus = o),
        (this.imageUrl = s);
    }
    toggleRead() {
      this.readStatus = !this.readStatus;
    }
    getStatusText() {
      return this.readStatus ? "Complete" : "Unread";
    }
  }
  class s {
    static books = [];
    static add(e) {
      this.books.push(e);
    }
    static removeById(e) {
      this.books = this.books.filter((t) => t.id !== e);
    }
    static findById(e) {
      return this.books.find((t) => t.id === e);
    }
    static getAll() {
      return this.books;
    }
  }
  function n() {
    (e.innerHTML = ""),
      s.getAll().forEach((t) => {
        const o = document.createElement("div"),
          n = document.createElement("img");
        (n.src = t.imageUrl && "" !== t.imageUrl.trim() ? t.imageUrl : a),
          (n.onerror = () => {
            n.src = a;
          }),
          (n.alt = t.title),
          (n.className =
            "object-cover w-full h-40 mb-4 transition-transform duration-300 group-hover:scale-110"),
          o.appendChild(n),
          (o.className =
            "flex flex-col w-full h-full overflow-hidden rounded shadow-custom group bg-base-100"),
          o.classList.add("book"),
          (o.dataset.id = t.id);
        const i = document.createElement("h2");
        (i.className = "mb-2 font-semibold line-clamp-2"),
          (i.textContent = `Title: ${t.title}`);
        const d = document.createElement("span");
        (d.textContent = `Author: ${t.author}`), (d.className = "text-sm");
        const l = document.createElement("span");
        (l.textContent = `Pages: ${t.pages}`), (l.className = "text-sm");
        const c = document.createElement("label");
        c.className = "flex items-center gap-2 text-sm";
        const r = document.createElement("span");
        (r.textContent = `Status: ${t.getStatusText()}`),
          (r.className = "text-sm");
        const m = document.createElement("input");
        (m.type = "checkbox"),
          (m.className = "flex cursor-pointer toggle-read-checkbox");
        const u = document.createElement("div");
        u.className =
          "flex flex-col items-stretch gap-1 p-4 mt-auto card-actions";
        const p = document.createElement("button");
        (p.textContent = "Remove"), (p.className = "btn btn-sm btn-neutral");
        const h = document.createElement("div");
        h.className = "flex flex-col w-full h-full px-4";
        const g = document.createElement("input");
        (g.type = "text"),
          (g.className = "flex-1 border border-gray-300 input"),
          (g.disabled = !0);
        let b = 0;
        p.addEventListener("click", () => {
          b++;
          const e = o.querySelector(".book-id");
          if (((g.placeholder = "Enter book Id"), (g.disabled = !1), !e)) {
            const e = document.createElement("span");
            (e.textContent = `To remove, enter this in the box above: ${t.id}`),
              (e.className = "text-xs text-center book-id"),
              u.appendChild(e);
          }
          if (g.value.trim() === t.id) {
            (a = t.id), s.removeById(a), console.table(s.getAll()), o.remove();
            const e = new CustomEvent("removeBook", {
              detail: { status: "Book removed," },
            });
            document.dispatchEvent(e);
          }
          var a;
          b >= 2 &&
            (g.classList.remove("border-gray-300"),
            g.classList.add("border-red-500"));
        }),
          u.appendChild(g),
          u.appendChild(p),
          h.appendChild(i),
          h.appendChild(d),
          h.appendChild(l),
          c.appendChild(m),
          c.appendChild(r),
          h.appendChild(c),
          o.appendChild(h),
          o.appendChild(u),
          e.appendChild(o),
          m.addEventListener("change", () => {
            const e = s.findById(t.id);
            e.toggleRead(), (r.textContent = `Status: ${e.getStatusText()}`);
          });
      });
  }
  s.add(
    new o(
      "Solo Leveling",
      "Chugong",
      "312 - volume 1",
      !0,
      "https://m.media-amazon.com/images/S/pv-target-images/a90c37cc3e0bcddcb2cc8d068664c874585e8dc3fbaeae08a742b26ad243f047.jpg"
    )
  ),
    s.add(
      new o(
        "Demon Slayer: Kimetsu no Yaiba",
        "Koyoharu Gotouge",
        "4500+",
        !0,
        "https://cdn.theouterhaven.net/wp-content/uploads/2024/06/demon-slayer-infinity-castle-trilogy-768x403.jpg"
      )
    ),
    s.add(
      new o(
        "Sakamoto Days",
        "Yuto Suzuki",
        "200 - #1",
        !0,
        "https://static0.cbrimages.com/wordpress/wp-content/uploads/2022/04/sakamoto-days-key-visual.jpg"
      )
    ),
    s.add(
      new o(
        "Jujutsu kaisen",
        "Gege Akutami",
        "5700 to 6000+",
        !1,
        "https://static0.cbrimages.com/wordpress/wp-content/uploads/2024/11/jjk-s-shibuya-incident.jpg?w=1600&h=900&fit=crop"
      )
    ),
    s.add(
      new o(
        "My Hero Academia",
        "Kōhei Horikosh",
        "7500 to 8400+",
        !1,
        "https://miro.medium.com/v2/1*W2heFUeeOS_5lWZDBe7hpA.jpeg"
      )
    ),
    s.add(
      new o(
        "One Piece",
        "Eiichiro Oda",
        "22000+",
        !1,
        "https://image.tmdb.org/t/p/original/mBxsapX4DNhH1XkOlLp15He5sxL.jpg"
      )
    ),
    s.add(
      new o(
        "Hell University, part 1",
        "KnightinBlack",
        256,
        !0,
        "https://share-media.literal.club/media/book/knightinblack-hell-university-part-1-yj48w?format=landscape"
      )
    ),
    s.add(
      new o(
        "My Husband is a Mafia Boss Season 1",
        "Yanalovesyouu",
        736,
        !1,
        "https://pbs.twimg.com/media/FRrAlBNagAYwivR.jpg"
      )
    ),
    console.table(s.getAll()),
    n(),
    document.addEventListener("removeBook", (e) => {
      console.log(`Library: ${e.detail.status}`);
    }),
    t.addEventListener("submit", (e) => {
      e.preventDefault();
      const t = document.querySelector("#title"),
        a = document.querySelector("#author"),
        i = document.querySelector("#pages"),
        d = document.querySelector("#book-image");
      s.add(new o(t.value, a.value, i.value, !1, d.value)),
        n(),
        (t.value = ""),
        (a.value = ""),
        (i.value = ""),
        (d.value = "");
      const l = new CustomEvent("submitForm", {
        detail: { status: "Form submitted, new book added!" },
      });
      document.dispatchEvent(l);
    }),
    document.addEventListener("submitForm", (e) => {
      console.log(`Library: ${e.detail.status}`);
    });
})();
