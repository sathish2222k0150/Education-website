// src/components/EnquiryForm.tsx

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  name: string;
  email: string;
  contact: string;
  whatsapp: string;
  gender: string;
  education: string;
  course: string;
  message: string;
}

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  contact: yup.string().min(10).required('Contact number is required'),
  whatsapp: yup.string().min(10).required('WhatsApp number is required'),
  gender: yup.string().required('Gender is required'),
  education: yup.string().required('Education is required'),
  course: yup.string().required('Please select a course'),
  message: yup.string().required('Message is required'),
});

const EnquiryForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const selectedCourse = watch('course');
  const coursePrices: Record<string, number> = {
    'Full Stack Development': 500,
    'AI & ML': 1000,
    'Cloud Architect': 1500,
  };
  const courseFee = coursePrices[selectedCourse];

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('https://kgpath.onrender.com/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Submission failed');

      toast.success('Enquiry submitted successfully!');
      reset();
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto p-10 bg-white dark:bg-gray-900 rounded-2xl shadow-xl text-[17px]">
      <h2 className="text-3xl font-bold mb-8 text-center text-teal-600 dark:text-teal-500">Enquiry Form</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input type="text" {...register('name')} className="input-style" placeholder="Full Name" />
            <p className="text-red-500 text-sm">{errors.name?.message}</p>
          </div>
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input type="email" {...register('email')} className="input-style" placeholder="Email Address" />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Contact Number</label>
            <input type="tel" {...register('contact')} className="input-style" placeholder="Contact Number" />
            <p className="text-red-500 text-sm">{errors.contact?.message}</p>
          </div>
          <div>
            <label className="block mb-1 font-medium">WhatsApp Number</label>
            <input type="tel" {...register('whatsapp')} className="input-style" placeholder="WhatsApp Number" />
            <p className="text-red-500 text-sm">{errors.whatsapp?.message}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Gender</label>
            <select {...register('gender')} className="input-style">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <p className="text-red-500 text-sm">{errors.gender?.message}</p>
          </div>
          <div>
            <label className="block mb-1 font-medium">Educational Qualification</label>
            <input type="text" {...register('education')} className="input-style" placeholder="Educational Qualification" />
            <p className="text-red-500 text-sm">{errors.education?.message}</p>
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Course</label>
          <select {...register('course')} className="input-style">
            <option value="">Select Course</option>
            <option value="Full Stack Development">Full Stack Development</option>
            <option value="AI & ML">AI & ML</option>
            <option value="Cloud Architect">Cloud Architect</option>
          </select>
          <p className="text-red-500 text-sm">{errors.course?.message}</p>
          {courseFee && <p className="text-sm text-gray-600 mt-1">Course Fee: ₹{courseFee}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea rows={5} {...register('message')} className="input-style" placeholder="Your Message" />
          <p className="text-red-500 text-sm">{errors.message?.message}</p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full text-white text-lg font-semibold py-3 px-6 rounded-lg ${
            isSubmitting ? 'bg-orange-400' : 'bg-orange-600 hover:bg-orange-700'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default EnquiryForm;
