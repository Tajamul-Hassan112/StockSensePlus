
"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


import TextAreaInput from '@/components/Forminputs/TextAreaInput';

import TextInput from '@/components/Forminputs/TextInput';
import SelectInput from '@/components/Forminputs/SelectInput';
import { makePostRequest } from '@/lib/apiRequest';

export default function TransferInventoryForm() {
  const branches = [
    { label: "Branch A", value: "dcusuu" },
    { label: "Branch B", value: "ggdh" },
    { label: "Main A", value: "ggdhS" },
    { label: "Main B", value: "ggSdh" }
  ];
  const items = [
    { label: "Item A", value: "dcusuweu" },
    { label: "Item  B", value: "ggwwqdh" },
    { label: "Item C", value: "ggdwwhS" },
    { label: "Item D", value: "ggSwdh" }
  ];

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    console.log('Submitting data:', data); // Log the submitted data
    setLoading(true);
    const baseUrl = "http://localhost:3000";
    makePostRequest(setLoading,"adjustments/transfer","StockAdjustment",reset)
  }

  return (
    <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput label="Reference Number" type='number' name="referenceNumber" register={register} errors={errors}   />
          {/* Amount of Stock to Transfer Input */}
          <TextInput label="Enter Quantity of Stock to Transfer" type='number' name="transferStockQty" register={register} errors={errors} />
          <SelectInput name="itemId" label="Select the Item" register={register} className='w-full' options={items}  />
          
          {/* Branch Select Input */}
          <SelectInput name="givingWarehouseId" label="Select the Warehouse that will give the stock" register={register} className='w-full' options={branches} />
          <SelectInput name="receivingWarehouseId" label="Select the Warehouse that will receive the stock" register={register} className='w-full' options={branches} />

          
          
          {/* Adjustment Notes Textarea */}
          <TextAreaInput label="Adjustment Notes" name="notes" register={register} errors={errors} />
        </div>

        {/* Submit Button */}
        <div className="py-4 sm:col-span-1">
          {loading ? (
            <button
              disabled
              type="button"
              className="text-white bg-gray-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <svg
                className="animate-spin h-5 w-5 mr-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v4m0 4v4m-8-8h4m4 0h4"
                />
              </svg>
              Saving Adjustment please wait...
            </button>
          ) : (
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 inline-block mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Save Adjustment
            </button>
          )}
        </div>

      </form>
  );
}
