export type Coach = {
    id: number;
    name: string;
    phone: string;
}

export type Student = {
    id: number;
    name: string;
    phone: string;
}

export type Slot = {
    coachId: number;
    startTime: Date;
    endTime: Date;
}