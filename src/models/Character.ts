import {CharacterType, ICharacterTypeDto} from "@/models/CharacterType";

export class Character {
    id: string;
    type: CharacterType;
    x: number;
    y: number;
    angle: number;
    schemeId: string;

    constructor(dto?: ICharacterDto)
    constructor(
        id?: string,
        type?: CharacterType,
        x?: number,
        y?: number,
        angle?: number,
        schemeId?: string,
    )
    constructor(
        dtoOrId: ICharacterDto | string = "",
        type: CharacterType = new CharacterType(),
        x: number = 0,
        y: number = 0,
        angle: number = 0,
        schemeId: string = "",
    ) {
        if (typeof dtoOrId !== "string") {
            this.id = String(dtoOrId.id);
            this.type = new CharacterType(dtoOrId.type);
            this.x = dtoOrId.x;
            this.y = dtoOrId.y;
            this.angle = dtoOrId.angle;
            this.schemeId = String(dtoOrId.schemeId);
        } else {
            this.id = dtoOrId;
            this.type = type;
            this.x = x;
            this.y = y;
            this.angle = angle;
            this.schemeId = schemeId;
        }
    }
}

export type ICharacterDto = Readonly<{
    "id": number;
    "typeId": number;
    "type": ICharacterTypeDto;
    "x": number;
    "y": number;
    "schemeId": number;
    "angle": number;
}>;
