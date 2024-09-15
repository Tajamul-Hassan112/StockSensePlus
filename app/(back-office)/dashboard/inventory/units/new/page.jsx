
"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '@/components/Forminputs/TextInput'; // Ensure correct path
import FormHeader from '@/components/dashboard/FormHeader';
import { makePostRequest } from '@/lib/apiRequest'; // Ensure correct path

export default function NewUnit() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    console.log("Submitting data:", data); // Log the submitted data
    setLoading(true);
    const successMessage = "Unit Created Successfully!"; 

    try {
      await makePostRequest(setLoading, "units", data, successMessage, reset);
    } catch (err) {
      console.error("Error creating unit:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <FormHeader title="New Unit" href="/dashboard/inventory/" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Unit Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Unit Abbreviation"
            name="abbreviation"
            register={register}
            errors={errors}
            className="w-full"
          />
        </div>
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
              Saving Unit Please Wait...
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
              Create Unit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
