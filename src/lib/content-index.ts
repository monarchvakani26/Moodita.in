// Centralized static database for all Moodita portfolio, blog, recipes, travel diaries, writings, and products.

export interface Artwork {
  id: string;
  slug: string;
  title: string;
  medium: string;
  category: string;
  image: string;
  height: number;
  dimensions: string;
  year: number;
  description: string;
  story: string;
  available: boolean;
  price?: number;
  images: string[];
}

export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO String
  readingTime: number;
  coverImage: string;
  featured: boolean;
  content: string;
}

export interface WritingPiece {
  slug: string;
  title: string;
  type: string;
  typeLabel: string;
  excerpt: string;
  publishedAt: string; // ISO String
  readingTime: number;
  content: string;
}

export interface Recipe {
  slug: string;
  title: string;
  description: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: string;
  tags: string[];
  image: string;
  featured: boolean;
  story: string;
  ingredients: { amount: string; name: string; note?: string }[];
  steps: { step: number; instruction: string }[];
}

export interface TravelEntry {
  slug: string;
  title: string;
  location: string;
  country: string;
  description: string;
  image: string;
  visitedAt: string;
  featured: boolean;
  content: string;
  coverImage: string;
  images: string[];
}

export interface Product {
  slug: string;
  title: string;
  type: string;
  typeLabel: string;
  price: number;
  comparePrice?: number;
  images: string[];
  available: boolean;
  featured: boolean;
  description: string;
  story: string;
  variants?: { label: string; price: number }[];
}

