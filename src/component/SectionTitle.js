const SectionTitle = ({title}) => {
  return (
    <div className="flex gap-10 items-center py-10">
      <h1 className=" text-4xl text-white font-semibold">{title}</h1>
      <div className="w-60 h-[1px] bg-btncol"></div>
    </div>
  );
};

export default SectionTitle;
