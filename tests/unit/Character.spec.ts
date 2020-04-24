import data from "@/data.json";
import {Character} from "@/models/Character";

describe("Character", () => {
    describe("constructor", () => {
        test("dto", () => {
            const dto = data.characters[0];
            const character = new Character(dto);

            expect(character.id).toEqual(String(dto.id));
            expect(character.schemeId).toEqual(String(dto.schemeId));
            expect(character.type.id).toEqual(String(dto.typeId));
            expect(character.angle).toEqual(dto.angle);
            expect(character.x).toEqual(dto.x);
            expect(character.y).toEqual(dto.y);
        });
    })
});
