
export interface IProductionModule {
    production: IOProduction,
    control: IOPControl,
    rework: IOPRework,
}

export interface IOProduction {
    proceso: string,
    cantidadPlacas: number,
    completado: number,
}

export interface IOPControl {
    proceso: string,
    placasOK: number,
    placasNC: number,
}

export interface IOPRework {
    proceso: string,
    cantidadPlacas: number,
}