export const ARTWORKS: Artwork[] = [
  {
    id: '1',
    slug: 'golden-hour',
    title: 'Golden Hour',
    medium: 'Watercolour on 300gsm cold press',
    category: 'Paintings',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
    height: 280,
    dimensions: '40 × 30 cm',
    year: 2025,
    description: 'Warm afternoon light filtered through café windows — the exact moment before evening turns everything amber.',
    story: 'I painted this during a particularly quiet week when I\'d been spending more time sitting in cafés than I probably should.',
    available: true,
    price: 18000,
    images: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=85', 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80'],
  },
  {
    id: '2',
    slug: 'quiet-forest',
    title: 'Quiet Forest',
    medium: 'Oil on Canvas',
    category: 'Paintings',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80',
    height: 380,
    dimensions: '50 × 60 cm',
    year: 2025,
    description: 'The forest as a place that holds its breath. Layers of emerald and shadow.',
    story: 'I kept returning to the idea of a forest that is waiting for something. This is what I imagined it would look like.',
    available: true,
    price: 28000,
    images: ['https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&q=85'],
  },
  {
    id: '3',
    slug: 'morning-bloom',
    title: 'Morning Bloom',
    medium: 'Acrylic on canvas board',
    category: 'Illustrations',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80',
    height: 320,
    dimensions: '30 × 30 cm',
    year: 2025,
    description: 'Flowers at dawn — that brief window when the light is entirely honest.',
    story: 'Painted in one sitting, early morning, before the day had opinions about it.',
    available: true,
    price: 9500,
    images: ['https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&q=85'],
  },
  {
    id: '4',
    slug: 'earth-sky',
    title: 'Earth & Sky',
    medium: 'Mixed Media',
    category: 'Paintings',
    image: 'https://images.unsplash.com/photo-1549887534-1541e9326688?w=600&q=80',
    height: 240,
    dimensions: '60 × 40 cm',
    year: 2024,
    description: 'The horizon as the only line that matters. Earth and sky, held in conversation.',
    story: 'A meditation on the boundary between what is solid and what is open.',
    available: false,
    images: ['https://images.unsplash.com/photo-1549887534-1541e9326688?w=1200&q=85'],
  },
  {
    id: '5',
    slug: 'still-life-3',
    title: 'Still Life No. 3',
    medium: 'Watercolour on cotton rag',
    category: 'Illustrations',
    image: 'https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?w=600&q=80',
    height: 300,
    dimensions: '28 × 35 cm',
    year: 2025,
    description: 'Objects on a table. The light doing what it always does — making ordinary things strange.',
    story: 'The third in a series of still lifes. I never planned a series; it just kept wanting to continue.',
    available: true,
    price: 12000,
    images: ['https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?w=1200&q=85'],
  },
  {
    id: '6',
    slug: 'terracotta-dreams',
    title: 'Terracotta Dreams',
    medium: 'Oil on Canvas',
    category: 'Paintings',
    image: 'https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=600&q=80',
    height: 260,
    dimensions: '45 × 55 cm',
    year: 2025,
    description: 'The warm palette of rooftops and clay pots — an imagined Mediterranean afternoon.',
    story: 'I\'ve never been to the place I painted here. I\'m not sure it exists. That felt like the point.',
    available: true,
    price: 22000,
    images: ['https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=1200&q=85'],
  },
  {
    id: '7',
    slug: 'city-light',
    title: 'City Light',
    medium: 'Photography',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80',
    height: 340,
    dimensions: 'Digital, limited print run of 10',
    year: 2025,
    description: 'Cities at night are a different city entirely. This is the one I prefer.',
    story: 'Taken from a train window somewhere between two places I can\'t recall.',
    available: true,
    price: 4500,
    images: ['https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=85'],
  },
  {
    id: '8',
    slug: 'wild-herbs',
    title: 'Wild Herbs',
    medium: 'Photography',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=80',
    height: 220,
    dimensions: 'Digital, limited print run of 10',
    year: 2025,
    description: 'Herbs on a wooden board, afternoon light, the smell of a kitchen that knows what it is doing.',
    story: 'Shot before cooking. The subject was eaten shortly after. Felt right.',
    available: true,
    price: 3500,
    images: ['https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&q=85'],
  },
  {
    id: '9',
    slug: 'river-bend',
    title: 'River Bend',
    medium: 'Sketch',
    category: 'Sketches',
    image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?w=600&q=80',
    height: 360,
    dimensions: '21 × 29.7 cm',
    year: 2024,
    description: 'A river curves and you can\'t see what comes after. This felt important to draw.',
    story: 'Sketched on a hillside. The actual river did not cooperate with my framing.',
    available: true,
    price: 4200,
    images: ['https://images.unsplash.com/photo-1604871000636-074fa5117945?w=1200&q=85'],
  },
  {
    id: '10',
    slug: 'petal-study',
    title: 'Petal Study',
    medium: 'Watercolour',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1490750967868-88df5691cc64?w=600&q=80',
    height: 290,
    dimensions: '18 × 24 cm',
    year: 2025,
    description: 'One flower. Studied until something true about it appeared.',
    story: 'I drew the same petal seventeen times. This is the seventeenth.',
    available: true,
    price: 7800,
    images: ['https://images.unsplash.com/photo-1490750967868-88df5691cc64?w=1200&q=85'],
  },
  {
    id: '11',
    slug: 'shadow-play',
    title: 'Shadow Play',
    medium: 'Photography',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1504713088706-b9e2d6f55a1b?w=600&q=80',
    height: 320,
    dimensions: 'Digital, limited print run of 8',
    year: 2025,
    description: 'What shadows do when no one is watching them.',
    story: 'Found the light at 2pm. Waited for it to do what I needed.',
    available: false,
    images: ['https://images.unsplash.com/photo-1504713088706-b9e2d6f55a1b?w=1200&q=85'],
  },
  {
    id: '12',
    slug: 'copper-morning',
    title: 'Copper Morning',
    medium: 'Acrylic',
    category: 'Paintings',
    image: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=600&q=80',
    height: 240,
    dimensions: '30 × 40 cm',
    year: 2025,
    description: 'The colour of early winter mornings — that specific copper-orange before the sun decides what it is.',
    story: 'Started at 6am. Finished by the time the world had opinions again.',
    available: true,
    price: 11500,
    images: ['https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=1200&q=85'],
  },
];

