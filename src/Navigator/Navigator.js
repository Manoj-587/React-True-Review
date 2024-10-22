import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import MyProfile from '../TrueReview/MyProfile';
import Categories from '../TrueReview/Categories';
import Settings from '../TrueReview/Settings';
import InviteFriends from '../TrueReview/InviteFriends';
import TrueReviewFeatures from '../TrueReview/TrueReviewFeatures';
import TopReviews from '../TrueReview/TopReviews';
import AddReview from '../TrueReview/AddReview';
import TrHome from '../TrueReview/TrHome';
import Loginpage from '../Loginpage/Loginpage';


const Navigator = () =>  {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TrHome />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/invite-friends" element={<InviteFriends />} />
        <Route path="/truereview-features" element={<TrueReviewFeatures />} />
        <Route path="/top-reviews" element={<TopReviews />} />
        <Route path="/add-review" element={<AddReview />} />
        <Route path="/logout" element={<Loginpage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Navigator;
