'use client';
import { useContext } from 'react';
import { StateContext } from 'src/app/[locale]/(client)/counter/CounterPage';
import { AppButton } from 'src/components/ui/button/AppButton';
import { useRerenderCount } from 'src/hooks/useRerenderCount';
import { counterStore } from 'src/stores/counter.store';

export const CounterController = () => {
  const state = useContext(StateContext);
  useRerenderCount('CounterController');
  return (
    <div className='mt-3 mb-3 flex gap-4'>
      <AppButton onClick={() => state.increment()}>Increment</AppButton>
      <AppButton onClick={() => state.decrement()}>Decrement</AppButton>
      <AppButton onClick={() => counterStore.increment()}>Increment global counter</AppButton>
      <AppButton onClick={() => counterStore.decrement()}>Decrement global counter</AppButton>
    </div>
  );
};
