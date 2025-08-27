import { PropsWithChildren } from 'react';

interface AnimatedSectionProps {
  animation?: string;
  delay?: number;
}

export default function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0
}: PropsWithChildren<AnimatedSectionProps>) {
  return (
    <div data-aos={animation} data-aos-delay={delay}>
      {children}
    </div>
  );
}
