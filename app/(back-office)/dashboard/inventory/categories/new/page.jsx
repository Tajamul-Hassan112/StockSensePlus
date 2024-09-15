
"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import Link from 'next/link';
import TextAreaInput from '@/components/Forminputs/TextAreaInput';
import FormHeader from '@/components/dashboard/FormHeader';
import toast from 'react-hot-toast';

export default function NewCategory() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  // async function onSubmit(data) {
  //   console.log('Submitting data:', data); // Log the submitted data
  //   setLoading(true);
  //   const baseUrl = "http://localhost:3000";
  
  //   try {
  //     const response = await fetch(`${baseUrl}/api/categories`, {
  //       method: 'POST',
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         title: data.Title,
  //         description: data.description
  //       }),
  //     });
  
  //     console.log('Response Object:', response);
  
  //     if (response.ok) {
  //       const responseData = await response.json(); // Parse JSON response
  //       console.log('Response Data:', responseData); // Log the response data
  //       reset();
  //       toast.success('Category Created Successfully !')
  //     } else {
  //       const errorData = await response.json(); // Capture and log error details
  //       console.error('Error Response:', errorData);
  //     }
  //   } catch (err) {
  //     console.log('Fetch Error:', err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  
  async function onSubmit(data) {
    console.log('Submitting Category data:', data);
    setLoading(true);
    const baseUrl = "http://localhost:3000";
  
    try {
      const response = await fetch(`${baseUrl}/api/categories`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.Title,
          description: data.description,
        }),
      });
  
      console.log('Category Response:', response);
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Category Created:', responseData);
        reset();
        toast.success('Category Created Successfully!');
      } else {
        const errorData = await response.json();
        console.error('Category Error:', errorData);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <div>
     
      <FormHeader title="New Category " href="/dashboard/inventory/"/>

      {/* Form */}
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {/* Category Title Input */}
          <div className="sm:col-span-2">
            <label htmlFor="Title" className="block text-sm font-medium leading-6 text-gray-900 mb-2">
              Category Title
            </label>
            <div className="mt-2">
              <input
                {...register("Title", { required: "Category title is required" })}
                type="text"
                id="Title"
                autoComplete="Title"
                className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder="Type the Category title"
              />
              {errors.Title && (
                <span className="text-sm text-red-600">
                  {errors.Title.message}
                </span>
              )}
            </div>
          </div>

          {/* Category Description Textarea */}
          <TextAreaInput label="Category Description " name="description" register={register} errors={errors} />
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
              Saving Category Please Wait...
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
              Save Category
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
