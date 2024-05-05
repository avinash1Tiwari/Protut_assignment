import logo1 from "../assets/logo1.webp";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/fb1.png";
import insta from "../assets/insta.webp";
import tweet from "../assets/tweet.jpeg";

const Footer = () => {
  return (
    <div className="flex w-9/12 m-auto justify-around mt-10 align-baseline max-md:flex-col max-md:m-auto">
      <div className="text-white  flex flex-col gap-10 ">
        <div className="m-10 ">
          <div className="flex border-white border-2  rounded-xl px-10 gap-4 text-2xl justify-center max-md:flex-col max-md:pl-12">
            <div className="w-20 m-2 border-x-orange-300 border-4 rounded-full">
              <img src={logo1} alt="" className="rounded-full " />
            </div>
            <div className="mt-8 max-md:mt-0 ml-3">
              <h3 className="font-bold">Protut</h3>
            </div>
          </div>
          <div className="m-5">
            <p className="text-center font-semibold text-2xl">
              Start your description
            </p>
          </div>
          <div className="flex gap-5 mt-10 ml-3 ">
            <div className="w-10 max-md:w-10">
              <img src={linkedin} alt="" />
            </div>
            <div className="w-10">
              <img src={facebook} alt="" />
            </div>
            <div className="w-10">
              <img src={insta} alt="" />
            </div>
            <div className="w-10">
              <img src={tweet} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex  gap-6 text-white mt-10 text-center max-md:m-auto ">
        <div className="flex flex-col">
          <div>Company</div>
          <br />
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
        <div className="flex flex-col">
          <div>Resources</div>
          <br />
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
        <div className="flex flex-col max-sm:-mt-6">
          <div className="">Quick Links</div>
          <br />
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
        <div className="flex flex-col">
          <div>More</div>
          <br />
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
