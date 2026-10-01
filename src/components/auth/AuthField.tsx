type AuthFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
};

export default function AuthField({
  label,
  name,
  placeholder,
  type = "text",
  autoComplete,
}: AuthFieldProps) {
  return (
    <label className="flex w-full flex-col gap-2">
      <span className="font-body text-sm font-medium leading-[1.2] text-shuttle-950">
        {label}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        className="h-[52px] w-full rounded-xl border border-shuttle-100 bg-white px-6 py-3 font-body text-lg leading-[1.6] text-shuttle-950 outline-none transition placeholder:text-shuttle-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}
