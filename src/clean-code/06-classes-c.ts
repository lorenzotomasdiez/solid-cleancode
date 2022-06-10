(()=>{

    //Applying single responsability
    //Prioritize composition over inheritance

    type Gender = 'M' | 'F';
    
    interface PersonProps{
        birthdate : Date;
        gender    : Gender;
        name      : string;
    }

    class Person {
        public birthdate: Date  ;
        public gender   : Gender;
        public name     : string;

        constructor( {name ,gender, birthdate} : PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email       : string;
        role        : string;
    }

    class User{
        public email     : string;
        public lastAccess: Date  ;  
        public role      : string;

        constructor({
            email,
            role
        }: UserProps){
            this.email      = email;
            this.role       = role;
            this.lastAccess = new Date();
        }

        checkCredentials (){
            return true;
        }
    }

    interface SettingsProps{
        workingDirectory : string ;
        lastOpenFolder   : string ;
    }

    class Settings{
        public workingDirectory : string;
        public lastOpenFolder   : string;
        constructor({
            lastOpenFolder,
            workingDirectory,
        }:SettingsProps){
            this.lastOpenFolder    = lastOpenFolder;
            this.workingDirectory  = workingDirectory;
        }
    }
    
    interface UserSettingsProps{
        birthdate        : Date   ;
        gender           : Gender ;
        name             : string ;
        email            : string ;
        role             : string ;
        workingDirectory : string ;
        lastOpenFolder   : string ;
    }

    class UserSettings {
        public person  : Person;
        public user    : User;
        public settings: Settings;

        constructor({
            name,gender,birthdate,
            email, role,
            workingDirectory,lastOpenFolder
        }:UserSettingsProps){
            this.person    = new Person({name,gender,birthdate});
            this.user      = new User({email,role});
            this.settings  = new Settings({workingDirectory,lastOpenFolder});
        }

    }


    console.log(new UserSettings(
        {
            email:'toto@test',
            role:'admin',
            birthdate: new Date('1999-01-29'),
            gender: 'M',
            name: 'Tomas',
            lastOpenFolder: 'algo',
            workingDirectory: 'otro algo'
        }
    ))


})();
