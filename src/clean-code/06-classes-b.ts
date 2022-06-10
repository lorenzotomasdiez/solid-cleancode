(()=>{

    //Without applying single responsability

    type Gender = 'M' | 'F';
    
    interface PersonProps{
        birthdate : Date;
        gender    : Gender;
        name      : string;
    }

    class Person {
        public birthdate: Date;
        public gender   : Gender;
        public name     : string;

        constructor( {name ,gender, birthdate} : PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps extends PersonProps{
        email       : string;
        role        : string;
    }

    class User extends Person {
        public email     : string;
        public lastAccess: Date;  
        public role      : string;

        constructor({
            birthdate,
            email,
            gender,
            name, 
            role
        }: UserProps){
            super({birthdate, gender, name});
            this.email      = email;
            this.role       = role;
            this.lastAccess = new Date();
        }

        checkCredentials (){
            return true;
        }
    }

    interface UserSettingsProps extends UserProps{
        workingDirectory : string ;
        lastOpenFolder   : string ;
    }

    class UserSettings extends User{
        public workingDirectory : string;
        public lastOpenFolder   : string;
        constructor({
            birthdate,
            email,
            gender,
            lastOpenFolder,
            name, 
            role,
            workingDirectory,
        }:UserSettingsProps){
            super({email, role, name, gender, birthdate});
            this.lastOpenFolder    = lastOpenFolder;
            this.workingDirectory  = workingDirectory;
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
