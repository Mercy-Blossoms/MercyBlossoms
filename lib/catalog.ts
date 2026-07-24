/**
 * Catalog / content model — free + email-gate edition
 * ------------------------------------------------------------------
 * Every coloring page in this file is public. There is no paid tier
 * for the coloring collection anymore — the "checkout" is an email
 * address instead of money. See components/EmailGateDownload.tsx for
 * where that actually happens.
 *
 * The Shop is the one place still selling something for money: the
 * physical God's Favorite Tree storybook (see shopProducts below).
 * Everything in `categories` is free.
 */

const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE_URL || "";
const img = (path: string) => `${ASSET_BASE}${path}`;

export type CategoryId =
  | "bible-stories"
  | "saints"
  | "apostles"
  | "mass"
  | "symbols"
  | "extras";

export interface CollectionPage {
  image: string;
  pdf: string;
  caption: string;
}

export interface Category {
  id: CategoryId;
  name: string;
  shortName: string;
  blurb: string;
  coverImage: string;
  pages: CollectionPage[];
  /** download-all-pages-in-this-category PDF */
  downloadAllHref: string;
}

const page = (
  cat: string,
  n: number,
  padded: string,
  caption: string
): CollectionPage => ({
  image: img(`/collection/${cat}/${n}.jpg`),
  pdf: img(`/downloads/pages/${cat}/${padded}.pdf`),
  caption,
});

