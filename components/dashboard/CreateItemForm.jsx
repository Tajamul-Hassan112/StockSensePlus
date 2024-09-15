
"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextAreaInput from '@/components/Forminputs/TextAreaInput';
import TextInput from '@/components/Forminputs/TextInput';
import SelectInput from '@/components/Forminputs/SelectInput';
import ImageInput from '@/components/Forminputs/ImageInput';
import toast from 'react-hot-toast';
import { makePostRequest } from '@/lib/apiRequest';

export default function CreateItemForm({
  categories,
  units,
  brands,
  warehouses,
  suppliers,
}) {

  console.log('Categories:', categories);
  console.log('Units:', units);
  console.log('Brands:', brands);
  console.log('Warehouses:', warehouses);
  console.log('Suppliers:', suppliers);

  const [imageUrl, setImageUrl] = useState([]);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    console.log("Submitted data:", data); // Check unitId here

    // Ensure imageUrl is an array
    data.imageUrl = Array.isArray(imageUrl) ? imageUrl : [imageUrl];

    // Validate ObjectIDs
    const isValidObjectId = (id) => /^[a-fA-F0-9]{24}$/.test(id);
    const ids = ['unitId', 'brandId', 'categoryId', 'supplierId', 'warehouseId'];
    for (const id of ids) {
      if (data[id] && !isValidObjectId(data[id])) {
        return toast.error(`${id} is not a valid ObjectID.`);
      }
    }

    await makePostRequest(setLoading, "items", data, "Item", reset);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput label="Item Title" name="title" register={register} errors={errors} className="w-full" />
        <SelectInput name="categoryId" label="Select the Item Category" register={register} className='w-full' options={categories} />
        <TextInput label="Item SKU" name="sku" register={register} errors={errors} className="w-full" />
        <TextInput label="Item Barcode" name="barcode" register={register} errors={errors} className="w-full" />
        <TextInput label="Item Quantity" name="qty" register={register} errors={errors} className="w-full" type='number' />
        <SelectInput name="unitId" label="Select the Item Unit" register={register} className='w-full' options={units} />
        <SelectInput name="brandId" label="Select the Item Brand" register={register} className='w-full' options={brands} />
        <TextInput label="Buying Price" name="buyingPrice" register={register} errors={errors} className="w-full" type='number' />
        <TextInput label="Selling Price" name="sellingPrice" register={register} errors={errors} className="w-full" type='number' />
        <SelectInput name="supplierId" label="Select the Item Supplier" register={register} className='w-full' options={suppliers} />
        <TextInput label="Re-order Point" name="reOrderPoint" register={register} errors={errors} className="w-full" type='number' />
        <SelectInput name="warehouseId" label="Select the Item Warehouse" register={register} className='w-full' options={warehouses} />
        <TextInput label="Item Weight in kgs" name="weight" register={register} errors={errors} className="w-full" type='number' />
        <TextInput label="Item Dimensions in cm (e.g., 20 x 30 x 100)" name="dimensions" register={register} errors={errors} className="w-full" />
        <TextInput label="Item Tax Rate in %" name="taxRate" register={register} errors={errors} className="w-full" type='number' />
        <TextInput label="Item Type" name="type" register={register} errors={errors} className="w-full" />
        <TextAreaInput label="Item Description" name="description" register={register} errors={errors} />
        <TextAreaInput label="Item Notes" name="notes" register={register} errors={errors} />
        <ImageInput label="Item Image" imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint='imageUploader' />
      </div>
      <button
        type="submit"
        className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg border border-transparent shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading}
      >
        {loading ? 'Creating...' : 'Create Item'}
      </button>
    </form>
  );
}
