import { useEventListener } from "@/composable/useEventListener.ts";

export function useDocumentClick( callback:(event: Event)=> void) {
  useEventListener('click', callback)
}