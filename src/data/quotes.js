 const breakQuotes = [
  "Taking a break can lead to breakthroughs.",
  "Disconnect to reconnect.",
  "Relax. Nothing is under control.",
  "If you’re tired, learn to rest not quit.",
  "You have enough. You do enough. You are enough. Relax",
  "Taking a break won’t be the death of your business.",
  "Live your life like a butterfly. Take a rest sometimes but never forget to fly.",
  "Taking a break can lead to breakthroughs.",
];
 const motivateQuotes = [
  "The future depends on what you do today.",
  "One day or day one. You decide.",
  "If opportunity doesn’t knock, build a door.",
  "Nothing will work unless you do.",
  "Don’t limit your challenges. Challenge your limits.",
  "What defines us is how well we rise after falling.",
  "choose to make the rest of your life, the best of your life.",
];
export const getRandomBreakQuote = () => breakQuotes[Math.floor(Math.random() * breakQuotes.length)];
export const getRandomMotivateQuote = () => motivateQuotes[Math.floor(Math.random() * motivateQuotes.length)];