export const POSTS: JournalPost[] = [
  {
    slug: 'kindness-as-a-legal-principle',
    title: 'On Kindness as a Legal Principle',
    excerpt: 'What happens when you bring compassion into a courtroom that runs on precedent and argument? I\'ve been thinking about this for years.',
    category: 'Legal',
    date: '2026-06-10T00:00:00.000Z',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    featured: true,
    content: `There is a belief, common among those who have never sat inside a courtroom, that law and kindness are mutually exclusive. That justice is cold, procedural, and interested only in what can be proven. I used to be afraid this was true.

It took me several years of practice, and one particularly difficult case involving a seventeen-year-old boy who reminded me uncomfortably of a cousin I love, to understand that compassion is not the enemy of rigor. It is, if anything, the *point* of it.

## What the law actually asks

The law asks us to be precise. To verify. To apply standards fairly across cases regardless of our feelings about the person in front of us. These are not unkind demands. They are, in fact, the infrastructure of a system designed to prevent feelings from destroying lives without accountability.

But precision without empathy is bureaucracy. And bureaucracy, as we know, can cause enormous harm while being technically correct at every step.

## The courtroom as a room of people

What changed my thinking was something my first mentor said on my second week of practice. We were preparing a bail hearing. I had drafted arguments. She read them, put them down, and said: "These are good arguments. But have you asked *why* he needs to go home?"

I had not. I had asked what the law required. I had not asked what the person required.

## Kindness as rigour

The most effective advocates I have observed are not the most aggressive. They are the most present. They listen not just for what is legally relevant but for what is actually true.

*This is the first in a series of essays on law, ethics, and the practice of being human inside professional structures.*`,
  },
  {
    slug: 'why-i-paint',
    title: 'Why I Paint When Words Fail Me',
    excerpt: 'There are feelings that live below language. Painting is my way of giving them a body, a colour, a shape.',
    category: 'Art',
    date: '2026-05-22T00:00:00.000Z',
    readingTime: 4,
    coverImage: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80',
    featured: false,
    content: `There are feelings that live below language. Not because they're too complex for words, but because they exist in a register that words simply don't reach.

I discovered painting accidentally, the way you discover most things that matter — through a bad week and a friend's spare room that happened to have art supplies.

## What painting does that writing cannot

Writing is sequential. You move through an argument or a story in time. Painting is simultaneous. Everything is present at once. The colour in the corner speaks to the line in the middle. There's a kind of thinking it demands that I find nowhere else.

## On being bad at things you love

I am not a trained painter. I did not study it. I make technical mistakes constantly. And this, I have come to understand, is precisely why it works for me as a practice.

When I paint, I am not performing competence. I am just doing.

*— Niomi Gada, May 2026*`,
  },
  {
    slug: 'letter-to-the-girl-who-doubted',
    title: 'A Letter to the Girl Who Doubted',
    excerpt: 'She was seventeen, terrified of taking up space. I want to tell her something now.',
    category: 'Personal',
    date: '2026-04-14T00:00:00.000Z',
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
    featured: false,
    content: `Dear girl who doubted,

You were seventeen and you spent a lot of time making yourself smaller. You thought that was politeness. It wasn't. It was fear dressed up as consideration, and I understand, but I want to tell you something now.

The space you were afraid to take up? It was always yours.

## What I know now

I know that speaking loudly is not the same as speaking well. I know that certainty is often the costume of people who have never had to question themselves. And I know that doubt — real, considered doubt — is the beginning of every honest thought I've ever had.

## What I wish I could give you

I wish I could give you permission earlier. Permission to be imperfect and present simultaneously. Permission to disagree, to be wrong in public, to take your time, to not have finished becoming.

You'll get there. You already are.

*With love and the benefit of years,*
*Niomi Gada*`,
  },
  {
    slug: 'cooking-as-love-language',
    title: 'Cooking as a Love Language',
    excerpt: 'I don\'t cook for Instagram. I cook because food is the most honest way I know to say "I see you."',
    category: 'Food',
    date: '2026-03-05T00:00:00.000Z',
    readingTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    featured: false,
    content: `I don't cook for Instagram. I cook because food is the most honest way I know to say "I see you."

This is not a recipe post. Or — it's not only a recipe post. It's an attempt to articulate something I've been carrying for a long time: that cooking for someone is one of the most direct expressions of care that I know how to make.

## On attention

To cook well for someone, you have to know them. Not their Instagram, their dietary restrictions. You have to know what they need when they are tired. What flavours make them feel held.

This kind of knowing requires attention. And attention, I think, is the foundation of love — any kind of love.

## The kitchen as studio

I treat my kitchen like a studio. The same way I approach a painting — with intention, with the willingness to fail, with a commitment to the material in front of me.

The result is sometimes beautiful. Sometimes it's dinner. Both are fine.`,
  },
  {
    slug: 'slow-travel-morocco',
    title: 'Slow Travel: What Morocco Taught Me',
    excerpt: 'I planned a week and stayed three. The medina had no interest in my schedule.',
    category: 'Travel',
    date: '2026-02-18T00:00:00.000Z',
    readingTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1539020140153-e479b8f22986?w=800&q=80',
    featured: false,
    content: `I arrived expecting chaos and found, instead, a city with an extremely deliberate pace. The chaos was real — the souks, the motorbikes, the calls to prayer layering over each other at dusk — but underneath it was something calm.

I had a list. I abandoned it by day two.

## The medina's curriculum

The medina teaches you several things. First: your map is wrong. Second: being lost is not the same as being in danger. Third: the best things are behind unmarked doors.

## What slow travel actually is

Slow travel is not traveling slowly. It's the decision to be in a place rather than moving through it. To learn one neighbourhood rather than photograph twenty.

I spent four days in the same souk. I know the name of the man who sells leather bags. He knows I prefer tea to coffee. This is what I came away with.

Not photographs. A neighbourhood.`,
  },
];

