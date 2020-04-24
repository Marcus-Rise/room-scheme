import {Character, ICharacterDto} from "@/models/Character";

export class Scheme {
    id: string;
    restaurantId: string;
    width: number;
    height: number;
    characters: Character[];

    constructor(dto?: ISchemeDto)
    constructor(
        id?: string,
        restaurantId?: string,
        width?: number,
        height?: number,
        characters?: Character[],
    )
    constructor(
        dtoOrId: ISchemeDto | string = "",
        restaurantId = "",
        width = 0,
        height = 0,
        characters: Character[] = [],
    ) {
        if (typeof dtoOrId !== "string") {
            this.id = String(dtoOrId.id);
            this.restaurantId = String(dtoOrId.restaurantId);
            this.width = dtoOrId.xCount;
            this.height = dtoOrId.yCount;
            this.characters = dtoOrId.characters.map(i => new Character(i));
        } else {
            this.id = dtoOrId;
            this.restaurantId = restaurantId;
            this.width = width;
            this.height = height;
            this.characters = characters;
        }
    }
}

export type ISchemeDto = Readonly<{
    "id": number;
    "restaurantId": number;
    "xCount": number;
    "yCount": number;
    "characters": ICharacterDto[];
}>;
