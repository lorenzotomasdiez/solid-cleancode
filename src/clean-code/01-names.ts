(() => {

    // Example
    // Files to evaluate
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Files to delete
    const filesToDelete = filesToEvaluate.map( file => file.flagged );
  
    // Bad Names
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Better
    class User { };
    interface User { };
 
    
    const today = new Date();
    
    const elapsedTimeInDays: number = 23;
    
    const numberOfFilesInDirectory = 33;
    
    const firstName = 'Fernando';
    
    const lastName = 'Herrera';

    const daysSinceLastModification = 12;
    
    const maxClassesPerStudent = 6;


})();
