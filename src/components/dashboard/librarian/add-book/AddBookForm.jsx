"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import CategorySelect from "./CategorySelect";
import ImageUploader from "./ImageUploader";

export default function AddBookForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const imageFile = formData.get("image");

      // Image Upload (imgBB)
      // Next step we will upload this image and get imageURL

      console.log(imageFile);

      const bookData = {
        title: formData.get("title"),
        author: formData.get("author"),
        description: formData.get("description"),
        deliveryFee: Number(formData.get("deliveryFee")),
        category: formData.get("category"),

        // temporary
        image: "",

        // Backend should set this
        status: "Pending Approval",
      };

      console.log(bookData);

      /**
       * Later
       *
       * const res = await fetch("/api/books",{
       *   method:"POST",
       *   headers:{
       *      "Content-Type":"application/json"
       *   },
       *   body:JSON.stringify(bookData)
       * })
       */

      toast.success("Ready for image upload.");

      e.target.reset();
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Book Title */}

      <div>
        <label className="mb-2 block font-medium">
          Book Title
        </label>

        <input
          type="text"
          name="title"
          required
          placeholder="Atomic Habits"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-600"
        />
      </div>

      {/* Author */}

      <div>
        <label className="mb-2 block font-medium">
          Author
        </label>

        <input
          type="text"
          name="author"
          required
          placeholder="James Clear"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-600"
        />
      </div>

      {/* Category */}

      <CategorySelect />

      {/* Delivery Fee */}

      <div>
        <label className="mb-2 block font-medium">
          Delivery Fee (৳)
        </label>

        <input
          type="number"
          name="deliveryFee"
          required
          min="0"
          placeholder="50"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-600"
        />
      </div>

      {/* Description */}

      <div>
        <label className="mb-2 block font-medium">
          Description
        </label>

        <textarea
          rows={5}
          name="description"
          required
          placeholder="Write a short description..."
          className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-600"
        />
      </div>

      {/* Image */}

      <ImageUploader />

      {/* Notice */}

      <div className="rounded-xl border border-amber-300 bg-amber-50 p-4">
        <p className="text-sm text-amber-700">
          📌 Every newly added book will be submitted as{" "}
          <span className="font-semibold">
            Pending Approval
          </span>
          . It won't appear publicly until approved by an administrator.
        </p>
      </div>

      {/* Submit */}

      <button
        disabled={loading}
        className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading
          ? "Adding Book..."
          : "Add Book"}
      </button>
    </form>
  );
}