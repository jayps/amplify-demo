import React from "react";
import {User} from "../../models/user";

export interface ProfileProps {
    user: User;
}

const Profile: React.FC<ProfileProps> = ({user}) => {
    return (
        <div>
            <h2>
                Your Profile
            </h2>
            <div className={"mb-5"}>
                <strong>Website:</strong> {user.attributes.website}<br />
                <strong>Email verified:</strong> {user.attributes.email_verified ? 'Yes' : 'No'}<br />
                <strong>Phone Number Verified:</strong> {user.attributes.phone_number_verified ? 'Yes' : 'No'}<br />
                <strong>Name:</strong> {user.attributes.name}<br />
                <strong>Phone Number:</strong> {user.attributes.phone_number}<br />
                <strong>Email:</strong> {user.attributes.email}<br />
            </div>
            <p>
                This component is a custom component, using information provided by AWS Amplify after user sign up.<br />
                Components such as the actual sign in, sign up, forgot password and the sign out button below are part of the AWS Amplify library.
            </p>
        </div>
    )
}

export default Profile;