

"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextAreaInput from '@/components/Forminputs/TextAreaInput';
import FormHeader from '@/components/dashboard/FormHeader';
import TextInput from '@/components/Forminputs/TextInput';
import SelectInput from '@/components/Forminputs/SelectInput';
import { makePostRequest } from '@/lib/apiRequest';

export default function NewWareHouse() {
  const selectOptions = [
    { label: "Main", value: "main" },
    { label: "Branch", value: "branch" }
  ];

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    console.log('Submitting data:', data); 
    
    makePostRequest(setLoading, "warehouse", data, "Warehouse", reset); // No extra /api
  }

  return (
    <div>
      <FormHeader title="New Warehouse" href="/dashboard/inventory/" />
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <SelectInput
            name="type"
            label="Select the warehouse type"
            register={register}
            className='w-full'
            options={selectOptions}
          />
          <TextInput
            label="Warehouse Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Warehouse Location"
            name="location"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextAreaInput
            label="Warehouse Description"
            name="description"
            register={register}
            errors={errors}
          />
        </div>
        <div className="py-4 sm:col-span-1">
          {loading ? (
            <button
              disabled
              type="button"
              className="text-white bg-gray-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Saving Warehouse Please Wait...
            </button>
          ) : (
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Save Warehouse
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
