// routes/GuestRoutes.tsx
import { Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Error from "../pages/Error";
import SignInOTP from "../pages/auth/SignInOtp";
import CartPage from "../pages/CartPage";
import Wishlist from "../pages/Wishlist";

const GuestRoutes = (
  <Route element={<MainLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signinwithotp" element={<SignInOTP />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="*" element={<Error />} />
  </Route>
);

export default GuestRoutes;
