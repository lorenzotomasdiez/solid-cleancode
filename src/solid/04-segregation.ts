interface Bird{
    eat():void;
}

interface FlyingBird{
    fly():void;
}

interface RunningBird{
    run():void;
}

interface SwimmingBird{
    swim():void;
}



class Tucan implements Bird, FlyingBird{
    public fly(){}
    public eat(){}
}

class Humminbird implements Bird{
    public fly(){}
    public eat(){}
}


class Ostrich implements Bird,RunningBird {
    eat(): void {}
    run(): void {}
}

class Penguin implements Bird, SwimmingBird {
    public eat(): void {}
    public swim(){}

}

/* ESTO NOS FAVORECE PORQUE UN CAMBIO EN AVES VOLADORAS NO MOELSTARIA EN CAMBIOS EN AVES CORREDORAS. */