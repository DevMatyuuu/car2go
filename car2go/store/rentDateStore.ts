import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface RentDateState {
  dateDifference: number | undefined,
  setDateDifference: (value: number | undefined) => void,
  pickupDate: Date | undefined,
  setPickupDate: (value: Date | undefined) => void,
  returnDate: Date | undefined,
  setReturnDate: (value: Date | undefined) => void,
}

const useRentDateStore = create<RentDateState>()(
  persist(
    (set) => ({
      dateDifference: undefined,
      setDateDifference: (value) => set({dateDifference: value}),
      pickupDate: undefined,
      setPickupDate: (value) => set({pickupDate: value}),
      returnDate: undefined,
      setReturnDate: (value) => set({returnDate: value})
    }),
    {
      name: 'rentDate',
      partialize: (state) => ({ dateDifference: state.dateDifference })
    }
  )
)

export default useRentDateStore;
