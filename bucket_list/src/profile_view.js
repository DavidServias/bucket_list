import React from 'react';
import './css/profile_view.css';
import MyAppBar from './app_bar.js';
import BucketList from './bucket_list';
import PeopleList from './people_list';
import AboutMe from './about_me';
import Box from '@mui/material/Box';
import DeepThoughts from './deep_thoughts';
import Grid from '@mui/material/Grid';
//import Decorator from './card_decorator.js';

//PROPS:
// profileName
// status
// bucketListData 
// deepThoughts
// friendsListData
// userIdentifier
// lookUpUser
// refreshUserData
// setUserToNull
// Boolean: guestView 
// viewUserProfile()
// viewGuestProfile()

// visitProfile()
class ProfileView extends React.Component {
    constructor(props){
        super(props);
    }
    render(){  
        return (
            <Box  sx={{ width: '100%', backgroundColor:'#577590' }}>
                    <MyAppBar setUserToNull = {this.props.setUserToNull}/>
                    <Grid container 
                        spacing={1}                 
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        <Grid item xs={12} sm={3} >
                        <AboutMe 
                            status = {this.props.data.status}
                            profileName = {this.props.data.profile_name}
                            userIdentifier = {this.props.data.user_identifier}
                            refreshUserData = {this.props.refreshUserData}
                            guestView = {this.props.guestView}
                            viewUserProfile = {this.props.viewUserProfile}
                        />  
                        </Grid>
                        <Grid item 
                            xs={12} 
                            sm={(this.props.guestView) ? 3: 9}   
                        >
                        <BucketList 
                            userIdentifier = {this.props.data.user_identifier}
                            bucketList = {this.props.data.bucket_list}
                            refreshUserData = {this.props.refreshUserData}
                            profileName = {this.props.data.profile_name}
                            guestView = {this.props.guestView}
                        />  
                        </Grid>
                        <Grid item 
                            xs={12} 
                            sm={this.props.guestView ? 3: 9}   
                        >
                        <DeepThoughts 
                            userIdentifier = {this.props.data.user_identifier}
                            deepThoughts = {this.props.data.deep_thoughts}
                            refreshUserData = {this.props.refreshUserData}
                            profileName = {this.props.data.profile_name}
                            guestView = {this.props.guestView}
                        
                        />
                        </Grid>
                        <Grid item sm={3} xs={12}>
                        {/* <Decorator>Test</Decorator> */}
                        <PeopleList 
                            userIdentifier = {this.props.data.user_identifier}
                            friendsListData = {this.props.data.friends_list}
                            refreshUserData = {this.props.refreshUserData}
                            profileName = {this.props.data.profile_name}
                            guestView = {this.props.guestView}
                            // visitProfile = {this.props.visitProfile}
                            viewGuestProfile = {this.props.viewGuestProfile}
                        />  
                        </Grid>
                    </Grid>
            </Box>
        );
    }
    
}

export default ProfileView;