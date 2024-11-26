import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      basketProducts: [" "],
      setBasketProducts: () => set((state) => ({ basketProducts: basketProducts.concat(product) })),
    }),
    { name: "basket-storage" }
  )
);

export default useStore;
