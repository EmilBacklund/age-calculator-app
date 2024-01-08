type InputProps = {
  label: string;
  placeholder: string;
  maxLength: number;
};

const Input = ({ label, placeholder, maxLength }: InputProps) => {
  return (
    <div className="flex flex-col ">
      <label
        className="tracking-[3.5px] text-grey font-bold text-sm leading-[21px] mb-2"
        htmlFor=""
      >
        {label}
      </label>
      <input
        className="ring-1 ring-line rounded-lg text-[32px] py-3 pl-6 placeholder-black/50 font-bold w-[160px] tracking-[0.32px]"
        type="text"
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  );
};

export default Input;