export const WRITINGS: WritingPiece[] = [
  {
    slug: 'on-being-alone',
    title: 'On Being Alone (Without Being Lonely)',
    type: 'ESSAY',
    typeLabel: 'Essay',
    excerpt: 'Solitude is not the same as loneliness. One is a room you chose; the other is a room that chose you.',
    publishedAt: '2026-05-10T00:00:00.000Z',
    readingTime: 7,
    content: `Solitude is not the same as loneliness. One is a room you chose; the other is a room that chose you.

I learned this slowly, the way you learn most important things — through repetition of experience, through the gradual accumulation of evidence that your initial theory was wrong.

My initial theory was that being alone meant failing at something. Failing at relationships, at sociability, at the basic human task of being in meaningful proximity to other people. I grew up in a family where rooms were always full and silence was a condition to be remedied. To be by yourself was to be waiting for someone to arrive.

It took me years of deliberate practice to understand that some of the most complete moments of my life have been spent alone. Not waiting. Not in transition. Fully present, and fully by myself.

## What solitude actually is

I am better company to others because I have learned to be better company to myself. This is not a cliché. It is something I have tested and found to be true.

*This essay is part of an ongoing series on the quiet things worth examining.*`,
  },
  {
    slug: 'the-color-of-tuesday',
    title: 'The Colour of Tuesday',
    type: 'POEM',
    typeLabel: 'Poem',
    excerpt: 'Tuesday smells like coffee left cooling / on a desk by someone / who had to rush away.',
    publishedAt: '2026-04-28T00:00:00.000Z',
    readingTime: 2,
    content: `Tuesday smells like coffee left cooling
on a desk by someone
who had to rush away.

It has the texture of half-read emails
and the weight of good intentions
not yet acted on.

Tuesday is the day we believe
we will catch up.
We will not catch up.
But Tuesday lets us believe it.

That is Tuesday's gift.
Not certainty.
Not Monday's brave beginning
or Friday's relief.
Just the generous, unhurried belief
that there is still time.

I have always loved Tuesday.
It is the day that forgives you
for yesterday
without asking you to explain.`,
  },
  {
    slug: 'dear-past-self',
    title: 'Dear Past Self',
    type: 'LETTER',
    typeLabel: 'Letter',
    excerpt: 'I want to tell you that the thing you\'re most afraid of right now — it passes. And it leaves something behind that you\'ll actually keep.',
    publishedAt: '2026-04-01T00:00:00.000Z',
    readingTime: 4,
    content: `Dear past self,

The thing you're most afraid of right now — it passes. And it leaves something behind that you'll actually keep.

I know you don't believe that yet. Fear has a way of filling all the available space, making itself feel permanent, making itself feel like identity. It isn't. You aren't your fear. You're the person who gets up on the other side of it.

What I want you to do less of: apologising for existing. Taking up half the space you're entitled to. Deciding in advance that the answer is no.

What I want you to do more of: asking. Waiting. Trusting your own reading of a room, of a person, of a situation. You're right more often than you let yourself believe.

The doubt is not the problem. The doubt is useful. The problem is when you mistake the doubt for a verdict.

You will make it through what's coming. You'll be tired. You'll be different. You'll be glad.

*With love,*
*Niomi Gada*`,
  },
  {
    slug: 'what-kindness-costs',
    title: 'What Kindness Actually Costs',
    type: 'THOUGHT',
    typeLabel: 'Thought',
    excerpt: 'Everyone says "be kind" like it\'s free. It isn\'t. It costs attention, time, and often, the decision not to be right.',
    publishedAt: '2026-03-15T00:00:00.000Z',
    readingTime: 3,
    content: `Everyone says "be kind" like it's free. It isn't.

Kindness costs attention — which is one of the rarest things any of us have to spend. It costs the time to actually listen instead of waiting to speak. It costs the decision to say something true when something flattering would have been easier.

Most of all, kindness costs the willingness to be wrong. To say: I was unkind before, I didn't realise it, I want to do better.

This is expensive. Point blank. People don't talk about this because we want kindness to be simple — a choice you make once, a character trait you either have or don't. But it isn't. It's a practice. And like all practices, it requires something from you every single time.

The reason I keep paying is that the returns are better than anything else I've tried.

*Some thoughts are too small for essays and too important to leave unwritten.*`,
  },
  {
    slug: 'city-lights-at-3am',
    title: 'City Lights at 3am',
    type: 'POEM',
    typeLabel: 'Poem',
    excerpt: 'A window is both a frame / and a door / you haven\'t opened yet.',
    publishedAt: '2026-02-20T00:00:00.000Z',
    readingTime: 2,
    content: `A window is both a frame
and a door
you haven't opened yet.

At 3am the city
doesn't ask anything of you.
It just continues —
the yellow lights, the occasional car,
the person walking a dog
who is the only one
with anywhere to be.

I used to think insomnia was a failure.
Now I think it's the city
offering you the version of itself
it only shows to the ones
still awake enough to look.

I look.
I try to deserve it.`,
  },
];

