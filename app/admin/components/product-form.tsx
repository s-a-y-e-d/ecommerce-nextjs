"use client";
import { CldUploadWidget } from 'next-cloudinary';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { clsx } from "clsx";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useState } from 'react';
import './product-form.css';

const productSchema = z.object({
  name: z.string().min(1, "Product Name is required"),
  id: z.string().min(1, "ID is required"),
  price: z.coerce.number().int().min(100, "Price must be at least 100 cents"),
  slug: z.string().min(1, "Slug is required"),
  stock: z.coerce.number().min(1, "Stock must be a positive number"),
  category: z.string().optional(),
  description: z.string().min(1, "Description is required"),
  image: z.string().min(1, "Product Image is required"),
});

type ProductFormData = z.infer<typeof productSchema>;

type ActionProp = {
  action: (formData: FormData) => Promise<
    { success: boolean; error: string; }
    | { success: boolean; error?: undefined; }
  >;
  defaultValues: ProductFormData;

}

export default function ProductForm({ action, defaultValues }: ActionProp) {
  const [img, setImg] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues,
  });

  const clientAction = async (data: ProductFormData) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("id", data.id);
      formData.append("price", data.price.toString());
      formData.append("slug", data.slug);
      formData.append("stock", data.stock.toString());
      if (data.category) formData.append("category", data.category);
      formData.append("description", data.description);
      formData.append("image", data.image);

      const result = await action(formData);

      if (result.success) {
        toast.success("Product added successfully");
        setImg("");
        reset();
      } else {
        toast.error(result.error || "Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product");
    }
  };

  return (
    <div className="product-form-container">
      <form onSubmit={handleSubmit(clientAction)}>

        {/* Product Name */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input
            id="name"
            type="text"
            className={clsx("form-input", errors.name && "error")}
            placeholder="e.g., Wireless Headphones"
            {...register("name")}
          />
          {errors.name && (
            <span className="error-message">{errors.name.message}</span>
          )}
        </div>

        <div className="form-row">
          {/* ID */}
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="id" className="form-label">
              Product ID
            </label>
            <input
              id="id"
              type="text"
              className={clsx("form-input", errors.id && "error")}
              placeholder="e.g., SE69"
              {...register("id")}
            />
            {errors.id && (
              <span className="error-message">{errors.id.message}</span>
            )}
          </div>

          {/* Slug */}
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="slug" className="form-label">
              Slug
            </label>
            <input
              id="slug"
              type="text"
              className={clsx("form-input", errors.slug && "error")}
              placeholder="e.g., wireless-headphones"
              {...register("slug")}
            />
            {errors.slug && (
              <span className="error-message">{errors.slug.message}</span>
            )}
          </div>
        </div>

        <div className="form-row">
          {/* Price */}
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="price" className="form-label">
              Price (in cents)
            </label>
            <input
              id="price"
              type="number"
              className={clsx("form-input", errors.price && "error")}
              placeholder="0"
              {...register("price")}
            />
            {errors.price && (
              <span className="error-message">{errors.price.message}</span>
            )}
          </div>

          {/* Stock */}
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="stock" className="form-label">
              Stock Quantity
            </label>
            <input
              id="stock"
              type="number"
              className={clsx("form-input", errors.stock && "error")}
              placeholder="0"
              {...register("stock")}
            />
            {errors.stock && (
              <span className="error-message">{errors.stock.message}</span>
            )}
          </div>
        </div>

        {/* Category */}
        <div className="form-group">
          <label htmlFor="category" className="form-label">
            Category <span className="form-label-optional">(Optional)</span>
          </label>
          <input
            id="category"
            type="text"
            className={clsx("form-input", errors.category && "error")}
            placeholder="e.g., Electronics"
            {...register("category")}
          />
        </div>

        {/* Description */}
        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            rows={5}
            className={clsx("form-textarea", errors.description && "error")}
            placeholder="Enter a detailed description of the product..."
            {...register("description")}
          />
          {errors.description && (
            <span className="error-message">{errors.description.message}</span>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Product Image</label>

          <CldUploadWidget
            uploadPreset="ecommerce_product_upload"
            onSuccess={(result) => {
              if (result.info && typeof result.info === "object" && "secure_url" in result.info) {
                const url = (result.info as { secure_url: string }).secure_url;
                setImg(url);
                setValue("image", url, { shouldValidate: true });
              }
            }}
          >
            {({ open }) => (
              <button type="button" onClick={() => open()} className="upload-btn">
                Upload Image
              </button>
            )}
          </CldUploadWidget>

          {/* Show preview if image uploaded */}
          {img && (
            <img
              src={img}
              alt="Product Preview"
              width={120}
              className="rounded border mt-2"
            />
          )}

          {errors.image && (
            <span className="error-message">{errors.image.message}</span>
          )}

          {/* Hidden input for validation if needed, but setValue handles it */}
          <input type="hidden" {...register("image")} />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-btn"
          >
            {isSubmitting && <Loader2 className="w-4 h-4 spinner" />}
            {isSubmitting ? "Saving..." : "Save Product"}
          </button>
        </div>
      </form>
    </div>
  );
}
