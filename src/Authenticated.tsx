import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import BoatPage from "./pages/BoatPage";
import CheckoutPage from "./pages/CheckoutPage";
import ConfirmBookingPage from "./pages/ConfirmBookingPage";
import CheckoutCompletePage from "./pages/CheckoutCompletePage";


const Authenticated = () => {
  return (
    <Router >
        <Routes>
            <Route path="/"
                element={<HomePage />}
            />

            <Route path="/boat"
                element={<BoatPage />}
            />
            <Route path="/checkout"
                element={<CheckoutPage />}
            />
            <Route path="/confirmbooking"
                element={<ConfirmBookingPage />}
            />
            <Route path="/checkout-complete"
                element={<CheckoutCompletePage />}
            />
        </Routes>
    </Router>
  );
}

export default Authenticated;
