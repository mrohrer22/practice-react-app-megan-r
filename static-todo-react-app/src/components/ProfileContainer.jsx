import ProfileCard from './ProfileCard';

function ProfileContainer (){
    return (
        <div>
            <h1>User Profiles</h1>

            <ProfileCard
                name="Alex"
                age={25}
                bio="A software engineer who loves hiking."
                />
            <ProfileCard
                name="Taylor"
                age={30}
                bio="A designer passionate about photography."
                />
        </div>
    );
}

export default ProfileContainer;