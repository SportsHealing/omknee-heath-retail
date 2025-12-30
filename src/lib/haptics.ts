// Haptic feedback utility for mobile devices
// Uses the Web Vibration API where available

export const haptics = {
  // Light tap - for slider movements
  light: () => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(10);
    }
  },
  
  // Medium tap - for selections
  medium: () => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(25);
    }
  },
  
  // Heavy tap - for confirmations
  heavy: () => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(50);
    }
  },
  
  // Success pattern - double tap
  success: () => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate([30, 50, 30]);
    }
  },
  
  // Error pattern - triple short tap
  error: () => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate([50, 30, 50, 30, 50]);
    }
  },
};
