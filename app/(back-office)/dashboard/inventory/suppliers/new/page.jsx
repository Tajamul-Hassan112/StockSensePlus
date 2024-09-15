
"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextAreaInput from '@/components/Forminputs/TextAreaInput';
import FormHeader from '@/components/dashboard/FormHeader';
import TextInput from '@/components/Forminputs/TextInput';
import { makePostRequest } from '@/lib/apiRequest';

export default function NewSupplier() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    console.log('Submitting data:', data); 
    
    makePostRequest(setLoading, "suppliers", data, "Supplier", reset); // Ensure no extra /api
  }

  return (
    <div>
      <FormHeader title="New Supplier" href="/dashboard/inventory/" />
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput label="Supplier Name" name="name" register={register} errors={errors} className="w-full" />
          <TextInput label="Supplier Phone" name="phone" register={register} errors={errors} className="w-full" />
          <TextInput label="Supplier Email" name="email" register={register} type='email' errors={errors} className="w-full"  />
          <TextInput label="Supplier Address" name="address" register={register} errors={errors} className="w-full" />
          <TextInput label="Supplier Contact Person" name="contactPerson" register={register} errors={errors} className="w-full" />
          <TextInput label="Supplier Code" name="supplierCode" register={register} errors={errors} className="w-full" />
          <TextInput label="Supplier TIN" name="taxID" register={register} errors={errors} />
          <TextAreaInput label="Supplier Payment Terms" name="paymentTerms" register={register} errors={errors} />
          <TextAreaInput label="Notes" name="notes" register={register} errors={errors} />
        </div>
        <div className="py-4 sm:col-span-1">
          {loading ? (
            <button
              disabled
              type="button"
              className="text-white bg-gray-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Saving Supplier Please Wait...
            </button>
          ) : (
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Create Supplier
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
