import Input from "./Input";

const InputContainer = () => {
  return (
    <div className="flex gap-8">
      <Input maxLength={2} label="DAY" placeholder="DD" />
      <Input maxLength={2} label="MONTH" placeholder="MM" />
      <Input maxLength={4} label="YEAR" placeholder="YYYY" />
    </div>
  );
};

export default InputContainer;
