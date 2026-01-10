// @ts-check
import { Book, Library } from "./library.js";

export const library = new Library();

// create book
if (library.getAll().length === 0) {
  library.add(
    new Book(
      "Solo Leveling",
      "Chugong",
      312,
      true,
      "https://m.media-amazon.com/images/S/pv-target-images/a90c37cc3e0bcddcb2cc8d068664c874585e8dc3fbaeae08a742b26ad243f047.jpg"
    )
  );

  library.add(
    new Book(
      "Demon Slayer: Kimetsu no Yaiba",
      "Koyoharu Gotouge",
      4500,
      true,
      "https://cdn.theouterhaven.net/wp-content/uploads/2024/06/demon-slayer-infinity-castle-trilogy-768x403.jpg"
    )
  );

  library.add(
    new Book(
      "Sakamoto Days",
      "Yuto Suzuki",
      200,
      true,
      "https://static0.cbrimages.com/wordpress/wp-content/uploads/2022/04/sakamoto-days-key-visual.jpg"
    )
  );

  library.add(
    new Book(
      "Jujutsu kaisen",
      "Gege Akutami",
      6000,
      false,
      "https://static0.cbrimages.com/wordpress/wp-content/uploads/2024/11/jjk-s-shibuya-incident.jpg?w=1600&h=900&fit=crop"
    )
  );

  library.add(
    new Book(
      "My Hero Academia",
      "Kōhei Horikosh",
      8400,
      false,
      "https://miro.medium.com/v2/1*W2heFUeeOS_5lWZDBe7hpA.jpeg"
    )
  );

  library.add(
    new Book(
      "One Piece",
      "Eiichiro Oda",
      22000,
      false,
      "https://image.tmdb.org/t/p/original/mBxsapX4DNhH1XkOlLp15He5sxL.jpg"
    )
  );

  library.add(
    new Book(
      "Hell University, part 1",
      "KnightinBlack",
      256,
      true,
      "https://share-media.literal.club/media/book/knightinblack-hell-university-part-1-yj48w?format=landscape"
    )
  );

  library.add(
    new Book(
      "My Husband is a Mafia Boss Season 1",
      "Yanalovesyouu",
      736,
      false,
      "https://pbs.twimg.com/media/FRrAlBNagAYwivR.jpg"
    )
  );
}

// console.table(library.getAll());
