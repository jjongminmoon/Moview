type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className }: Props) {
  return <section className={`w-full px-40 md:px-20 sm:px-10 ${className}`}>{children}</section>;
}
