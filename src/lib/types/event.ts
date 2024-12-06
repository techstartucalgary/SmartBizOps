import { BaseModel, EntityType } from "."

export type NewEvent = {
    name: string,
    description: string,
    creator: string,
    creatorType: EntityType
}

export type EventUpdateType = {

};

export type EventSchemaType = BaseModel & NewEvent;