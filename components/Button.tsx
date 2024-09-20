import Link from "next/link";
export default function Button({
  btnText,
  className = ''
}: {
  btnText: string;
  className?: string;
}) {
  return (
    <div>
      <button
        className={`${className}`}
      >
        {btnText}
      </button>
    </div>
  );
}
