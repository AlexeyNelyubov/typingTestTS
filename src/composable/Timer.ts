import { ref, onUnmounted } from "vue";

export const timer1 = ():number=> {
    const testingTime = ref(0);

    const newTest= ():void=> {
      testingTime.value = 0;
    }
      
        const timer = setInterval((): void => {
            testingTime.value ++;
          }, 1000);

  onUnmounted(() => clearInterval(timer));
  return {testingTime, newTest};
}