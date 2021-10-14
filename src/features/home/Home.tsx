import React from "react";
import {AmplifyAuthContainer, AmplifyAuthenticator, AmplifySignIn, AmplifySignOut, AmplifySignUp} from '@aws-amplify/ui-react';
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';
import {User} from "../../models/user";
import Profile from "../profile/Profile";
import {Col, Row} from "react-bootstrap";

const Home: React.FC = () => {
    const [authState, setAuthState] = React.useState<AuthState>();
    const [user, setUser] = React.useState<User | undefined>();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            // @ts-ignore
            setUser(authData);
        })
    }, []);

    return (
        <Row className="justify-content-center">
            <Col xs={12} sm={8} md={6}>
                {
                    authState === AuthState.SignedIn && user ? (
                        <Col className="mt-5">
                            <h1 className="mb-5">Welcome, {user.attributes.name}!</h1>
                            <div className="mb-5">
                                <Profile user={user} />
                            </div>
                            <AmplifySignOut/>
                        </Col>
                    ) : (

                        <AmplifyAuthContainer>

                            <AmplifyAuthenticator>
                                <AmplifySignUp
                                    slot="sign-up"
                                    formFields={[
                                        {
                                            type: "email",
                                            label: "Email Address",
                                            placeholder: "We promise to never, ever, ever spam you!",
                                            inputProps: {required: true, autocomplete: "email"},
                                        },
                                        {
                                            type: "username",
                                            label: "Username (must be the same as your email address)",
                                            placeholder: "For some reason, usernameAlias=email isn't working so well for me.",
                                            inputProps: {required: true, autocomplete: "username"},
                                        },
                                        {
                                            type: "name",
                                            label: "Name",
                                            placeholder: "What can we call you?",
                                            inputProps: {required: true},
                                        },
                                        {
                                            type: "password",
                                            label: "Password",
                                            placeholder: "Don't enter your kid's birthday here",
                                            inputProps: {required: true, autocomplete: "new-password"},
                                        },
                                        {
                                            type: "phone_number",
                                            label: "Phone Number",
                                            placeholder: "We'd like to call you at 2AM, just to check that you're sleeping.",
                                        },
                                        {
                                            type: "website",
                                            label: "Website Address",
                                            placeholder: "Enter your website address here, we'd love to read your blog.",
                                        },
                                    ]}
                                />
                                <AmplifySignIn
                                    headerText="Welcome! Please sign in below."
                                    slot="sign-in"
                                />
                            </AmplifyAuthenticator>
                        </AmplifyAuthContainer>
                    )
                }
            </Col>
        </Row>
    )
}

export default Home;