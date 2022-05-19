interface BodyProps {
  head1?: string;
  p1?: string;
  head2?: string;
  p2?: string;
  p3?: string;
  p4?: string;
  p5?: string;
  p6?: string;
  p7?: string;
}
const homeProps: BodyProps = {
  head1: 'About Me',
  p1: "I'm a computer science student who is passionate about programming and technology.",
  head2: 'Education:',
  p2: 'BSc Computer Science (On Going)',
  p3: 'Modern university for technology & information',
};

const projectsProps: BodyProps = {
  head1: 'Small Projects:',
  p1: 'A Product Page',
  p2: 'A Job Form',
  p3: 'Simple implementation for custom rich presence on discord (using pypresence)',
  p4: 'Simple discord bot',
  p5: 'Simple Pokedex using PokeAPI',
};

const skillsProps: BodyProps = {
  head1: 'Skills:',
  p1: 'C++',
  p2: 'HTML',
  p3: 'CSS',
  p4: 'Python',
  p5: 'JavaScript',
  p6: 'Java',
  p7: 'C#',
};

export type { BodyProps };
export { homeProps, projectsProps, skillsProps };
