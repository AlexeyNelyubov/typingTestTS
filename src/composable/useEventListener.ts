import { onMounted, onUnmounted } from "vue";

export function useEventListener(event: string, callback:(event:  Event)=> void) {
  onMounted(() => document.addEventListener(event, callback));
  onUnmounted(() => document.removeEventListener(event, callback));
}