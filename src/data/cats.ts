export type Medium = "film" | "tv" | "novel";

export interface Cat {
  id: string;
  name: string;
  franchise: string;
  medium: Medium;
  year: number;
  bio: string;
  whereToFind: string;
  trivia: string;
}

export const cats: Cat[] = [
  {
    id: "jonesy",
    name: "Jonesy",
    franchise: "Alien",
    medium: "film",
    year: 1979,
    bio: `The sole surviving animal aboard the USCSS Nostromo, Jonesy outlasted both the crew and a Xenomorph with characteristic feline indifference. An orange tabby of unshakeable nerve, he regarded the alien threat with the same cool disdain he reserved for everyone and everything else. Later adopted by Ripley, he survived a second encounter on Hadley's Hope — making him arguably the most resilient soul in the entire franchise.`,
    whereToFind: `Alien (1979) directed by Ridley Scott, and Aliens (1986) directed by James Cameron. Look for his extended scenes in the Aliens director's cut.`,
    trivia: `Multiple cats played Jonesy during filming. Ridley Scott used his reaction shots to build tension — the creature that terrified the crew left the cat utterly unimpressed.`,
  },
  {
    id: "spot",
    name: "Spot",
    franchise: "Star Trek: The Next Generation",
    medium: "tv",
    year: 1987,
    bio: `Data's beloved orange tabby, Spot lived aboard the USS Enterprise-D and became the android's unlikely soft spot. Data wrote poetry for her, worried over her nutritional needs, and grieved when she was in danger — all while officially claiming he could not feel emotion. Spot's breed inexplicably shifted from Somali to domestic shorthair between seasons, which the crew never addressed, which somehow made her more endearing.`,
    whereToFind: `Star Trek: The Next Generation (1987–1994), most prominently in "Data's Day" (S4E11) and "In Theory" (S4E25). Also appears in Star Trek: Generations (1994).`,
    trivia: `Data's poem "Ode to Spot" — performed entirely deadpan — has become a beloved fan favourite. It begins: "Felis catus is your taxonomic nomenclature, an endothermic quadruped, carnivorous by nature."`,
  },
  {
    id: "goose",
    name: "Goose",
    franchise: "Captain Marvel",
    medium: "film",
    year: 2019,
    bio: `Seemingly an ordinary orange tabby who belonged to the scientist Mar-Vell, Goose is in fact a Flerken — an extraordinarily dangerous alien species that resembles a house cat but conceals tentacled pocket dimensions within its body. During the events of Captain Marvel, Goose swallowed the Tesseract, incapacitated a squadron of Kree soldiers, and scratched Nick Fury's left eye out — all while maintaining an air of serene indifference.`,
    whereToFind: `Captain Marvel (2019) and The Marvels (2023). Four cats shared the role: Gonzo, Reggie, Archie, and Rizzo.`,
    trivia: `Goose is named after the co-pilot character from Top Gun, the film Carol Danvers and her crew watched at the bar in the film's 1990s setting. Nick Fury's eye patch origin was settled forever.`,
  },
  {
    id: "cat",
    name: "Cat",
    franchise: "Red Dwarf",
    medium: "tv",
    year: 1988,
    bio: `Three million years after a radiation leak killed the crew of the mining ship Red Dwarf, the last survivor of the Cat People — a humanoid species evolved from Dave Lister's pregnant cat Frankenstein — emerged from deep in the ship's hold. Supremely vain, impeccably dressed, and possessed of extraordinary feline instincts, Cat's priorities are fish, his wardrobe, and his own magnificent reflection. He is also, technically, the sole practitioner of a religion based on a misremembered conversation about a hotdog stand.`,
    whereToFind: `Red Dwarf (1988–present), BBC. Danny John-Jules plays the character across all series with unmatched physical comedy and sartorial splendour.`,
    trivia: `The Cat People's holy scripture was built around a mishearing of Lister's plan to open a hotdog stand on Fiji. Their promised land, "Fuchal," was a garbled version of "Fiji."`,
  },
  {
    id: "pixel",
    name: "Pixel",
    franchise: "The Door Into Summer",
    medium: "novel",
    year: 1957,
    bio: `Pixel is the beloved tomcat of engineer Dan Davis in Robert Heinlein's classic time-travel novel. A stubborn, winter-hating cat who perpetually believes that the next door must surely lead to summer, Pixel embodies the novel's central metaphor: relentless optimism in the face of an indifferent universe. He accompanies Dan through betrayal, cryogenic suspension, and temporal displacement without ever surrendering his essential feline certainty that somewhere warmer is just one door away.`,
    whereToFind: `The Door Into Summer by Robert A. Heinlein (1957). Available as a standalone novel and in most Heinlein short novel collections.`,
    trivia: `Heinlein later named another cat character "Pixel" in his World as Myth series — described as "the cat who walks through walls," a cat who exists across multiple universes simultaneously.`,
  },
];