export const categories: Category[] = [
  {
    id: "bible-stories",
    name: "Bible Stories Coloring Collection",
    shortName: "Bible Stories",
    blurb:
      "Beloved moments from Scripture brought to life through simple, joyful illustrations children can color while learning God's story.",
    coverImage: img("/covers/bible-stories-cover.jpg"),
    downloadAllHref: img("/downloads/collections/bible-stories.pdf"),
    pages: [
      page("bible-stories", 1, "01", '"God saw everything that he had made, and behold, it was very good." Genesis 1:31'),
      page("bible-stories", 2, "02", '"I have set my rainbow in the clouds." Genesis 9:13'),
      page("bible-stories", 3, "03", '"God himself will provide the lamb." Genesis 22:8'),
      page("bible-stories", 4, "04", '"The Lord drove the sea back." Exodus 14:21'),
      page("bible-stories", 5, "05", '"I come to you in the name of the Lord." 1 Samuel 17:45'),
      page("bible-stories", 6, "06", 'Jonah and the Great Fish — "I called to the Lord, and He answered me." Jonah 2:2'),
      page("bible-stories", 7, "07", '"Today a Savior has been born for you." Luke 2:11'),
      page("bible-stories", 8, "08", 'Jesus Calms the Storm — "Peace! Be still!" Mark 4:39'),
      page("bible-stories", 9, "09", 'The Feeding of the Five Thousand — "Jesus took the loaves, gave thanks, and distributed them." John 6:11'),
      page("bible-stories", 10, "10", '"I am the good shepherd." John 10:11'),
      page("bible-stories", 11, "11", '"Do this in remembrance of me." Luke 22:19'),
      page("bible-stories", 12, "12", '"He is not here; for He has risen." Matthew 28:6'),
    ],
  },
  {
    id: "saints",
    name: "Saints and Feast Days Coloring Collection",
    shortName: "Saints",
    blurb:
      "Meet courageous saints and discover the special feast days that help bring the Catholic year to life.",
    coverImage: img("/covers/saints-cover.jpg"),
    downloadAllHref: img("/downloads/collections/saints.pdf"),
    pages: [
      page("saints", 1, "01", "Saint Carlo Acutis — October 12"),
      page("saints", 2, "02", "Saint Bernadette — April 16"),
      page("saints", 3, "03", "Saint Mother Teresa — September 5"),
      page("saints", 4, "04", "Saint Patrick — March 17"),
      page("saints", 5, "05", "Saint Padre Pio — May 25"),
      page("saints", 6, "06", "Saint Nicholas — December 6"),
      page("saints", 7, "07", "Saint Joseph — March 19"),
      page("saints", 8, "08", "Saint Francis — September 1"),
      page("saints", 9, "09", "Saint Dymphna — May 15"),
      page("saints", 10, "10", "Saint Joseph Cupertino — September 18"),
      page("saints", 11, "11", "Saint Therese — October 15"),
    ],
  },
  {
    id: "apostles",
    name: "The Apostles Coloring Collection",
    shortName: "Apostles",
    blurb:
      "Learn about the friends Jesus chose to follow Him, share the Gospel, and help build His Church.",
    coverImage: img("/covers/apostles-cover.jpg"),
    downloadAllHref: img("/downloads/collections/apostles.pdf"),
    pages: [
      page("apostles", 1, "01", 'Saint Peter — "You are Peter, and upon this rock I will build my Church." Matthew 16:18'),
      page("apostles", 2, "02", 'Saint Andrew — "We have found the Messiah." John 1:41'),
      page("apostles", 3, "03", 'Saint James the Greater — "The Son of Man came not to be served but to serve." Mark 10:45'),
      page("apostles", 4, "04", 'Saint John — "One of his disciples, whom Jesus loved, was reclining close to Jesus." John 13:23'),
      page("apostles", 5, "05", 'Saint Philip — "Follow me." John 1:43'),
      page("apostles", 6, "06", 'Saint Bartholomew — "Behold, an Israelite indeed, in whom there is no deceit!" John 1:47'),
      page("apostles", 7, "07", 'Saint Thomas — "Blessed are those who have not seen and yet have believed." John 20:29'),
      page("apostles", 8, "08", 'Saint Matthew — "Follow me." And he rose and followed him. Matthew 9:9'),
      page("apostles", 9, "09", 'Saint James the Less — "Be doers of the word, and not hearers only." James 1:22'),
      page("apostles", 10, "10", 'Saint Jude — "Keep yourselves in the love of God." Jude 1:21'),
      page("apostles", 11, "11", 'Saint Simon the Zealot — "Commit your way to the Lord." Psalm 37:5'),
      page("apostles", 12, "12", 'Saint Matthias — "The lot fell upon Matthias, and he was numbered with the eleven apostles." Acts 1:26'),
    ],
  },
  {
    id: "mass",
    name: "The Holy Mass Coloring Collection",
    shortName: "The Mass",
    blurb:
      "Explore the people, objects, prayers, and sacred moments children encounter each time they attend the Holy Mass.",
    coverImage: img("/covers/mass-cover.jpg"),
    downloadAllHref: img("/downloads/collections/mass.pdf"),
    pages: [
      page("mass", 1, "01", "The Church"),
      page("mass", 2, "02", '"I will sprinkle clean water upon you, and you shall be clean." Ezekiel 36:25 — The Holy Water Font'),
      page("mass", 3, "03", "The Altar"),
      page("mass", 4, "04", "The Tabernacle"),
      page("mass", 5, "05", "The Chalice"),
      page("mass", 6, "06", '"I am the living bread that came down from heaven." John 6:51 — The Sacred Host'),
      page("mass", 7, "07", '"Your word is a lamp to my feet and a light to my path." Psalm 119:105 — The Lectionary'),
      page("mass", 8, "08", '"Whoever wishes to come after me must deny himself, take up his cross daily, and follow me." Luke 9:23 — Processional Cross'),
      page("mass", 9, "09", '"Serve the Lord with gladness." Psalm 100:2 — The Altar Servers'),
      page("mass", 10, "10", '"Let my prayer be incense before you." Psalm 141:2 — Incense'),
      page("mass", 11, "11", '"I am the good shepherd." John 10:11 — The Priest'),
      page("mass", 12, "12", '"For where two or three are gathered together in my name, there am I in the midst of them." Matthew 18:20 — The Congregation'),
      page("mass", 13, "13", '"I am the light of the world. Whoever follows me will not walk in darkness but will have the light of life." John 8:12 — The Sanctuary Lamp'),
    ],
  },
  {
    id: "symbols",
    name: "Symbols of Our Faith Coloring Collection",
    shortName: "Symbols",
    blurb:
      "Discover the meaning behind familiar Catholic symbols, from the cross and rosary to the dove, lamb, and chalice.",
    coverImage: img("/covers/symbols-cover.jpg"),
    downloadAllHref: img("/downloads/collections/symbols.pdf"),
    pages: [
      page("symbols", 1, "01", '"We love because he first loved us." 1 John 4:19'),
      page("symbols", 2, "02", 'The Holy Bible — "Your word is a lamp to my feet and a light to my path." Psalm 119:105'),
      page("symbols", 3, "03", 'The Holy Eucharist — "I am the living bread that came down from heaven." John 6:51'),
      page("symbols", 4, "04", '"The fruit of the Spirit is love, joy, peace, patience, kindness, generosity, faithfulness, gentleness, and self-control." Galatians 5:22–23'),
      page("symbols", 5, "05", '"Pray without ceasing." 1 Thessalonians 5:17'),
      page("symbols", 6, "06", 'The Sacred Heart — "Come to me, all you who labor and are burdened, and I will give you rest." Matthew 11:28'),
      page("symbols", 7, "07", 'The Church — "How lovely is your dwelling place, O Lord of hosts!" Psalm 84:1'),
      page("symbols", 8, "08", '"Behold, the Lamb of God, who takes away the sin of the world." John 1:29'),
      page("symbols", 9, "09", 'The Keys of Saint Peter — "I will give you the keys of the kingdom of heaven." Matthew 16:19'),
      page("symbols", 10, "10", '"Come follow me, and I will make you fishers of men." Matthew 4:19'),
      page("symbols", 11, "11", 'Olive Branch — "The dove came back to him in the evening, and there in its bill was a fresh olive leaf!" Genesis 8:11'),
      page("symbols", 12, "12", 'Tree of Life — "The leaves of the tree were for the healing of the nations." Revelation 22:2'),
    ],
  },
  {
    id: "extras",
    name: "Extras",
    shortName: "Extras",
    blurb:
      "Standalone coloring pages that don't belong to any one category — simple, joyful, and free.",
    coverImage: img("/collection/extras/1.jpg"),
    downloadAllHref: img("/downloads/collections/extras.pdf"),
    pages: [
      page("extras", 1, "01", '"Let the little children come to me." Matthew 19:14'),
      page("extras", 2, "02", '"Behold, I stand at the door and knock." Revelation 3:20'),
      page("extras", 3, "03", '"He took the children in his arms and blessed them." Mark 10:16'),
      page("extras", 4, "04", '"For He will command His angels concerning you to guard you in all your ways." Psalm 91:11'),
      page("extras", 5, "05", '"When I lie down, I sleep in peace." Psalm 4:8'),
      page("extras", 6, "06", '"As for me and my house, we will serve the Lord." Joshua 24:15'),
      page("extras", 7, "07", '"I rejoiced when they said to me, \'Let us go to the house of the Lord!\'" Psalm 122:1'),
      page("extras", 8, "08", '"The earth is full of the goodness of the Lord." Psalm 33:5'),
      page("extras", 9, "09", '"Look at the birds of the air." Matthew 6:26'),
      page("extras", 10, "10", '"The Lord is my shepherd." Psalm 23:1'),
    ],
  },
];

