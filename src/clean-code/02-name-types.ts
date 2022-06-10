(() => {

    // Array of celsius temperatures
    const temperaturesCelsius = [33.6, 12.34];

    // Server IP Address
    const serverIp = '123.123.123.123';

    // Array of users
    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Array of user's email
    const userEmails = users.map( user => user.email );

    const canJump = false;
    const canRun = true;
    const hasItems = true;
    const isLoading = true;


    // Start time
    const startTime = new Date().getTime();
    
    // End Time
    const endTime = new Date().getTime() - startTime;


    
    function getBooks() {
        throw new Error('Function not implemented.');
    }


    function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }

    function getSquareArea( s: number ) {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }
    
    




})();


