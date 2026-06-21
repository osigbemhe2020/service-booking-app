"use client";
import { useMemo, useState, useCallback, useRef } from "react";
import { createPortal } from 'react-dom';
import { useDropzone } from 'react-dropzone';
import DropdownButton from "@/components/DropdownButton";
import PrimaryBtn from "@/components/PrimaryButton";
import CommonFeatures from '@/lib/CommonFeatures'
import { Heading, SubHeading, Textarea, InputField } from './popupComponents'
import { LuUpload } from "react-icons/lu";
import NavBtn from "./NavBtn";

export type ServiceFormValue = {
  title: string;
  location: string;
  category: string;
  description: string;
  price: string;
  duration: string;
  availability: string;
  customFeature: string;
  imageFile: File | null;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (service: ServiceFormValue) => Promise<void>;
  value: ServiceFormValue;
  onChange: (next: ServiceFormValue) => void;
};

const AVAILABILITY_OPTIONS = [
  "Morning (6AM - 12PM)",
  "Afternoon (12PM - 6PM)",
  "Evening (6PM - 12AM)",
];

const BookServicePopup = ({ isOpen, onClose, onCreate, value, onChange }: Props) => {
  const formData = useMemo(() => value, [value]);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const modalRef = useRef<HTMLFormElement>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;
    onChange({ ...formData, imageFile: file });
    setImagePreview(URL.createObjectURL(file));
  }, [formData, onChange]);

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp'] },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveDraft = () => {
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // only close if the click landed on the backdrop itself, not inside the form
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!formData.title || !formData.category || !formData.duration || !formData.price) {
      setFormError("Please fill in all required fields.");
      return;
    }
    if (!formData.availability) {
      setFormError("Please select an availability period.");
      return;
    }
    const cost = Number(formData.price);
    if (Number.isNaN(cost)) {
      setFormError("Price must be a valid number.");
      return;
    }
    if (!formData.imageFile) {
      setFormError("Please add at least one image.");
      return;
    }

    setSubmitting(true);
    try {
      await onCreate(formData);
      onClose();
    } catch (err: any) {
      setFormError(err.message || "Failed to create service.");
    } finally {
      setSubmitting(false);
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 bg-[#0000003b] flex items-center justify-center z-50"
      onMouseDown={handleBackdropClick}
    >
      <form
        ref={modalRef}
        onSubmit={handleSubmit}
        onMouseDown={(e) => e.stopPropagation()}
        className="w-3/8 bg-white mx-auto p-4 max-h-[90vh] rounded-xl overflow-y-scroll"
      >
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
              options={["Consulting", "Design", "Development", "Repair", "Training", "Others"]}
              text="Category"
              value={formData.category}
              onChange={(val) => onChange({ ...formData, category: val })}
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
              options={["15 mins", "30 mins", "45 mins", "1 hour", "2 hours", "3 hours"]}
              text="Duration (minutes)"
              value={formData.duration}
              onChange={(val) => onChange({ ...formData, duration: val })}
            />
          </div>
          <hr className="text-secondary400 mt-4" />
        </section>

        <section className="flex flex-col gap-3">
          <Heading text="availability" />
          <SubHeading title="Select the time period when you're available to provide this service" />
          <div className="flex flex-col gap-2">
            {AVAILABILITY_OPTIONS.map((option) => (
              <label key={option} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="availability"
                  value={option}
                  checked={formData.availability === option}
                  onChange={() => onChange({ ...formData, availability: option })}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          <hr className="text-secondary500" />
        </section>

        <section className="flex flex-col gap-2">
          <Heading text="service features" />
          <SubHeading title="Highlight what makes your service special" />
          <Heading text="Common features" />
          <ul className="grid grid-cols-3 gap-1 place-content-center capitalize">
            {CommonFeatures?.map((feature) => (
              <li key={feature.id} className=" text-center text-xs p-2  whitespace-nowrap font-medium rounded-md border border-secondary300">
                {feature.name}
              </li>
            ))}
          </ul>
          <InputField
            htmlFor="custom-feature"
            id="custom-feature"
            placeholder="Add a custom feature ..."
            required={false}
            text="Custom Features"
            type="text"
            name="customFeature"
            value={formData.customFeature}
            onChange={handleChange}
          />
          <hr className="text-secondary500 mt-2" />
        </section>

        <section className="py-4 flex flex-col gap-3">
          <Heading text="Service Image" />
          <SubHeading title="Add an image to showcase your service" />

          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center gap-3 cursor-pointer transition-colors ${
              isDragActive ? "border-secondary500 bg-secondary50" : "border-secondary400"
            }`}
          >
            <input {...getInputProps()} />
            {imagePreview ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={imagePreview} alt="Preview" className="max-h-40 rounded-md" />
            ) : (
              <>
                <LuUpload className="text-4xl text-secondary300 font-extrabold" />
                <p className="text-secondary300 text-center">
                  {isDragActive
                    ? "Drop the image here..."
                    : "Drag & drop an image here, or click to choose a file"}
                </p>
                <p className="text-secondary300 text-xs">PNG, JPG, or WEBP — max 5MB</p>
              </>
            )}
          </div>
          {fileRejections.length > 0 && (
            <p className="text-red-500 text-sm">
              {fileRejections[0].errors[0].message}
            </p>
          )}
          <hr className="text-secondary500 mt-3" />
        </section>

        {formError && <p className="text-red-500 text-sm" role="alert">{formError}</p>}

        <footer className="grid grid-cols-2 gap-4 mt-6">
          <PrimaryBtn
            bgColor="bg-secondary50"
            hoverColor="bg-secondary300"
            text={submitting ? "Creating..." : "Create Service"}
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