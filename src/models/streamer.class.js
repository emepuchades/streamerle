export class Streamer {
    id = '';
    name = '';
    birthday = '';
    followers = '';
    city = '';
    gender = '';
    platform = '';

    constructor(id, name, birthday, followers, gender, city, platform) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.followers = followers;
        this.gender = gender;
        this.city = city;
        this.platform = platform;
    }
}