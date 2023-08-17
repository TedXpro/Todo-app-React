const person = {
    name: "Yohannes",
    address: {
        street: "Nefas silk lafto",
        city: "Addis Abeba",
        country: "Ethiopia"
    },
    profiles: ['twiter', 'instagram', 'telegram'],
    printProfile: () => {
        person.profiles.map(
            profiles => console.log(profiles)
            
        )
    }
}

export default function LearningJavaScript() {
    return (
        <div>
            <div>Name: {person.name}</div>
            <div>Street: {person.address.street}</div>
            <div>City: {person.address.city}</div>
            <div>Country: {person.address.country}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.profiles[1]}</div>
            <div>{person.profiles[2]}</div>
            <div>{person.printProfile()}</div>
        </div>
    )
}