import { create } from 'zustand';

interface CartItem {
  id: number;
  quantity: number;
}

interface UserData {
  email: string;
  name: string;
}

interface UserState {
  isLoggedIn: boolean;
  cart: CartItem[];
  userData: UserData | null;
  login: () => void;
  logout: () => void;
  register: (data: { email: string; name: string }) => void;
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}

export const useStore = create<UserState>((set) => ({
  isLoggedIn: false,
  cart: [],
  userData: null,
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false, userData: null }),
  register: (data) => set({ isLoggedIn: true, userData: data }),
  addToCart: (productId) =>
    set((state) => {
      const existingItem = state.cart.find(item => item.id === productId);
      if (existingItem) {
        return {
          cart: state.cart.map(item =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        cart: [...state.cart, { id: productId, quantity: 1 }],
      };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      ),
    })),
}));