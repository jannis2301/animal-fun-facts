export interface FishData {
  id: number
  animal: string
  image: string
  facts: Array<string>
}

export const fishes: Array<FishData> = [
  {
    id: 1,
    animal: 'dolphin',
    image: 'images/dolphin.jpg',
    facts: [
      'Dolphins have been shown to give distinct names to each other!',
      'Dolphins are known to display their own culture!',
      'Dolphins have two stomachs!',
    ],
  },
  {
    id: 2,
    animal: 'lobster',
    image: 'images/lobster.jpg',
    facts: [
      'Lobsters taste with their legs!',
      'Lobsters chew with their stomachs!',
      'Lobsters can live as long as 100 years.',
    ],
  },
  {
    id: 3,
    animal: 'starfish',
    image: 'images/starfish.jpg',
    facts: [
      'Starfish can have up to 40 arms!',
      'Starfish have no brain and no blood!',
      'Starfish can regenerate their own arms!',
    ],
  },
]
