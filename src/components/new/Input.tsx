import { ChangeEventHandler } from "react";

type Props = {
  placeholder: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
};

export default function Input({ placeholder, value, onChange }: Props) {
  return (
    <input
      className="p-4 text-black text-sm rounded-xl"
      type="text"
      defaultValue={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
