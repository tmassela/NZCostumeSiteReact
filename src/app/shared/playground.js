const COSTUMES = [
  {
      id: 0,
      name: 'Amazing Grace',
      image:   amazingGrace,
      images:  [ amazingGrace2, amazingGrace3, amazingGrace4, amazingGrace5, amazingGrace6 ],
      description: 'White, flowy dress',
      style: 'lyrical',
      left: 3

  },

  {
      id: 1,
      name: 'Enchanted',
      image: enchanted,
      description: 'Blue-gray velvet turtleneck leo',
      style: 'lyrical',
      left: 3

  },

  {
      id: 2,
      name: 'Blue Skies',
      image: blueSkies,
      description: 'Sky Blue top, long-sleeve.  Wide leg, high waisted pant',
      style: 'lyrical',
      left: 3

  },

  {
      id: 3,
      name: 'Saturn',
      image: saturn,
      description: 'Custom, Navy blue, 2 piece flowy top with high waisted bottom',
      style: 'lyrical',
      left: 3

  },

  {
      id: 4,
      name: 'Heist',
      image: heist,
      description: 'All black pant suit',
      style: 'lyrical',
      left: 3

  },

  {
      id: 5,
      name: 'Pathways',
      image: pathways,
      description: 'Brown Pant Suit',
      style: 'lyrical',
      left: 3

  },

  {
      id: 6,
      name: 'Finally Home',
      image: finallyhome,
      description: 'Flowy, light blue, long sleeved sheer dress with attached leo',
      style: 'lyrical',
      left: 3

  },

  {
      id: 7,
      name: 'Time for Tea',
      image: timeForTea,
      description: 'Custom, bright pink, green and orange, includes tophat hairpiece',
      style: 'jazz',
      left: 3

  },

  {
      id: 8,
      name: 'Holding Out for a Hero',
      image: holdingOutForAHero,
      description: 'Custom, superhero costumes, includes arm bands and hairpiece',
      style: 'jazz',
      left: 3

  },

  {
      id: 9,
      name: 'California Girls',
      image: californiaGirls,
      description: 'Custom, pink and purple gingham leotard, includes headband',
      style: 'jazz',
      left: 3

  },

  {
      id: 10,
      name: 'Jailhouse Rock',
      image: jailHouseRock,
      description: 'Custom, Red White and Black leotard, includes arm bands',
      style: 'jazz',
      left: 3

  },

  {
      id: 11,
      name: 'Cant Turn You Lose',
      image: cantTurnYouLose,
      description: 'Custom, neon green dress',
      style: 'jazz',
      left: 3

  },

  {
      id: 12,
      name: 'Wind Beneath My Wings',
      image: windBeneathMyWings,
      description: 'White two-piece with stoning, includes arm bands',
      style: 'lyrical',
      left: 3

  },

  {
      id: 13,
      name: 'You Raise Me Up',
      image: youRaiseMeUp,
      description: 'Dark purple, velvet two-piece. Long sleeve top and skirt, includes hairpiece',
      style: 'lyrical',
      left: 3

  },

  {
      id: 14,
      name: 'Bippity Boppity Boo',
      image: boppityBoo,
      description: 'Princess style two piece costume',
      style: 'tap',
      left: 3

  },

  {
      id: 15,
      name: 'Jump in the Line',
      image: jumptheLine,
      description: 'Bright, neon colors',
      style: 'tap',
      left: 3

  },

  {
      id: 16,
      name: 'See You Later Alligator',
      image: alligator,
      description: 'Khaki dress with alligator patch, includes matching hairbow and scarf',
      style: 'tap',
      left: 3

  },

  {
      id: 17,
      name: 'Space Jam',
      image: spaceJam,
      description: 'Space Jam Jersey and Shorts',
      style: 'hiphop',
      left: 3

  },

  {
      id: 18,
      name: 'AurorasFriends',
      image: aurora,
      description: 'Pink ballet costume',
      style: 'ballet',
      left: 3

  },

  {
      id: 19,
      name: 'Black and Yellow',
      image: blackYellow,
      description: 'Checkered pants, hip hop outfit',
      style: 'hiphop',
      left: 3

  },

  {
      id: 20,
      name: 'Easy Love',
      image: easyLove,
      description: 'Brown and Yellow tank, with white flare-leg denim pants',
      style: 'tap',
      left: 3

  },

  {
      id: 21,
      name: 'Hold Me While You Wait',
      image: holdMe,
      description: 'holdMe.JPG',
      style: 'lyrical',
      left: 3

  },

];




const found = COSTUMES.find(({ name }) => name === "Amazing Grace");
console.log(found);
