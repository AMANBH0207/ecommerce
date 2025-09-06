import ban1 from "../assets/images/ban1.png.png";
import ban2 from "../assets/images/ban2.png.png";
import ban3 from "../assets/images/ban3.png.png";

function SaleBanners() {
  return (
    <div className="flex flex-col gap-2 h-full w-full">
      <div className="flex-1">
        <img className="w-full h-full object-cover rounded-lg" src={ban1} />
      </div>
      <div className="flex-1">
        <img className="w-full h-full object-cover rounded-lg" src={ban2} />
      </div>
      <div className="flex-1">
        <img className="w-full h-full object-cover rounded-lg" src={ban3} />
      </div>
    </div>
  );
}

export default SaleBanners;
