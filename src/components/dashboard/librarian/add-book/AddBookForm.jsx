"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import CategorySelect from "./CategorySelect";
import ImageUploader from "./ImageUploader";
import { authClient } from "@/lib/auth-client";

export default function AddBookForm() {
  const [loading, setLoading] = useState(false);
  const {
    data: session,

  } = authClient.useSession()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Form
      const form = new FormData(e.currentTarget);
      // Image File
      const imageFile = form.get("image");

      // Upload Image to imgBB
      const imageFormData = new FormData();
      imageFormData.append("image", imageFile);

      const imageResponse = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: imageFormData,
        }
      );

      const imageData = await imageResponse.json();

      console.log(imageData);

      if (!imageData.success) {
        toast.error("Image upload failed");
        return;
      }

      // Image URL from imgBB
      const imageURL = imageData.data.display_url;

      // Other form fields
      const formData = Object.fromEntries(form.entries());

      // Book Object
      const bookData = {
        title: formData.title,
        author: formData.author,
        description: formData.description,
        category: formData.category,
        deliveryFee: Number(formData.deliveryFee),

        image: imageURL,

        status: "Pending Approval",

        librarianId: session?.user?.id,
        librarianName: session?.user?.name,
        librarianEmail: session?.user?.email,
      };

      console.log(bookData);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/books`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookData),
        }
      );

      const data = await res.json();

      console.log(data);

      toast.success("Book Added Successfully!");

      e.target.reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
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