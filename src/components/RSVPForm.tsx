import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { rsvpFormSchema, type RSVPFormData, submitRSVP } from '@/lib/form';
import { Send, Loader2, CheckCircle } from 'lucide-react';

export const RSVPForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpFormSchema),
    defaultValues: {
      guests: 0,
    },
  });

  const onSubmit = async (data: RSVPFormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitRSVP(data);
      if (result.success) {
        setSubmitSuccess(true);
        reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Submit error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-2xl mx-auto animate-slide-up" id="rsvp">
      <h2 className="text-3xl md:text-4xl font-serifTitle font-bold text-text-primary text-center mb-8">
        참석 신청
      </h2>

      <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">
        {submitSuccess ? (
          <div className="text-center py-8 animate-fade-in">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-serifTitle font-bold text-text-primary mb-2">
              신청 완료!
            </h3>
            <p className="text-gray-600 font-sansBody">
              참석 신청이 완료되었습니다. 당일 뵙겠습니다!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium font-sansBody text-text-primary mb-2">
                이름 <span className="text-pink-500">*</span>
              </label>
              <input
                {...register('name')}
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-300 focus:outline-none transition-colors font-sansBody"
                placeholder="홍길동"
              />
              {errors.name && (
                <p className="mt-1 text-sm font-sansBody text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Attend */}
            <div>
              <label className="block text-sm font-medium font-sansBody text-text-primary mb-2">
                참석 여부 <span className="text-pink-500">*</span>
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    {...register('attend')}
                    type="radio"
                    value="yes"
                    className="w-4 h-4 text-pink-500 focus:ring-pink-300"
                  />
                  <span className="text-text-primary font-sansBody">참석합니다</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    {...register('attend')}
                    type="radio"
                    value="no"
                    className="w-4 h-4 text-pink-500 focus:ring-pink-300"
                  />
                  <span className="text-text-primary font-sansBody">불참합니다</span>
                </label>
              </div>
              {errors.attend && (
                <p className="mt-1 text-sm font-sansBody text-red-500">{errors.attend.message}</p>
              )}
            </div>

            {/* Note */}
            <div>
              <label htmlFor="note" className="block text-sm font-medium font-sansBody text-text-primary mb-2">
                메모
              </label>
              <textarea
                {...register('note')}
                id="note"
                rows={4}
                maxLength={300}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-300 focus:outline-none transition-colors resize-none font-sansBody"
                placeholder="전달하고 싶은 말씀이나 문의사항을 남겨주세요 (최대 300자)"
              />
              {errors.note && (
                <p className="mt-1 text-sm font-sansBody text-red-500">{errors.note.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-400 text-white font-sansBody font-semibold rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>제출 중...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>신청하기</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
