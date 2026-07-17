import { useEffect, useState } from "react";
import api from "../services/api";


export default function Profile(){
    const [profile, setProfile] = useState({
        user: [],
    }); 

    const fetchProfile = () => {
        api.get('/profile')
            .then((response) => {
                setProfile(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
            
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
    <div>
        <h1>Profile</h1>

        <div className="circle" style={{padding: "9%"}}><h1>S</h1></div>
        <div className="profile-card">
            <span><b>Name:</b> {profile.name}</span><br/>
            <span><b>Email:</b> {profile.email} </span><br/>
            <span><b>Role:</b> {profile.role} </span><br/>
            <span><b>Password:</b> ••••••••</span><br/>
            <span><b>Phone: </b>{profile.phone_number} </span><br/>     
            <span><b>Barangay:</b> {profile.barangay} </span><br/>            
        </div>

    </div>

        
        
    )
}