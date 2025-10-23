import { z } from 'zod';

/**
 * RSVP Form Schema
 */
export const rsvpFormSchema = z.object({
  name: z.string().min(2, '이름은 2자 이상 입력해주세요').max(50, '이름은 50자 이하로 입력해주세요'),
  team: z.string().optional(),
  attend: z.enum(['yes', 'no'], {
    required_error: '참석 여부를 선택해주세요',
  }),
  guests: z.number().min(0, '인원은 0명 이상이어야 합니다').max(5, '최대 5명까지 가능합니다').default(0),
  note: z.string().max(300, '메모는 300자 이하로 입력해주세요').optional(),
});

export type RSVPFormData = z.infer<typeof rsvpFormSchema>;

/**
 * Submit RSVP form (dummy API)
 */
export async function submitRSVP(data: RSVPFormData): Promise<{ success: boolean; message: string }> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Dummy success response
  console.log('RSVP Submitted:', data);

  return {
    success: true,
    message: '참석 신청이 완료되었습니다!',
  };
}
