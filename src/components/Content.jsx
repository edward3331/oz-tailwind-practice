export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-[5px]">
      <img src={content.img} alt={content.title} 
      className="w-[300px] rounded-[10px] mb-[3px]"/>
      <span className="text-[12px #d7fa00] border-[1px solid #d7fa00]">모집중</span>
      <div className="text-[18px 600]">{content.title}</div>
      <p className="text-[12px rgb(160, 160, 160)]">{content.subtitle}</p>
    </div>
  );
}
