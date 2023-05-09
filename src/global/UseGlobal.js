import { create } from 'zustand'

export const useBookStore = create((set, get) => ({
    value: false,
}))