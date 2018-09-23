import { connect } from 'react-redux';
import { fetchProfile, saveProfile } from '../actions/actions_profile'
import ProfileComponent from '../components/Profile';

const mapStateToProps = state => {
    return {
        profile: state.profile
    };
}

const  mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProfile: () => {
            dispatch(fetchProfile());
        },
        saveProfile: (profile) =>{
            dispatch(saveProfile(profile));
        }
    }
}

const Profile = connect(
    mapStateToProps,
    mapDispatchToProps 
)(ProfileComponent)

export default Profile;