import hello from '../data/json/hello.json';

/**
 * Says Hello in a random language.
 */
export const randomHello = (): { language: string, hello: string } => {
  const randomInt = Math.floor(Math.random() * hello.length);
  return { language: hello[randomInt].language, hello: `${hello[randomInt].hello}!`};
};
