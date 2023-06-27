import CloseIcon from "../icons/CloseIcon";

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};

export default function SelectImageModal({ onClose, children }: Props) {
  return (
    <section
      className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full z-50 bg-red-600/70"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <button className="fixed top-0 p-8 text-black" onClick={() => onClose()}>
        <CloseIcon />
      </button>
      <div className="bg-black w-3/5 h-4/5 max-w-7xl z-100 p-5 rounded-xl">{children}</div>
    </section>
  );
}
