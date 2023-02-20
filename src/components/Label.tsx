interface Porps {
  context: string;
}

const Label = ({ context }: Porps) => {
  return (
    <div className="font-semibold px-[40px] py-[3px] bg-[#e9ecee] rounded-[26px]">
      {context}
    </div>
  );
};
export default Label;