/** Download everything across every category in one PDF. */
/** Cover art for the collection as a whole (used on the home page hero). */
export const volumeOneCoverImage = img("/covers/volume-one-cover.jpg");

export const completeCollectionDownload = {
  title: "The Complete Mercy Blossoms Coloring Collection",
  href: img("/downloads/mercy-blossoms-complete-collection.pdf"),
  // Volume One cover + (1 cover + N pages) for each of the 5 designed
  // categories + Extras pages with no cover (it's not a finished,
  // designed collection, so it doesn't get a cover treatment).
  pageCount:
    1 +
    categories
      .filter((c) => c.id !== "extras")
      .reduce((sum, c) => sum + 1 + c.pages.length, 0) +
    (categories.find((c) => c.id === "extras")?.pages.length || 0),
};

/** ---------------- Shop (the one thing still actually for sale) ---------------- */

export interface StorybookProduct {
  kind: "storybook";
  slug: string;
  title: string;
  author: string;
  tagline: string;
  description: string[];
  price: number;
  priceNote: string;
  format: string;
  coverImage: string;
  backCoverImage: string;
  spineImage: string;
  behindTheScenesImage: string;
  interiorPreviewImages: string[];
}

export const shopProducts: StorybookProduct[] = [
  {
    kind: "storybook",
    slug: "gods-favorite-tree",
    title: "God's Favorite Tree",
    author: "Aisling Bihari",
    tagline: "A childhood story about God's perfect plan",
    description: [
      "Written and published by Aisling Bihari at age ten, God's Favorite Tree is a gentle story about creation, purpose, and discovering the special plan God has for each of us.",
      "Now at the heart of Mercy Blossoms, this original hardcover story continues its journey with a new generation of children and families.",
    ],
    price: 19.99,
    priceNote: "",
    format: "Hardcover Children's Book",
    coverImage: img("/covers/gods-favorite-tree-cover.jpg"),
    backCoverImage: img("/covers/gods-favorite-tree-back-cover.jpg"),
    spineImage: img("/covers/gods-favorite-tree-spine.jpg"),
    behindTheScenesImage: img("/images/gods-favorite-tree/behind-the-scenes.jpg"),
    interiorPreviewImages: Array.from({ length: 4 }).map((_, i) =>
      img(`/images/gods-favorite-tree/interior/${i + 1}.jpg`)
    ),
  },
];
