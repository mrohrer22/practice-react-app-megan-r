function ProfileCard (props){
    return (
       <div className="profile-card">
            <p>{props.name}</p>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
       </div> 
    );
}

export default ProfileCard;