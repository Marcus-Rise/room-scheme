export class Dictionary {
    id: string;
    url: string;

    constructor(dto?: IDictionaryDto)
    constructor(
        id?: string,
        url?: string,
    )
    constructor(
        dtoOrId: IDictionaryDto | string = "",
        url = "",
    ) {
        if (typeof dtoOrId !== "string") {
            this.id = String(dtoOrId.id);
            this.url = dtoOrId.url;
        } else {
            this.id = dtoOrId;
            this.url = url;
        }
    }
}

export type IDictionaryDto = Readonly<{
    id: number;
    url: string;
}>;
