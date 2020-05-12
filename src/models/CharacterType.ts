export class CharacterType {
    id: string;
    name: string;

    constructor(dto?: ICharacterTypeDto)
    constructor(
        id?: string,
        name?: string,
    )
    constructor(
        dtoOrId: ICharacterTypeDto | string = "",
        name = "",
    ) {
        if (typeof dtoOrId !== "string") {
            this.id = String(dtoOrId.id);
            this.name = dtoOrId.name;
        } else {
            this.id = dtoOrId;
            this.name = name;
        }
    }
}

export type ICharacterTypeDto = Readonly<{
    "id": number;
    "name": string;
}>;

export enum CharacterTypeEnum {
    chair = "Стул",
    simple = "Блок",
}

