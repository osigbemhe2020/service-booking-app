"use client";
import { useMemo } from "react";
import {createPortal} from 'react-dom';
import DropdownButton from "@/components/DropdownButton";
import PrimaryBtn from "@/components/PrimaryButton";
import CommonFeatures from '@/lib/CommonFeatures'
import {Heading,SubHeading,Textarea,InputField,Checkbox} from './popupComponents'
import { LuUpload } from "react-icons/lu";
import type { SessionService } from "@/lib/sessionServices";
import NavBtn from "./NavBtn";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onCreate?: (service: SessionService) => void;
  value: {
    title: string;
    location: string;
    category: SessionService["category"];
    description: string;
    price: string;
    duration: SessionService["duration"];
    availability: string;
    features: string;
    images: string;
  };
  onChange: (next: Props["value"]) => void;
};



const BookServicePopup = ({isOpen,onClose,onCreate,value,onChange}:Props) => {
  const formData = useMemo(() => value, [value]);
  if (!isOpen) return null;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSaveDraft = () => {
    onClose();
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.category || !formData.duration || !formData.price) return;
    const cost = Number(formData.price);
    if (Number.isNaN(cost)) return;
    onCreate?.({
      title: formData.title,
      category: formData.category,
      cost,
      duration: formData.duration,
    });
    onClose();
  };

    return createPortal(
     <div className="fixed inset-0 bg-[#0000003b] flex items-center justify-center z-50 ">
      <form onSubmit={handleSubmit} className="w-3/8 bg-white mx-auto p-4 max-h-[90vh] rounded-xl overflow-y-scroll">
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
            name="title"
            value={formData.title}
            onChange={handleChange}
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
              value={formData.category}
              onChange={(val) => onChange({ ...formData, category: val as SessionService["category"] })}
            />
            <InputField
              htmlFor="service-location"
              id="service-location"
              placeholder="e.g DownTown Area your location"
              required
              text="Service Location"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <Textarea
            htmlFor="description"
            placeholder="Describe your service in details ... "
            text="Service Description"
            name="description"
            value={formData.description}
            onChange={handleTextAreaChange}
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
              name="price"
              value={formData.price}
              onChange={handleChange}
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
              value={formData.duration}
              onChange={(val) => onChange({ ...formData, duration: val as SessionService["duration"] })}
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
              required={false}
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
            text="Create Service"
            textColor="text-secondary800 "
            type="submit"
          />
          <NavBtn
            outlineColor="outline-secondary300"
            text="Save as Draft"
            onClick={handleSaveDraft}
            type="button"
          />
        </footer>
      </form>
    </div>,
    document.body
  );
};

export default BookServicePopup;

