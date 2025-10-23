/**
 * Share using Web Share API or fallback to clipboard copy
 */
export async function shareEvent(data: {
  title: string;
  text: string;
  url: string;
}): Promise<boolean> {
  // Check if Web Share API is supported
  if (navigator.share) {
    try {
      await navigator.share({
        title: data.title,
        text: data.text,
        url: data.url,
      });
      return true;
    } catch (error) {
      // User cancelled or error occurred
      if ((error as Error).name !== 'AbortError') {
        console.error('Error sharing:', error);
      }
      return false;
    }
  } else {
    // Fallback: Copy URL to clipboard
    try {
      await navigator.clipboard.writeText(data.url);
      return true;
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      return false;
    }
  }
}

/**
 * Format date for display
 */
export function formatDate(date: Date, format: 'full' | 'short' = 'full'): string {
  const options: Intl.DateTimeFormatOptions = format === 'full'
    ? {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        weekday: 'long',
      }
    : {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      };

  return new Intl.DateTimeFormat('ko-KR', options).format(date);
}
