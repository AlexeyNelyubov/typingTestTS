import { onMounted, onUnmounted } from "vue";

export function useDocumentKeyboardEvent(event:'keydown' | 'keyup', callback:(event: KeyboardEvent)=> void) {
  onMounted(() => document.addEventListener(event, callback));
  onUnmounted(() => document.removeEventListener(event, callback));
}
