import Checkbox from "@/components/CheckBoxx";
import DropdownButton from "@/components/DropdownButton";
import InputField from "@/components/Input";
import PrimaryBtn from "@/components/PrimaryButton";
import Textarea from "@/components/TextAreaa";
import { LuUpload } from "react-icons/lu";
import NavBtn from "../Login/NavBtn";

const CommonFeatures = [
  {
    name: "professional equipmment",
    id: 1,
  },
  {
    name: "licensed & insured",
    id: 2,
  },
  {
    name: "same day service",
    id: 3,
  },
  {
    name: "free consultation",
    id: 4,
  },
  {
    name: "satisfaction guaranteed",
    id: 5,
  },
  {
    name: "eco-friendly products",
    id: 6,
  },
  {
    name: "mobile service",
    id: 7,
  },
  {
    name: "emergency service",
    id: 8,
  },
  {
    name: "custom solutions",
    id: 9,
  },
  {
    name: "follow-up included",
    id: 10,
  },
  {
    name: "flexible scheduling",
    id: 11,
  },
  {
    name: "online booking",
    id: 12,
  },
];
const NewService = () => {
  return (
    <section className="w-full bg-secondary200">
      <form action="" className="w-3/8 bg-white mx-auto p-4 rounded-xl">
        <h5 className="text-lg font-semibold">Add New Service</h5>
        <section className="flex flex-col gap-3 basic-info">
          <Heading text="basic information" />
          <InputField
            htmlFor="service-title"
            id="service-title"
            placeholder="e.g Professional House Cleaning"
            required
            text="Service Title"
            type="text"
          />
          <div className="grid grid-cols-2  gap-2 items-center">
            <DropdownButton
              htmlFor="Category"
              options={[
                "Consulting",
                "Design",
                "Development",
                "Repair",
                "Training",
                "Others",
              ]}
              text="Category"
            />
            <InputField
              htmlFor="service-title"
              id="service-title"
              placeholder="e.g Professional House Cleaning"
              required
              text="Service Title"
              type="text"
            />
          </div>
          <Textarea
            htmlFor="description"
            placeholder="Describe your service in details ... "
            text="Service Description"
          />
          <hr className="text-secondary500" />
        </section>

        <section className="pricing-duration">
          <div className="grid grid-cols-2  gap-2 items-center">
            <InputField
              htmlFor="price"
              id="price"
              placeholder="0"
              required
              text="Price ($)"
              type="number"
            />
            <DropdownButton
              htmlFor="duration"
              options={[
                "15 mins",
                "30 mins",
                "45 mins",
                "1 hour",
                "2 hours",
                "3 hours",
              ]}
              text="Duration (minutes)"
            />
          </div>
          <hr className="text-secondary400 mt-4" />
        </section>
        <section className="flex flex-col gap-3">
          <Heading text="availability" />
          <SubHeading title="Select the time periods when you're available to provide this service" />
          <div>
            <Checkbox
              htmlFor="morning"
              text="Morning (6AM - 12PM)"
              value="morning"
            />
            <Checkbox
              htmlFor="afternoon"
              text="Afternoon (12PM - 6PM)"
              value="morning"
            />
            <Checkbox
              htmlFor="evening"
              text="Evening(6AM - 12PM)"
              value="evening"
            />
          </div>
          <hr className="text-secondary500" />
        </section>
        <section className="flex flex-col gap-2">
          <Heading text="service features" />
          <SubHeading title="Highlight what makes your service special" />
          <Heading text="Common features" />
          <ul className="grid grid-cols-3 gap-1 place-content-center capitalize">
            {CommonFeatures?.map((feature) => (
              <li
                key={feature.id}
                className=" text-center text-xs p-2  whitespace-nowrap font-medium rounded-md border border-secondary300"
              >
                {feature.name}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-[1fr_auto] items-end gap-2">
            <InputField
              htmlFor="custom-feature"
              id="custom-feature"
              placeholder="Add a custom feature ..."
              required={false}
              text="Custom Features"
              type="text"
            />
            <span className="py-1 px-3 bg-secondary400 rounded-md text-xl block hover:cursor-pointer hover:bg-gray-300">
              +
            </span>
          </div>
          <hr className="text-secondary500 mt-2" />
        </section>
        <section className="py-4 flex flex-col gap-3">
          <Heading text="Service Images" />
          <SubHeading title="Add images to showcase your service (paste image URLs)" />
          <div className="grid grid-cols-[1fr_auto] items-end gap-2">
            <InputField
              htmlFor="image"
              id="image"
              placeholder="Paste image URL here..."
              required={true}
              text=""
              type="url"
            />
            <span className="py-1 px-3 bg-secondary400 rounded-md text-xl block hover:cursor-pointer hover:bg-gray-300">
              +
            </span>
          </div>
          <div className="paceholder flex flex-col gap-4 items-center border border-secondary400 rounded-xl p-10">
            <LuUpload className="text-4xl text-secondary300 font-extrabold" />
            <p className="text-secondary300 flex flex-col text-center">
              <span>
                No images added yet. Add at least one image to showcase your
                service.
              </span>
            </p>
          </div>
          <hr className="text-secondary500 mt-3" />
        </section>
        <footer className="grid grid-cols-2 gap-4 mt-6">
          <PrimaryBtn
            bgColor="bg-secondary50"
            hoverColor="bg-secondary300"
            href="/"
            text="Create Service"
            textColor="text-secondary800 "
          />
          <NavBtn
            href="/"
            outlineColor="outline-secondary300"
            text="Save as Draft"
          />
        </footer>
      </form>
    </section>
  );
};

export default NewService;

const Heading = ({ text }: { text: string }) => {
  return <p className=" text-secondary50 capitalize">{text}</p>;
};

function SubHeading({ title }: { title: string }) {
  return <p className="text-secondary300 text-sm">{title}</p>;
}
