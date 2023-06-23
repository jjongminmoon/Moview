type Props = {
  children: React.ReactNode;
};

export default function InfoBanner({ children }: Props) {
  return (
    <span className="inline-block mt-8 px-4 py-2 mb-3 bg-red-600 rounded-full">{children}</span>
  );
}
