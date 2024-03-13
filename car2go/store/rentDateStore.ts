import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface RentDateState {
  dateDifference: number | undefined,
  setDateDifference: (value: number | undefined) => void,
  pickupDate: Date | undefined | string,
  setPickupDate: (value: Date | undefined | string) => void,
  returnDate: Date | undefined | string,
  setReturnDate: (value: Date | undefined | string) => void,
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
    }
  )
)

export default useRentDateStore;
