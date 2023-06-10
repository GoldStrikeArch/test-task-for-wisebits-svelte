import { writable } from "svelte/store";

const createTimer = () => {
  let startTime = window.performance.now();
  let frame;

  const { set, subscribe, update } = writable(0, () => {
    set(0);
    return () => cancelAnimationFrame(frame);
  });

  const run = () => {
    frame = requestAnimationFrame(run);
    const time = window.performance.now();

    set(time - startTime);
  };

  run();

  return {
    subscribe,
    update,
    reset: () => {
      set(0);
      startTime = window.performance.now();
    },
  };
};

export const timer = createTimer();
