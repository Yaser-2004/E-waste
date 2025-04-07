import React from "react";
import ProfileOverview from "../Sections/profiletop.jsx";
import EcoPointsHeader from "../Sections/profileecopointstop.jsx";
import EcoPointsStats from "../Sections/yourecopoints.jsx";
import RewardsSection from "../Sections/profileecopointuse.jsx";
import Footer from "../Components/Footer.jsx";
import Navbar from "../Components/Navbar.jsx";


const Profile = () => {
    return (
        <div className="bg-gray-100 dark:bg-neutral-900">
        <Navbar/>
        <ProfileOverview />
        <EcoPointsHeader />
        <EcoPointsStats />
        <RewardsSection />
        <Footer />
        </div>
    );
}
export default Profile;