export const RECIPES: Recipe[] = [
  {
    slug: 'saffron-rice-stew',
    title: 'Saffron & Lemon Rice Stew',
    description: 'A warming stew that tastes like something your grandmother made but never wrote down.',
    prepTime: 15,
    cookTime: 40,
    servings: 4,
    difficulty: 'Easy',
    tags: ['Vegetarian', 'Comfort Food'],
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80',
    featured: true,
    story: 'My mother would make something close to this on cold evenings. I\'ve never been able to recreate it exactly — but this version has become its own thing, which I think she would approve of.',
    ingredients: [
      { amount: '1 cup', name: 'basmati rice', note: 'rinsed until water runs clear' },
      { amount: 'large pinch', name: 'saffron', note: 'bloomed in 2 tbsp warm water' },
      { amount: '1', name: 'lemon, zested and juiced' },
      { amount: '1 can', name: 'chickpeas', note: 'drained and rinsed' },
      { amount: '4 cups', name: 'vegetable stock' },
      { amount: '1', name: 'onion, finely diced' },
      { amount: '3 cloves', name: 'garlic, minced' },
      { amount: '1 tsp', name: 'turmeric' },
      { amount: '½ tsp', name: 'cumin seeds' },
      { amount: 'to taste', name: 'salt and white pepper' },
      { amount: '2 tbsp', name: 'good olive oil' },
      { amount: 'handful', name: 'fresh parsley, roughly chopped' },
    ],
    steps: [
      { step: 1, instruction: 'Bloom the saffron in warm water. Set aside. This is non-negotiable — don\'t skip it.' },
      { step: 2, instruction: 'Heat olive oil in a heavy pot over medium heat. Add cumin seeds and let them sizzle for 30 seconds.' },
      { step: 3, instruction: 'Add the diced onion. Cook gently for 8-10 minutes until soft and translucent — don\'t rush this.' },
      { step: 4, instruction: 'Add garlic and turmeric. Stir for 1 minute until fragrant.' },
      { step: 5, instruction: 'Add the rinsed rice and stir to coat in the oil and spices.' },
      { step: 6, instruction: 'Pour in the stock, saffron water, and chickpeas. Bring to a gentle boil.' },
    ],
  },
  {
    slug: 'rose-cardamom-kheer',
    title: 'Rose & Cardamom Kheer',
    description: 'A traditional rice pudding elevated with rose water and fresh cardamom. Perfect for quiet evenings.',
    prepTime: 10,
    cookTime: 35,
    servings: 4,
    difficulty: 'Easy',
    tags: ['Dessert', 'Indian'],
    image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=800&q=80',
    featured: false,
    story: 'My grandmother made kheer without a recipe. I have tried to make her version thirty times. This is not her version, but it is mine, and it is good.',
    ingredients: [
      { amount: '½ cup', name: 'basmati rice', note: 'rinsed' },
      { amount: '1 litre', name: 'full-fat milk' },
      { amount: '4 tbsp', name: 'sugar', note: 'adjust to taste' },
      { amount: '6', name: 'cardamom pods', note: 'lightly crushed' },
      { amount: '1 tbsp', name: 'rose water', note: 'good quality' },
      { amount: 'handful', name: 'pistachios', note: 'roughly chopped' },
      { amount: 'pinch', name: 'saffron', note: 'optional' },
      { amount: '1 tbsp', name: 'dried rose petals', note: 'to garnish' },
    ],
    steps: [
      { step: 1, instruction: 'Bring milk to a gentle boil in a heavy-bottomed pan. Add the rinsed rice and crushed cardamom pods.' },
      { step: 2, instruction: 'Reduce heat to low. Cook gently, stirring often, for 25-30 minutes until the rice is soft and the milk has thickened.' },
      { step: 3, instruction: 'Add sugar and stir until dissolved. Add saffron if using.' },
      { step: 4, instruction: 'Remove from heat. Stir in the rose water.' },
      { step: 5, instruction: 'Serve warm or chilled, scattered with pistachios and rose petals.' },
    ],
  },
  {
    slug: 'herb-chutney-flatbread',
    title: 'Wild Herb Chutney Flatbread',
    description: 'Made on a rainy morning with whatever herbs were left from the week. It became a regular.',
    prepTime: 20,
    cookTime: 15,
    difficulty: 'Medium',
    servings: 4,
    tags: ['Bread', 'Vegetarian'],
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80',
    featured: false,
    story: 'I didn\'t set out to make this. I set out to use up the coriander before it went bad. Sometimes the best things are made under mild pressure.',
    ingredients: [
      { amount: '2 cups', name: 'plain flour' },
      { amount: '¾ cup', name: 'warm water', note: 'plus more if needed' },
      { amount: '1 tsp', name: 'salt' },
      { amount: '1 tsp', name: 'baking powder' },
      { amount: '2 tbsp', name: 'olive oil' },
      { amount: 'large bunch', name: 'fresh coriander' },
      { amount: 'small bunch', name: 'mint' },
      { amount: '1', name: 'green chilli' },
      { amount: '1', name: 'lemon, juiced' },
      { amount: '1 clove', name: 'garlic' },
      { amount: '2 tbsp', name: 'yoghurt' },
    ],
    steps: [
      { step: 1, instruction: 'Mix flour, salt, baking powder, and olive oil. Add warm water gradually until a soft dough forms. Rest for 15 minutes.' },
      { step: 2, instruction: 'Make the chutney: blend coriander, mint, chilli, garlic, lemon juice, and yoghurt until smooth. Season.' },
      { step: 3, instruction: 'Divide dough into 4 balls. Roll each into a thin oval.' },
      { step: 4, instruction: 'Cook in a dry hot pan for 2-3 minutes each side until charred in spots.' },
      { step: 5, instruction: 'Serve immediately with the green chutney.' },
    ],
  },
  {
    slug: 'mango-coconut-tart',
    title: 'Mango & Coconut Tart',
    description: 'Inspired by a market in Goa. Simple, bright, and tastes like summer regardless of the season.',
    prepTime: 25,
    cookTime: 45,
    difficulty: 'Medium',
    servings: 8,
    tags: ['Dessert', 'Summer'],
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80',
    featured: false,
    story: 'I bought a mango from a market stall and ate half of it standing there. This tart is the other half, made more complicated than necessary because I was in a good mood.',
    ingredients: [
      { amount: '200g', name: 'digestive biscuits', note: 'crushed' },
      { amount: '80g', name: 'butter', note: 'melted' },
      { amount: '400ml', name: 'coconut cream' },
      { amount: '3 tbsp', name: 'icing sugar' },
      { amount: '2 tsp', name: 'agar agar' },
      { amount: '2', name: 'ripe mangoes', note: 'peeled and sliced' },
      { amount: '1 tbsp', name: 'lime juice' },
      { amount: 'pinch', name: 'cardamom powder' },
    ],
    steps: [
      { step: 1, instruction: 'Mix crushed biscuits with melted butter. Press firmly into a tart tin and refrigerate for 20 minutes.' },
      { step: 2, instruction: 'Heat coconut cream with agar agar and icing sugar over medium heat, stirring constantly for 3-4 minutes.' },
      { step: 3, instruction: 'Pour the coconut layer over the chilled base. Refrigerate for at least 2 hours until set.' },
      { step: 4, instruction: 'Toss mango slices with lime juice and cardamom.' },
      { step: 5, instruction: 'Arrange mango artfully over the set tart. Serve chilled.' },
    ],
  },
];

export const TRAVEL_ENTRIES: TravelEntry[] = [
  {
    slug: 'marrakech-seven-days',
    title: 'Seven Days in Marrakech',
    location: 'Marrakech',
    country: 'Morocco',
    description: 'I planned a week and stayed three. The medina had no interest in my schedule, and I learned to have no interest in mine.',
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8f22986?w=800&q=80',
    visitedAt: '2025 / Autumn',
    featured: true,
    content: `I arrived expecting chaos and found, instead, a city with an extremely deliberate pace. The chaos was real — the souks, the motorbikes, the calls to prayer layering over each other at dusk — but underneath it was something calm.

I had a list. I abandoned it by day two.

The thing about Marrakech is that it rewards aimlessness. The more you try to navigate it with intention, the more it resists. But if you walk without destination, it reveals itself. A courtyard behind an unmarked door. A woman selling one perfect type of orange in one perfect basket. A rooftop with mint tea and a view that makes you understand why people stay.

I stayed.

Not forever — only three weeks total, not one as planned. But long enough to stop taking photographs and start just looking. Long enough to feel, briefly, like I belonged to the specific corner of a specific souk at a specific time of day.`,
    coverImage: 'https://images.unsplash.com/photo-1539020140153-e479b8f22986?w=1600&q=85',
    images: ['https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&q=80', 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80'],
  },
  {
    slug: 'kyoto-in-april',
    title: 'Kyoto in April',
    location: 'Kyoto',
    country: 'Japan',
    description: 'Cherry blossoms and quiet temples. Found a small café that served one thing only — and it was perfect.',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
    visitedAt: '2025 / Spring',
    featured: false,
    content: `Japan in April is the cliché for a reason. The blossoms are as extraordinary as everyone says. What no one tells you is how quickly they fall — and how the falling is its own kind of beauty.

I spent most of my time in Kyoto not in the famous temples, but in the streets between them. Nishiki Market at 7am. A small soba restaurant where the owner spoke no English and I spoke no Japanese and we spent a very pleasant fifteen minutes pointing at things and nodding.

The café I found on day three served one thing: a cold brew coffee made with water from a specific mountain spring and a single cube of hand-carved ice. I went back every day.

Kyoto teaches you slowness. Not the performative slowness of someone on holiday, but real slowness — the kind where you notice that a particular light hits a particular garden wall at 4pm and it's the most beautiful thing you've seen this year.`,
    coverImage: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1600&q=85',
    images: ['https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80'],
  },
  {
    slug: 'goa-monsoon',
    title: 'Goa in the Monsoon',
    location: 'Goa',
    country: 'India',
    description: 'Everyone warned me. Nobody warned me how beautiful it would be. The rain made the green unreal.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
    visitedAt: '2025 / July',
    featured: false,
    content: `Everyone said don't go to Goa in the monsoon. The beaches are closed. The water is rough. The restaurants shut early. The town empties.

All of this is true. None of it matters.

Goa in the monsoon is Goa stripped of its performance. Without the tourists and the parties and the beach chairs for rent, what's left is the actual place — the particular green that only happens after rain, the sound of water on palm leaves, the way the whole coast smells like wet earth and salt and something alive.

I rented a small house in a village I can't spell and spent two weeks cooking things that required many trips to the market. I read four books. I painted every morning. I talked to my landlady, who had opinions about everything and was right about most of it.

This is what I want from travel now: not the place's best self, but its honest self.`,
    coverImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1600&q=85',
    images: ['https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80'],
  },
  {
    slug: 'lisbon-tram-28',
    title: 'Lisbon & Tram 28',
    location: 'Lisbon',
    country: 'Portugal',
    description: 'Rode Tram 28 three times just to feel it again. The city tasted like custard tarts and nostalgia.',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80',
    visitedAt: '2024 / May',
    featured: false,
    content: `Lisbon is a city of hills and yellow trams and the specific sadness of fado playing through an open window at dusk. It is also a city of pastel de nata — the custard tart that ruins all other pastries for you permanently.

I took Tram 28 three times. Not because I had places to go, but because the ride itself — through the narrow streets of Alfama, past laundry strung between buildings, up hills the car should not physically be able to climb — felt like something worth repeating.

The Portuguese concept of saudade — a longing for something you may never have had — is supposed to explain the national character. What it explains, actually, is the quality of their music, the quality of their food, and the reason you feel homesick for Lisbon before you've even left.

I left. I am still homesick.`,
    coverImage: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1600&q=85',
    images: ['https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80'],
  },
];

export const PRODUCTS: Product[] = [
  {
    slug: 'golden-hour-original',
    title: 'Golden Hour — Original',
    type: 'ORIGINAL_PAINTING',
    typeLabel: 'Original',
    price: 18000,
    images: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80'],
    available: true,
    featured: true,
    description: 'Original watercolour on 300gsm cold press. Warm afternoon light filtered through café windows. Unframed, hand-signed, with certificate of authenticity.',
    story: 'I painted this during a particularly quiet week in October. That specific 4pm light — it felt worth trying to catch. I\'m not sure I managed it. But I tried.',
  },
  {
    slug: 'quiet-forest-print',
    title: 'Quiet Forest — A3 Print',
    type: 'PRINT',
    typeLabel: 'Print',
    price: 1200,
    comparePrice: 1500,
    images: ['https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80'],
    available: true,
    featured: false,
    description: 'Giclee fine art print on 230gsm matte art paper. Reproduced with exceptional colour accuracy from the original oil painting.',
    story: 'The forest has always felt like a place that holds its breath. This painting is about that feeling.',
    variants: [
      { label: 'A4 (21×29.7cm)', price: 1200 },
      { label: 'A3 (29.7×42cm)', price: 1800 },
      { label: 'A2 (42×59.4cm)', price: 2800 },
    ],
  },
  {
    slug: 'morning-bloom-card',
    title: 'Morning Bloom Art Card',
    type: 'ART_CARD',
    typeLabel: 'Art Card',
    price: 299,
    images: ['https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80'],
    available: true,
    featured: false,
    description: 'Premium art card on 350gsm silk coated board. 14.8 × 10.5 cm. Blank inside, with a note from Niomi Gada printed on the reverse.',
    story: 'The best messages come handwritten. This card is for someone who deserves a handwritten message.',
  },
  {
    slug: 'recipe-ebook-vol1',
    title: 'Recipe Ebook Vol. 1 — PDF',
    type: 'RECIPE_EBOOK',
    typeLabel: 'Digital',
    price: 499,
    images: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80'],
    available: true,
    featured: false,
    description: 'A beautifully designed PDF ebook with 20 of Niomi Gada\'s most-loved recipes. Immediate digital download after purchase.',
    story: 'I cook for the feeling of it. These recipes are the ones I return to — not because they\'re impressive, but because they\'re honest.',
  },
  {
    slug: 'earth-sky-sketch',
    title: 'Earth & Sky — Sketch',
    type: 'SKETCH',
    typeLabel: 'Sketch',
    price: 3500,
    images: ['https://images.unsplash.com/photo-1549887534-1541e9326688?w=600&q=80'],
    available: true,
    featured: false,
    description: 'Original graphite sketch on 200gsm cartridge paper. A4. Signed, unframed.',
    story: 'A meditation on the only line that truly matters — the one between earth and sky.',
  },
  {
    slug: 'moodita-tote-bag',
    title: 'Moodita Canvas Tote',
    type: 'MERCHANDISE',
    typeLabel: 'Merch',
    price: 799,
    images: ['https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80'],
    available: true,
    featured: false,
    description: 'Natural cotton canvas tote bag with the Moodita spiral sun logo screen printed in terracotta. 38 × 42 cm.',
    story: 'A bag that carries things, and carries a little kindness into the world.',
  },
  {
    slug: 'terracotta-dreams-print',
    title: 'Terracotta Dreams — A2 Print',
    type: 'PRINT',
    typeLabel: 'Print',
    price: 1800,
    images: ['https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=600&q=80'],
    available: false,
    featured: false,
    description: 'A2 giclee print on 230gsm matte art paper. A sold-out edition — join the waitlist for the next run.',
    story: 'I\'ve never been to the place I painted here. I\'m not sure it exists. That felt like the point.',
  },
  {
    slug: 'kindness-bookmark-set',
    title: 'Kindness Bookmark Set (3pc)',
    type: 'BOOKMARK',
    typeLabel: 'Bookmark',
    price: 399,
    images: ['https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80'],
    available: true,
    featured: false,
    description: 'Set of 3 double-sided bookmarks printed on 350gsm silk board. Each features a different quote from Niomi Gada\'s writing.',
    story: 'For the readers. For the ones who underline sentences. For the ones who need a reminder that kindness is not weakness.',
  },
];
